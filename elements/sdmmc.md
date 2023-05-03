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
