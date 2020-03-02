# Elements and Actions

1. [Building your own connected Things made easy](/concepts/paper01.md)
2. [Software Architecture](/concepts/paper02.md)
3. **Elements and Actions**
4. [Builtin Web server](/concepts/paper04.md)

The power, flexibility and the extensibility of the HomeDing library comes from 2 main designs

* the unified implementation of I/O and logic in the Elements and 
* the way Elements can interact locally or over the network by using messages.

These were influenced by the well-known Actor Model concept and the REST full adressing.

## Actor Model

The implementation has borrowed some of the ideas and principles of the “Actor Model” that is a complete distributed, concurrent computing model.

The “Actors” and “Messages” in this computation model is similar to the “Elements” and “Actions” in the HomeDing Library implementation. However, the HomeDing Library implementation need to respect the limited CPU and memory power of and the things and the network in between. Some pragmatic design decisions of the implementations have been necessary.

Some good readings about this model can be found at

* https://en.wikipedia.org/wiki/Actor_model
* http://letitcrash.com/post/20964174345/carl-hewitt-explains-the-essence-of-the-actor

## Elements 

Like in the Actor Model the functionality is encapsulated inside the components that have a unified interface
to the outer world but differ in the inner implementation.
This is the concept of the Elements you find in the HomeDing library.

The common interface is about supporting the life cycle:

* creating new elements
* configure elements
* start and running elements
* receiving actions
* sending actions
* terminating elements

where configuring elements and receiving actions is the same implementation.

The standard interface of every Element is defined by the Element class and every specific Element is derived from this class and adding the specific functionality.

![Methods of Element implementations](elementapi.png.md) ???

A detailed description of the common Element Interface can be found in [ElementInterface](ElementInterface.md).

## Actions

Actions or you may call it Events is the functionally that allows Elements to communicate.
By using multiple elements that interact this way more complex things can be created.

Because of some experience with responsiveness of things the messages are not dispatched immediately by the board.
Calling the loop function will be prioritized over sending a message.
This is why the board implements a store and forward mechanism with a queue.
The order of the messages is guaranteed to be stable as long as they are not send via network.

## The Life Cycle of the Board and Elements

The implementation of the Board class is the part of the HomeDing Library that organizes all created Elements and dispatches the actions.

### Initialization Phase

* Start the board and make unique components like the file service, the web server
  and the optional display available by initializing them.

  See [displays](displays.md)

* Parse the config.json file.

  Open the config.json file and use the micro JSON parser to report all configurations to the board initialization implementation.

* Create all Elements as defined by the configuration.

  Every time a 2. level in the config.json file is found a Element with this type and id will be created.

* Set the configuration properties of all Elements as defined by the configuration.

  Every time a 3. level in the config.json file is found the `set` function of the Element will be called and the value will be passed as a parameter.

* Start all Elements

  After all Elements are created and configured they are activated.

  Now the show can begin.

### Working Phase

* Run all Elements and dispatch all actions among them.

  The `loop` function of all active Elements is called and when Actions should be passed the board will dispatch them to the right Element.

## Restarting and Reconfiguration

When a configuration change is required the configuration file in the SPIFFS needs to be updated.

The new configuration will not be effective immediately but only by restarting the whole thing.

However, it is possible to change properties of the current active Elements be using the REST methods of the web server. These changes will be effective immediately but are not saved to the configuration file.

## Compile time vs runtime configuration

The standard board already includes a lot of Elements when being compiled. Therefore, it is possible to use them in a configuration without recompiling the program itself.

Other Elements require a specific library. These Elements must be activated in the sketch and the sketch will only compile properly when you have installed the required library in the Arduino Environment.

Examples are [DHT Element](elements/dht.md), [RFSend Element](elements/rfsend.md) or [DCFTime Element](elements/dcftime.md).

As the ESP8266 chips offer a lot of program memory this approach works fine when boards have a 4MByte Flash memory.
The [FullDing](examples/fullding.md) includes all available elements of the library and can be used to flash many boards and hardware setups. 

For compiling to different memory setups, like the ESP-01 board it is possible to compile with a reduced set of elements so to make the program fit into memory.
See example [minimal footprint example](examples/minimal.md).

Be aware that the number of configured elements is also a limiting factor because every Element not only needs program space but also memory for the classes and variables.

## Addressing Elements, properties and actions

When technically addressing an active element, an element property or sending an actionto an element
the same 2-level syntax and parameters of addressing is used as it is known from the URL syntax.

The usual notation is using lowercase characters only. The comparisation is internally case-insensitive by comparing always the lowercase variants.

Examples are:

* `digitalout/relais?value=1`
* `display/d3?show=1`

The first level is the type of the element.
The first level is the local id of the element (you can have a button and a output element with the same name)

The parameter is appeded by using `?` as a separator and a parameter value can be specified using `=` when required.

This schema can be found in many places:

* The config.json is structured this way but using JSON objects
* When using the REST services in the web server the URLs look the same, including the protocol and hostname
* When specifying properties and events

The messages passed around are quite simple and reuse the addressing notation for elements and properties. This also allows sending them across a network easily.

The board class implements a queuing mechanism that can quickly receive some new messages and will emitted them to the mentioned elements one by one.