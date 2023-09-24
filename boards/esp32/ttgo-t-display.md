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

* ESP32-D0WD-Q6 Processor (Dual core, 240Mhz  processor)
* Display: IPS ST7789V 1.14 Inch display, 135 * 240 pixels, 64k colors
* 3.7V battery charging circuit
* Supply voltage: 3.3V DC or 5V DC
* SRAM: 520KB
* Flash memory: 4MByte in QIO Mode
* PCB dimensions: 51.4 x 25.2mm
* JST Connector: 2Pin 1.25mmx
* USB: Type-C
* USB-Bridge: CP2104 chip


## Arduino Board Configuration

The board can be used with the following Arduino settings:

* Package: esp32 by Espressif
* Board: ESP32 Dev Module

* JTAG Adapter: Disbled
* PSRAM: Disbled
* Partition Scheme: Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)
* CPU Frequency: 240MHz
* Flash Mode: **QIO**
* Flash Frequency: 80 MHz
* Flash Size: 4MByte (32Mbit)
* Upload Speed: 921600
* Arduino Runs On: Core 1
* Events Runs On: Core 1
* Core Debug Level: None
* Erase All Flash: Disabled


## Display ST7789

The display is a IPS type TFT display using the ST7789 driver chip on the SPI bus. It is
supported by the `GFX Library for Arduino`.

The chip supports a maximal display resolution of 240\*320 pixels in 262k colors but this
display only supports 135\*240 pixels with 64k colors in RGB565 addressing.

Therefore the display offsets must be specified in the configuration.

See configuration in `env.json` below.


## External Connectors

Some power and GPIO pins are available for external components:

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


## Internal GPIO usages

| Name       | GPIO | Remarks                        |
| ---------- | ---: | ------------------------------ |
| TFT_MISO   |      | n/a                            |
| TFT_MOSI   |   19 | usually MISO on Arduino Setups |
| TFT_SCLK   |   18 | = Arduino Standard             |
| TFT_CS     |    5 |                                |
| TFT_DC     |   16 |                                |
| TFT_RST    |   23 |                                |
| TFT_BL     |    4 | TFT Backlight    |
| ADC_IN     |   34 | (Batt_ADC)                     |
| BUTTON1    |   35 |                                |
| BUTTON2    |    0 |                                |
| ADC Power  |   14 |                                |

The TFT is not connected to the usual SPI pins.
The data pin is attached to pin 19 that is usually used for SPI data input (MISO). As the SPI bus and all TFT connections are not available on the board pins so there will be no conflict.

The Backlight can be dimmed by using a GPIO 4 and can be used to adjust the brightness.


## Example env.json Device Configuration 

``` json
{
  "device": {
    "0": {
      "name": "tdisplay",
      "title": "T-Display",
      "description": "LilyGO TTGO T-Display",
      "safemode": "false",
      "button": 0,
      "homepage": "/index.htm"
    }
  },

  "ota": { "0": {} },

  "DisplayST7789": {
    "0": {
      "description": "ST7789 Display",
      "width": "135",
      "height": "240",

      "rotation": "180",
      "colOffset": "52",
      "rowOffset": "40",
      "ips": "true",

      "lightpin": "4",
 
      "spimosi": "19",
      "spiCLK": "18",
      "spics": "5",
      "spidc": "16",
    
      "spiRST": "23"
    }
  },

  "value": {
    "dim": {
      "title": "Display Backlight",
      "description": "Manual Backlight control",
      "min": "0",
      "max": "100",
      "value": "50",
      "onvalue": "DisplayST7789/0?brightness=$v"
    }
  }
}
```


## See also

* [Display Elements](/elements/display/index.md)
* [ST7789 Display Element](/elements/display/st7789.md)
* [SPI](/dev/spi.md)
* <http://www.lilygo.cn/prod_view.aspx?TypeId=50062&Id=1400&FId=t3:50062:3>
* <https://github.com/Xinyuan-LilyGO/TTGO-T-Display>