---
title: LilyGO TTGO T-Display
description: ESP32 board with integrated TFT color display.
layout: "page.njk"
tags: ["Board"]
excerpt: >
  The LilyGO TTGO T-Display board offer an integrated TFT color display and a USB-C type connector.
---

![TTGO T-Display](/boards/esp32/ttgo-t-display.jpg)

* Display: IPS ST7789V 1.14 Inch display, 135 * 240 pixels, 64k colors
* 3.7V battery charging circuit
* Supply voltage: 3.3V DC or 5V DC
* ESP32-D0WDQ6 (Dual core, 240Mhz  processor)
* SRAM: 520KB
* Flash memory: 4MByte
* PCB dimensions: 51.4 x 25.2mm
* JST Connector: 2Pin 1.25mmx
* USB: Type-C

## Connectors

```txt
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

## Internal usages

| Name       | pin | Remarks     |
| ---------- | --: | ----------- |
| TFT Driver |     | ST7789      |
| TFT_MISO   |     | n/a         |
| TFT_MOSI   |  19 |             |
| TFT_SCLK   |  18 |             |
| TFT_CS     |   5 |             |
| TFT_DC     |  16 |             |
| TFT_RST    |  23 |             |
| TFT_BL     |   4 |             |
|            |     |             |
| I2C_SDA    |  21 | + connector |
| I2C_SCL    |  22 | + connector |
|            |     |             |
| ADC_IN     |  34 | (Batt_ADC)  |
| BUTTON1    |  35 |             |
| BUTTON2    |   0 |             |
| ADC Power  |  14 |             |

## See also

* <http://www.lilygo.cn/prod_view.aspx?TypeId=50062&Id=1400&FId=t3:50062:3>
* <https://github.com/Xinyuan-LilyGO/TTGO-T-Display>

