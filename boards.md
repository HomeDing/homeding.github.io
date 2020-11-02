# Boards supported by the HomeDing library

The HomeDing library supports a range of boards that use a ESP8266 or ESP32 system-on-chip processor.

On the market you find a lot of solutions like bare chip adapters, development boards, IoT devices off-the-shelf and even complete kits that use these chips. Here you find some common species that you may consider to use but also hints to use the processor directly.

Another good source of board descriptions and hints as well as references can be found at <https://arduino-esp8266.readthedocs.io/en/latest/boards.html>.


## Full feature boards with 4 MByte flash memory

The following boards with 4 MBytes flash memory have been used for development and their specialties can be found in the board reviews.

* The [standard example](examples/standard.md) can be flashed onto these boards by providing most of the [elements](/elements.md) and [display adapters](/displays.md).
* The web interface is working out of the box by using 1MByte of the flash memory and includes the Web UI, IDE features and logging capabilities.
* These devices are used for `always-on` scenarios to provide the webserver functionality. Using a battery based power source will only result in a short lifetime maybe a few hours or days.
* These devices have enough flash capacity to be updated over the network by using the OTA method.

:::board nodemcu
The **[NodeMCU development boards](/boards/nodemcu.md)** is one of the most common development boards including an usb to serial converter chip.
:::

:::board wifikit8
The **[Wifi Kit 8 Module ESP8266 with OLED](/boards/wifikit8.md)** is a ESP8266 with 4k Flash, OLED display and Li-Polymer battery support.
:::

:::board witty
The **[Witty board](/boards/witty.md)** offers a ESP8266-12F solution with a RGB LED, a LDR sensor and an input button. It can be used on a breadboard.
:::

:::board wemosoled
The **[Wemos labeled board with OLED](/boards/wemosoled.md)** is a ESP-12E with OLED display.
:::

:::board wroom2
The **[Esp-Wroom-02 Module ESP8266 with OLED and 18650](/boards/wroom2.md)** is a ESP-12E with OLED display, LiIon Battery support and switch.
:::



## Bare ESP-12 boards

These boards help implementing things using the ESP-12 boards directly.
When used alone an external power supply and some minimal wiring is required.

:::board esp12dev
The **[Esp-12 development boards](/boards/esp12dev.md)** is a adapter board that can be used to program a ESP-12 boards before adding it to a device.
This solution is especially suitable for creating devices that run on battery or low power conditions and therefore do not need USB chips.
:::


:::board whiteadapter
The **[White ESP-12 adapter](/boards/whiteadapter.md)** enables using ESP-12 type boards on a breadboad and includes some resistors and a power regulator option.
:::


## ESP-12 module types

ON the ESP-12 with 4 GByte Flash the [standard example](examples/standard.md) can be uploaded by providing most of the [elements](/elements.md) and [display adapters](/displays.md) out of the box.

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

:::board espwroom02
The **ESP-WROOM-02** is not strictly the same form factor this module is directly made by espressif as a reference implementation. The SPI Flash has only 2 MByte.
I found it mounted on the 
::: 


## Bare Esp8266 boards with 1 MByte flash memory

The following are boards and solutions with 1 MBytes flash memory chips.

The [minimal example](/examples/minimal.md) can be flashed onto these boards by providing the typical switch elements and most core elements but no sensor and display adapters. The functionality will be activated through the configuration.

The [sensor example](/examples/sensor.md) can be flashed onto these boards to create small sensor solutions with a set of available sensor elements and most core elements but no display adapters. The functionality will be activated through the configuration.

:::board esp01
The [ESP-01](/boards/esp01.md) is the cheapest bare minimum ESP8266 board available. The connector only supports few GPIO pins but it is small and enough for simple sensors and relais appliances.

An external power supply is required and only 2-4 GPIO signals can be used.
:::


## Devices based on Esp8266

ESP8266 is also used as CPU in various retail devices like sockets and switches but also WiFi lights.  

:::board sonoffbasic
The **[Sonoff Basic](/boards/sonoffbasic.jpg)** is a off-the-shelf solution to switch main power consumers.

Similar Sonoff devices are available that also contain the ESP8266 CPU.

If you have experience in building high voltage solutions this one is interesting and ready to be programmed.
:::

:::board sp111
These small sockets from Gosund or Blitzwolf have 1 GByte Flash and can be used with the
[Minimal Example](/examples/minimal.md)  
:::

<!-- ESP8266 Module Series
ESP-07S	 Pin compatible with esp-12, IPEX connector to get greater signal
ESP-01S	 General DIP PTH version, less pin lead out, easy to use
ESP-01M	 Vertical stand on your PCBsave space and better signal
WROOM-02	Most certificated, best design by original Espressif.
ESP-14
-->



## ESP8285 based boards

The ESP8285 was released in 2016 as a cheaper replacement for ESp8266 with an internal Flash Ram chip.

ESP8285 = ESP8266 + 1M Flash in the same chip.


## Comments 

The lack of the metal housing of the high frequency emitting CPU and bus to the flash chip may be the reason why they don't have a CE certificate.

Less memory is cheaper. These boards have no difference regarding the CPU and RAM but these boards offer less flash memory, fewer I/O ports and often do not include a USB converter.

Older boards with 512 KByte are still available but should be avoided because OTA probably will not work because of this memory restriction.

The [ESP-01](/boards/esp01.md) is the cheapest bare minimum ESP8266 board available. The connector only supports few GPIO pins but it is small and enough for simple sensors and relais appliances.

The web interface can be tailored e.g. to visualize the current sensor values.

**[Sonoff Basic](/boards/sonoff.md)** is a off-the-shelf solution to switch main power consumers. If you have experience in building high voltage solutions this one is interesting. Similar Sonoff devices are available. The Tasmota library has a wiki with much details.



## See also
* <https://frightanic.com/iot/comparison-of-esp8266-nodemcu-development-boards/>
* <https://blog.squix.org/2015/03/esp8266-module-comparison-esp-01-esp-05.html>


* <https://www.mikrocontroller.net/topic/425242>
* <http://www.forward.com.au/pfod/ESP8266/GPIOpins/index.html>
* <https://github.com/esp8266/esp8266-wiki/wiki/Boot-Process>

* [ESP8266 pins](boards/pins.md)