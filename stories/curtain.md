---
title: Smart control for shades, blinds and curtains
layout: "page.njk"
---

The aim was to automate the existing shades in my household to bring them in on several conditions like

* late in the night (when forgot to to so)
* in case of rain
* in case of too much wind

but to keep the wall switch enabled for easy controlling in place.

Because the space in the switch box is limited I choose to use one of the ESP8266 based devices with 2 relays to control the shades.
The one I choose also provides 2 inputs that can be given AC Power, very useful to keep a local switch functional.

Here you see the picture of a **LoraTap SC500W** that comes with some helpful descriptions on how to wire the motor and switch.
The official product web site is here: <https://www.loratap.com/sc500w-p0108.html>

![LoraTap SC500W](/stories/curtain.jpg "w400")

> #### Important node:
> On the first sight the implementation seems to be more complex than required.
> This is is because of the fact that the two relays control a single motor.
> It must be ensured that it never happens that both directions are ON at the same time.


:::warning
* This warning is serious.
* Never handle projects that are connected to the mains voltage. 
* Stay away from devices with contact to mains voltage.
* Uploading firmware to devices that have contact to mains voltage is dangerous. 
* DO NOT connect the any device to the mains during flashing or while using the serial interface.
* You may kill your computer and yourself.
* When you are making these kind of projects you really need to know what you are doing.
* I have warned you, do not blame on me.
:::

## Uploading firmware

### tuya-convert - may not work

You can try to use a firmware upload without opening the switch using the tuya-convert utility that you can find at <https://tasmota.github.io/docs/Tuya-Convert/>.
This may work when the firmware is of an older type.
I got new ones where the tuya-convert approach did not work any more.

After opening the case you can see that a TYWE2S module made by Tuya is used inside that is also documented on
<https://developer.tuya.com/en/docs/iot/tywe2s?id=K9hhi0xr3f3ub>,
<https://developer.tuya.com/en/docs/iot/wifie2smodule?id=K9605u79tgxug>
and <https://tasmota.github.io/docs/Pinouts/#tywe2s>.

On you can find all relevant signals on the connectors or at the back of the module so you can program it like a 'Generic ESP8285 Module' module.
It uses a ESP8285 chip that has a ESP8266 processor + 1MByte Flash integrated.

Here is a picture on the board with attached wires for uploading:

![SC500W with wires-01](/stories/curtain-wired01.jpg "w200")
![SC500W with wires-02](/stories/curtain-wired02.jpg "w200")




## GPIO Usage

The description for Tasmota at <https://templates.blakadder.com/loratap_SC500W.html> is helpful to check what GPIOs are in use for what function

| GPIO       | Function                                                               |
| ---------- | ---------------------------------------------------------------------- |
| GPIO3 / RX | red LED, same as Serial0-RX. Don't use while Serial adapter is in use. |
| GPIO4      | Switch1 (active LOW)                                                   |
| GPIO5      | Switch2 (active LOW)                                                   |
| GPIO12     | Relay1 (L1)                                                            |
| GPIO13     | Button1 (active LOW)                                                   |
| GPIO14     | Relay2 (L2)                                                            |
| AD         |                                                                        |
| GPIO1 / TX |                                                                        |


https://www.youtube.com/watch?v=qahdTG4TE-A

Blitzwolf BW-SS6 ???


https://templates.blakadder.com/loratap_SC500W.html


## Configuration

``` json
{
  "digitalin": {
    "GPIO4": {
      "title": "tap down",
      "pin": "4",
      "onlow": "switch/down?toggle=1"
    },
    "GPIO5": {
      "title": "tap up",
      "pin": "5",
      "onlow": "switch/up?toggle=1"
    },
    "GPIO13": {
      "title": "IN-GPIO-13",
      "pin": "13"
    }
  },
  "switch": {
    "down": {
      "title": "move down",
      "onhigh": "value/m?value=1",
      "onlow": "value/m?value=0"
    },
    "up": {
      "title": "move up",
      "onhigh": "value/m?value=2",
      "onlow": "value/m?value=0"
    }
  },
  "value": {
    "m": {
      "title": "motor",
      "value": 0,
      "min": 0,
      "max": 2,
      "onvalue": "map/m?value=$v"
    }
  },
  "timer": {
    "rst": {
      "pulsetime": "8s",
      "onoff": "value/m?value=0",
      "title": "timer/rst"
    }
  },
  "map": {
    "m": {
      "title": "map-output",
      "description": "define output by value",
      "rules": [
        {
          "max": "0",
          "onValue": "digitalout/up?value=0,digitalout/down?value=0,switch/down?value=0,switch/up?value=0,timer/rst?stop"
        },
        {
          "max": "1",
          "onValue": "digitalout/down?value=1,digitalout/up?value=0,switch/down?value=1,switch/up?value=0,timer/rst?start"
        },
        {
          "max": "2",
          "onValue": "digitalout/down?value=0,digitalout/up?value=1,switch/down?value=0,switch/up?value=1,timer/rst?start"
        }
      ]
    }
  },
  "digitalout": {
    "down": {
      "title": "GPIO14",
      "pin": "14"
    },
    "up": {
      "title": "GPIO12",
      "pin": "12"
    }
  }
}
```

1