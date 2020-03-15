# Boards supported by the HomeDing library

The HomeDing library supports a range of boards that use a ESP8266 or ESP32 system-on-chip processor.

On the market you find a lot of solutions like bare chip adapters, development boards, IoT devices off-the-shelf and even complete kits that use these chips. Here you find some common species that you may consider to use but also hints to use the processor directly.


## Full feature boards

The following boards with 4 MBytes flash memory have been used for development and their specialties can be found in the board reviews.

* [NodeMCU development boards](/boards/nodemcu)
* [Wifi Kit 8 Module ESP8266 with OLED](/boards/wifikit8.md) is a ESP-12E with OLED display and Li-Polymer battery support.
* [Witty board](/boards/witty.md) offers a ESP8266-12F solution with a RGB LED, a LDR sensor and an input button. It can eb used on a breadboard.
* [Esp-Wroom-02 Modul ESP8266 with OLED and 18650](/boards/wroom2) is a ESP-12E with OLED display, LiIon Battery support and switch.
* ESP-12 and ESP-12E used directly.

The [standard example](examples/standard) can be flashed onto these boards by providing most of the [elements](/elements) and [display adapters](/displays).

The web interface is working out of the box by using 1MByte of the flash memory and includes the Web UI, IDE features and logging cababilities.

These devices are used for `always-on` scenarios to provide the webserver functionality. Using a battery based power source will only result in a short lifetime maybe a few hours or days.

These devices can be updated over the network by using the OTA approach.


## Esp8266 with 1 MByte flash memory

Less memory is cheaper. These boards have no difference regarding the CPU and RAM but these boards offer less flash memory, fewer I/O ports and often do not include a USB converter.

Older boards with 512 KByte are still available but should be avoided because OTA probably will not work because of this memory restriction.

* [ESP-01](/boards/esp01.md)
* [Sonoff Switch](boards/sonoff.md)

The [ESP-01](/boards/esp01.md) is the cheapest bare minimum ESP8266 board available. The connector only supports few GPIO pins but it is small and enough for simple sensors and relais appliances.

The [minimal example](examples/minimal) can be flashed onto these boards by providing the typical sensor elements and most core elements but no display adapters. The functionality will be activated through the configuration.

The web interface can be tailored e.g. to visualise the current sensor values.

<!-- 
**[Sonoff Basic]()** is a off-the-shelf solution to switch main power consumers. If you have experience in building high voltage solutions this one is interesting. Similar Sonoff devices are available. The Tasmota library has a wiki with much details.
 -->


## ESP8285 based boards

The ESP8285 was released as a in 2016 as a cheaper replacement for ESp8266 with an external Flash Ram chip.

ESP8285 = ESP8266 + 1M Flash in the same chip.


## See also
* <https://frightanic.com/iot/comparison-of-esp8266-nodemcu-development-boards/>
* <https://blog.squix.org/2015/03/esp8266-module-comparison-esp-01-esp-05.html>


* <https://www.mikrocontroller.net/topic/425242>
* <http://www.forward.com.au/pfod/ESP8266/GPIOpins/index.html>
* <https://github.com/esp8266/esp8266-wiki/wiki/Boot-Process>

* [ESP8266 pins](boards/pins)