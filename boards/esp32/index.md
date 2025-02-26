---
title: ESP32 Boards
tags: ["Board" , "WIP"]
description: ESP32 based boards
excerpt: >
  There are several boards available using the ESP32 chip.
  Boards based on the ESP32 variant offer a high performance dual core SoC.
---

The ESP32 was the initial version of the ESP32 processors based on a Xtensa® 32-bit LX6 single
or dual-core that operates at up to 240 MHz.

It offers:

* Wi-Fi (2.4 GHz, single band)
* Bluetooth v4.2 and LE
* CPU clock speed up to 240 MHz
* Max 34 configurable GPIOs
* 520 KB static RAM
* 16 KB of static RTC RAM that keeps data as long as powered.
* 448 KB of ROM
* integrated Touch sensors
* SD/MMC interface
* 2 * I2C Interface
* 4 * SPI Interface
* 2 * I2S Interface
* PWM for LEDs and motors
* low-power-mode
* crypro acceleration
* Secure Boot
* Flash encryption

This SoC is positioned as a high power SoC MCU with Wi-Fi and Bluetooth 4.2 and LE for general
purpose devices.

There are boards with newer processor designs available using the
[ESP32-C3](/boards/esp32c3/index.md) and [ESP32-S3](/boards/esp32s3/index.md) that are also
supported by the Arduino environment. 


## Powersave modes

several sleep modes:

* Modem-sleep mode
* Light-sleep mode
* Deep-sleep mode


## Cryptographic Hardware Accelerators

Secure communication, signing packages and flash memory is supported by some built-in special functionality.

This results in faster secure (https) network requests.


## Boards with ESP32


## See also

* Product web site: <https://www.espressif.com/en/products/socs/esp32>
* Official datasheet: <https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf>
