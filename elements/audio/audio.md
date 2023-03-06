---
title: Audio Element
icon: audio
tags: ["Element"]
layout: "page.njk"
description: Audio processing on ESP32
excerpt: >
  The Audio Element enables audio streaming and audio processing
  in a background task.
---

Based on this Element you can implement internet audio streaming devices.

It requires a ESP32 or ESP32-S3 processor that supports multiple tasks
and PSRAM for buffering audio data.

The AudioElement uses the ESP32 specific audio library from
<https://github.com/schreibfaul1/ESP32-audioI2S> that must be installed separately.

The AudioElement just adds a thin wrapper to configure and control the library. The Audio processing itself is started on another ESP32 FreeRTOS task and runs in the background.

There can only be one AudioElement created per device.

## Element Configuration

The properties correspond to the api given by the audio library.
However not all features are yet support by configuration.

> **url** -- set new streaming url
>
> **volume** -- set volume
>
> **balance** -- set right-left balance
>
> **low** -- adjust low-tone level in the range -20 ... +6. Default level is 0.
>
> **mid** -- adjust mid-tone level in the range -20 ... +6. Default level is 0.
>
> **high** -- adjust high-tone level in the range -20 ... +6. Default level is 0.
>
> **mono** -- force mono mode as output. Default is 0 (stereo).
>
> **ontitle** -- these actions are send when a title is included in the streaming.
>
> **onstation** -- these actions are send when a station name is included in the streaming.
>
> **bclk**\* -- set the pin used for the i2s clock signal
>
> **lrc**\* -- set the pin used for the i2s LR signal
>
> **dout**\* -- set the pin used for the i2s DOUT signal

\* This parameter is mandatory and must be set.
The element also supports RDS signals for the chips that decode these signals.

{% include "../elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{
  "audio": {
    "0": {
      "title": "audio processing",
      "bclk": 26,
      "lrc": 25,
      "dout": 22,
      "url": "audio/0?url=https://dispatcher.rndfnk.com/hr/hr3/live/mp3/high",
      "ontitle": "displaytext/info?value=$v",
      "onstation": "displaytext/station?value=$v"
    }
  }
}
```


## See also

* [Elements](/elements/index.md)
* [Radio Element](/elements/audio/radio.md)
