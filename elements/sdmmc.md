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

* SD card using the MMC support by ESP32 (SDMMCElement)

* SD cards using standard SPI data transfer. (SDElement)

Only one of these Elements can be activated at a time.

Both implementations enable using the SD card memory for storing files locally e.g.,
for recording sensor data or serving additional files on the web frontend.

The SDMMC is available on ESP32 boards and is supported by the hardware.
It provides a fast 4-bit bus implementation for SD cards.

See SDElement that is available on ESP32 and ESP8266 boards offers 
a slower alternative using SPI access to SD Cards.


# File upload

Files can be uploaded to the sd card using the integrated IDE.
For updates of multiple files an larger volume
the sd card can be removed and updated directly from a PC.


## HomeDing Filesystem Utility

The mandatory flash file system LittleFS using flash memory
is used as the root file system to store at least the configuration files.

The files on a SD card are added (mounted) to this file system inside the /sd folder.

When implementing Elements that need files on the file system the HomeDingFS class provides
static functions for accessing files and directories by using the right filesystem for flash or sd.