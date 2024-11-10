---
title: WeAct Studio ESP32-C3 Core
tags:
  - "Board"
  - "WIP"
layout: "page.njk"
description: ESP32-C3 based board with ...
excerpt: >
  The WeAct Studio ESP32-C3 Core board offers breadboard compatible connectors
  and is a good for development purpose.
---

The [ESP32-C3 processor](index.md) is a single-core SoC based on the open-source 32-bit RISC-V architecture.

![WeAct Studio ESP32-C3 Core](weact-core-c3.jpg)


## Arduino Board Configuration

The Arduino Board Manager supports this board by installing the `esp32 by espressif` package.  It can be used with the
following settings:

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


## Momentary Buttons

There are 2 momentary buttons on the board.
1 of them is pulling the BOOT GPIO09 pin to ground and one is connected to the EN and will reset the processor.


Boot = IO9
Reset = Chip_EN

There is no external pull-up resistors on the board so the internal pullup resistors of the ESP32-C3 must be enabled.


## System configuration

This **env.json** file can be used as a starting point for configuring this board type.

```json
{
  "device": {
    "0": {
      "name": "weactc3",
      "title": "WeAct ESP32-C3",
      "description": "WeAct Studio ESP32-C3 Core",
      "loglevel": "2",
      "logFile": "1"
    }
  },
  "ota": {
    "0": {}
  },
  "ntptime": {
    "0": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },


  "state": {
    "0": { "savedelay": "8s" }
  },
  "digitalin": {
    "boot": {
      "title": "Boot button signal",
      "pin": "9",
      "invert": "true",
      "pullup": "1"
    }
  }
}
```

## See Also

* [Boards overview](/boards/index.md)
* [ESP32-C3 Boards](/boards/esp32c3/index.md)
* <https://www.espressif.com/sites/default/files/documentation/esp32-c3-mini-1_datasheet_en.pdf>
