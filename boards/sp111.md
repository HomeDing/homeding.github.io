# Plug Devices

* minimal sketch


## Board sonoff

Sonoff ITEAD is a brand for several off-the-shelf Smart Home WLAN devices like switches that use the ESP8266 chip.

They were one of the first companies selling these type of devices to the market.
Today many brands use these chips and there is a huge community that supports re-flashing these devices with a new firmware.

The TASMOTA firmware implementation is one with constant support to even new devices from other brands and when TASMOTA supports the device it likely has a ESP8266 inside.


## S20

| Adapter | S20            |
| ------- | -------------- |
| GND     | Gnd            |
| RX      | TX             |
| TX      | RX             |
| 3.3V    | 3.3V  < Marker |

Mains upside

Installing ESPEasy Firmware on an Itead Sonoff S20 Smart Socket:  <https://www.youtube.com/watch?time_continue=429&v=GbaMF6zfQZU&feature=emb_logo>

Button is pulling GPIO0 down. (Flash)

The relay is attached to the GPIO12 and is activated on LOW level


```JSON
{
  "device": {
    "0": {
      "loglevel": 2,
      "name": "switch1",
      "reboottime": "24h",
      "led": 13,
      "button": "D3",
      "description": "Sonoff S01 Switch #1"
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

```JSON
{
  "digitalin": {
    "d3": {
      "pin": "D3",
      "inverse": 1,
      "pullup": 1,
      "onLow": "switch/relais?toggle=1"
    }
  },
  "switch": {
    "relais": {
      "value": 0,
      "onValue": "digitalout/d6?value=$v"
    }
  },
  "digitalout": {
    "d6": {
      "pin": "12",
      "inverse": "false"
    }
  }
}
```

##  Relais




Sonoff ITEAD Smart Home WLAN Wireless Switch Modul für Apple Android APP Control

tasmota

https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html

## more

* <https://github.com/arendst/Sonoff-Tasmota/wiki/Tuya-OTA>
* <https://creationx.de/ratgeber/sonoff/tasmota>
* <http://www.andremiller.net/content/programming-an-itead-sonoff-wireless-smart-switch-esp8266>
* <https://blog.moneybag.de/fhem-kurztest-gosund-blitzwolf-wlan-steckdosen/>



## Gosund SP111 also from Blitzwolff

The documentation on the devices to flash the TASMOTA firmware also has some hints on the GPIO functionality and the supported features and a picture for identification.

There is a input button, 2 LEDs in red and blue, a relay and a power measurement chip included in this device. The input button, LEDs and the relay can directly be used by digital in and out to create a remote switch. 

The power measurement chip is from type [BL0937](/elements/BL0937.md) that can be found in many plug devices.


 can be searched  
https://templates.blakadder.com/gosund_SP111_v2.html

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

FLAG     None


```json
{
  "device": {
    "0": {
      "loglevel": 0,
      "savemode": "false",
      "name": "plug01",
      "description": "Gosund SP111 with minimal sketch",
      "homepage": "/ding.htm",
      "led": "D4",
      "button": "D7"
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


```json
{
  "digitalin": {
    "button": {
      "pin": "D7",
      "inverse": 1,
      "pullup": 1,
      "onLow": "switch/relais?toggle=1"
    }
  },
  "switch": {
    "relais": {
      "value": 0,
      "onValue": "digitalout/relais?value=$v"
    }
  },
  "digitalout": {
    "relais": {
      "pin": "D8",
      "inverse": "true"
    }
  }
}
```


## See also

* Power measurement chip [BL0937](/elements/BL0937.md)