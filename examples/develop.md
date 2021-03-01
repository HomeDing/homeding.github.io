# Development Example

:::excerpt
The examples in the HomeDing library are used to compile a firmware that provides the base functionality
combined with a set of elements that can be used in the configuration of the device.

The **DevDing example** can be used with any board that has a 4MByte Flash memory like the [nodemcu boards](/boards/nodemcu.md).
It is very like the [standard example](/examples/standard.md) but has some add-ons that help during development.
:::

To setup the development environment and using a ESP8266 board in general please look into the description of the [Standard Example](/examples/standard.md). Here the add-on featured for supporting development are described.


## Sketch file features

The sketch file contains some more source code.

To initialize the remote debugging using the GDBStub implementation enable the `#define DBG_GDB` statement.

To set the trace level for all active elements to the most detailed level enable the `#define DBG_TRACE` statement.
The standard logging level in the device configuration enables tracing in the configuration phase when elements are created. This statement enables the TRACE level from the start.

To enable information about network connectivity enable the `#define NET_DEBUG` statement.


## Template Element

This is an Element implementation that only contains the empty functions and some additional information as comments that help implementing new Elements.

The 2 files (TemplateElement.*) can be copied / renamed and the class name should be adjusted as well.

Then implement the inner part of the set, loop and other functions as required.


## Diag Element

This element was developed to inject some functionality when a device starts up.

It lists some interesting information about the system to the log and then scans the I2C bus for existing devices.


## Beta Elements

The DevDing example also acts as a place where unfinished elements in a beta state are available. They may disappear or show up in the regular library in future versions. 


<!-- ## Using a GDB debugger 

gdbstub_init();


The development sketch adds a software based debugger that allows setting a single breakpoint and inspecting variables.

This feature comes at it's cost:

* 10 kBytes more program memory usage to enable the debugger
* 2 kBytes more global variables resulting in
* 2 kBytes less heap memory space. -->


## See also

* [examples](/examples.md)
* [Boards overview](/boards.md)
* [Recipes](/recipes.md)