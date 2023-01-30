---
title: Audio Chips Overview
tags: ["Element", "Audio"]
layout: "page.njk"
excerpt: These Audio Components are supported by the HomeDing library.
---

Building IoT Devices that have audio capabilities is possible with the HomeDing library.

## FM Radio Tuner chips

* [rda5807 FM Tuner chip](/elements/audio/rda5807.md)

## Amplifiers

<!-- 
The TPA2016Element can control a TPA2016 chip that contains a stereo amplifier for analog audio signals with a I2C bus based volume control.

 [tpa2016 Element](/elements/audio/_tpa2016.md)


<https://www.sparkfun.com/products/20690>

TPA2016D2

TPA2016D2 stereo, filter-free class-D audio power amplifier. 

Dynamic Range Compression (DRC)
Automatic Gain Control (AGC)
configured through software via I2C

class-D 2.8W stereo Amplifier

TPA2005D1
-->


## Elements

:::element audio no
{% excerptOf collections.Element, "audio" %}

The [Audio Element](/elements/audio/audio.md)  is part of the [WebRadio Example](/examples/webradio.md).
:::


## Web UI Elements

These elements starting with **web** in their name are only known to the Web UI implementation but are not part of the firmware- The intention is to enrich and customize the Web UI dashboard with elements like presets and macros.

:::element webbutton button
  This element adds a button the Web UI of the board. The button can be used to trigger actions by clicking.
:::


## See also

* [Element](/dev/elementclass.md)
