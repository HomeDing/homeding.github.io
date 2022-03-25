---
title: Display Configuration
tags: ["Element", "Display"]
description: Parameters to configure display support.
layout: "page.njk"
excerpt: >
  The displays in the HomeDing library are configured by a unified set of parameters.
---

## Configuration properties

The displays are configured using the following parameters. Some displays will not support all functionality.

**address** - The i2c address of the display when using the i2c bus for connecting the display.
By setting this parameter some display implementation will attach to the i2c bus otherwise to the SPI bus.

**resetpin** - Some displays use a dedicated reset signal to restart the display chip. If not set no special reset sequence is created by the display adapter.

**lightpin** - Some displays use a dedicated signal to enable or dim the backlight.

**width** - The width of the display either characters or pixels.

**height** - The height of the display either characters or pixels.

**rotation** - Some displays can be rotated. The rotation of the display is given by values of 0, 90, 180 or 270.

**spimosi** -
**spimiso** -
**spisclk** -
**spics** -
**spidc** -

#define TFT_CS 5
#define TFT_RST -1
#define TFT_DC 23
#define TFT_MISO 32
#define TFT_MOSI 19 // Data out
#define TFT_SCLK 18 // Clock out


## Events

**brightness** - Some displays an be adjusted in brightness or contrast by specifying a value using the brightness event in a range of 0 tp 100.

**page** -

**addpage** -

**clear** -


## Actions

**onpage** -

