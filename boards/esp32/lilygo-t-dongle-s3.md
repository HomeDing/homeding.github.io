---
title: LilyGO T-Dongle S3
description: USB stick board with display and ESP32-S3.
layout: "page.njk"
tags: ["Board", "WIP"]
excerpt: >
  The LilyGO T-Dongle-S3 board has a USB stick layout including a TFT color display,
  a APA102 LED, a input button and SD card slot.
---


## Features

The following features are available on this board.


### Input Button

The input button on the back of the stick pulls the esp32-pin 0 down when pressed. 

| function | ESP32 pin |
| -------- | --------- |
| Button   | GPIO0     |


### Color LED

APA102 LED

| function | ESP32 pin |
| -------- | --------- |
| Data     | 40     |
| Clock    | 39     |

APA102 LEDs are currently not supported by the HomeDing Library.

<!-- TODO: APA102Element similar to NEOElement -->


### ST7735 based display

The display has a 80 * 160 resolution and is using the following pins:

| function | ESP32 pin |
| -------- | --------- |
| CS       | GPIO4     |
| MOSI     | GPIO3     |
| CLK      | GPIO5     |
| DC       | GPIO2     |
| Reset    | GPIO1     |
| LED      | GPIO38    |


### SD Card



#define SD_MMC_D0_PIN  14
#define SD_MMC_D1_PIN  17
#define SD_MMC_D2_PIN  21
#define SD_MMC_D3_PIN  18
#define SD_MMC_CLK_PIN 12
#define SD_MMC_CMD_PIN 16


### Diag output

```txt
I2C pins sda=-1 scl=-1
Reset Reason: 12
 Free Heap: 310160
 Mac-address: F4:12:FA:41:38:18
Chip-Info:
  model: ESP32-S3(9)
  features: 00000012
    2.4GHz WiFi
    Bluetooth LE
  cores: 2
  revision: 0
ChipModel: ESP32-S3
Flash:
  Size: 16777216
  Mode: QIO(0)
  Speed: 80000000
```

## Board configuration

The following `env.json` configuration can be used for this board and contains settings for

* The device in general
* The ST7735 based display
* A value and pwm output to control the display brightness
* The digital input signal definition for the button on the back.


``` json
{
  "device": {
    "0": {
      "name": "dongle-s3",
      "description": "ESP32-S3 based USB stick.",
      "title": "T-Dongle-S3",
      "button": "0",
      "led": "38"
    }
  },
  "DisplayST7735": {
    "0": {
      "description": "Display",
      "loglevel": 2,
      "width": "80",
      "height": "160",
      "rotation": 270,
      "spiClk": 5,
      "spiMosi": 3,
      "spiDC": 2,
      "spiCS": 4,
      "resetpin": 1
    }
  },
  "digitalin": {
    "pin": {
      "pin": "0",
      "inverse": "1",
      "pullup": 1
    }
  },
  "value": {
    "displayled": {
      "title": "Display Brightness",
      "min": "0",
      "max": "255",
      "value": "128",
      "onvalue": "pwmout/displayled?value=$v"
    }
  },
  "pwmout": {
    "displayled": {
      "title": "Display Backlight",
      "description": "Backlight LED dimming",
      "pin": "38",
      "range": "255",
      "inverse": "1"
    }
  }
}
```


## Board test config

For first testing purpose the following configuration in `config.json` can be used:

* Dispay the current time on the display


``` json
{
  "ntptime": {
    "0": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },
  "time": {
    "clock": {
      "onminute": "displaytext/time?value=$v"
    }
  },
  "displaytext": {
    "time": {
      "x": 8,
      "y": 8,
      "fontsize": 32,
      "description": "Display the time"
    }
  }
}
```

## See also

* <https://www.lilygo.cc/products/t-dongle-s3>
* <https://github.com/Xinyuan-LilyGO/T-Dongle-S3>

