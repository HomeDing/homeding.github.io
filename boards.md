# Boards for HomeDing

The HomeDing library was especially made for boards that have a ESP8266 system-on-chip processor. In the near future also ESP32 boards will be supported.

In the market you find a lot of bare chip adapters, development boards, IoT devices off-the-shelf and even complete kits that use the ESP8266 chip. Here you find some typical species that you may consider to use.

The following boards have been used / checked during development and their specialties can be found in the board reviews.

## NodeMCU development boards

These boards offer an easy start into the ESP8266 development. The have all you need for programming, offer much memory and a LED for `first step` projects is on board.

* 4 Mbyte Flash ROM
* Based on ESP-12 or ESP-12E
* USB to serial adapter on board
* automatic programming mode
* breadboard friendly (most versions)
* LED
 
See [boardnodemcu](boardnodemcu)

The example [fullding](fullding) can be flashed onto these boards by providing most of the [available elements](availableelements) and [display adapters](displays).
The functionality will be activated through the configuration.

The web interface is working out of the box and includes IDE features and logging cababilities.


## Esp8266 with 1 MByte flash memory
 
Less memory is cheaper. These boards have no difference regarding the CPU and SOC features but these boards.

Older boards with 512 KByte are still available but should be avoided because OTA probably will not work because of this memory restriction.

**[ESP-01](boardesp01)** is the cheapest base minimum ESP8266 board available. Event the connector only supports few GPIO pins but small and enough for simple sensors and relais appliances.

See [boardesp01](boardesp01)

The example [minding](minding) can be flashed onto these boards by providing the typical sensor elements and most core elements but no display adapters.
The functionality will be activated through the configuration.

The web interface can be tailored to visualise the current sensor values.

**[Sonoff Basic]()** is a off-the-shelf solution to switch main power consumers. If you have experience in building high voltage solutions this one is interesting. Similar Sonoff devices are available. The Tasmota library has a wiki with much details.

See [boardsonoff](boardsonoff)


## ESP8285 based boards

The ESP8285 was released as a in 2016 as a cheaper replacement for ESp8266 with an external Flash Ram chip.

lsts; ESP8285 = ESP8266 + 1M Flash in the same chip.


## Boards with Extras


**[Esp-Wroom-02 Modul ESP8266 with OLED and 18650](boardwroom2)** is a ESP-12E with OLED display, LiIon Battery support and switch.

[Wifi Kit 8 Module ESP8266 with OLED](boardwifikit8) is a ESP-12E with OLED display and Li-Polymer battery support.



## See also
* <https://frightanic.com/iot/comparison-of-esp8266-nodemcu-development-boards/>
* <https://blog.squix.org/2015/03/esp8266-module-comparison-esp-01-esp-05.html>


* <https://www.mikrocontroller.net/topic/425242>
* <http://www.forward.com.au/pfod/ESP8266/GPIOpins/index.html>
* <https://github.com/esp8266/esp8266-wiki/wiki/Boot-Process>

* [boardpins](boardpins)