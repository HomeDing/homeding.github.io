---
title: ESP32-C3 Super Mini
description: ESP32-C3 thumb-size board with integrated antenna.
image: "/boards/esp32c3/super-mini-c3.jpg"
tags:
  - "Board"
  - "WIP"
excerpt: >
  The ESP32-C3 Super Mini is a thumb-size board with integrated antenna .
---

The [ESP32-C3 processor](index.md) is a single-core SoC based on the open-source 32-bit RISC-V
architecture.

![ESP32-C3 Super Mini](super-mini-c3.jpg)

## Features

* SoC: [ESP32-C3](index.md)
* 4 MByte Flash
* USB-C bus directly connected to ESP32C3
* Blue LED on GPIO8 ,inverted
* Boot button at GPIO9
* Reset button at CHIP_EN
* GPIO Connectors: GPIO0-GPIO10, GPIO20, GPIO21

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

## Antenna

The SMD antenna on the board is very small and therefore limiting the signal.  This can be improved by some
modifications using a simple 31mm wire.  See
[esp32-c3 supermini antenna modification](https://peterneufeld.wordpress.com/2025/03/04/esp32-c3-supermini-antenna-modification/)

## System configuration

This **env.json** file can be used as a starting point for configuring this board type.

```json
{
  "device": {
    "0": {
      "name": "superminic3",
      "description": "super mini c3 board.",
      "loglevel": "2",
      "button": "9",
      "logfile": 2,
      "safemode": "false",
      "homepage": "/board.htm",
      "cache": "max-age=600",
      "i2c-SDA": "5",
      "i2c-SCL": "6"
    }
  },
  "ota": {
    "0": { }
  },
  "ntptime": {
    "0": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },
  "digitalin": {
    "boot": {
      "title": "Boot button signal",
      "pin": "9",
      "invert": "true",
      "pullup": "1"
    }
  },
  "digitalout": {
    "led": {
      "description": "Builtin blue LED GPIO8",
      "pin": "8",
      "invert": "1",
      "value": "0"
    }
  }
}

```

## See Also

* [ESP32-C3 processor](index.md)
* <https://www.espressif.com/en/products/socs/esp32-c3>
* <https://www.sudo.is/docs/esphome/boards/esp32c3supermini/>
* [text](https://microsoft.github.io/devicescript/devices/esp32/esp32c3-supermini)
