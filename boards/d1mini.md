---
title: D1 Mini Boards (ESP8266 and ESP32)
description: ESP8266 General purpose development boards with same form factor.
layout: "page.njk"
tags: ["Board"]
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


## D1 mini ESP8266

The D1 mini boards use a ESP8266 MCU and 4 MByte flash memory chip.

(no picture)


## D1 mini V4

{% imgcard "/boards/d1miniv4.jpg", "" %}
The D1 mini board labeld with v4 uses a ESP8266 MCU and 4 MByte flash memory chip
and includes:

* USB-C connector
* i2c connector using the Qwiic standard JST SH 4-pin (1mm)
{% endimgcard %}


## D1 mini pro

{% imgcard "/boards/d1minipro.jpg", "" %}
  The D1 mini pro board is based on the ESP8266 MCU and 4 MByte flash memory chip
  and includes:

* Built-in PCB antenna or External antenna connector
* Lithium battery interface, 500mA Max charging current with a PH 2.0 connector
* i2c connector using the Qwiic standard JST SH 4-pin (1mm)
* RST and GPIO16 can be connected using a solder spot on the back to support deep sleep mode.  
{% endimgcard %}


## C3 pico

{% imgcard "/boards/c3pico.jpg", "" %}
The C3 pico board is based on the ESP32-C3 MCU with 4 MByte internal flash memory
and includes

* Lipo charger
* i2c connector using the Qwiic standard JST SH 4-pin (1mm)
* RST button
* pin 9 button
* USB-C connector
{% endimgcard %}


## D1 mini ESP32

{% imgcard "", "/boards/esp32/d1miniesp32.md" %}
A similar [D1 mini ESP32 board](/boards/esp32/d1miniesp32.md) exists
using a ESP32  MCU and 4 MByte flash memory chip.
{% endimgcard %}

There are several shields available for these boards.


## Pins

The 2 connectors with 8 pins have the following ports assigned in the ESP8266.

![d1mini pins](/boards/d1mini.png)


## Shields

There are some shields for the board forma factor available. Here some examples:

{% imgcard "/boards/d1-8x8rgbshield.jpg", "" %}
The D1 8x8 RGB Shield has 64 WS2812 LEDs that can be addressed using the [Neo Element](/elements/neo.md)
using `"config": "rgb"`.
{% endimgcard %}

{% imgcard "/boards/d1-freeshield.jpg", "" %}
This shield can be used to apply special configurations by soldering.
{% endimgcard %}

{% imgcard "/boards/d1-sht30shield.jpg", "" %}
The SHT30 shield with a digital temperature and humidity sensor
can be stacked upon a board or by using a Qwiic connector cable.
{% endimgcard %}


## See also

![d1mini pins](/boards/d1mini.png)

* WeMos D1 Boards: <https://www.wemos.cc/en/latest/d1/index.html>
* WeMos Shields: <https://www.wemos.cc/en/latest/d1_mini_shield/index.html>
* <https://homeding.github.io/dev/i2c.htm>
