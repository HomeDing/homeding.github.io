---
title: WebRadio Example 
layout: "page.njk"
tags: ["Example"]
excerpt: >
  This example in the HomeDing library contains the source code to implement a web radio receiving audio streams over the internet
  and playing it on a i2s based hardware.  
  This example can be used on ESP32 systems.
---

This example was build using the board:

* [TTGO Gallery (T14) board](https://homeding.github.io/boards/esp32/ttgogallery.htm)

Configuration is supported by the env.json and config.json within this folder.

This example implements an audio element based on the ESP32 specific audio library from
<https://github.com/schreibfaul1/ESP32-audioI2S>. This library is not available through the Arduino Library Manager
so it must be installed by downloading or git-checkout directly from github.

The AudioElement just adds a thin wrapper to configure and control the library. The Audio processing is moved to another ESP32 FreeRTOS Task and runs in the background.

There can only be one AudioElement created per device.


## Further development

This is a starting example to further support audio configurations with the HomeDing library and is planned to be extended with

* Split audio element into multiple elements to support more flexible configurations.
* Bluetooth receiving and sending


## See also

* [Audio Element](https://homeding.github.io/elements/audio.htm)
* <https://homeding.github.io/boards/esp32/ttgogallery.htm>

Find radio streams on <https://rrradio.de/radiosender/> and <https://wiki.ubuntuusers.de/Internetradio/Stationen/>

* Other audio library: <https://github.com/pschatzmann/arduino-audio-tools>
