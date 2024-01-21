---
title: Radio Element
icon: radio
tags: ["Element", "WIP"]
layout: "page.njk"
excerpt: >
  The Radio Element allows to control FM radio chips that are connected to the board via i2c bus.
---

<div style="background-color: #ffe87c">
This element is still an experimental implementation and available in the radio example.
</div>


## Radio library dependency

This element is **not** part of the collection of core elements
because it relies on the external radio library that offers a unified api for multiple radio chips.

See <https://www.arduinolibraries.info/libraries/radio>

The Radio library is available in the Arduino library manager and must be installed before using this Element.

<!-- 
## Radio Element activation

To make the Radio Element available for configuration it needs to be included into the sketch compilation by activating it using the macro

``` cpp
#define HOMEDING_INCLUDE_RADIO 
```
The RadioDing example uses this element to create a remote controllable radio that uses the 
RDA5807M radio chip from RDA Microelectronics or SI473xx radio chips from Silicon.



Look into the [Radio example](/examples/radio.md) for details.
-->


## Properties

The properties correspond to the api given by the radio library. However not all chips will support all features.

> **frequency** - This is the FM frequency in MHz multiplied by 100. Use 8930 to tune for 89.30 MHz.
>
> **volume** - The output volume of the chip can be controlled in the range from 0 to 15.
>
> **mono** - The property set to 1 forces the radio chip in receiving in mono mode. This results in less noise under bad conditions.
>
> **mute** - The property set to 1 will mute the output signal. The element will automatically mute the chip when the volume is set to 0.
>
> **softmute** - The property set to 1 enables the softmute procedure that lowers the volume when no there is no current signal available.
>
> **bassboost** - The property set to 1 enables the bassboost functionality of the radio chip.
>
> **onRSSI** - this action is sent when the receiving signal strength has changed. The element polls the status of the chip.
>
> **onSNR** - this action is sent when the receiving signal noise ratio has changed. The element polls the status of the chip.
>
> **onVolume** - When the volume has changed this action is sent.
>
> **onFrequency** - When the frequency has changed this action is sent.


The element also supports RDS signals for the chips that decode these signals.

> **onStationName** - When a new station name was received this action is sent with the value of the station name.
Some stations use this to give additional info so there might be also other text around.
>
> **onRDSText** - When a new full text was received this action is sent with the value of the text message.


## See also

* [Radio example](/examples/radio.md)
* [radio library](http://www.mathertel.de/Arduino/RadioLibrary.aspx)
* [RDA5807 FM Tuner](/elements/audio/rda5807.md)
* [SI4703 FM Tuner](/elements/audio/si4703.md)
* <https://www.hackster.io/CesarSound/am-fm-sw-radio-receiver-si4730-si4735-79438f>
* SI4730 board <https://www.aliexpress.com/i/32288294783.html>

