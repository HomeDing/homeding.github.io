---
title: The HomeDing Library
---

# {{data.title}}

:::excerpt default
The HomeDing library is a low code to build small IoT devices
without the need for cloud services 
connected to the local WiFi by using the Arduino development environment.
:::

Making IoT easy - that is the goal that is the driving reason for implementing the HomeDing library.

The HomeDing library can be used to build small IoT devices connected to the local WiFi by using the Arduino development environment.

The approach is very different to many other IoT solutions regarding these reasons:


**IoT devices can be used standalone**

> Everything for a useful device fits into the memory available on a standard board.
> 
> The board has everything to run independent on their own and can be controlled using a standard web browser.
> There is no need for a central hub or bridge device - ideal for starting with implementing IoT devices.


**No Cloud connection**

> In contrast to many IoT solutions that rely on some functionality given by a central implementation in the cloud the HomeDing based devices
> are designed to be used without any cloud support and can run without being connected to the internet. 


**Using the Arduino Environment**

> To enable everyone to create IoT devices easily, the HomeDing library is available in the format of an Arduino library.
>
> All you get is OpenSource and a lot of documentation to learn implementing your features.


**Easy to be used**

> Many of the standard problems that need to be solved for building IoT devices have been implemented in the library.
>
> Just use one of the [examples](/examples/index.md) as a starting code and upload it to the device.


**No programming skills required**

> One of the powerful features of the HomeDing library is the availability of specialized elements that can be configured to work together and build solutions.
> 
> Start by building your first IoT device by using some of the configuration examples from the [recipes](/recipes/index.md). 


**Web enabled** 

> The IoT devices all offer a full functional web frontend User Interface (UI) based on the web technologies HTML+CSS+JavaScript.
>
> Again, just using the given implementation is an option to start quickly as there are widgets for many of the elements
> that allow inspecting, controlling and configuration using a standard browser.
> 
> If you are not familiar with these technologies you can find some documentation here to learn
> how to build a full functional Web UI in less than 200k code size. 

Special widgets are e.g. available for:

* [Switch](/elements/switch.md) 
* [Button](/elements/button.md) 
* [Value](/elements/value.md)

<!-- Featuring a broad set of versatile and simple widgets, including:
- Stepper
- Messenger
- Color
- Dimmed light
- Colored light
- Value
- Status
- Gauge
- Percentage
- LED
- Map
- Chart -->

The library is currently made especially for the ESP8266 based boards like the NodeMCU or similar ones.
Many sensors, displays, input and output functionality is available as [elements](/elements/overview.md).

The project is Open Source available on GitHub and all files are licensed under a BSD style license.
See http://www.mathertel.de/License.aspx

The full documentation is available at: https://homeding.github.io/


## HomeDing Concept Papers

Some text on the concepts and architecture of this library.

- [Build your own things easily](/concepts/paper01.md)
- [Software Architecture](/concepts/paper02.md)
- [Elements and Actions](/concepts/paper03.md)
- [Web Server](/concepts/paper04.md)


## Elements

Elements are the functional blocks for building and configuring a device and they interact using actions.

Each element supports a unique feature, e.g. reads a sensor, drives a display, connects some peripheries or implements some internal logic.

The list of the [elements](/elements/overview.md) already provided within this library, the [examples](/examples/index.md) and the [recipes](/recipes/index.md) show you the available features that can be configured.

It is intentionally easy to implement your own specific elements as you can see in some of the [examples](/examples/index.md).


## Configuration

Instead of compiling and uploading a new firmware to the device every time a change is required the library provides configuration possibilities at runtime.

The configuration of the device implemented as a JSON file activates and configures the required elements as well as defining how the interact with each other and to the outer world over network.


## Boards

The HomeDing library can be used with almost any board that is using a ESP8266 processor.

For some [boards](/boards.md) you can find reviews and summaries with a suitable the configuration of the system.


## Web interface

Every device based on the Homeding library is connected to the local WiFi network and has a [Web Server](/concepts/paper04.md)
With a small Web Site built-in to visualize the current functionality or to configure some new functionality using a standard web browser. 

The build-in Web Server also offers a programmable interface by using REST+JSON based [Web-Services](/webservices.md).


## Extend and Implement for your needs

See: [Implementation References and Concepts](/implementation.md)


## Read more

Source code can be installed using the Arduino Library Manager or downloaded from <https://www.github.com/Homeding>.

In the documentation you find related links to material that is available on the internet and worth reading.

There are many good resources available to get more information about the ESP8266 boards. Here my recommendations:

### From Espressif

* [ESP8266 documents at espressif](https://www.espressif.com/en/support/download/documents?keys=ESP8266)
* [The ESP8266 Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp8266-technical_reference_en.pdf)
* [ESP8266EX Datasheet](https://www.espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf)

### General Guides

* [A Beginner's Guide to the ESP8266](https://tttapa.github.io/ESP8266/Chap01%20-%20ESP8266.html)
