---
title: HomeDing - PWMLED Example ???
layout: "page.njk"
tags: ["Example"]
---

> #Draft

Example dimming a LED using PWM Analog output and buttons.

``` json
{
  "button": {
    "up": {
      "pin": 12,
      "invert": "true",
      "onoff": "value/led?up=16"
    },
    "down": {
      "pin": 13,
      "invert": "true",
      "onoff": "value/led?down=16"
    }
  },


  "value": {
    "led": {
      "value": 20,
      "min": 0,
      "max": 255,
      "onValue": "pwmout/led?value=$v",
      "description": "Build-in LED"
    }
  },

  "pwmout": {
    "led": {
      "pin": 16,
      "range": 255,
      "value": 10,
      "invert": "true",
      "description": "Build-in LED"
    }
  }
}
```