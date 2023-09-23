---
title: ESP32-C3 Boards
tags: ["Board"]
layout: "page.njk"
description: ESP32-C3 based boards
excerpt: >
  There are several boards available using the ESP32-C3 chip.
  Boards based on the ESP32-C3 variant offer a "cost-effective"
  RISC-V based SoC that can replace ESP8266 boards.
---

{% from 'macros.njk' import imgCard %}

The ESP32-C3 variant of the ESP32 is also supported by the Arduino ESP32 Board package from esprerssif and by the Homeding library.

The ESP32-C3 is a single-core SoC based on the open-source 32-bit RISC-V architecture.

It offers:
* Wi-Fi
* Bluetooth 5 (LE)
* CPU clock speed up to 160 MHz
* Max 22 configurable GPIOs
* 400 KB static RAM, 16 KB for caching
* 8 KB of static RTC RAM that keeps data as long as powered.
* 4 Kbit of eFuse memory for special data like encryption keys
* 384 KB of ROM
* low-power-mode
* crypro acceleration
* Secure Boot
* Flash encryption
* Direct USB support.
* integrated Flash Memory (option)

This SoC is positioned as a cost-effective RISC-V MCU with Wi-Fi and Bluetooth 5 (LE) connectivity for secure IoT applications.

It is often seen as a more secure and powerful replacement option for the ESP8266 and 
has noticeable more internal memory and cpu power as the ESP8266:

The ESP32-C3 offers less IO pins that the ESP32 or ESP32-S3 chips and comes in a smaller
32 pin QFN32 package (5×5 mm) or (4×4 mm) package.

It is part of some modules that offer PCB antenna or antenna connectors.

There is even a ESP-01 kind of module available.


## Flash Memory

The 'F' version of the chip offers an internal 4 MByte Flash ROM that can be flashed using the QIO mode. It supports external Flash up to 16 MByte.


## USB and JTAG Support

The ESP32-C3 SoC directly supports USB ports using IO18 and IO19.

To use the USB port as Serial port the CDC on boot option must be enabled in the Arduino configuration.


## CAN bus Support

available but never tested with HomeDing library.


## Bluetooth LE

The ESP32-C3 supports Bluetooth LE , Bluetooth 5 and Bluetooth mesh.

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


## Boards with ESP32-C3

{{ imgCard(collections.all, item = '/boards/esp32c3/core') }}

{{ imgCard(collections.all, item = '/boards/esp32c3/micro') }}


## Board ESP32-C3 ESP-01

{{ imgCard(collections.all, item = '/boards/esp32c3/esp32c3-01') }}

The ESP32-C3 processor is now also available in a ESP01 form factor board.

More details, see [Board ESP32-C3 ESP-01](/boards/esp32c3/esp32c3-01.md).

The ESP01 form factor was initially used for the ESP8266 processor on the [Board ESP8266 ESP-01](/boards/esp8266/esp01.md).
The original version has limited Flash memory (512kByte).

As of it's popularity there are variants using the ESP8266 and ESP8285 (= ESP8266 + 1M Flash in the same chip)
and more flash memory.




## Log info from the [DIAG Element](/elements/diag.md)

``` txt
14:50:58 diag/0:t Chip-Info:
14:50:58 diag/0:t   model: 5
14:50:58 diag/0:t     ESP32-C3
14:50:58 diag/0:t   features: 00000012
14:50:58 diag/0:t     2.4GHz WiFi
14:50:58 diag/0:t     Bluetooth LE
14:50:58 diag/0:t   cores: 1
14:50:58 diag/0:t   revision: 3
14:50:58 diag/0:t ChipModel: ESP32-C3
14:50:58 diag/0:t Flash:
14:50:58 diag/0:t   ChipSize: 4194304
14:50:58 diag/0:t   ChipMode: 2
14:50:58 diag/0:t   ChipSpeed: 80000000
```


## See also

* Product web site: <https://www.espressif.com/en/products/socs/esp32-c3>
* Official datasheet: <https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf>
* <https://hackaday.com/2021/02/08/hands-on-the-risc-v-esp32-c3-will-be-your-new-esp8266/>
