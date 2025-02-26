---
title: Ai-Thinker ESP32 Audio Kit
tags:
  - "Board"
  - "WIP"
description: ESP32 Board with Audio features
excerpt: >
  This is an ESP32 based board using the ESP-WROVER-B module supporting audio processing.
---

![ESP32 Audio Kit Board](/boards/esp32/esp32audiokit.jpg)

ESP32-A1S Module
<https://docs.ai-thinker.com/en/esp32-audio-kit>

AC101
JTAG
SD-CARD
Battery, 3.7V lithium battery charging
Line-In
Earphones
Stereo AMP
2 MIC
6Key

BOOT (IO0), cannot be used as used for codec clock

EN = RST


## Sketch uploading

To upload a sketch the Board can be configured in Arduino using:

<!--
* **ESP32 Wroover Board (esp32)**
* Partition Scheme: 4MB with spiffs (1.2App, 1.5 SPIFFS)
* QIO
* Flash Mode 80 MHz
* (240MHz CPU Clock is enabled by default when using this board)
* (PSRAM is enabled by default when using this board)
-->


## Pin usage overview

| ESP32 | Function |  TFT  | AC101 | SDMMC |  MIC  |
| ----- | -------- | :---: | :---: | :---: | :---: |
| IO32  | I2C-SCL  |       |   X   |       |       |
| IO33  | I2C-SDA  |       |   X   |       |       |
| IO27  | IIS_BCK      |       |   x   |       |       |

i2s_config->ws_io_num = GPIO_NUM_26;
i2s_config->data_out_num = GPIO_NUM_25;
i2s_config->data_in_num = GPIO_NUM_35;

| IO25  | IIS_LRCK     |       |   x   |       |       |

<!-- 
| IO02  | SD-D0        |       |       |   X   |       |
| IO04  | SD-D1        |       |       |   X   |       |
| IO05  | TFT-CS       |   X   |       |       |       |
| IO12  | SD-D2        |       |       |   X   |       |
| IO13  | SD-D3        |       |       |   X   |       |
| IO14  | SD-CLK       |       |       |   X   |       |
| IO15  | SD-CMD       |       |       |   X   |       |
| IO18  | SCLK for TFT |   X   |       |       |       |
| IO19  | MOSI for TFT |   X   |       |       |       |
| IO21  | MUTE         |       |   X   |       |       |
| IO22  | IIS_DOUT     |       |   x   |       |       |
| IO23  | DC           |  RS   |       |       |       |
| IO27  |              |       |       |       |   X   |
| IO32  |              |       |       |       |   X   |
| IO33  |              |       |       |       |   X   |
| RST   |              |  RST  |       |       |   X   |

Key (KEY)
Support 6-channel key input, default access method below the factory

NAME	IO
KEY1	IO36
KEY2	IO13
KEY3	IO19
KEY4	IO23
KEY5	IO18
KEY6	IO5

pushed = LOW

2 LEDS IO22, IO19

 -->

## Streams

* <https://dispatcher.rndfnk.com/hr/hr3/live/mp3/high>


## Audio Support

* <https://github.com/pschatzmann/arduino-audio-tools>


## See also

* <https://docs.ai-thinker.com/en/esp32-audio-kit>
* <https://docs.ai-thinker.com/_media/esp32/hardware/esp32-a1s_%E4%BA%A7%E5%93%81%E8%A7%84%E6%A0%BC%E4%B9%A6_v1.3.pdf>
* <https://github.com/Ai-Thinker-Open/ESP32-A1S-AudioKit>
