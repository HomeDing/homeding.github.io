# HomeDing Library Documentation

Building your own connected things made easy.

This library can be used to build small devices directly connected to the local WiFi using the Arduino development environment.

It offers functionality in the format of a Arduino library but also a HTML+CSS+JavaScript based User Interface. 

All of tiis fits into the memory available on a standard board.

They contain everything to run independent on their own and are directly controlled using a standard web browser.
There is no need for a central hub or bridge device.

It is currently made especially for the ESP8266 based boards like the NodeMCU or similar ones. Many sensors, displays, input and output functionality is available as [elements](elements).

The project is Open Souce available on GitHub and all files are licensed under a BSD style license.
See http://www.mathertel.de/License.aspx

## HomeDing Concept Papers

Some text on the concepts and architecture of this library.

- [Build your own things easily](/concepts/paper01)
- [Software Architecture](/concepts/paper02)
- [Elements and Actions](/concepts/paper03)
- [Web Server](concepts/paper04.md)

## Available Elements

Elemens are the functional blocks for building and configuring a device and they interact using actions.

Each element supports a unique feature, e.g. reads a sensor, drives a display, connects some peripheries or implements some internal logic.

The list of [elements](elements.md) already provided within this library, the [examples](examples.md) and the [recipes](recipes.md) show you the available features that can be configured.

Building your own specific elements only needs some reasonable programming effort.


## Configuration

Instead of compiling and uploading a new firmware to the device every time a changebis required the library provides configuration at runtime.

The configuration of the device implemented as a JSON file acvtivates and configures the required elements as well as defining how the interact with each other and to the outer world over network.

It is intentionally easy to implement your own specific elements as you can see in some of the [examples](examples).


## Boards

The HomeDing library can be used with almost any board that is using a ESP8266 processor.
For some [boards](boards.md) you can find reviews and summaries with a suitable the configuration of the system.

The general procedures to setup the development environment can be found in the [setup instructions](examples/setup).


## Wishlist

More elements are on the [wishlist](wishlist).


## Web interface

Every device based on the Homeding library is connected to the local WiFi network and has a [Web Server](concepts/paper04.md)
With a small Web Site built-in to visualise the current functionality or to configure some new functionality using a standard web browser. 

The build-in Web Server also offers a programmable interface by using REST+JSON based [Web-Services](webservices.md).


## Extend and Implement for your needs

See: [Implementation References and Concepts](implementation)


## Read more

Source code can be installed using the Arduino Library Manager or downloaded from <https://www.github.com/Homeding>.

In the documentation you find related links to material that is available on the internet and worth reading.

There are many good resources available to get more information about the ESP8266 boards. Here my recommendations:

**From Espressif**
* [ESP8266 documents at espressif](https://www.espressif.com/en/support/download/documents?keys=ESP8266)
* [The ESP8266 Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp8266-technical_reference_en.pdf)
* [ESP8266EX Datasheet](https://www.espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf)

**General Guides**
* [A Beginner's Guide to the ESP8266](https://tttapa.github.io/ESP8266/Chap01%20-%20ESP8266.html)