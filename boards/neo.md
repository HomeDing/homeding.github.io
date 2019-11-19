## Neopixel board

The neo board is a very specific adapter between a neopixel stripe, wheel or array and a ESP8266 ESP-01 board.

![neopixel board](/boards/neo.jpg)


## Overview

There is a 5 V power required for the neopixels an on the adapter there is a 3.3 v regulator for the power supply of the ESP8266.

You can find these adapters in various shops.

The data line for the neopixels is attached to the GPIO02 and the button can be used to reset the board.

Because this is only an adapter for an ESP01 board all the information on the [ESP01 board](/boards/esp01.md) apply.


## System configuration

An env.json file for the system configuration:

```JSON
{
  "device": {
    "0": {
      "loglevel": 0,
      "name": "neoding",
      "reboottime": "24h",
      "description": "Neopixel adapter with ESP-01."
    }
  },
  "ota": {
    "0": {
      "port": 8266,
      "description": "Listen for 'over the air' OTA Updates"
    }
  },
  "ssdp": {
    "0": {
      "manufacturer": "Matthias Hertel",
      "ManufacturerURL": "https://www.mathertel.de",
      "ModelURL": "http://www.mathertel.de/HomeDing"
    }
  }
}
```

## Configuration

A config.json file for enabling the neopixels:

```JSON
{
  "neo": {
    "0": {
      "pin": "2","count":16,"value":"red"
    }
  }
}
```
