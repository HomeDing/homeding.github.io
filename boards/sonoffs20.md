---
title: Sonoff S20
tags: ["Board"]
layout: "page.njk"
excerpt: >
  The Sonoff S20 is a smart socket off-the-shelf product using a ESP8266 with 1MByte Flash.
---

![Sonoff S20](/boards/sonoffs20.jpg)

Sonoff ITEAD is a brand for several off-the-shelf Smart Home WLAN devices like switches that use the ESP8266 chip.

The [Minimal Example](/examples/minimal.md) can be flashed onto his device to support a remote switch
with options for time based switching.


## GPIO usage

| GPIO#      | Component | Usage                                       |
| ---------- | --------- | ------------------------------------------- |
| GPIO13(D7) | LED       | LED (green), (0 to switch on).              |
| GPIO0(D3)  | button    | button, can also be used for start flashing |
| GPIO12(D6) | relay+LED | relay and LED(blue), (1 to switch on).      |


{% include "../dev/power-warning.md" %}


## Example env.json configuration

This configuration registers the device with the name "sonoff01" on the networks and enables using the button during boot for starting into the configuration mode.

``` json
{
  "device": {
    "0": {
      "name": "sonoffs20",
      "description": "Sonoff S20 plug",
      "homepage": "/ding.htm",
      "led": "D7",
      "button": "D3"
    }
  },
  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' OTA Updates"
    }
  }
}
```

## Example config.json configuration

This configuration allows switching the relay using the button and showing the relay state using the LED.

``` json
{
  "digitalin": {
    "button": {
      "pin": "D3",
      "invert": 1,
      "pullup": 1,
      "onLow": "switch/relay?toggle=1"
    }
  },
  "switch": {
    "relay": {
      "value": 0,
      "onValue": "digitalout/relay?value=$v"
    }
  },
  "digitalout": {
    "relay": {
      "pin": "D6",
      "invert": "false"
    }
  }
}
```

## See also

* [DigitalIn Element](/elements/digitalin.md)
* [Switch Element](/elements/switch.md)
* [DigitalOut Element](/elements/digitalout.md)
* <http://www.andremiller.net/content/programming-an-itead-sonoff-wireless-smart-switch-esp8266>

