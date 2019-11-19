## Board sonoff

Sonoff ITEAD is a brand for several off-the-shelf Smart Home WLAN devices like switches that use the ESP8266 chip.

They were one of the first companies selling these type of devices to the market.
Today many brands use these chips and there is a huge community that supports re-flashing these devices with a new firmware.

The tasmota implementation is one with constant support to even new devices from other brands.



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
}```

##  Relais




Sonoff ITEAD Smart Home WLAN Wireless Switch Modul für Apple Android APP Control

tasmota

https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html

## more

* <https://github.com/arendst/Sonoff-Tasmota/wiki/Tuya-OTA>
* <https://creationx.de/ratgeber/sonoff/tasmota>
* <http://www.andremiller.net/content/programming-an-itead-sonoff-wireless-smart-switch-esp8266>
* <https://blog.moneybag.de/fhem-kurztest-gosund-blitzwolf-wlan-steckdosen/>