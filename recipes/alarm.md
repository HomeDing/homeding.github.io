---
title: Alarm with timer for duration Recipe
tags: ["Recipe"]
layout: "page.njk"
---

This recipe uses a alarm and timer element to create a digital signal with a specific duration
at a output pin.

This shows how a timer can be used to "forward" the action from a alarm element to the digital output and give the signal a defined duration.

``` json
{
  "alarm": {
    "morning": {
      "time": "18:51",
      "ontime": "timer/alarm?start=1",
      "description": "Alarm for testing"
    }
  },

  "timer": {
    "alarm": {
      "pulsetime": "20s",
      "loglevel": 1,
      "onvalue": "digitalout/led?value=$v"
    }
  },

  "digitalout": {
    "led": {
      "pin": "D0",
      "invert": "true",
      "value": "0",
      "description": "Builtin LED is on Port D0 = GPIO16"
    }
  }
}
```
