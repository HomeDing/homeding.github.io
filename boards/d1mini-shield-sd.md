---
title: D1 Mini SD Card shield
tags: ["Board", "WIP"]
layout: "page.njk"
excerpt: >
  The SD Card shield for the D1 Mini sized boards.
---

The SD Card shield adds a SD card slot to the [SPI bus] that can extend the file system of a
HomeDing device using the [SD Element].

This shield is made for the [D1 mini boards] that are available in many variations and different processors.

![d1mini-sd](/boards/d1mini-shield-sd.jpg)

## Pins in use

The SD card is using the SPI bus for data transfer. The following pins are used:

| D1 mini | ESP8266 | Description |
| ------- | ------- | ----------- |
| D5      | GPIO14  | CLK         |
| D6      | GPIO12  | MISO        |
| D7      | GPIO13  | MOSI        |
| D4      | GPIO00  | CS          |

The CS assignment can be changed on the back of the shield to avoid conflicts with other shields
by cutting the default (D4) wiring and soldering a bridge for another pin.


## Configuration

This example shows how to configure the SD element to use this shield on a ESP8266:

``` json
{ 
  "sd": {
    "0": {
      "cspin": "D4"
    }
  }
}
```


## See also

* [D1 mini boards]
* [SD Element]
* [SPI bus]
* <https://www.wemos.cc/en/latest/d1_mini_shield/micro_sd.html>


[D1 mini boards]:/boards/d1mini.md
[SPI bus]:/dev/spi.md
[SD Element]:/elements/sd.md
