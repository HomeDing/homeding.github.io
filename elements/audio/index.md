---
title: Audio Elements Overview
tags: ["Element", "Audio"]
layout: "page.njk"
excerpt:
  These Audio related components and elements are supported
  by the HomeDing library.
---

Building IoT Devices that have audio capabilities is possible with the HomeDing library.

## FM Radio Tuner chips

* [rda5807 FM Tuner chip](/elements/audio/rda5807.md)

* [examples/radio](/examples/radio.md)

RDA5807M --  A radio chip from RDA Microelectronics
SI473xx -- radio chips from Silicon.


## Amplifiers

to come...

<!-- 
The TPA2016Element can control a TPA2016 chip that contains a stereo amplifier for analog audio signals with a I2C bus based volume control.

 [tpa2016 Element](/elements/audio/_tpa2016.md)

TPA2016
* [/elements/_tpa2016.md](/elements/audio/_tpa2016.md) - Control a TPA2016 chip based amplifier

<https://www.sparkfun.com/products/20690>

TPA2016D2

TPA2016D2 stereo, filter-free class-D audio power amplifier. 

Dynamic Range Compression (DRC)
Automatic Gain Control (AGC)
configured through software via I2C

class-D 2.8W stereo Amplifier

TPA2005D1
-->

<!-- 
## PT2322  5.1 channel analog audio processor

https://www.hackster.io/dilshan-jayakody/5-1-channel-analog-audio-processor-a78559?mc_cid=4d1cf49036&mc_eid=0e4a02bdf3
-->


## Elements

:::element audio/audio no
{% excerptOf collections.Element, "audio" %}
:::


## Web UI Elements

These elements starting with **web** in their name are only known to the Web UI implementation but are not part of the firmware- The intention is to enrich and customize the Web UI dashboard with elements like presets and macros.

:::element webbutton button
  This element adds a button the Web UI of the board. The button can be used to trigger actions by clicking.
:::


## See also

* [Element](/dev/elementclass.md)
