# Elements and Actions

The power and flexibility and the extensibility of the HomeDing library comes from 2 main designs

* the unified implementation of I/O and logic in the Elements of the Architecture.
* the way Elements are addressed in the messages.

These were influenced by the well-known Actor Model concept and the REST full adressing.

## Actor Model

The implementation has borrowed some of the ideas and principles of the “Actor Model”.

The “Actors” and “Messages” in this concurrent computation model is similar to the “Elements” and “Actions” in the HomeDing Library implementation. However, the HomeDing Library implementation need to respect the limited CPU and memory power of and the things and the network in between. Some pragmatic design decisions of the implementations have been necessary.

Some good readings about this model can be found at

* https://en.wikipedia.org/wiki/Actor_model
* http://letitcrash.com/post/20964174345/carl-hewitt-explains-the-essence-of-the-actor

## Elements

Like in the Actor Model the functionality is encapsulated inside the components that have a unified interface to the outer world but differ in the 
inner implementation. This is the concept of the Elements you find in the HomeDIng library.

The common interface is about supporting the lifecycle:

1. creating new elements
2. configure elements
3. start and running elements
4. receiving actions
5. sending actions
6. terminating elements

where configuring elements and receiving actions is the same implementation approach.

The standard interface of every element is defined by the Element class and every specific Element is derived from this class and adding the specific functionality.

The implementation of the Board class is the part of the HomeDing Library that organizes all created Elements and dispatches the actions.

## The Lifecycle of the Board and Elements

### Initialization Phase

* Start the board and make unique components like the file service, the display and the web server available by initializing them.

  The part that differs most among different Things is the availability of a display. The HomeDing Library can run completely without a local display or can support different types of displays.

  This can be adjusted by changing the setup of the display abd board in the sketch file.

* Parse the config.json file.

  this ...

* Create all Elements as defined by the configuration.

  this ...

* Set the configuration properties of all Elements as defined by the configuration.

  this ...

* Start all Elements

  this ...

### Working Phase

* Run all Elements and dispatch all actions among them.

  this ...

When a configuration change is required the configuration files needs to be updated but the new configuration will not be effective immediately but only by restarting the whole thing.

However, it is possible to change properties of the current active Elements be using the REST methods of the web server. These changes will be effective immediately but are not saved to the configuration file.

## Compile time vs runtime configuration

The standard board already includes a lot of Elements when being compiled. Therefore, it is possible to use them in a configuration without recompiling the program itself. See Table ???

As the ESP chips offer a lot of memory this approach works fine here. For compiling to different architectures like the original Arduino it is possible to compile with a reduced set of elements to make the program fit into memory. See sample ???

Be aware that the number of configured elements is also a limiting factor because every Element not only needs program space but also memory for variables.

## Addressing Elements

When technically addressing an active element or an element property the same 3-level syntax of addressing is used:

* The type of the element

* The local id of the element (you can have a button and a output element with the same name)

* The name of the attribute that is addressed. (not always required)

This schema can be found in many places:

* The config.json is structured this way,

* When using the REST services in the web server

* When specifying properties and events

* In the log file ???
* …

The slash character well known from URLs is used as the separator and lowercase is the usual notation. They are used case-insensitive. Examples are:

* timer/light

* digitalout/relais
