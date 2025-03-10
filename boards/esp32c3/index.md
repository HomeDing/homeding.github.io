---
title: ESP32-C3 Boards
tags: ["Board"]
description: ESP32-C3 based boards
excerpt: >
  There are several boards available using the ESP32-C3 chip.
  Boards based on the ESP32-C3 variant offer a "cost-effective"
  RISC-V based SoC that can replace ESP8266 boards.
---

{% from 'macros.njk' import imageCards with context %}

The ESP32-C3 variant of the ESP32 is supported by the espressif ESP32 Board package and by the
Homeding library.

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

When the board has a USB connector that is connected to the GPIO19 (D-) and GPIO20 (D+). The
configuration for the USB features in the ESP32-c3 SoC must have:

* USB CDC On Boot: Enabled


## CAN bus Support

The CAN bus interface and protocol also known as Two-Wire Automotive Interface (TWAI) is very popular in automotive
domain.  The ESP32C3 chip supports the CAN bus with some restrictions by using an external transiver.

This interface was not yet tested with HomeDing library.


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

{{ imageCards(["esp32c3/core", "esp32c3/micro", "esp32c3/pico", "esp32c3/weact-core-c3", "esp32c3/super-mini-c3",
"esp32c3/xiao_esp32c3", "esp32c3/spotpear-144lcd", "esp32c3/esp32c3-01"]) }}

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
