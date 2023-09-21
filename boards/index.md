---
title: Boards
tags: ["Board", "Implementation"]
layout: "page.njk"
description: Boards supported by the HomeDing library
excerpt: >
  The HomeDing library can be used with the ESP8266 and ESP32 chips from Espressif.
  Here are some boards and devices supported by the HomeDing library.
---

{% from 'macros.njk' import imgCard, elemCard with context %}

On the market you find a lot of solutions like bare chip adapters, development boards,
IoT devices off-the-shelf and even complete kits that use these chips.

Here you find some common species and bare processors described in detail that you may consider to use
including hints for configuration and programming.

## DIY development boards

The NodeMCU boards for ESP8266 and the DevKit Boards for ESP32 and ESP32-S3

There are good options to start a DIY project with breadboard friendly boards.
You can find these at resellers and eBay :

{{ imgCard(collections.all, item = '/boards/nodemcu') }}

{{ imgCard(collections.all, item = '/boards/esp32/devkit') }}

A good source of ESP8266 development board descriptions, hints as well as references
can be found at <https://arduino-esp8266.readthedocs.io/en/latest/boards.html>.

ESP32 boards from espressif :<https://www.espressif.com/en/products/devkits>

In the Repository of Tasmota Supported Devices at <https://templates.blakadder.com/>
many off-the-shell devices can be identified using a espressif processor.


## ESP8266 boards with 4 MByte flash memory

The following boards with 4 MBytes flash memory have been used for development and their specialties can be found in the board reviews.

* The [standard example](/examples/standard.md) can be flashed onto these boards by providing most of the [elements](/elements/index.md) and [display adapters](/elements/display/index.md).
* The web interface is working out of the box by using 1MByte of the flash memory and includes the Web UI, IDE features and logging capabilities.
* These devices are used for `always-on` scenarios to provide the webserver functionality. Using a battery based power source will only result in a short lifetime maybe a few hours or days.
* These devices have enough flash capacity to be updated over the network by using the OTA method.


{{ imgCard(collections.all, item = '/boards/nodemcu') }}

{{ imgCard(collections.all, item = '/boards/d1mini') }}

{{ imgCard(collections.all, item = '/boards/wifikit8') }}

{{ imgCard(collections.all, item = '/boards/witty') }}


:::board wemosoled
The **[Wemos labeled board with OLED](/boards/wemosoled.md)** is a ESP-12E with OLED display.
:::

:::board wroom2
The **[Esp-Wroom-02 Module ESP8266 with OLED and 18650](/boards/wroom2.md)** is a ESP-12E with OLED display, LiIon Battery support and switch.
:::


## ESP32 boards

There are many options for starting with HomeDing with a ESP32 processor.
There are official boards from espressif
<https://www.espressif.com/en/products/devkits> but also other boards from other manufacurers.

{{ imgCard(collections.all, item = '/boards/esp32/devkit') }}

{{ imgCard(collections.all, item = '/boards/esp32/azureiotkit') }}

{{ imgCard(collections.all, item = '/boards/esp32/esp32audiokit') }}

{{ imgCard(collections.all, item = '/boards/esp32/ttgo-t-display') }}

{{ imgCard(collections.all, item = '/boards/esp32/ttgogallery') }}


## ESP32-S3 boards

The [ESP32-S3](/boards/esp32s3/index.md) variant of the ESP32 is supported by the Arduino Framework
and by the HomeDing library.

{{ imgCard(collections.all, item = '/boards/esp32s3/arduino-nano-esp32') }}

{{ imgCard(collections.all, item = '/boards/esp32s3/xiao-esp32s3') }}

{{ imgCard(collections.all, item = '/boards/esp32s3/sc01-plus') }}

{{ imgCard(collections.all, item = '/boards/esp32s3/panel-8048S043') }}




## ESP32-C3 boards

The [ESP32-C3](/boards/esp32c3/index.md) variant of the ESP32 is supported by the Arduino Framework
and by the HomeDing library.

{{ imgCard(collections.all, item = '/boards/esp32c3/core') }}

{{ imgCard(collections.all, item = '/boards/esp32c3/micro') }}

{% imgcard "/boards/esp32/esp32-c3pico.jpg", "" %}
The C3 pico board is based on the ESP32-C3 MCU with 4 MByte internal flash memory
and includes

* Lipo charger
* i2c connector using the Qwiic standard JST SH 4-pin (1mm)
* RST button
* pin 9 button
* USB-C connector
{% endimgcard %}

{{ imgCard(collections.all, item = '/boards/esp32/esp32c3-01') }}


<!-- https://www.cnx-software.com/2022/01/12/esp32-s3-esp32-c3-esp8266-modules-comparison/ -->

## ESP32-S3 boards

The ESP32-S3 variant of the ESP32 is also supported.
The Arduino ESP32 supports this variant.

{{ imgCard(collections.all, item = '/boards/esp32/lilygo-t-dongle-s3') }}


## Devices based on Esp8266

ESP8266 is also used as CPU in various retail devices like sockets and switches but also WiFi lights.

:::board sonoffbasic
The **[Sonoff Basic](/boards/sonoffbasic.md)** is a off-the-shelf solution to switch main power consumers.

It is using the ESP8266 CPU and 1 MByte Flash and can be used with the [Minimal Example](/examples/minimal.md).
:::

:::board sonoffs20
The **[Sonoff S20](/boards/sonoffs20.md)** is a off-the-shelf plug available for different plug types.

It is using the ESP8266 CPU and 1 MByte Flash and can be used with the [Minimal Example](/examples/minimal.md).
:::

:::board sockets
The **[Gosund or Blitzwolf Sockets](/boards/sockets.md)** can switch on/off and can meassure power consumption
of the plugged-in load.

It is using the ESP8266 CPU and 1 MByte Flash and can be used with the [Minimal Example](/examples/minimal.md)
and the [BL0937 chip](/elements/bl0937.md).
:::

:::board bulb
**[Bulb devices](/boards/bulb.md)** build on base of the ESP8266 chip are supported by the minimal sketch.

They are using the ESP8266 CPU and 1 MByte Flash and can be used with the [Minimal Example](/examples/minimal.md) using
the [Color Element](/elements/light/color.md) and [Switch Element](/elements/switch.md) for control.
:::

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

:::board esp12dev
The **[Esp-12 development boards](/boards/esp12dev.md)** is an adapter board that can be used to program a ESP-12 boards before adding it to a device.
This solution is especially suitable for creating devices that run on battery or low power conditions and therefore do not need USB chips.
:::

:::board whiteadapter
The **[White ESP-12 adapter](/boards/whiteadapter.md)** enables using ESP-12 type boards on a breadboard and includes some resistors and a power regulator option.
:::

:::board adapter2
Another adapter for the ESP-12 type boards including space for soldering components.
:::


## ESP-12 module types

ON the ESP-12 with 4 GByte Flash the [standard example](/examples/standard.md) can be uploaded by providing most of the [elements](/elements/index.md) and [display adapters](/elements/display/index.md) out of the box.

The ESP-12 format is a common format but there are different sub-versions available. The all use the ESP8266 SoC but flash size and available pins differ:

:::board esp12e
The **ESP-12** (old) and **ESP-12E** modules offer 8+8 pins at the sides where most of the interesting pins from the ESP8266 SoC chips are available.

They are manufactured by different vendors.
:::

:::board esp12f
On the **ESP-12F**, in addition to the ESP-12E some more pins are available on the "bottom" side that are th signals to the FLASH memory. They are not of much use in most scenarios but in the case you want to add some SPI RAM.
:::

:::board esp12s
The **ESP-12S** is an optimized version from esp-12f with a better antenna signal. FLASH SPI signals are not available.
:::

:::board espwroom
The **ESP-WROOM-02** is not strictly the same form factor this module is directly made by espressif as a reference implementation. The SPI Flash has only 2 MByte. I found it mounted on a wider board including battery based power management.


:::


## Esp8266 boards with 1 MByte flash memory

There are some boards around that only provide 1 MByte flash memory.
This is often sufficient for simple devices that offer small amounts of functionality.
The SOC and processor itself offer the full features but connectivity on the pins is also reduced.


### Applicable Examples

The [minimal example](/examples/minimal.md) can be flashed onto these boards by providing the typical switch elements and most core elements but no sensor and display adapters. The functionality will be activated through the configuration.

<!-- The [sensor example](/elements/sensors.md) can be flashed onto these boards to create small sensor solutions with a set of available sensor elements and most core elements but no display adapters. The functionality will be activated through the configuration. -->


### Boards

The following are boards and solutions with 1 MBytes flash memory chips.

:::board esp01
The [ESP-01](/boards/esp01.md) is the cheapest bare minimum ESP8266 board available. The connector only supports few GPIO pins but it is small and enough for simple sensors and relay appliances. Only 2-4 GPIO signals can be used.

There are variants of this board with different antenna and different flash sizes.
:::


:::board neo
The [neo board](/boards/neo.md) is a very specific adapter
to run a neopixel stripe, wheel or array using a ESP8266 ESP-01 board.
:::


:::board esp01-dht
The [ESP-01 with DHT22 board](/boards/esp01-dht.md) is a very specific adapter
to run a DHT22 sensor using  a ESP8266 ESP-01 board.
:::


## ESP8285 based boards

The ESP8285 was released in 2016 as a cheaper replacement for ESp8266 with an internal Flash Ram chip.

ESP8285 = ESP8266 + 1M Flash in the same chip.


## Comments

The lack of the metal housing of the high frequency emitting CPU and bus to the flash chip may be the reason why they don't have a CE certificate.

Less memory is cheaper. These boards have no difference regarding the CPU and RAM but these boards offer less flash memory, fewer I/O ports and often do not include a USB converter.

Older boards with 512 KByte are still available but should be avoided because OTA probably will not work caused by this small memory size.

The [ESP-01](/boards/esp01.md) is the cheapest bare minimum ESP8266 board available. The connector only supports few GPIO pins but it is small and enough for simple sensors and relay appliances.


## See also

* [ESP8266 pins](/boards/pins.md)
* <https://frightanic.com/iot/comparison-of-esp8266-nodemcu-development-boards/>
* <https://blog.squix.org/2015/03/esp8266-module-comparison-esp-01-esp-05.html>
* <https://www.mikrocontroller.net/topic/425242>
* <http://www.forward.com.au/pfod/ESP8266/GPIOpins/index.html>
* <https://github.com/esp8266/esp8266-wiki/wiki/Boot-Process>
* <https://tasmota.github.io/docs/Pinouts>
