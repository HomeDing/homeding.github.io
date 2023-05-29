---
title: Dimming LED Recipe
tags: ["Recipe"]
layout: "page.njk"
---

This recipe uses 2 digital input signals to change the brightness level of a LED.

This is can be achieved by using 2 [digital inputs](/elements/digitalin.md), a [value](/elements/value.md) and a [pwm](/elements/pwmout.md) element connected by some actions.

![Elements used in led recipe](/recipes/leddimflow.png)

The 2 [digital input elements](/elements/digitalin.md) either increment or decrement like volume up and down buttons.
Each of them send an action for increment or decrement to the value element.

The increment button must be connected to `D5` and ground. The decrement button mst be connected to `D6` and ground.
Both inputs are configured to use the internal pull up resistors to create a physical HIGH level when the buttons are not pressed.
By pressing the buttons the physical level ist pulled to ground.

Because this is logically seen as 0 (not pressed) and 1 (pressed) the invert mode is used.

The actions are emitted every time the button is pressed (going from 0 to 1).

The [value element](/elements/value.md) specifies the valid range of of 0...255 and gets controlled by the actions from the input element to increment or decrement the value.
When the maximum level is reached no further increment will be done.

Every time the value of the value element is changed an action with the new value is passed to the pwm element driving the LED.

The [pwm element](/elements/pwmout.md) is configured to allow values within the same range as passed from the value element corresponding to 0 up to the maximum of the pwm output level at the `D4` GPIO.


## env.json Configuration

The `env.json` can be taken from the board description because it has no special logic for this recipe:

``` json
{
  "device": {
    "main": {
      "name": "nodeding",
      "description": "nodeMCU board config",
      "reboottime": "24h",
      "button": "D3",
      "led": "D4",
      "I2C-SDA": "D2",
      "I2C-SCL": "D1"
    }
  },

  "ota": {
    "main": {
      "port": 8266,
      "passwd": "123",
      "description": "allow Over the Air Updates"
    }
  },

  "ssdp": {
    "0": {
      "manufacturer": "Matthias Hertel"
    }
  }
}
```


## config.json Configuration

``` json
{
  "digitalin": {
    "up": {
      "loglevel": 2,
      "pin": "D5",
      "invert": "true",
      "pullup": "true",
      "onlow": "value/led?up=10"
    },
    "down": {
      "loglevel": 2,
      "pin": "D6",
      "invert": "true",
      "pullup": "true",
      "onlow": "value/led?down=10"
    }
  },

  "value": {
    "led": {
      "loglevel": 2,
      "value": 20,
      "min": 0,
      "max": 255,
      "onValue": "pwmout/led?value=$v",
      "description": "value for the LED"
    }
  },

  "pwmout": {
    "led": {
      "pin": "D4",
      "range": 255,
      "value": 10,
      "invers": "true",
      "description": "Build-in LED"
    }
  }
}
```

## See also

* [digital input element](/elements/digitalin.md)
* [value element](/elements/value.md)
* [pwmOut element](/elements/pwmout.md)
* [Recipe to switch a LED on/off](/recipes/led.md)
* [Recipe to dim using rotary encoder](/recipes/ledrotary.md)
