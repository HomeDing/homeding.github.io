---
title: Common Functionality or Elements
description: Details on the common functionality provided by the Element base class.
layout: "page.njk"
tags: ["Implementation"]
excerpt: >
  Details on the common functionality provided by the Element base class.
---

Implementing Elements is very easy because they are designed similar to the standard Arduino Sketches
by implementing a `setup()` and a `loop()` function as usual. To take advantage of the full functionality
of the HomeDing library more function s can be implemented.

Here is a more detailed description on the functionality the Element base class provides.

In addition Elements can expose very specific REST services to expose element specific APIs.

## Minimal Element implementations

There is a step-by-step example on [How to create and extend a new Element](/steps/newelement.md)
and the related "MyElement" implementation filescan be found in the [DevDing example](/examples/devding.md).


## Cooperative Elements

The Homeding library implements a *cooperative* approach of having many active elements at once.

Therefore it is very important NOT to waste any time in the `loop()` function like using delay(),
long running calculations or loops waiting for anything. The homeding library will give
every element the chance to execute in the `loop()` function and all elements must be
cooperative in this.


## Element implementations with full functionality

A more complete implementation of an Element requires a few functions to be implemented to participate more in the ecosystem:

- set()
- start()
- loop()
- pushState()

The [DigitalIn Element](/elements/digitalin.md) or other elements in the src folder of the library
can be examined as examples.

It uses the `set()` function to retrieve all the possible configuration settings
to enable detecting digital input levels from a GPIO pin.

The `start()` function configures the GPIO pin in the required way when a valid pin is specified.

The `loop()` function constantly watches the input level and triggers an event in the case the value has changed to inform other elements.

The `pushstate()` makes the current value available to the Web UI frontend in the state service.


### init(Board *board) - default initialization

The `init` function is called immediately after an Element is created
and before the first configuration property is passed to the Element implementation.

It is preferred to initialize the element member variables not in the creation method of the class because:

- some initialization routines will start after the creation of static classes
- some initialization of libraries require parameters that are likely to be available after the configuration is passed.

In the HomeDing Library therefore the creation is primarily done in the `init` method and not in the class creator methods.
(e.g. see <https://stackoverflow.com/questions/18806141/move-object-creation-to-setup-function-of-arduino>).

This method is implemented in the base Element class and stores the passed board class reference to the common `_board` member variable
to enable participating in sending actions and other board functionality.


### set() - setting properties and receiving actions

When the Element is crated and even later when a action is send to the Element a key and value is passed in the `set` function.
This is the the only function that needs to process incoming data.
It checks the passed key and then takes the data or executes the action.

Some Element implementations will only require to implement the setting parameters given from the configuration and others also may react to actions to trigger a functionality or to modify a dynamic property of the Element.

#### Examples:

- The ButtonElement only needs to process the properties for the setup of the implementation
  like the hardware pin and the triggered actions.

- The TimerElement also implements the „next“ and „start“ actions that need no parameter 
  but can be used when the timer is active to manipulate the actual state.

When the key parameter is not known to the element itself the `set` function of the base Element class must be called
to allow .


### setup() - setup hardware and interfaces

This function is called after all config properties have been set on all elements.

Here the initialization of the hardware or the used library should be implemented.


### start() - start / activate the element

This function is called after the setup() function was called every time the element gets started.

This is also the place to check that the given configuration is meaningful and valid.
If parameters are not valid do not call the base `start()` function.

When everything is good so far the start function of the base Element class must be called.
The member variable `active` of the Element will be set to true and the `loop()` function will be called frequently.


### PushState() – return the actual dynamic values

Sometimes it is required to get the inner actual properties of an Element because they need to be displayed somewhere or are fetched from another Element for some reasons.

The `pushState` function is handling this by sending all properties to a provided callback function.

The `pushState` function only needs to pass those properties that will change while the element
while the properties coming from the configuration that will never change are not reported this way.

This is not a limitation because the configuration values are available anyhow by reading the config.json file.

[The build-in WebServer](/dev/webserver.md) offers a restfull endpoint to retrieve these values from the browser or from remote.

Samples can be found in the provided Element implementations.

- The ButtonElement only needs to push the current level of the Button.
- The TimerElement is reporting the current state and level of the timer and the current (relative) time from the start.

There are even Elements like the RemoteElement that do not ned to implement this function because they have no inner dynamic variables.

The `pushState` function of the base Element class must be called.


### loop() – so something meaningful

As you know from Arduino sketches the `loop` function is the place where all the activity of a sketch is implemented.
The same with the elements. Here is the place to have some useful implementation. Examples are:

- Check some input and create a event eventually (like the ButtonElement does)
- Check timing conditions (like the TimerElement does)
- Read a sensor from time to time (like the DHTElement does)

The `loop` function is only called for elements in the active state. These are the Elements that did not initialize properly (likely because of a wrong configuration or missing hardware).


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

The unique `id` of the Element. Visible to anyone.

### active – marking the Element to be actively used

The Member variable `active` is used to mark any Element as properly initialized and ready to be used.
This is done during the `start` method and can be revoked using the `term` method.

When `active` is set to true the `loop()` function will be called frequently.


### \_board

A reference to the board the Element is on.


## parameter and action helpers

These function help parsing configuration and action parameters.

### \_atob()

Return a boolean value from a string.

### \_atoi()

Return an integer value from a string.

### \_atotime()

Return a time value from a string.

### \_scanDuration()

Return a timespan value in ms from a string.

### \_atoColor()

Return a 32 bit color value from a string.


### \_stricmp

Replacement of the CPP stricmp used to compare identifiers and ids as the method is not available on Arduino.

<!-- _stristartswith -->

<!-- _printBoolean -->

<!-- _printInteger -->

<!-- getItemValue -->

<!-- popItemValue -->