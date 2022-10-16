---
title: ESP32-C3 Boards
description: ESP32-C3 General purpose development boards
layout: "page.njk"
tags: ["Board"]
excerpt: >
  There are several ESP32-C3 DevKit Boards listed here.
  They are supported by the HomeDing library.
---

The C3 variant of the ESP32 is supported by the HomeDing library.
It has less IO pins than the original ESP32 and is not supporting touch input.
As it is "cost-effective" RISC-V based SoC that may replace
ESP8266 some time. The Arduino ESP32 adaption supports this variant.


## CORE-ESP32-C3 Development Board and OLED+Joystick Shield


The CORE-ESP32 board that is labeled with `luatos.com` is a breadboard friendly
small development board using the ESP32-C3 processor and USB-C interface.

![core-esp32c3 board](/boards/esp32/core-esp32s3.jpg)

This is a small board that fits good on breadboards.

There are 2 main board variants that differ in the implementation of the USB port.

**Important:** Be sure to flash in DIO mode. QIO did not work for me.

The following components are already on-board:

* IO12: LED (right to USB)
* IO13: LED (left to USB)
* RST: RST Button
* IO9: Boot Button

* IO2: SPI-SCK
* IO3: SPI-MOSI
* I10: SPI-MISO
* I07: SPI-CS

* IO4: I2C-SDA
* IO5: I2C-SCL

![core-esp32c3 shield](/boards/esp32/core-esp32s3-shield.jpg)

There is a TFT display and a digital joystick shield available that can be stacked upon the CPU board.
It offers a 0.96 inch display with 80*160 pixels and 262K Color
based on the ST7735S driver chip.


<!--
    esp32c3 = {
        useFont = false,
        spi = 2,
        spiCS = 7,
        spiSpeed = 40*1000*1000,
        lcdDC = 6,
        lcdRST = 10,
        lcdBL = 11,
        keyL = 13,
        keyR = 8,
        keyU = 5,
        keyD = 9,
        keyO = 4,
    },
right: reset

(7789)
-->

## See also

* <https://wiki.luatos.com/chips/esp32c3/board.html>
* <https://hackaday.com/2021/02/08/hands-on-the-risc-v-esp32-c3-will-be-your-new-esp8266/>