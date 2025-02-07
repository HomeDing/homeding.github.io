---
title: Boards and Processor modules
tags:
  - "Board"
  - "Implementation"
layout: "page.njk"
description: Boards supported by the HomeDing library
excerpt: >
  The HomeDing library can be used with Boards and Processor modules
  using the the ESP8266 and ESP32 chips from Espressif.
  In this overview some boards and devices can be found that are supported by the HomeDing library.
---

{% from 'macros.njk' import imageCards with context %}

On the market you find a lot of solutions like bare chip adapters, development boards,
IoT devices off-the-shelf and even complete kits that use these chips.

Here you find some common species and bare processors described in detail that you may consider to use
including hints for configuration and programming.

* [ESP32 boards](/boards/esp32/index.md)
* [ESP32-C3 boards](/boards/esp32c3/index.md)
* [ESP32-S3 boards](/boards/esp32s3/index.md)


## DIY development boards

The NodeMCU boards for ESP8266 and the DevKit Boards for ESP32, ESP32-C3 and ESP32-S3

There are good options to start a DIY project with breadboard friendly boards.
You can find these in the Arduino Store, at resellers and eBay :

{{ imageCards(["arduino-nano-esp32", "nodemcu", "esp32/devkit"]) }}

Using pre-build panels that combine processor, memory and display in a single board.  There are several Elements
available to display information and interact with touch displays.

{{ imageCards(["esp32s3/sc01-plus"]) }}

The ESP8266 development board descriptions, hints and more references
can be found at <https://arduino-esp8266.readthedocs.io/en/latest/boards.html>.

ESP32 boards from espressif :<https://www.espressif.com/en/products/devkits>

In the Repository of Tasmota Supported Devices at <https://templates.blakadder.com/>
many off-the-shell devices can be identified using a espressif processor.


## ESP8266 boards

The HomeDing library is compatible to the Arduino environment using the ESP8266 board package.  Most boards offer 4
MByte flash memory.  Some boards and devices with less flash memory are supported as well.  See below.

Specific to ESP8266 are the following features:

* The [MY9291 Element](/elements/light/my9291.md) only works with ESP8266 by the used library.

* The [standard example](/examples/standard.md) can be flashed onto these boards by providing
  most of the [elements](/elements/index.md) and [display adapters](/elements/display/index.md).
* The web interface is working out of the box by using 1MByte of the flash memory and includes
  the Web UI, IDE features and logging capabilities.
* These devices are used for `always-on` scenarios to provide the webserver functionality. Using
  a battery based power source will only result in a short lifetime maybe a few hours or days.
* These devices have enough flash capacity to be updated over the network by using the OTA method.

{{ imageCards(["nodemcu", "mini/d1mini", "wifikit8", "witty", "wemosoled", "esp8266/wemos18650"]) }}


## ESP32 boards

The HomeDing library is compatible to the ESP32 Arduino environment.

Specific to ESP32 are the following features:

* Usually there are no other names for the GPIO pins and GPIO numbers from the processor descriptions are used.
* An exception is the [Arduino Nano ESP32](/boards/esp32s3/arduino-nano-esp32.md) having printed
  pin numbers that differ from the GPIO numbers.
* The [Touch Element](/elements/touch.md) allows using the ESP32 built-in touch features on the GPIO pins.

There are many options for starting with HomeDing with a ESP32 processor.
There are official boards from espressif
<https://www.espressif.com/en/products/devkits> but also other boards from other manufacurers.

Some boards have been tested:

{{ imageCards(["esp32/devkit", "esp32/azureiotkit", "esp32/esp32audiokit", "esp32/ttgo-t-display", "esp32/ttgogallery"]) }}


## ESP32-S3 boards

The [ESP32-S3](/boards/esp32s3/index.md) variant of the ESP32 is supported by the Arduino
Framework and by the HomeDing library. There is an official [Arduino Nano ESP32](/boards/esp32s3/arduino-nano-esp32.md) board using this processor.

Some boards have been tested:

{{ imageCards(["esp32s3/arduino-nano-esp32", "esp32s3/lilygo-t-dongle-s3", "esp32s3/lilygo-t-display-s3",
"esp32s3/xiao-esp32s3", "esp32s3/sc01-plus", "esp32s3/panel-8048S043", "esp32s3/panel-4848S040"]) }}


## ESP32-C3 boards

The [ESP32-C3](/boards/esp32c3/index.md) variant of the ESP32 is supported by the Arduino Framework
and by the HomeDing library.

Some boards have been tested:

<!-- https://www.cnx-software.com/2022/01/12/esp32-s3-esp32-c3-esp8266-modules-comparison/ -->

{{ imageCards([ "esp32c3/core", "esp32c3/micro", "esp32c3/pico", "esp32c3/weact-core-c3", "esp32c3/super-mini-c3",
"esp32c3/xiao_esp32c3", "esp32c3/spotpear-144lcd", "esp32c3/esp32c3-01"]) }}


## Devices based on Esp8266

ESP8266 is also used as CPU in various retail devices like sockets and switches but also WiFi lights.

{{ imageCards(["sonoffbasic", "sonoffs20", "sockets", "bulb"]) }}

<!-- ESP8266 Module Series
ESP-07S	 Pin compatible with esp-12, IPEX connector to get greater signal
ESP-01S	 General DIP PTH version, less pin lead out, easy to use
ESP-01M	 Vertical stand on your PCBsave space and better signal
WROOM-02	Most certificated, best design by original Espressif.
ESP-14
-->


## Bare ESP-12 boards

These boards help implementing things using the ESP-12 boards directly.
When used alone an external power supply and some minimal wiring is required.

{{ imageCards(["esp8266/esp12dev", "whiteadapter", "adapter2"]) }}


## ESP-12 module types

ON the ESP-12 with 4 GByte Flash the [standard example](/examples/standard.md) can be uploaded by providing most of the [elements](/elements/index.md) and [display adapters](/elements/display/index.md) out of the box.

The ESP-12 format is a common format but there are different sub-versions available. The all use the ESP8266 SoC but flash size and available pins differ:

{{ imageCards(["esp8266/esp12e", "esp8266/esp12f", "esp8266/esp12s", "esp8266/espwroom"]) }}


## Esp8266 boards with 1 MByte flash memory

There are some boards around that only provide 1 MByte flash memory.
This is often sufficient for simple devices that offer small amounts of functionality.
The SOC and processor itself offer the full features but connectivity on the pins is also reduced.


### Applicable Examples

The [minimal example](/examples/minimal.md) can be flashed onto these boards by providing the typical switch elements and most core elements but no sensor and display adapters. The functionality will be activated through the configuration.

<!-- The [sensor example](/elements/sensors.md) can be flashed onto these boards to create small sensor solutions with a set of available sensor elements and most core elements but no display adapters. The functionality will be activated through the configuration. -->


### Boards

The following are boards and solutions with 1 MBytes flash memory chips.

{{ imageCards(["esp8266/esp01", "esp8266/neo", "esp8266/esp01-dht"]) }}


## ESP8285 based boards

The ESP8285 was released in 2016 as a cheaper replacement for ESp8266 with an internal Flash Ram chip.

ESP8285 = ESP8266 + 1M Flash in the same chip.


## Comments

The lack of the metal housing of the high frequency emitting CPU and bus to the flash chip may be the reason why they don't have a CE certificate.

Less memory is cheaper. These boards have no difference regarding the CPU and RAM but these boards offer less flash memory, fewer I/O ports and often do not include a USB converter.

Older boards with 512 KByte are still available but should be avoided because OTA probably will not work caused by this small memory size.

The [ESP-01](/boards/esp8266/esp01.md) is the cheapest bare minimum ESP8266 board available. The connector only supports few GPIO pins but it is small and enough for simple sensors and relay appliances.


## See also

* [ESP8266 pins](/boards/pins.md)
* <https://frightanic.com/iot/comparison-of-esp8266-nodemcu-development-boards/>
* <https://blog.squix.org/2015/03/esp8266-module-comparison-esp-01-esp-05.html>
* <https://www.mikrocontroller.net/topic/425242>
* <http://www.forward.com.au/pfod/ESP8266/GPIOpins/index.html>
* <https://github.com/esp8266/esp8266-wiki/wiki/Boot-Process>
* <https://tasmota.github.io/docs/Pinouts>
