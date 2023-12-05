---
title: Neopixel board for ESP-01
icon: neo
tags: ["Element", "Light"]
layout: "page.njk"
excerpt: >
  The neo board is a very specific adapter to drive a Neopixel based
  stripe, wheel or array using a ESP-01 board.
  The ESP-01 boards are available with ESP8266 and ESP32-C3 chips. 
---

![neopixel board](/boards/esp8266/neo.jpg)

## Overview

There is a 5 V power required for the neopixels an on the adapter there is a 3.3 v regulator for the power supply of the ESP8266.

You can find these adapters in various shops.

The data line for the neopixels is attached to the GPIO02 and the button can be used to reset the board.

Because this is only an adapter for an ESP01 board all the information on the [ESP01 board](/boards/esp8266/esp01.md) apply.


## System configuration

An env.json file for the system configuration:

``` json
{
  "device": {
    "main": {
      "name": "neoding",
      "description": "ESP-01 board with Neopixels"
    }
  },
  "ota": {
    "main": {
      "port": 8266,
      "passwd": "123",
      "description": "allow Over the Air Updates"
    }
  }
}
```

## Configuration

A config.json file for enabling the neopixels:

``` json
{
  "switch": {
    "relay": {
      "title": "enable",
      "description": "On/Off",
      "value": 0,
      "onValue": "neo/bar?enable=$v"
    }
  },
  "neo": {
    "bar": {
      "pin": "2",
      "count": 39,
      "config": "grb"
    }
  },
  "color": {
    "l": {
      "title": "Color Control",
      "mode": "fix",
      "duration": "12s",
      "value": "0",
      "brightness": "20",
      "connect": [
        "neo/bar"
      ]
    }
  }
}
```
