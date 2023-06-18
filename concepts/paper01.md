---
title: Building your own connected Things made easy
tags: ["Implementation"]
layout: "page.njk"
description: Insights into the design of an IoT device,
---

1. **Building your own connected Things made easy**
2. [Software Architecture](/concepts/paper02.md)
3. [Elements and Actions](/concepts/paper03.md)
4. [Builtin Web server](/concepts/paper04.md)
5. [Device Discovery](/concepts/paper05.md)

It is fascinating to see the power of microprocessors growing while costs go down. It is no longer a cost topic to get the chips and boards to implement your own connected things. As we see in the Arduino movement it is possible to get all you need to build your own gadgets and appliances without investing much into the equipment you need.

For the simplest Things a board and USB cable is all you need beside the free Arduino program download.

With the classic Arduino UNO board, it is possible to build wonderful gadgets that run on their own supported by many libraries to handle sensors, sound, light, motors, displays...

Today also more powerful processors and boards are available for even less money offering much more processing power and adding wifi networking. Here the ESP8266 on the NodeMCU board is the most famous solution available and is perfectly integrated into the Arduino environment. More chips and boards are coming even more powerful adding also Bluetooth and High-Quality Sound solutions.

The HomeDing project is exactly starting from this situation and offers an out of the box solution building these types of Things that retain their power when connected to the internet at home.

## Start by examples

To explore the Arduino and microprocessor processor world the [examples](/examples/index.md) and [tutorials](/recipes/index.md) can be used without requiring much programming knowledge.

As an example it is possible to use the [standard example](/examples/standard.md) with a simple environment sensor to build a temperature probing and monitoring solution in a few minutes.

![esp8266+dht sensor on breadboard](/concepts/breadboard.jpg "w400")

The library provides an integrated web server with html, javascript and css files to show a full functional dashboard to display the current probe values and the historical values using a chart.

![Dashboard](/concepts/dashboard.png "w600")

The whole solution fits into a 4GByte Flash memory available on a cheap ESP8266 development board.

## Requirements and Design Rules

To make building your own network connected things real easy the following design was chosen:

* Things implemented using the Homeding library are designed to be used in a home network.
* No central hub system or internet registration is required to run these devices.
* Things are self-contained and need no support or connectivity to a cloud solution. Using cloud services is a option only.
* Every Thing directly supports WLAN for the home network access.
* It is using the simple protocol REST over http that can directly be used by every browser.
* For many simple solutions it is possible to start without actively programming, just configure the functionality.
* Open Source.
* It is easy to extend the functionality by writing a new element implementation. Examples and documentation are available.
* Optimized for a small footprint not for maximal performance.
* Build by using the Arduino programming environment and experience.
* It is easy to build your own functionality wrapped into an Element implementation and contribute new Elements to the library.

The HomeDing library is be documented to make it easy for beginners to understand the basics of the various technologies used.
For advanced programmers the documentation helps to understand the architecture and how to contribute to the community around it.

ESP8266 and especially the NodeMCU board was chosen for the first chip and system to be used because it is available in the Arduino programming environment as well as being available on a good price/power ratio.

While the core library is portable to other processors there will be some ESP8266 specific Elements to support the specific features of the chip.

> "Ding" not only sounds friendly, it is the German word for "Thing".
> As this library targets building small devices for a typical home environment "HomeDing" chosen for the project name.

The documentation is available on GitHub at [https://github.com/HomeDing/HomeDing](https://github.com/HomeDing/HomeDing.md).

Once it is in a valid beta state it will be continued here.

### Next: [Software Architecture](/concepts/paper02.md)
