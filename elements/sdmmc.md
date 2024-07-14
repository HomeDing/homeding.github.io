---
title: SD MMC card Element
icon: sdcard
tags: ["Element", "FS"]
layout: "page.njk"
description: Using SD MMC cards for storing local files on ESP32.
excerpt: >
  The SDMMCElement implements access to the file system on a SDMMC card on ESP32
  processors and boards.
---

There are 2 SD card supporting elements in the Homeding library, supporting the 2 different available wirings:

* SD cards using standard SPI data transfer is supported by the [SD Element]
* SD card using the MMC support available on with ESP32 processors is supported by the [SD MMC Element]

Only one of these Elements can be activated at a time.

Both implementations enable using the SD card memory for storing files locally
e.g. for recording sensor data or serving additional files on the web frontend.

The SDMMC Element is available on ESP32 boards only and fast data transfer is supported by the hardware.
It provides a fast 4-bit bus implementation for SD cards.

See [SD Element] that is available on ESP32 and ESP8266 boards offers
a slower alternative using SPI access to SD Cards.

``` txt
  From Arduino SDMMC examples:

 * pin 1 - D2                |  Micro SD card     |
 * pin 2 - D3                |                   /
 * pin 3 - CMD               |                  |__
 * pin 4 - VDD (3.3V)        |                    |
 * pin 5 - CLK               | 8 7 6 5 4 3 2 1   /
 * pin 6 - VSS (GND)         | ▄ ▄ ▄ ▄ ▄ ▄ ▄ ▄  /
 * pin 7 - D0                | ▀ ▀ █ ▀ █ ▀ ▀ ▀ |
 * pin 8 - D1                |_________________|
 *                             ║ ║ ║ ║ ║ ║ ║ ║
 *                     ╔═══════╝ ║ ║ ║ ║ ║ ║ ╚═════════╗
 *                     ║         ║ ║ ║ ║ ║ ╚══════╗    ║
 *                     ║   ╔═════╝ ║ ║ ║ ╚═════╗  ║    ║
 * Connections for     ║   ║   ╔═══╩═║═║═══╗   ║  ║    ║
 * full-sized          ║   ║   ║   ╔═╝ ║   ║   ║  ║    ║
 * SD card             ║   ║   ║   ║   ║   ║   ║  ║    ║
 * ESP32-S3 DevKit  | 21  47  GND  39 3V3 GND  40 41  42  |
 * ESP32-S3-USB-OTG | 38  37  GND  36 3V3 GND  35 34  33  |
 * ESP32            |  4   2  GND  14 3V3 GND  15 13  12  |
 * Pin name         | D1  D0  VSS CLK VDD VSS CMD D3  D2  |
 * SD pin number    |  8   7   6   5   4   3   2   1   9 /
 *                  |                                  █/
 *                  |__▍___▊___█___█___█___█___█___█___/
 * WARNING: ALL data pins must be pulled up to 3.3V with an external 10k Ohm resistor!
 * Note to ESP32 pin 2 (D0): Add a 1K Ohm pull-up resistor to 3.3V after flashing
 *
 * SD Card | ESP32
 *    D2       12
 *    D3       13
 *    CMD      15
 *    VSS      GND
 *    VDD      3.3V
 *    CLK      14
 *    VSS      GND
 *    D0       2  (add 1K pull up after flashing)
 *    D1       4
 *
 *    For more info see file README.md in this library or on URL:
 *    https://github.com/espressif/arduino-esp32/tree/master/libraries/SD_MMC
```

## Element Configuration

The following properties are available for configuration of the element:

> **mmcd0** --  data line 0.
>
> **mmcd1** --  data line 1
>
> **mmcd2** -- data line 2
>
> **mmcd3** -- data line 3
>
> **mmcclk** -- Clock
>
> **mmccmd** -- Command
>
> The SD_MMC pins can be freely defined on the ESP32-S3 processors.
> On other ESP32 processors the pins are defined by the chip hardware and no pin configuration is required.

{% include "./elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{ 
  "sdmmc": {
    "0": {
      "mmcD0": "14",
      "mmcD1": "17",
      "mmcD2": "21",
      "mmcD3": "18",
      "mmcCLK": "12",
      "mmcCMD": "16"
    }
  }
}
```


## File upload

Files can be uploaded to the sd card using the integrated IDE.
For updates of multiple files an larger volume
the sd card can be removed and updated directly by mounting on a PC.


## HomeDing Filesystem Utility

The mandatory flash file system LittleFS using flash memory
is used as the root file system to store at least the configuration files.

The files on a SD card are added (mounted) to this file system inside the /sd folder.

When implementing Elements that need files on the file system the HomeDingFS class provides
static functions for accessing files and directories by using the right filesystem for flash or sd.

[SD Element]:/elements/sd.md
[SD MMC Element]:/elements/sdmmc.md
