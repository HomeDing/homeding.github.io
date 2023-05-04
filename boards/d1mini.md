---
title: D1 Mini Boards (ESP8266 and ESP32)
tags: ["Board", "WIP"]
layout: "page.njk"
description: ESP8266 General purpose development boards with same form factor.
excerpt: >
  There are many different mini boards available with differend ESP processors
  that share the same form factor and connector pin assignments.
---

There are many different mini boards available with differend ESP processors.
They share the position of 2 connectors with 8 pins that are compatible to a certain degree.

* 11 digital input/output pins
* 1 analog input(3.2V max input)
* 3V3, 5V, GND and RST are always in the same position
* RST momentary button

## ESP8266 based boards

### D1 mini ESP8266

The D1 mini boards use a ESP8266 MCU and 4 MByte flash memory chip.

(no picture)


### D1 mini V4

{% imgcard "/boards/d1miniv4.jpg", "" %}
The D1 mini board labeld with v4 uses a ESP8266 MCU and 4 MByte flash memory chip
and includes:

* USB-C connector
* i2c connector using the Qwiic standard JST SH 4-pin (1mm)
{% endimgcard %}


### D1 mini pro

{% imgcard "/boards/d1minipro.jpg", "" %}
  The D1 mini pro board is based on the ESP8266 MCU and 4 MByte flash memory chip
  and includes:

* Built-in PCB antenna or External antenna connector
* Lithium battery interface, 500mA Max charging current with a PH 2.0 connector
* i2c connector using the Qwiic standard JST SH 4-pin (1mm)
* RST and GPIO16 can be connected using a solder spot on the back to support deep sleep mode.  
{% endimgcard %}




### Pins for ESP8266 boards

All the ESP8266 based boards above use the same pin assignments and are interchangeable.
The 2 connectors with 8 pins have the following ports assigned in the ESP8266.

![d1mini pins](/boards/d1minipins.png)



## ESP32 based boards


### D1 mini ESP32

{% imgcard "", "/boards/esp32/d1miniesp32.md" %}
A similar [D1 mini ESP32 board](/boards/esp32/d1miniesp32.md) exists
using a ESP32  MCU and 4 MByte flash memory chip.

/boards/esp32/d1miniesp32.jpg

{% endimgcard %}

There are several shields available for these boards.



## Shields

There are some shields for the board forma factor available. Here some examples:

{% imgcard "/boards/d1mini-8x8rgbshield.jpg", "" %}
The D1 Mini 8x8 RGB Shield has 64 WS2812 LEDs that
can be addressed using the [Neo Element](/elements/light/neo.md).

The data signal for the chain of WS2812 LEDs is bound to D4.

The WS2812 leds use `"config": "rgb"`.
{% endimgcard %}


{% imgcard "/boards/d1mini-freeshield.jpg", "" %}
This is a shield you can use to create and apply special configurations by soldering
components on the free grid.
{% endimgcard %}


{% imgcard "/boards/d1mini-sht30shield.jpg", "" %}
The SHT30 shield with a digital temperature and humidity sensor
can be stacked upon a board or can be attached by using a Qwiic connector cable.
{% endimgcard %}


{% imgcard "/boards/d1mini-sdshield.jpg", "" %}
The D1-Mini SD Card shield adds a sd card slot for min sd cards to the standard SPI bus.

The CS assignment can be changed on the back of the shield by cutting
the default (D4) wiring and soldering a bridge for another pin.

{% endimgcard %}


## See also

* WeMos D1 Boards: <https://www.wemos.cc/en/latest/d1/index.html>
* WeMos Shields: <https://www.wemos.cc/en/latest/d1_mini_shield/index.html>
* <https://wolles-elektronikkiste.de/wemos-d1-mini-boards>
* <https://homeding.github.io/dev/i2c.htm>
