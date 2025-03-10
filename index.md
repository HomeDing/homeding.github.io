---
title: The HomeDing Library
layout: "homepage.njk"
description: An Arduino Library that makes IoT devices building easy.
excerpt: >
  The HomeDing library was created to implement standalone IoT devices with the Arduino framework easily.

  Using cloud services or MQTT are options but not required.

  Connect to your home WiFi using a simple form and then customize using a low code and easy configuration.

  The built-in web server with a rich user interface allows controlling the device and
  shows all information of the connected sensors and peripherals.
  
  Make your own by using the Arduino development environment.
---

## Making IoT easy

The main goals and the driving reasons for implementing the HomeDing library are simplicity in creating new IoT devices that can run on their own and have no need for cloud services. All you need is a standard browser.

They have all you need built-in:

* A firmware that knows how to interact with a lot of possible sensors and chips
* A web server to host the UI files and the api.
* A editor for configuration
* A page to view data and control the device.


{% include "./home/story.md" %}


## IoT devices can be used standalone

> Everything for a useful device fits into the memory available on a standard ESP8266 or ESP32 board.
> There is no need for a central hub or bridge device - ideal for starting with implementing IoT devices.


## No Cloud connection

> In contrast to many IoT solutions from vendors that rely on some functionality given by a central implementation in the cloud the HomeDing based devices
> are designed to be used without any cloud support and can run without being connected to the internet.


## Using the Arduino Environment

> To enable everyone to create IoT devices easily, the HomeDing library is available in the format of an Arduino library.
>
> All you get is OpenSource and a lot of documentation to learn implementing your features.


## Easy to be used

> Many of the standard problems that need to be solved for building IoT devices have been implemented in the library.
>
> Just use one of the [examples](/examples/index.md) as a starting code and upload it to the device.


## No programming skills required

> One of the powerful features of the HomeDing library is the availability of specialized elements that can be configured to work together and build solutions.
>
> Start by building your first IoT device by using some of the configuration examples from the [recipes](/recipes/index.md).


## Web enabled

## Web interface

> Every device based on the Homeding library is connected to the local WiFi network and has a [Web Server](/concepts/paper04.md)
> and a small Web Site built-in to visualize the current functionality or to configure some new functionality using a standard web browser.
>
> The IoT devices all offer a full functional web frontend User Interface (UI) based on the web technologies HTML+CSS+JavaScript.
>
> The build-in Web Server also offers a programmable interface by using REST+JSON based [Web-Services](/dev/webservices.md).
>
> Again, just using the given implementation is an option to start quickly as there are widgets for many of the elements
> that allow inspecting, controlling and configuration using a standard browser.
>
> If you like to extend the UI capabilities you can find some documentation in [Implementation Details](/dev/index.md) to see
> how the full functional Web UI is built with the reduced memory available in microprocessor environments.


## Processors supported

> The library is currently made especially for the ESP8266 and ESP32 based boards like the NodeMCU or ESP32-DevKit or similar ones.
> The Arduino environments are used for implementation to keep this easy for DIY projects.
>
> Many sensors, displays, input and output functionality is available as [elements](/elements/index.md).
>
> For some [boards](/boards/index.md) you can find reviews and summaries with a suitable the configuration of the system.


## Open Source

> The project is Open Source available on GitHub and all files are licensed under a BSD style license.
> See <http://www.mathertel.de/License.aspx>
>
> The full documentation is available at: <https://homeding.github.io/>
>
> Some text on the concepts and architecture of this library.
>
> * [Build your own things easily](/concepts/paper01.md)
> * [Software Architecture](/concepts/paper02.md)
> * [Elements and Actions](/concepts/paper03.md)
> * [Web Server](/concepts/paper04.md)


## Elements

> Elements are the functional blocks for building and configuring a device and they interact using actions.
>
> Each element supports a unique feature, e.g. reads a sensor, drives a display, connects some peripheries or implements some internal logic.
>
> The list of the [elements](/elements/index.md) already provided within this library,
> the [examples](/examples/index.md) and the [recipes](/recipes/index.md) show you the available features that can be configured.
>
> It is intentionally easy to implement your own specific elements as you can see in some of the [examples](/examples/index.md).


## Configuration

> Instead of compiling and uploading a new firmware to the device every time a change is required
> the library provides configuration possibilities at runtime.
>
> The configuration of the device implemented as a JSON file activates and configures the required elements
> as well as defining how the interact with each other and to the outer world over network.


## See also

> Extend and Implement for your needs
>
> * See: [Implementation Concepts](/concepts/index.md)
> * See: [Implementation References](/dev/index.md)
>
> From Espressif
>
> * [ESP8266 documents at espressif](https://www.espressif.com/en/support/download/documents?keys=ESP8266)
> * [The ESP8266 Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp8266-technical_reference_en.pdf)
> * [ESP8266EX Datasheet](https://www.espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf)
>
> General Guides
>
> * [A Beginner's Guide to the ESP8266](https://tttapa.github.io/ESP8266/Chap01%20-%20ESP8266.html)
