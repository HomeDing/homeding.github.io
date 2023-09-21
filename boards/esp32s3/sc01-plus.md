---
title: ESP32S3 SC01 Plus
tags: ["Board", "WIP"]
layout: "page.njk"
description: Board with display
excerpt: >
  This board is ...
---


```cpp
#define ZX3D50CE02S // or called "WT32-SC01 PLUS"

#define GFX_DEV_DEVICE ZX3D50CE02S
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_ESP32LCD8(
    0 /* DC */, GFX_NOT_DEFINED /* CS */, 47 /* WR */, GFX_NOT_DEFINED /* RD */,
    9 /* D0 */, 46 /* D1 */, 3 /* D2 */, 8 /* D3 */, 18 /* D4 */, 17 /* D5 */, 16 /* D6 */, 15 /* D7 */);
Arduino_GFX *gfx = new Arduino_ST7796(bus, 4 /* RST */, 0 /* rotation */, true /* IPS */);

```

16MB SPI flash
2MB PSRAM

## LCD

ST7701

480*320, RGB565 color mode

MCU8080 8Bit Interface

# Touch

FT6336U, Single touch

<https://github.com/aselectroworks/Arduino-FT6336U>


TP_INT GPIO 7 Touch interrupt
TP_SDA GPIO 6 Touch IIC data
TP_SCL GPIO 5 Touch IIC clock
TP_RST GPIO 4 Touch reset, multiplexed with LCD rese

## SD Card

[4] SD Card Interface (Tab.4)
Description Module Pin Remark
SD_CS GPIO 41 SD card chip selection
SD_DI（MOSI） GPIO 40 SD card data input
SD_CLK GPIO 39 SD card clock
SD_DO（MISO） GPIO 38 SD card data


## See also

* <http://en.wireless-tag.com/>
* <http://en.wireless-tag.com/product-item-26.html>

* <https://99tech.com.au/product/lcd-wt32-sc01-plus>
* <https://99tech.com.au/mx-m/lcd/lcd-wt32-sc01-plus_datasheet.pdf>

* <https://github.com/fantasticdonkey/uFT6336U/blob/master/uFT6336U.py>
* <https://github.com/m5stack/M5Core2/blob/master/src/M5Touch.cpp>
