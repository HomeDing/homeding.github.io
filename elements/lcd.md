---
title: Display LCD Element
id: displaylcd
tags: ["Element"]
description: Using LCD displays with a HD44780 controller chip.
excerpt: >
  The Display Configuration for Monochrome LCDs based on HD44780 chips.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::


In the Arduino Environment the LiquidCrystal library exits for a long time and supports HD44780 compatible LCDs with up to 4 lines of 20 characters. Displays ae available with

* 2 lines of 8 characters
* 2 lines of 16 characters (most common and default)
* 4 lines of 20 characters

## Connecting

Connecting this display type to Arduino was often made using many IO lines by driving the 4-bit interface mode directly.

For ESP8266 and the limited number of GPIO ports a I2C adapter solution is more adequate. The most frequent found of such an solution ist the PCF8574 remote 8-bit IO adapter chip that converts between the I2C bus and up to 8 digital IO lines.

See [http://mathertel.de/Arduino/LiquidCrystal_PCF8574.aspx](http://mathertel.de/Arduino/LiquidCrystal_PCF8574.aspx)

The library used to drive these displays is "LiquidCrystal_PCF8574".

## Web UI for the DisplaySH1106 Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

![LCD Web UI](/elements/lcdui.png)

This card shows the current output that can also be seen on the local attached display. It is updated every time the status of the device is polled by the page.

## Element Configuration

<object data="/element.svg?lcd" type="image/svg+xml"></object>

The following properties are available for configuration of the element:

**address** the address of the display on the I2C bus. Defaults to 0x3C.

**height** the number of lines the display supports.

The initialization of the I2C bus uses the SDA and SCL pins defined in the device configuration.

To show some output on the display use the [DisplayText Element](/elements/displaytext.md)
and the [DisplayDot Element](/elements/displaydot.md)


## Configuration

The DisplayLCD Element can be used to configure the LCDDisplayAdapter.

This should be done in the `env.json` file:

``` json
{
  "device": {
    "0": {
      "name": "lcddevice",
      "description": "IoT Dev-Device with LCD",
      "led": 2,
      "button": "D5",
      "reboottime": "24h",
      "safemode": "false",
      "i2c-scl": "D1",
      "i2c-sda": "D2"
    }
  },

  "displaylcd": {
    "0": {
      "description": "LCD",
      "address": "0x27",
      "lines" : 2,
      "columns" : 16
    }
  }
}
```

## Special characters

The HD44780 displays do have a special character set that is explained in the datasheet. These characters e.g. can be used in the 
postfix text using the 16-bit UTC notation like `"postfix": "\u00dfC"`.

However the WebUI will use the standard unicode codes as expected in the browser so the special character may look different in the Web UI.


## See also

* [Using the I2C bus](/dev/i2c.md)
* [DisplayText Element](/elements/displaytext.md)
* [Display Dot](/elements/displaydot.md)
