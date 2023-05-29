---
title: Board Review ESP8266 -12 with OLED and 18650
tags: ["Board", "WIP"]
layout: "page.njk"
---

![wroom2.jpg](/boards/wroom2.jpg)

This board is offered on eBay by some local and Chinese vendors and combines a ESP8266, a OLED display a „joystick“ type of button and the hardware to charge and use an LI-ION standard 18650 battery.

A battery holder is on the back.

## GPIO Pins in use

| GPIO       | Pin | Functionality |
| ---------- | --- | ------------- |
|            | AD  | Analog input  |
| GPIO0(D3)  | D3  | Button Left   |
| GPIO2(D4)  | D4  | connector     |
| GPIO15(D8) | D8  | connector     |
| GPIO3(D9)  | D9  | connector     |
| GPIO1(D10) | D10 | connector     |
| GPIO5(D1)  | --- | SDA           |
| GPIO4(D2)  | --- | SCL           |
| Reset      |     | Button Right  |
| GPIO12(D6) |     | Button UP     |
| GPIO13(D7) |     | Button Down   |
| GPIO14(D5) |     | Button Press  |
| GPIO16(D0) |     | green LED     |


## Features

It is a board that combines some of the standard components available with libraries for the ESP8266 chip
in a robust and reliable way.

Because it comes with a LI-ION standard 18650 battery holder and a power management for Li-ION charging it is portable for the time the battery offers power (> 8h).

There is a green LED at GPIO16(D0).

The blue LED on the ESP-12 can also be used GPIO2(D4).


## Display

The display is using the OLED technology and the  chip is attached using the internal I2C bus
and is supported by the SSD1306 Element and Display adapter.

It Supports 128x64 and 182x32 displays.

I2C Address is 60 (=0x3c).

The display size is 128 * 64 pixels.


### Onboard LED

The green LED at GPIO16(D0) only can be used when there is no need for [deep sleep](/dev/deepsleep.md) functionality and only can be switched on and off.

In cannot be dimmed using by PWM because GPIO16 is not supporting this.

I find it a poor design to add a LED to this port for these reasons.


### Joystick

The joystick button is bound to 4 input pins and to the reset pin as well this makes this button almost useless for games and menu selection functionality because it will happen by accident that the reset direction (move to the right) is activated.

| Joystick | Pin        |
| -------- | ---------- |
| Right    | Reset      |
| Up       | GPIO12(D6) |
| Down     | GPIO13(D7) |
| Press    | GPIO14(D5) |
| Left     | GPIO0(D3)  |


### No real Low Power

The OLED display is good quality, but it is taking some power even when not used.
That makes this combination almost useless for pure battery appliances when a long lifetime is required.


### I2C / WIRE Bus

The internally used I2C Bus for the connection with the OLED is not available at a connector. Therefore it is difficult to add more I2C bus devices to this bus.

Also the board doesn't use the common and default pins that are defined by
SCL=GPIO5(D1) and SDA=GPIO4(D2).

The board uses

* `SCL` = `GPIO4` (`D2`) (yellow) and
* `SDA` = `GPIO5` (`D1`) (blue)


## Board configuration

The display configuration is defined in env.json together with the system button and led for configuration.
When pressing the joystick while the LED is blinking the device switches to config mode.

``` json
{
  "device": {
    "0": {
      "name": "wroomding",
      "reboottime": "24h",
      "i2c-sda": "D1",
      "i2c-scl": "D2",
      "logfile": 1,
      "led": "D0",
      "button": "D5",
      "description": "Esp-Wroom-02 Modul ESP8266 with OLED and 18650"
    }
  },

  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' Updates"
    }
  },

  "ssdp": {
    "0": {
      "ModelUrl": "https://www.mathertel.de/Arduino"
    }
  },

 "DisplaySSD1306": {
    "0": {
      "address": "60",
      "height": 64
    }
  }
}
```

These are the basic element configurations for the joystick button and the 2 onboard LEDs.

``` json
{
  "digitalin": {
    "up": {
      "pin": "D6",
      "description": "up button signal",
      "invert": "true",
      "pullup": "true",
      "onvalue": "button/up?value=$v"
    },
    "down": {
      "pin": "D7",
      "description": "down button signal",
      "invert": "true",
      "pullup": "true",
      "onvalue": "device/0?log=down-input:$v"
    },
    "left": {
      "pin": "D3",
      "description": "left button signal",
      "invert": "true",
      "pullup": "true",
      "onvalue": "device/0?log=left-input:$v"
    },
    "press": {
      "pin": "D5",
      "description": "press button signal",
      "invert": "true",
      "pullup": "true",
      "onvalue": "device/0?log=press-input:$v"
    }
  },
  "digitalout": {
    "led": {
      "pin": "D0",
      "invert": "true",
      "value": "0",
      "description": "Builtin LED is on Port D0 = GPIO16"
    }
  },
  "pwmout": {
    "led": {
      "pin": "D4",
      "range": 255,
      "value": 10,
      "invert": "true",
      "description": "Build-in LED on module"
    }
  },
}
```

## See also

* [Using the I2C bus](/dev/i2c.md)
