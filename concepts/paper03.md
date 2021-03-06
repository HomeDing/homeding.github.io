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

* creating new elements - static `create()` method, constructor and `init()`
* configure elements - `set()` method
* start and running elements - `start()` method
* receiving actions - `set()` method
* terminating / stopping elements - `term()` method

The both functionalities of configuring elements and receiving actions
are sharing the same implementation in the `set()` method.

The standard interface of every Element is defined by the base Element class
and every specific Element is derived from this class and adding the specific functionality.

![Members of Element implementations](/concepts/elementapi.png)

A detailed description of the common Element Interface can be found in [ElementInterface](ElementInterface.md).

## Actions

Actions or you may call it events is the functionally that allows Elements to communicate.

Actions are always send by the origin when required.

By using multiple elements that interact this way more complex things can be created.

When an Element is active the `loop()` function is called periodically so the Element can so something meaningful. Here some elements will get sensor values or check the state of some GPIO pins and will then create a named action like `displaytext/info?value=Hello` and hand it over to the action dispatcher in the board class.

This example action that will be dispatched to the element `displaytext/info` and will trigger the action `value` with then parameter `Hello`. The notation of actions is using the URL syntax by intention so the same action can also be triggered from outside using the web server interface:

* open the url: http://(devicename)/$board/displaytext/info?value=Hello
* use a command line tool like: curl http://(devicename)/$board/displaytext/info?value=Hello
* use the remote element in another HomeDing based device.

Inside the board class the action dispatcher is available. Actions are collected in a queue and will be dispatched to the target element shortly after they have been handed over.

Calling the loop() function / executing the element code is prioritized over sending a message.
This is why the board implements a store and forward mechanism with a queue.
The order of the messages is guaranteed to be stable as long as they are not send via network.


## Sensor Elements

Many IoT devices include special chips that can retrieve some environment parameters like temperature, humidity but also power consumption and voltage level.

These elements are usually asking for new values by implementing the chip specific hardware protocol or read registers using the standard protocols I2C or SPI. I2C is very common for many sensor chips and is well supported by the Homeding library. Other hardware based protocols are supported by directly or by including specific libraries from the Arduino library collection.

When new sensor values are found the Element will send out a configurable action to inform other elements about it. Displays, Logging and even elements on remote devices are connected this way.  


## Consuming internet based services 

There are services on the internet that offer interesting data or services that can be consumed by calling the external website. These services sometimes require a registration to get an access key but still are called without using an inbound communication and open incoming boards.

In contrast to actions where changes are dispatched using actions to the receiving elements the information must be polled from the service provider on the internet.

The `HttpClientElement` takes this role and instead of retrieving sensor values it issues a http-get request to a specific host with a specific  url.

Implementing a specific service can now be done using this base class like implementing the `WeatherFeedElement` that can retrieve weather from openweathermap.org. 


## The Life Cycle of the Board and Elements

The implementation of the Board class is the part of the HomeDing Library that organizes all created Elements and dispatches the actions.

### Initialization Phase

* Start the board and make unique facilitating classes like the file service
  and the web server available by initializing them. 

* Parse the env.json file.

  Here the system elements like the [Device](/elements/device.md), the [displays](displays.md) and network related elements like [ntptime](/elements/ntptime.md), [OTA](/elements/ota.md) and [SSDP](/elements/ssdp.md) defined.

  These elements will be created.

* Parse the config.json file.

  Same with the config.json file. Here the functional elements are configured.
  
  These elements will be created too.

* Create all Elements as defined by the configuration.

  Every time a 2. level in the config.json file is found a Element with this type and id will be created.

  All configuration properties of the Elements as defined by the configuration.

* Start all Elements

  All `system` elements will be started/activated at this time.

  Now the show can begin.

  When a network (other than board manager) is available the 'network' elements will be started and when a local time is defined the `time` elements are started too.


### Working Phase

* Run all Elements and dispatch all actions among them.

  The `loop()` function of all active Elements is called and when Actions should be passed the board will dispatch them to the right Element.


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

* `digitalout/relay?value=1`
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