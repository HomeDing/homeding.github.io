# Elements API

To implement an element a new class has to be created to implement the functions required for the specific element.

This is supported by an empty element implemented by the `Element` class that  is used as the parent class of every element.


## Using the MyElement class as a template

The [devding example](devding.md) has a class named `MyElement` that can be used as a starting point it contains all functions partly commented that might be implemented.

You can copy the 2 files `MyElement.cpp` and `MyElement.h` over to your sketch folder and rename all occurrences if `MyElement` to your element name.

Be aware that there is a name for the element `my` defined in the registration function thatneeds to be changed to something unique.


## main functions

As with normal Arduino sketches there are 2 functions init??? And loop??? that are used to initialize and run the element. 

Because every element also participates in  exchanging actions there is a third function named set that gets called for receiving actions. 


### init()

This function is called just after a new element object is created from the class. You can do further initializions in here.

Within this method the init() of the master??? class needs to be called.

If there is no need for initialization of your element you can leave this method unimplemented in MyElement.cpp and can remove it from the class definition in MyElement.h.


### set()

This method that gets called whenever a parameter gets initialized or an action is sent by another element to this element.

The action name and the parameters are already given as 2 parameters the action `name` and action `value` to make implementation easy.

You need to implement some code for all incoming actions that are element specific.

The easiest case is to initialize a member of the class with a new value. There are some methods available to convert the parameter given as a string    
to the appropriate type like 

* `_atopin` for pin definitions
* `_atob` for boolean values
* `_atoi` for numeric values
* `_atotime` for time values


Within this method the set() of the master??? class needs to be called whenever the action is not handled in a meaningful way or the name is unknown. 


### start()

In some cases the element need to implement a further initialision after all configuration properties are known but before the loop starts. This can be implemented in the start method.

As a default elements are started after a network was connected only so they will not be activated in case of the network is not available or not configured yet.


### Class initialize

Some elements need a valid local time to operate. The event when the element normal operation is started can be configured in
the class initializer like you can find in the LogElement:

```CPP
LogElement::LogElement()
{
  startupMode = Element_StartupMode::Time;
}
```

See also [wifimanager](wifimanager.md)


### loop()

This method is called from time to time like the loop function in standard Arduino sketches.
This is where the element can do something on its own like getting some data from a sensor or checking some conditions.


### pushState(cbFunc)

ELements report some internal state when the pushState method is called.
This is in addition to sending events when the state changes and allows other elements and the Web UI to question for the actual state.

This is done by calling the callback function for every property that might change durin operation.


## Members derived from the general Element class

**loglevel** This variable holds the element specific log level. The default value is LOGGER_LEVEL_ERR == 1???
  This can be changed in the configuration of the element by the `loglevel` attribute.

**active** This variable is set to true after the element has started without problems in the start() function.

**startupMode** This variable specifies when the element can be started. It is a common topic to many elements that the network must work or a local time is available.
The default value is Network ???


## Registering an element

The ElementRegistry holds references to all element classes to enable creating of new Elements by name at runtime.

This is done by initializing a static calss member to enforce calling the registerElement methob before anything else on every class.

For more information on this see [Element Registry](elementregistry.md).

