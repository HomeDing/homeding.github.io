---
title: LilyGO TTGO T-Display
tags: ["Board", "WIP"]
layout: "page.njk"
description: ESP32 board with integrated TFT color display.
excerpt: >
  The LilyGO TTGO T-Display board offer an integrated TFT color display and a USB-C type connector.
---

This board is not based on a ESP32 module but is using the ESP32-D0WD-Q6 processor directly.

![TTGO T-Display](/boards/esp32/ttgo-t-display.jpg)

* ESP32-D0WD-Q6 (Dual core, 240Mhz  processor)
* Display: IPS ST7789V 1.14 Inch display, 135 * 240 pixels, 64k colors
* 3.7V battery charging circuit
* Supply voltage: 3.3V DC or 5V DC
* SRAM: 520KB
* Flash memory: 4MByte
* PCB dimensions: 51.4 x 25.2mm
* JST Connector: 2Pin 1.25mmx
* USB: Type-C
* USB-Bridge: 2104


## Connectors

``` txt
    +-------------+
    |   T T G O   |
G   | +---------+ | 3V
G   | |    D    | | 36
21  | |    I    | | 37
22  | |    S    | | 38
17  | |    P    | | 39
2   | |    L    | | 32
15  | |    A    | | 33
13  | |    Y    | | 25
12  | |         | | 26
G   | |         | | 27
G   | |         | |  G
3V  | |         | | 5V
    | +---------+ |
    |             B-RST
    | B-2     B-1 |
    +-----USB-----+
```

## Pin usages

| Name       |  pin | Remarks                        |
| ---------- | ---: | ------------------------------ |
| TFT Driver |      | ST7789 65k color display       |
| TFT_MISO   |      | n/a                            |
| TFT_MOSI   |   19 | usually MISO on Arduino Setups |
| TFT_SCLK   |   18 | = Arduino Standard             |
| TFT_CS     |    5 |                                |
| TFT_DC     |   16 |                                |
| TFT_RST    |   23 |                                |
| TFT_BL     |    4 |                                |
|            |      |                                |
| I2C_SDA    |   21 | + connector                    |
| I2C_SCL    |   22 | + connector                    |
|            |      |                                |
| ADC_IN     |   34 | (Batt_ADC)                     |
| BUTTON1    |   35 |                                |
| BUTTON2    |    0 |                                |
| ADC Power  |   14 |                                |

The TFT is not connected to the usual SPI pins.
The data pin is attached to pin 19 that is usually used for SPI data input (MISO). As the SPI bus and all TFT connections are not available on the board pins so there will be no conflict.

The Backlight can be dimmed by using a pwmout on pin 4.

## config

``` json
{
  "DisplayST7789": {
    "0": {
      "description": "TTGO-Display",
      "width": "135",
      "height": "240",
      "lightpin": 4,
      "rotation": 180,
      "invert": 1,
      "spimosi": 19,
      "spimiso": "-1",
      "spiCLK": 18,
      "spics": "5",
      "spidc": "16",
      "xspiRST": 23
    }
  }
}
```

For background dimming:

``` json
{
  "value": {
    "dim": {
      "title": "TFT Backlight",
      "description": "Backlight dimming of ST7789",
      "min": 0,
      "max": 255,
      "value": 128,
      "onvalue": "pwmout/dim?value=$v"
    }
  },
  "pwmout": {
    "dim": {
      "title": "TFT Backlight",
      "description": "Backlight dimming of ST7789",
      "pin": "4",
      "range": 255,
      "value": 128
    }
  }
}
```


## See also

* <http://www.lilygo.cn/prod_view.aspx?TypeId=50062&Id=1400&FId=t3:50062:3>
* <https://github.com/Xinyuan-LilyGO/TTGO-T-Display>
* [SPI](/dev/spi.md)

--- 

## memo

#define VSPI  3 //SPI bus normally attached to pins 5, 18, 19 and 23, but can be matrixed to any pins
