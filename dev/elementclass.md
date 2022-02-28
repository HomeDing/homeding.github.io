---
title: Implementing Elements
---

# {{title}}

Implementing Elements is very easy because they are designed similar to the standard Arduino Sketches
by implementing a `setup()` and a `loop()` method as usual.

By further steps this can seamlessly extended an Element implementation by

- participating in the configuration mechanism by implementing the `set()` method
- the status reporting by implementing the `pushState()` method.
- temporary start/stop of functionality by implementing the `start()` and `term()` methods.

In addition Elements can expose very specific REST services to expose element specific APIs.

## Minimal Element implementations

Usually Arduino sketches only have one global setup and one global loop method.
Within the Homeding library every element will have these methods 
so they need to be wrapped into a class.

There is a "MiniElement.h" file in the DevDing example to show
how an Element can be implemented just like a "normal" Arduino Sketch:

``` cpp
class MiniElement : public Element {

  unsigned long lastTime;

  /**
   * @brief setup the functionality.
   */
  void setup() {
    // Setup code here...
    lastTime = millis();

    Serial.println("Setup done.");
  }

  /**
   * @brief run the functionality.
   */
  void loop() {
    if (millis() > lastTime + 4000) {
      Serial.println("Blink..");
      lastTime = millis();
    }
  }
};
```

in the global setup() method a instance of this class can be added to the homeding setup:

``` cpp
ElementRegistry::_addElement("mini/1", new MiniElement());
```

The Homeding library implements a *cooperative* approach of having many active elements at once.

Therefore it is very important NOT to waste any time in the `loop()` method like using delay(),
long running calculations or loops waiting for anything. The homeding library will give
every element the chance to execute in the `loop()` method and all elements must be
cooperative in this.


## Element implementations with full functionality

A more useful implementation of an element requires only a few methods to be implemented to participate more in the ecosystem:

- set()
- start()
- loop()
- pushState()

The [DigitalIn Element](/elements/digitalin.md) can be examined as an example.

It uses the `set()` method to retrieve all the possible configuration settings
to enable detecting digital input levels from a GPIO pin.

The `start()` method configures the GPIO pin in the required way when a valid pin is specified.

The `loop()` method constantly watches the input level and triggers an event in the case the value has changed to inform other elements.

The `pushstate()` makes the current value available to the Web UI frontend in the state service.


### set() - setting properties and receiving actions

When the Element is crated and even later when a action is send to the Element a key and value is passed in the `set` method. This is the the only method that needs to process incoming data. It checks the passed key and then takes the data or executes the action.

Some Element implementations will only require to implement the setting parameters given from the configuration and others also may react to actions to trigger a functionality or to modify a dynamic property of the Element.

Samples can be found in the provided Element implementations.

- The ButtonElement only needs to process the properties for the setup of the implementation like the hardware pin and the triggered actions.
- The TimerElement also implements the „next“ and „start“ action that need no parameter but can be used when the timer is active to manipulate the actual state.

When the key parameter is not known to the element itself the `set` method of the base Element class should be called.


### start() - initialize

This method is called after all config properties have been set on all elements and the setup() method was called.

Here the initialization of the hardware or the used library should be implemented.

This is also the place to check that the given configuration is meaningful and valid.

When everything is good so far the start method of the base Element class must be called. The member variable `active` of the Element will be set to true.


### PushState() – return the actual dynamic values

Sometimes it is required to get the inner actual properties of an Element because they need to be displayed somewhere or are fetched from another Element for some reasons.

The `pushState` method is handling this by sending all properties to a provided callback method.

The `pushState` method only needs to pass those properties that will change while the element
while the properties coming from the configuration that will never change are not reported this way.

This is not a limitation because the configuration values are available anyhow by reading the config.json file.

[The build-in WebServer](/webserver.md) offers a restfull endpoint to retrieve these values from the browser or from remote.

Samples can be found in the provided Element implementations.

- The ButtonElement only needs to push the current level of the Button.
- The TimerElement is reporting the current state and level of the timer and the current (relative) time from the start.

There are even Elements like the RemoteElement that do not ned to implement this method because they have no inner dynamic variables.

The `pushState` method of the base Element class should also be called


### loop() – so something meaningful

As you know from Arduino sketches the `loop` method is the place where all the activity of a sketch is implemented.
The same with the elements. Here is the place to have some useful implementation. Examples are:

- Check some input and create a event eventually (like the ButtonElement does)
- Check timing conditions (like the TimerElement does)
- Read a sensor from time to time (like the DHTElement does)

The `loop` method is only called for elements in the active state. These are the Elements that did not initialize properly (likely because of a wrong configuration or missing hardware).


## Advanced Element implementation

Some Elements will have some more advanced features and therefore some more virtual methods can be implemented in the Elements:


### init() - basic initialization

The `init` method is called immediately after a Element is created and before the first configuration property is passed to the Element implementation.

It is preferred to initialize component or class not in the creation method of the class because:

- some initialization routines will start after the creation of static classes
- some initialization of libraries require parameters that are likely to be available after the configuration is passed.

In the HomeDing Library therefore the creation is primarily done in the `init` method and not in the class creator methods. (e.g. see <https://stackoverflow.com/questions/18806141/move-object-creation-to-setup-function-of-arduino>).

This method is implemented in the base Element class and stores the passed board class reference to the common `_board` member variable.


### term() – deactivate this Element

The `term` method is the logical counterpart to the `init` method and terminates all functionality from the Element.

The allocated resources should be freed (e.g. disabling attached modules or releasing used I/O lines).


### Register a WebService Endpoint

Inside the setup() method it is possible to register a webserver endpoint that exposes specific functionality of an element as a service.

An example can be found in the diag element in the DevDing example  

``` cpp
  _board->server->on("/diag", HTTP_GET, [this]() {
    _board->server->send(200, "text/plain", _scanI2C());
  });
```

The `_scanI2C()` method scans the local I2C bus for responsive devices and returns a String with some details.

This service can be called using the url: `http://<devicename>/diag`.



## Common Element member variables and helper methods

The basic Element class also provides some useful variables and helper functions.

### id

The `id` of the Element. Visible to anyone.

### active – marking the Element to be actively used

The Member variable `active` is used to mark any Element as properly initialized and ready to be used. This is done during the `start` method and can be revoked using the `term` method

### \_board

A reference to the board the Element is on.

### \_atob()

Return a boolean value from a string.

### \_atotime()

Return a time value from a string.

### \_stricmp

Replacement of the CPP stricmp used to compare identifiers and ids as the method not available on Arduino.
