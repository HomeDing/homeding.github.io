# Welcome to the HomeDing wiki

Building your own connected Things made easy.

This library targets building small devices for a typical in-house environment, connected to the local WLAN without the need for a central hub or bridge device.

This allows building small self-contained Things that are easy to be created.

It is made especially for the ESP8266 boards like the NodeMCU or similar ones.

The project is Open Souce and all files are licensed under a BSD style license. See http://www.mathertel.de/License.aspx

## HomeDing Concept Papers

- [Building your own connected Things made easy](/concepts/paper01)
- [Software Architecture](/concepts/paper02)
- [Elements and Actions](/concepts/paper03)

## Available Elements

The full list of available [elements](elements) in the HomeDing library are the functional blocks available for building and configuring a device.

Each of them supports a unique feature, reads a sensor, drives displays and other periphery or implements some internal logic. The configuration of the device acvtivates and configures the required elements as well as defining how the interact with each other and to the outer world over network.

It is intentionally easy to implement your own specific elements as you can see in the [Examples](examples).

## Examples

There a some examples included with the library that show some of techniques of implementing on the sketch level.

More examples are available as recipies that show how to configure the elements. The recipies can all be used with the standard example sketch.

The general procedures to setup the development environment can be found in the [setup instructions](examples/setup).

**[Blink](examples/blink)** This very simple example needs just a ESP8266 board and can be used to check the correct setup of the environment.

**[Standard](examples/Standard)**

* [PWM](examples/pwm)
* [Radio](examples/radio)
* [minimal](examples/minimal)
* [full](examples/full)

- [List of availabe Examples with the HomeDing Library](examples)

- [The HomeDing - HomeBlink Example](/examples/blink)

- [The build-in WebServer](webserver)
- [The build-in Web-Services](webservices)


## Supported boards

See: [Supported boards](boards)

## Extend and Implement for your needs

See: [Implementation References and Concepts](implementation)


## Read more

In the documentation you find related links to material that is available on the internet and worth reading.

There are many good resources available to get more information about the ESP8266 boards. Here my recommendations:

**From Espressif**
* [ESP8266 documents at espressif](https://www.espressif.com/en/support/download/documents?keys=ESP8266)
* [The ESP8266 Technical Reference](https://www.espressif.com/sites/default/files/documentation/esp8266-technical_reference_en.pdf)
* [ESP8266EX Datasheet](https://www.espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf)

**General Guides**
* [A Beginner's Guide to the ESP8266](https://tttapa.github.io/ESP8266/Chap01%20-%20ESP8266.html)

