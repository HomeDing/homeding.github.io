---
title: Examples for the HomeDing library
layout: "page.njk"
---

There are some example projects coming with the Homeding library that can be loaded into the IDE by using the Arduino examples menu.

Because the functionality of the target device is mostly defined by the configuration and not by the sketch itself
you can find a lot of examples for configuration and recipes combining multiple elements to fulfill a specific need.

The standard example can be used as a good starting point.

**Important Notice:** Examples will not only require to upload the sketch. It is as also required to upload the files from the `data` folder to the filesystem. If you like to see a full start-to-end building a device look into one of the [stories](/stories/index.md).


## Examples

These examples that come with the library need the nodeMCU board and no specific external hardware:

* **[Standard](/examples/standard.md)**
This example has a sketch and the web site for a NodeMCU or similar board. Most of the recipes work with this sketch.

* **[Minimal](/examples/minimal.md)** 
This example shows how to reduce the number of available elements and use only a bare minimum part of the embedded web site so the whole solution fits into a ESP8266 board with only 1 MByte Flash memory like the ESP-01.

* **[Develop](/examples/devding.md)**
This example is very like the [standard example](/examples/standard.md) but has some add-ons that help during development.
It can be used with any board that has a 4MByte Flash memory like the [NodeMCU](/boards/nodemcu.md) boards.

* **[Probe](/examples/probe.md)** -- {% excerptOf collections.Example, "probe" %} It can be used
  with any board that has a 4MByte Flash memory like the [NodeMCU](/boards/nodemcu.md) boards.

* **[RFBridge](/examples/rfbridge.md)** -- {% excerptOf collections.Example, "rfbridge" %}

* **[Micro](/examples/micro.md)**
The micro firmware for HomeDing enabled devices
is not a real example but is used to flash small devices
with firmware for specific conditions.


<!--
* **[Radio](/examples/radio.md)** This example is built as an extension of the standard example but shows how a special element that is only used for this sketch can be included.
There is also a special WebUI page for the remote control of the radio.

* Dash ... This example shows how to implement a device that ...

* Clock ...
-->


## Customizing the Standard Example

Under normal conditions the [Standard Example](/examples/standard.md) offers a solution where all required elements are compiled and ready to be configured.

In some cases there will not be enough memory to upload or there is the need
to add some specific elements for a specific solution. This can be done using the following mechanisms.

## Include Elements to a firmware

When a sketch is compiled to a firmware a small, large or a special set of elements can be
added. These are then available to be configured. 

The `HOMEDING_INCLUDE_xxx` definitions control what elements will be registered in the [Element Registry](/dev/elementregistry.md).

In the *.ino file of every example you can find a list of HOMEDING_INCLUDE_xxx definitions that can be commented out or activated to specify what elements are later available for configuration. By disabling the definitions you can remove individual elements when they are not required to save program space.

The [Minimal Examples](/examples/minimal.md) is derived from the standard example by just disabling elements this way.

Some elements that require a specific external library that are disables in the [Standard Example](/examples/standard.md) can be included this way.


### Implement local elements.

In the folder of the script you can add some elements that are not part of the library but will also be compiled
together with the sketch and therefore are also available for configuration.

The [Probe Example](/examples/probe.md) and the [Radio Example](/examples/radio.md) show how to include a very specific elements into the sketch folder.

The [DevDing Example](/examples/devding.md) is used to implement some additional elements for problem analysis. It is instrumented for using the (limited, software based) remote debugger. New elements can be implemented by using the provided empty MyElement implementation as a boilerplate. 


 <!-- ??? ---
 
These examples require a specific hardware setup like sensors or displays to solve the use case.

* ... With oled display
* ntpclock
* ... With dht
* with DSTimeElement
* Dash button wake-up

-->

## See also

* [Stories](/stories/index.md) for Step by Step instructions
* [Boards](/boards/index.md) for Board specific configurations
* [Recipes](/recipes/index.md) for Element configurations

