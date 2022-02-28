---
title: Board Review ESP8266 with OLED
---

# {{title}}

![wemosoled.png](/boards/wemosoled.jpg)

This board is offered on eBay by some local and Chinese vendors and combines a ESP8266 with an OLED display.

## Overview table

| GPIO   | Pin | Functionality           | Remarks             |
| ------ | --- | ----------------------- | ------------------- |
|        | AD  | Analog input            |                     |
| GPIO16 | D0  | connector               |                     |
| GPIO5  | D1  | connector               | I2C-SDA for display |
| GPIO4  | D2  | connector               | I2C-SCL for display |
| GPIO0  | D3  | Button FLASH            |                     |
| GPIO2  | D4  | connector, LED          | LED on ESP-12       |
| GPIO14 | D5  | connector               |                     |
| GPIO12 | D6  | connector               |                     |
| GPIO13 | D7  | connector               |                     |
| GPIO15 | D8  | connector               |                     |
| GPIO3  | D9  | connector               |                     |
| GPIO1  | D10 | connector               |                     |
|        | --- | I2C address for display | 60 (=0x3c)          |
|        | --- | Display size            | 128 * 64            |
| Reset  |     | Button RST              |                     |


## Features

It is a board that combines the nodeMCU setup with a OLED.

The display is using the OLED technology and the SSD1306 chip is attached using the I2C bus. A library for driving this chip is available "ESP8266 and ESP32 Oled Driver for SSD1306 display".
It supports the 128x64 pixel of the display.

The blue LED on the ESP-12 can be used GPIO2(D4).

The FLASH and RESET buttons are available like on the nodeMCU boards.

## Critics

## Onboard LED

### No real Low Power

The OLED display is good quality, but it is taking some power even when not used.
That makes this combination almost useless for pure battery appliances when a long lifetime is required.

### I2C / WIRE Bus

The internally used I2C Bus for the connection with the OLED is also available on the connectors.
Therefore it is possible to add more I2C bus devices on the same bus.

Also the board doesn't use the common and default pins that are defined by
SCL=GPIO5(D1) and SDA=GPIO4(D2).

The board uses

* `SCL` = `GPIO4` (`D2`) (yellow) and
* `SDA` = `GPIO5` (`D1`) (blue)

## Board configuration

The display configuration is the only specific entry in env.json:

``` json
{
  "device": {
    "0": {
      "name": "wemosding",
      "reboottime": "24h",
      "description": "IoT Ding with display",
      "logfile": 1,
      "led": "D4",
      "button": "D3",
      "I2C-SDA": "D1",
      "I2C-SCL": "D2"
    }
  },
  "ota": {
    "0": {
      "passwd": "123"
    }
  },
  "ssdp": {
    "0": {
      "ModelUrl": "https://www.mathertel.de/Arduino",
      "Manufacturer": "Matthias Hertel",
      "ManufacturerURL": "https://www.mathertel.de"
    }
  },
  "displaySSD1306": {
    "0": {
      "description": "local display",
      "address": "0x3C",
      "loglevel": 2,
      "height": 64
    }
  }
}
```


## See also

* [Using the I2C bus](/i2c.md)
