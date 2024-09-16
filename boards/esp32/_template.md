---
title:
tags:
  - "Board"
  - "WIP"
layout: "page.njk"
description: ESP32 based board with ...
excerpt: >
  This board uses a ESP32 processor ...
---

The [ESP32 processor](index.md) is a dual-core SoC based on the Xtensa® 32-bit LX6
architecture.


## Arduino Board Configuration

The Arduino Board Manager supports this board by installing the `esp32 by espressif` package.
It can be used with the following settings:

* Board: **ESP32 Dev Module**
* CPU Frequency: 240 MHz (WiFi/BT)
* Core Debug Level: None
* Erase All Flash Before Sketch Upload: Disabled
* Events Run On: Core 1
* Flash Frequency: 80MHz
* Flash Mode: QIO
* Flash Size: 4MByte (32Mbit)
* JTAG Adapter: Disabled
* Arduino Runs On: Core 1
* Partition Scheme: Default 4MB with spiffs (1.2MB App/1.5MB SPIFFS)
* PSRAM: Disabled
* Upload Speed: 921600

```txt
"board": "esp32:esp32:esp32",
"configuration": "JTAGAdapter=default,PSRAM=disabled,PartitionScheme=default,CPUFreq=240,FlashMode=dio,FlashFreq=80,FlashSize=4M,UploadSpeed=921600,LoopCore=1,EventsCore=1,DebugLevel=none,EraseFlash=none",
```


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

## See also

* [ESP32 Boards](/boards/esp32/index.md)
* <https://www.espressif.com/sites/default/files/documentation/esp32-c3-mini-1_datasheet_en.pdf>
