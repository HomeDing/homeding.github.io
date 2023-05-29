---
title: Retail Plug and Socket Devices
tags: ["Board"]
layout: "page.njk"
excerpt: >
  There are many devices on the market that use the ESP8266 chip to control main power by internal relays.
  The [Minimal Sketch](/examples/minimal.md) supports these use cases.
---

**Tuya** is a manufacturer and provider of IoT devices using the ESP8266 chip. This company is the manufacturer of many IoT devices.

The TASMOTA firmware implementation is one with constant support to even new devices from other brands and when TASMOTA supports the device it likely has a ESP8266 inside.


## Gosund SP111 also from Blitzwolf

![sp111 socket](/boards/sockets.jpg "w200")
![sp111 socket](/boards/socket-sp111-01.jpg "w200")
![sp111 socket](/boards/socket-sp111-02.jpg "w200")
![sp111 socket](/boards/socket-sp111-03.jpg "w200")

The documentation on the devices to flash the TASMOTA firmware also has some hints on the GPIO functionality and the supported features and a picture for identification.

There is a input button, 2 LEDs in red and blue, a relay and a power measurement chip included in this device. The input button, LEDs and the relay can directly be used by digital in and out to create a remote switch.

The power measurement chip is from type [BL0937](/elements/bl0937.md) that can be found in many plug devices.

* <http://wiki.gorjup.de/doku.php?id=public:fhem_blitzwolf_flasher>
* <https://www.malachisoord.com/2019/11/24/flashing-custom-firmware-on-a-gosund-sp111/>


| GPIO#      | Component | Usage                     |
| ---------- | --------- | ------------------------- |
| GPIO0(D3)  | led-red   | defined by configuration  |
| GPIO2(D4)  | led-blue  | defined by configuration  |
| GPIO4(D2)  | HLWBL CF1 | Current and Voltage       |
| GPIO5(D1)  | BL0937 CF | Power                     |
| GPIO12(D6) | HLWBL SEL | chip select               |
| GPIO13(D7) | Button1   | Button press (active LOW) |
| GPIO15(D8) | Relay1    | Relay (active LOW)        |


``` json
{
  "device": {
    "0": {
      "loglevel": 0,
      "safemode": "false",
      "name": "plug01",
      "description": "Gosund SP111 with minimal sketch",
      "homepage": "/ding.htm",
      "led": "2",
      "button": "13"
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


``` json
{
  "digitalin": {
    "button": {
      "pin": "13",
      "invert": 1,
      "pullup": 1,
      "onLow": "switch/relay?toggle=1"
    }
  },
  "schedule": {
    "0": {
      "title": "Timer",
      "mode": "off",
      "onTime": "20:00:00",
      "offTime": "22:22:22",
      "onOn": "switch/relay?value=1",
      "onOff": "switch/relay?value=0"
    }
  },
  "switch": {
    "relay": {
      "title": "Aufgang Licht",
      "value": 0,
      "onValue": "digitalout/relay?value=$v,digitalout/led?value=$v"
    }
  },
  "digitalout": {
    "relay": {
      "pin": "15",
      "invert": "false"
    },
    "led": {
      "pin": "0",
      "invert": "true"
    }
  },
  "bl0937": {
    "0": {
      "selpin": "12",
      "cfpin": "5",
      "cf1pin": "4",
      "cycletime": "2000",
      "mode": "voltage",
      "powerfactor": "1346829",
      "currentfactor": "11232182",
      "voltagefactor": "130924"
    }
  }
}```


## Nous A1 / Nous A1T

Using a Nous socket is almost the same setup but some pins are used differently.

Also a HLW8012 is used inside with varying factors for power, current and voltage.

``` json
{
  "device": {
    "0": {
      "name": "noussocket",
      "title": "Nous Socket",
      "description": "Switchable plug with power meter",
      "led": "13",
      "button": "0"
    }
  }, ...
}
```

``` json
{
  "digitalin": {
    "button": {
      "pin": "0",
      "invert": 1,
      "pullup": 1,
      "onLow": "switch/relay?toggle=1"
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
      "pin": "14",
      "invert": "false"
    },
    "led": {
      "pin": "13",
      "invert": "true"
    }
  },
  "bl0937": {
    "0": {
      "loglevel": 2,
      "selpin": "12",
      "cfpin": "4",
      "cf1pin": "5",
      "cycletime": "2000",
      "mode": "voltage",
      "powerfactor": "1713292",
      "currentfactor": "12972030",
      "voltagefactor": "142060"
    }
  }
}
```

## See also

* Power measurement chip [BL0937](/elements/bl0937.md)

<!-- 
##  Relay


Sonoff ITEAD Smart Home WLAN Wireless Switch Module für Apple Android APP Control

https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html

## more

* <https://github.com/arendst/Sonoff-Tasmota/wiki/Tuya-OTA>
* <https://creationx.de/ratgeber/sonoff/tasmota>
* <http://www.andremiller.net/content/programming-an-itead-sonoff-wireless-smart-switch-esp8266>
* <https://blog.moneybag.de/fhem-kurztest-gosund-blitzwolf-wlan-steckdosen/>

-->
