---
title: Plant Watering
tags: ["Recipe"]
layout: "page.njk"
---

This recipe combines a momentary button and a timer to control a relay that is switched on for 5 min. 3 times a day. This can be used to control a valve for watering plants.

The central element is a switch that controls a relay on a digital output. There are 3 sources that can control the switch

1. In the web UI the switch is shown and can be switched to start/stop the relay.
2. The momentary button on the digital input can also be used to toggle the switch.
3. The timer switches the switch on for 5 min every 8 hours.

``` json
{
  "digitalin": {
    "button": {
      "pin": "D7",
      "invert": 1,
      "pullup": 1,
      "onLow": "switch/relay?toggle=1"
    }
  },
  "timer": {
    "water": {
      "description": "Water timing",
      "type": "LOOP",
      "waittime": "12s",
      "pulsetime": "5m",
      "cycletime": "8h",
      "onvalue": "switch/relay?value=$v"
    }
  },
  "switch": {
    "relay": {
      "value": 0,
      "onValue": "digitalout/relay?value=$v,digitalout/led?value=$v"
    }
  },
  "digitalout": {
    "relay": {
      "pin": "D8",
      "invert": "false"
    },
    "led": {
      "pin": "D3",
      "invert": "true"
    }
  }
}
```
