---
title: SD Card Element
icon: no
tags: ["Element"]
layout: "page.njk"
description: Support of the ... chip 
excerpt: >
  The SDElement 
  uses the SPI bus to connect a SD card
  and makes the files available for reading and writing in the `/sd` folder.
---

There are 2 elements supporting SD cards in the Homeding library, supporting the 2 different available wirings:

* SD cards using standard SPI data transfer is supported by the SD Element
* SD card using the MMC support available on with ESP32 processors is supported by the [SD MMC Element]

Only one of these Elements can be activated at a time.

Both implementations enable using the SD card memory for storing files locally
e.g. for recording sensor data or serving additional files on the web frontend.

The SD Element uses the system wide SPI bus for data transfer and is available on ESP8266 and ESP32 boards.

The pins that are used by the SPI bus in general can be configured in the Device Element.

Only the SPI Chip Select signal for the SD card has to be configured in the SD Element configuration.

Micro SD Card SPI Mode

| Pin | Description         |
| --- | ------------------- |
| 1   | Chip Select (CS)    |
| 2   |   |
| 3   | SPI-MISO (Data in)                 |
| 4   | VDD                 |
| 5   | SPI-CLK             |
| 6   | GND                 |
| 7   | SPI-MOSO (Data out) |
| 8   |                     |
| 9   |                     |

## Element Configuration

The following properties are available for configuration of the element:


> **csPin** -- this is the GPIO pin for the cs (chip select) signal of the sd card.
>

{% include "./elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{ 
  "sd": {
    "0": {
      "cspin": "D4"
    }
  }
}
```


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.


### Example State

``` json
{
  "sd/0": {
    "active":"true"
    ...
    "
  }
}
```


## See Also


* [SD MMC Element]
* <https://randomnerdtutorials.com/esp32-microsd-card-arduino/>
* <https://microcontrollerslab.com/microsd-card-esp32-arduino-ide/>
* <https://www.instructables.com/ESP32-Micro-SD-Card-Interface/>


[SD MMC Element]:/elements/sdmmc.md
