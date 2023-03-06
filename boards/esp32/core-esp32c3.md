---
title: CORE-ESP32C3 development board
tags: ["Board"]
layout: "page.njk"
description: ESP32C3 board with LCD and digital joystick.
excerpt: >
  The CORE-ESP32 core board is based on Espressif ESP32-C3 SoC
  that fits good on a breadboard and has the option for a LCD + digital joystick shield on top.
  The ESP32-C3 variant is supported by the HomeDing library.
---

![core-esp32c3 board](/boards/esp32/core-esp32s3.jpg)

## Board Description

The CORE-ESP32 board that is labeled with `luatos.com` is a breadboard friendly
small development board using the ESP32-C3 processor and USB-C interface.

This is a small board 21mm * 51mm that fits good on breadboards.

There are 2 main board variants that differ in the implementation of the USB port.


The following components are already on-board:

* 4MB single channel SPI FLASH (flash using DIO mode)  
  **Important:** Be sure to flash in DIO mode. QIO doesn't work.
* IO12: LED D4 (right to USB)
* IO13: LED D5 (left to USB)
* RST: RST Button
* IO09: Boot Button

The SPI bus is available and also used by the LCD display.

* IO02: SPI-SCK
* IO03: SPI-MOSI
* IO10: SPI-MISO
* IO07: SPI-CS

The I2C bus is mentioned in the manual but not labeled on board:

* IO04: I2C-SDA
* IO05: I2C-SCL

## 1. Product description

The CORE-ESP32 core board is based on Espressif ESP32-C3 SoC.

* Dimensions length and width 21mm*51mm
* 2-way SMD LED indicator
* 1 reset button + 1 BOOT button
* 1 channel USB to TTL download debugging port
* 2.4G PCB onboard antenna


## LCD + Digital Joystick Shield

There is a TFT display and a digital joystick shield available that can be stacked upon the CPU board.

It offers a 0.96 inch display with 80*160 pixels and 262K Color
based on the ST7735S driver chip.

The Boot and Reset buttons are not reachable after mounting this board.

![core-esp32c3 shield](/boards/esp32/core-esp32s3-shield.jpg)


## Board configuration 

The following `env.json` configuration can be used for this board:

``` json
{
  "device": {
    "0": {
      "name": "core-esp32c3",
      "description": "ESP32-C3 based dev board.",
      "title": "CORE-ESP32C3",
      "button": "9",
      "led": "12",
      "i2c-scl": "5",
      "i2c-sda": "4"
    }
  },
  "DisplayST7735": {
    "0": {
      "description": "Display",
      "loglevel": 2,
      "width": "80",
      "height": "160",
      "spiClk": 2,
      "spiMosi": 3,
      "resetpin": 10,
      "spiDC": 6,
      "spiCS": 7,
      "rotation": 270
    }
  },
  "digitalin": {
    "right": { "pin": "19", "inverse": "1", "pullup": 1 },
    "up":    { "pin":  "8", "inverse": "1", "pullup": 1 },
    "press": { "pin":  "4", "inverse": "1", "pullup": 1 },
    "left":  { "pin":  "9", "inverse": "1", "pullup": 1 },
    "down":  { "pin":  "5", "inverse": "1", "pullup": 1 }
  },
  "digitalout": {
    "ledD4": { "pin":"12" },
    "ledD5": { "pin":"13" }

  }
}
```

## Pictures

![core-esp32c3 board with pins](/boards/esp32/core-esp32c3-soldered.jpg "w200")
![core-esp32c3 on breadboard](/boards/esp32/core-esp32c3-stacked.jpg "w200")


## See also

* <https://luatos.com/t/esp32c3>
* <https://wiki.luatos.com/chips/esp32c3/board.html>
* <https://hackaday.com/2021/02/08/hands-on-the-risc-v-esp32-c3-will-be-your-new-esp8266/>
* <https://gitee.com/wendal>
