---
title: ESP32-S3 Boards
tags: ["Board" , "WIP"]
layout: "page.njk"
description: ESP32-S3 based boards
excerpt: >
  There are several boards available using the ESP32-S3 chip.
  Boards based on the ESP32-S3 variant offer a High performance dual core SoC
  with vector hardware acceleration and special display interfaces.
---

{% from 'macros.njk' import imgCard %}

The ESP32-S3 variant of the ESP32 is also supported by the Arduino ESP32 Board package from esprerssif and by the Homeding library.

The ESP32-S3 is a 
Xtensa® 32-bit LX7 single or dual-core processor that operates at up to 240 MHz.

It offers:
* Wi-Fi (2.4 GHz, single band)
* Bluetooth 5, LE and Mesh
* CPU clock speed up to 240 MHz
* Max 45 configurable GPIOs
* 512 KB static RAM
* 16 KB of static RTC RAM that keeps data as long as powered.
* 4 Kbit of eFuse memory for special data like encryption keys
* 384 KB of ROM
* integrated Touch sensors
* SD/MMC interface
* Camera interface
* Various Display interfaces
* USB and USB OTG interface
* 2 * I2C Interface
* 4 * SPI Interface
* 2 * I2S Interface
* JTAG interface
* PWM for LEDs
* low-power-mode
* crypro acceleration
* Secure Boot
* Flash encryption
* Direct USB support.
* integrated Flash Memory (option)
* integrated PSRAM Memory (option)

This SoC is positioned as a high-power SoC
 MCU with Wi-Fi and Bluetooth 5 (LE) for general purpose devices. The built-in LCD interface allows fast display performance.


It is part of some modules that offer PCB antenna or antenna connectors.


The official Arduino Nano ESP32
is based on this processor using a custom Module from U-BLOX.


## Flash and PSRAM Memory options

Some versions of the chip offer an internal 4 MByte Flash ROM and/or internal 
PSRAM.


## USB and JTAG Support

The ESP32-S3 SoC directly supports USB and USB OTG ports and also has a built-in JTAG adapter for debugging.

To use the USB port as Serial port the CDC on boot option must be enabled in the Arduino configuration.


## Bluetooth LE

The ESP32-S3 supports Bluetooth LE , Bluetooth 5 and Bluetooth mesh.

Bluetooth support is not yet given by the HomeDing library.


## Powersave modes

several sleep modes:

* Modem-sleep mode
* Light-sleep mode
* Deep-sleep mode


## Watchdog timer


## Cryptographic Hardware Accelerators

Secure communication, signing packages and flash memory is supported by some built-in special functionality.

This results in faster secure (https) network requests.


## Boards with ESP32-S3

{{ imgCard(collections.all, item = '/boards/esp32s3/arduino-nano-esp32') }}

{{ imgCard(collections.all, item = '/boards/esp32s3/xiao-esp32s3') }}

{{ imgCard(collections.all, item = '/boards/esp32s3/sc01-plus') }}

{{ imgCard(collections.all, item = '/boards/esp32s3/panel-8048S043') }}


## See also

* Product web site: <https://www.espressif.com/en/products/socs/esp32-s3>
* Official datasheet: <https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf>
