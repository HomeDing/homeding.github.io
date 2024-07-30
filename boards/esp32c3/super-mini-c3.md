---
title: ESP32-C3 Super Mini
tags: ["Board", "WIP"]
layout: "page.njk"
description: ESP32-C3 thumb-size board with integrated antenna.
excerpt: >
  The ESP32-C3 Super Mini is a thumb-size board with integrated antenna.
---

The [ESP32-C3 processor](index.md) is a single-core SoC based on the open-source 32-bit RISC-V
architecture.

![ESP32-C3 Super Mini](super-mini-c3.jpg)

It has almost the same size as the [XIAO ESP32 C3](/boards/esp32c3/xiao_esp32c3.md) but comes with an onboard antenna.
Caused by this very small antenna the weak WiFi and BLE RF signal strength may limit the usability.


## Arduino Board Configuration

The Arduino Board Manager supports this board by installing the `esp32 by espressif` package.
It can be used with the following settings:

* Board: **ESP32C3 Dev Module**
* Upload Speed: 921600
* USB CDC On Boot: Enabled
* CPU Frequency: 160 MHz
* Flash Frequency: 80MHz
* Flash Mode: QIO
* Flash Size: 4MByte (32Mbit)
* Partition Scheme: Default 4MB with spiffs (1.2MB App/1.5MB SPIFFS)
* Core Debug Level: None
* Erase All Flash: Disabled
* JTAG Adapter: Integrated USB JTAG


## Feature X

## Device

## Display

## Display Touch (CST816D) Controller

## Battery Management

## System configuration

This **env.json** file can be used as a starting point for configuring this board type.

```json
```

## See Also

* [ESP32-C3 processor](index.md)
* <https://www.espressif.com/sites/default/files/documentation/esp32-c3-mini-1_datasheet_en.pdf>
