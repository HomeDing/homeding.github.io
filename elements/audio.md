---
title: Audio Element
icon: audio
tags: ["Element"]
layout: "page.njk"
description: Audio processing on ESP32
excerpt: >
  The Audio Element enables configurable audio processing on ESP32 chips.
---

The AudioElement uses the ESP32 specific audio library from
<https://github.com/schreibfaul1/ESP32-audioI2S> that must be installed separately.

The AudioElement just adds a thin wrapper to configure and control the library.

The Audio processing is moved to another ESP32 FreeRTOS Task and runs in the background.
There can only be one AudioElement created per device.



## See also

* [Elements](/elements/index.md)
* [Radio Element](/elements/radio.md)
