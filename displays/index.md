---
title: Displays
layout: "page.njk"
excerpt: >
  The HomeDing library supports local displays attached via SPI and I2C bus
  to show values from the activated elements.
---

There is support for simple, single value displays and also pixel based monochrome and color displays.

The simple displays are using the inbound value of the element directly.

The Monochrome and Color Displays support displaying multiple values by using the Display Information Elements
like text, numbers, signals and graphics
that can be positioned on a page of the display using different fonts and colors.

The Monochrome and Color Displays will be activated already during the startup
to display the device name and ip address.

Some boards like the [Wifi Kit 8](/boards/wifikit8.md), the [Wemos OLED](/boards/wemosoled.md)
or the [TTGO T-Display ESP32 board](/boards/esp32/ttgo-t-display.md)
already come with an onboard and you can find configuration hints in the boards descriptions.

## Supported

 >Displays Overview

| Driver Chip             | Technology | Dimensions                  | Remarks                 |
| ----------------------- | ---------- | --------------------------- | ----------------------- |
| **Simple displays**     |            |                             |                         |
| [Liquid Chrystal]       | LCD        | 8/16/20 chars in 2/4 lines  | character based display |
| [MAX7219]               | LED        | 8\*8 LED matrix modules     |                         |
| [MAX7219]               | LED        | 8\*7 segment LEDs           |                         |
| [TM1637]                | LED        | up to 6 7-segment LEDs      |                         |
| **Monochrome displays** |            |                             |                         |
| [SH1106]                | OLED       | 128\*32, 128\*64            |                         |
| [SSD1306]               | OLED       | 128\*32, 128\*64            |                         |
| [SSD1309]               | OLED       | compatible with SSD1306     |                         |
| [DisplayMAX7219]        | LED        | Multiple LED matrix modules |                         |
| **Color displays**      |            |                             |                         |
| [ST7789]                | TFT LCD    | 135 \* 240                  | 16-bit color            |

<!--
-->

| Driver Chip | Technology | Dimensions                      | Remarks |
| ----------- | ---------- | ------------------------------- | ------- |
| [TM1638]    | LED        | up to 8 7-segment LEDs and keys |         |
| [SSD1331]   | OLED Color | 96 \* 64                        |         |

## Simple displays

The simple displays use LEDs or 7-segment LEDs to show a value:

::: sensor lcd
The [Liquid Chrystal] displays based on the HD44780 chip are common in the Arduino framework.

To control them a I2C adapter with a PCF8574 chip must be used as the ESP8266 / ESP32 has not enough GPIOs to control it directly.
:::

::: sensor max7219
**MAX7219** is a LED driver for the I2C bus that can be used to control a 8x8 matrix of LEDs.
Multiple displays can be chained to form a bigger matrix.

The special [MAX7219 Element](/elements/max7219.md) supports this chip.
:::

::: sensor max7219n
**MAX7219** is a LED driver for the I2C bus that can be used to control a 8x 7-segment LEDs.

The special [MAX7219 Element](/elements/max7219.md) supports this chip.
:::

::: sensor tm1637
**TM1637** is a LED driver for up to 6 7-segment LEDs.

The 4 digit displays are supported by the [TM1637 Element](/elements/tm1637.md).
:::

## Pixel Based Monochrome Displays

::: sensor oled
There are many OLED displays available using similar chips and drivers.
They are controlled using the I2C or SPI bus.

Supported are the driver chips: [SH1106], [SSD1306], [SSD1309]
:::

{% imgcard "/displays/max7219.jpg", "/displays/max7219.htm" %}
  The [DisplayMAX7219Element](/displays/max7219.md) uses LED matrixes as displays
  using the MAX7219 chip that can chain multiple 8x8 led displays.
{% endimgcard %}


## Pixel Based Color Displays

{% imgcard "/displays/colorlcd.jpg", "/displays/st7789.htm" %}
  Colorful displays are supported by the `color` configuration on the display elements.
  The [DisplayST7789Element](/displays/st7789.md) supports the driver chips: [ST7789].
{% endimgcard %}


<!-- - SSD 1331 (in planning) -->
  <!-- * ssd1322 OLED 480*128 -->
  <!-- * ssd1325 OLED 128*80 Gray Scale -->
  <!-- * ssd1327 OLED 128*128 Gray Scale -->

## Display Information Elements

A display usually can show more that just one single information.
This is why there are some elements implemented that will put a specific type of information
on the configured display:

* [Display text](/elements/displaytext.md) used for text and numbers
* [Display a dot](/elements/displaydot.md) used for boolean values
* [Display a line](/elements/displayline.md)
<!-- * [displaybar](/elements/displaybar.md) -->

## Web UI for displays

For the display elements a special Web UI is implemented that shows the current display on the web UI of the device.

The frame is created from the display adapter elements while displaytext and displaydot elements put their information into the frame.

To keep the initialization in the required order it is recommended to configure the display adapter in the env.json and configure the text and dot elements in the config.json file.

## Display configuration

address, resetpin, height, width,

rotation 0, 90, 180, 270

* color

*

## Display actions

page, addpage, clear

## Display events

onpage

## Startup and system information

On startup, when a flexible display is configured some system information is displayed before the elements are started. The same information is also written to the Serial interface and can be observed using the Serial Monitor.

1. "HomeDing"
   This shows that the system is running a HomeDing sketch and that the display was recognized and is working.
2. Devicename and IP address
3. cleared

## See also

* [Using the I2C bus](/dev/i2c.md)

[liquid chrystal]: /displays/lcd.md
[max7219]: /elements/max7219.md
[displayMax7219]: /displays/max7219.md
[tm1637]: /elements/tm1637.md
[tm1638]: /elements/_tm1638.md
[sh1106]: /elements/sh1106.md
[ssd1306]: /elements/ssd1306.md
[ssd1309]: /elements/ssd1309.md
[st7789]: /displays/st7789.md
