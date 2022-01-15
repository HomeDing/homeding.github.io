---
title: Displays
---

# {{data.title}}

The HomeDing library supports local attached displays but also works fine without a local display.

There are flexible displays supporting showing multiple values and graphics to be displayed
and there are simple displays showing a single value e.g. using 7-segment LED digits.

Both sorts of diplays are supported.

## Simple displays

The simple displays use 7-segment LEDs to show a single value:

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


## Flexible displays

::: sensor oled
There are many OLED displays available using similar chips and drivers. They are controlled using the I2C or SPI bus.
:::

A small display used together with a ESP8266 board covers a lot of use-cases.
Some boards like the [Wifi Kit 8](/boards/wifikit8.md) or the [Wemos OLED](/boards/wemosoled.md)
already come with an onboard display or a separate display can be added using the I2C or SPI bus.

To place a value or graphical element on them a display Information element is used
to show text, number, signals and graphics. Many  of them can be addressed on a pixel basis.

To enable a an element needs to be configured (preferred in **env.json**). It needs to match to the display type and the chip that is driving the display.
 
The configured and therefore activated display element will automatically activate the corresponding display adapter implementation and will configure it according to the setting given in the configuration.


#### Monochrome OLED displays using the chips

* [SH1106](/elements/sh1106.md)
* [SSD1306](/elements/ssd1306.md)
* [SSD1309](/elements/ssd1309.md) supported through compatibility with SSD1306

#### Monochrome LCD displays

::: sensor lcd
The [Liquid Chrystal](/elements/lcd.md) displays based on the HD44780 chip are common in the Arduino framework.
To control them a I2C adapter with a PCF8574 chip must be used as the ESP8266 has not enough GPIOs to control it directly.
:::


#### Color and grayscale OLED Displays
* SSD 1331 (in planning)
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


## Startup and system information

On startup, when a flexible display is configured some system information is displayed before the elements are started. The same information is also written to the Serial interface and can be observed using the Serial Monitor.

1. "HomeDing"
   
   This shows that the system is running a HomeDing sketch and that the display was recognized and is working.

2. Devicename and IP address

3. cleared


## See also

* [Using the I2C bus](/i2c.md)
