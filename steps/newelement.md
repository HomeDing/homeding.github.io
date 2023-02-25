---
title: "Create and extend a new Element"
layout: "page.njk"
tags: ["Steps"]
date: "2022-03-01"
excerpt: >
  How to add new functionality to a HomeDing based device by adding new Elements
  to support a specific functionality, sensor, chip, network service and more.
---

The HomeDing library is not a closed eco system but allows customization, configuration and extensions.

This step-by-step article shows how to start with a simple implementation that gets extended
to support the specific benefits of the ecosystem.

The entrance effort to do so is not more complex than writing a Arduino sketch with a `setup()` and `loop()` function.

> The only hard requirement is that there is a cooperative multitasking implemented that relies on a fast returning
> loop() function. Not using delay() or other blocking implementations however is a best practice and required for all
> network attached implementations using the webserver.

Here you see step by step

* how to create a new element from a very simple example similar to an Arduino sketch
* adding stop & resume
* adding Configuration
* adding to the [Element Registry]
* adding an element specific Web UI for the dashboard

These implementations assume there is a NodeMCU (or compatible) board in use.


## Simplest Implementation - MyElement-01.h

This is an implementation of the original non-blocking BlinkWithoutDelay sketch wrapped inside a Element class definition.

How to re-arrange code into a class is well known in the Arduino world as all libraries are written this way to offer reusable functionality.
The Elements in the HomeDing library follow this approach as well. 

In the class you can find the 2 functions `setup()` and `loop()` implemented.

The source code can be found in the "MyElement-01.h" file in the [tutorial example](/examples/tutorial.md) folder.

To include this Element-wrapped coding in your firmware the header and initialization must be present to your sketch.
You can copy the whole implementation into your sketch file or uncomment the `#include` code in the DevDin example.
Both option will enable that the MyElement-01.h code will be compiled within the sketch file:

```cpp
#include "MyElement-01.h"
```

In the setup function it is required to activate the new Element so the `setup()` and `loop()` functions are called:

```cpp
// enable initialization line to see MyElement working
homeding.add("my/1", new MyElement01());
```

After uploading the compiled sketch the blue led on the esp-12 board will blink in a 2 seconds cycle.

By wrapping the code into a cpp class it is possible to have multiple "instances" running at the same time while
the implementation code will exist once in the firmware.

Under the hood the `homeding.add(...)` function is creating such a instance and will call the `setup()` and `loop()`
functions as usual.


## rework into a standard cpp class - MyElement-02.h

This step separates the class definition and the class implementation into 2 files.
This will result in a separate compile step for the cpp class that is initiated by the Arduino environment automatically.
Now the header file (*.h) can be included into many code files (\*.cpp) without recompiling the code.
It will help us adding the element to the library at a later step.

The implementation has not changed compared to "MyElement-01.h".

See "MyElement-02.*" files

This is not strictly required at this time but Best Practice in CPP projects.


## Element base functionality

The now implemented class also "derives" from the [Element class]
that provides some useful basic functionality.

* The instance is already in he list of active elements. When you request <http://homeding/api/state> [^hostname]
  you can see the is marked as active: `"my/2":{"active":"true"}`.

* The blinking can be stopped by requesting <http://homeding/api/state/my/2?stop> [^hostname]. The loop function will not be called.

* The blinking can be re-started by requesting <http://homeding/api/state/my/2?start> [^hostname]. The loop function will be called again.

However stopping the blinking can happen while the LED is on or off. When the led must be off on a stopped element we can use 2 functions
to implement the start and term.

In the header file the 2 functions must be declared:

``` cpp
  /** start / activate the functionality. */
  void start() override;

  /** stop / de-activate the functionality. */
  void term() override;
```

In the implementation file the 2 functions must be implemented:

``` cpp
// start/activate the element
void MyElement03::start() {
  // call the default start() on the base class
  Element::start();

  // turn LED ON and start new cycle.
  ledState = LOW;
  digitalWrite(ledPin, ledState);
  previousMillis = millis();
}


// stop/terminate the element
void MyElement03::term() {
  // call the default term() on the base class
  Element::term();

  // turn LED off.
  ledState = HIGH;
  digitalWrite(ledPin, ledState);
}
```

It is important to call the functions of the base class e.g. `Element::start();` before implementing your code.

The code can be found in the MyElement-03.x implementation files.


## Participate in configuration

The HomeDing library includes a powerful configuration feature that can replace the
hard-coded constants in the sketch.

This requires several changes but also give the great value of configuration.

In this example we like to make it possible to configure the GPIO for the LED
and the interval time of the blinking.

The configuration can be added to the `config.json` file and can include these 2 parameters.
This replaces he need of the `homeding.add("my/2", new MyElement02());` call.

The class must be extended using a static create function and a registration state
in the header file:

``` cpp
/** Factory function to create an element. */
static Element *create();

/** static variable to ensure registering in static init phase. */
static bool registered;
```

The create function is implemented in the implementation file:

``` cpp
/** static factory function to create a new MyElement03 */
Element *MyElement03::create()
{
  return (new MyElement03());
} // create()
```

To activate a element the elements must be registered by a call that adds the class to the registry:

```cpp
bool MyElement03::registered = ElementRegistry::registerElement("my", MyElement03::create);
```

Now the configuration mechanism knows how to create "my" elements and you can find
the "my" element in the list of registered that you can request with <http://homeding/api/elements> [^hostname].

A configuration that can be used to blink in 100ms interval on D1:

``` json
"my": {
  "3": {
    "pin": "D1",
    "interval": "1000ms"
  }
}
```

The set function will get all the configuration parameters passed as key-value pairs and can configure the class variables instead of using constants.


In the header file the set function must be declared:

```cpp
/** declare the set functionality. */
bool set(const char *name, const char *value) override;
```

The set function is implemented in the implementation file:

```cpp
bool MyElement03::set(const char *name, const char *value) {
  bool ret = Element::set(name, value);

  if (_stricmp(name, "pin") == 0) {
    ledPin = _atopin(value);
    ret = true;
  } else if (_stricmp(name, "interval") == 0) {
    interval = _scanDuration(value);
    ret = true;
  }
  return (ret);
};
```

The [Element class] that is used as the base class also provides a configuration for logging using the **loglevel** configuration that helps understanding from the log output in the debug window what is happening in the element implementation.


## run multiple blinkling elements

As another benefit from the configuration mechanism you can run 2 blinking elements in parallel by just configuring 2 instances in `config.json`:

``` json
  "my": {
    "3": {
      "pin": "D1",
      "interval": "1000ms"
    },
    "3b": {
      "pin": "D4",
      "interval": "700ms"
    }
  }
```


## Add to Library

In the case you have done a reusable implementation you may create a pull request on github to include the element into the HomeDing library.

You can prepare this by:

* moving your implementation files into the src folder of the library
* add a #include <myelement03.h> into the "homeding.h" file by defining a macro
  as it is done with the other elements.
* move the registration call from myelement03.cpp to myelement03.h and surround it with a `#ifdef HOMEDING_REGISTER` condition.


## Add a Card implementation for the dashboard

Some elements require their own cards on the dashboards.

This can be implemented in the board.htm file by adding a template.

You can use the file from GitHub at <https://github.com/HomeDing/WebFiles/blob/master/board.htm> that is not yet minified.

The html object must be placed inside the `<div id="u-templates" style="display:none">` container where is will be used as a template for every configured "my" element.

In this example the configured pin and the interval values are shown.

```html
<div class="card" u-control="my" id="${id}" u-is="generic" microID="${id}">
  <div u-is="include" ref=".cHead"></div>
  <div class="block form-grid">
    <label>Pin:</label><output u-text="pin"></output>
    <label>Interval:</label><output u-text="interval"></output>
  </div>
</div>
```

## See also

* [template example](/examples/template.md)



[^hostname]: replace `homeding` with the network name of your device to use this link.

[Element class]: /dev/elementclass.md
[Element Registry]: /dev/elementregistry.md

