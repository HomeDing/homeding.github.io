---
title: Spotpear ESP32C3 1.44 LCD
tags: ["Board", "WIP"]
layout: "page.njk"
excerpt: >
  
---

{% from 'macros.njk' import carousel %}

The Spotpear ESP32C3 board with 1.44 inch LCD display is a very compact version of a LCD + ESP32C3 combination.

{{ carousel([
  { "file": "./spotpear-144lcd.jpg", "text": "ESP32C3 board with 1.44 inch LCD display"},
  { "file": "./spotpear-144lcd-2.jpg", "text": "ESP32C3 board top view"},
  { "file": "./spotpear-144lcd-1.jpg", "text": "ESP32C3 board from side"},
  { "file": "./spotpear-144lcd-3.jpg", "text": "ESP32C3 board connectors and back"}
]) }}


## Features

* ST7735 128*128 display on SPI bus
* 3 custom buttons
* reset button
* LED
* LiPo charger
* USB bust directly connected to ESP32C3

## Display

The display is driven by a ST7735 chip and can be used within the Homeding library by including the
[Display ST7735 Element](/elements/display/st7735.md)

It is driven by the standard SPI interface that is configured in the
[Device Element](/elements/display/device.md).

You can find the full settings in the system configuration below.

## Momentary Buttons

There are 4 momentary buttons on the board.
3 of them are pulling a GPIO pin to ground and one is connected to the EN and will reset the processor.

Pins used: IO8, IO10,
Boot = IO9,
Reset = Chip_EN

There are no external pull-up resistors on the board so the  internal pullup resistors of the ESP32-C3 must be enabled.

## Connector

The connector pins that can be used for external communication or sensors.
The following GPIO pins and power connectors are available:

| Pin | Function |
| --- | -------- |
| 1   | GPIO1    |
| 2   | GPIO6    |
| 3   | GPIO7    |
| 4   | GPIO20   |
| 5   | GPIO21   |
| 6   | GND      |

It is a bit tricky to solder connector pins to the existing soldering pads as the display is nearby glued to the printed
circuit board.

On the opposite side of the printed circuit board there are 2 labeled connectors that can provide 3.3V and the charging
voltage from the USB connector.


## LEDs

There is a LED connected to the GPIO pin # 11 next to the reset button.

However this pin cannot be freely used and is connected to the VCC for the internal SPI flash. It will turn off when the board goes into the deep sleep mode.


## LiPo charging

BAT : PL4054


## System configuration

This **env.json** file can be used as a starting point for configuring this board type and includes all on-board hardware definitions:

```json
{
  "device": {
    "0": {
      "name": "spotpearc3",
      "title": "Spotpear 1.44 LCD",
      "description": "Spotpear ESP32C3 board with 1.44 inch LCD display",
      "loglevel": "2",
      "logFile": "1"
    }
  },
  "ota": {
    "0": {}
  },
  "ntptime": {
    "0": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },
  "DisplayST7735": {
    "0": {
      "description": "Display",
      "loglevel": 2,
      "width": "128",
      "height": "128",
      "colOffset": 2,
      "rowOffset": 1,
      "busmode": "spi",
      "spiClk": 3,
      "spiMosi": 4,
      "resetPin": 5,
      "spiDC": 0,
      "spiCS": 2,
      "rotation": 180,
      "background": "#002200"
    }
  },
  "state": {
    "0": { "savedelay": "8s" }
  },
  "digitalin": {
    "boot": {
      "title": "Boot button signal",
      "pin": "9",
      "invert": "true",
      "pullup": "1"
    },
    "key1": {
      "title": "Key 1",
      "pin": "8",
      "invert": "true",
      "loglevel": "2",
      "pullup": "1"
    },
    "key2": {
      "title": "Key 2",
      "pin": "10",
      "invert": "1",
      "pullup": "1"
    }
  }
}
```

---

"C:\Users\Matthias\AppData\Local\Arduino15\packages\esp32\tools\esptool_py\4.5.1/esptool.exe" --chip esp32s3 --port "COM7" --baud 921600  --before default_reset --after hard_reset write_flash  -z --flash_mode dio --flash_freq 80m --flash_size 16MB 0x0 "C:\Users\Matthias\AppData\Local\Temp\arduino\sketches\4674C825DA1B04228EA2E0E8F53E9C1D/BigDisplay.ino.bootloader.bin" 0x8000 "C:\Users\Matthias\AppData\Local\Temp\arduino\sketches\4674C825DA1B04228EA2E0E8F53E9C1D/BigDisplay.ino.partitions.bin" 0xe000 "C:\Users\Matthias\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.17/tools/partitions/boot_app0.bin" 0x10000 "C:\Users\Matthias\AppData\Local\Temp\arduino\sketches\4674C825DA1B04228EA2E0E8F53E9C1D/BigDisplay.ino.bin"


    "board": "esp32:esp32:esp32c3",
    "configuration": "JTAGAdapter=default,CDCOnBoot=cdc,PartitionScheme=default,CPUFreq=160,FlashMode=qio,FlashFreq=80,FlashSize=4M,UploadSpeed=921600,DebugLevel=none,EraseFlash=all",


## See also

* [ESP32-C3 1.44 LCD at spotpear](https://spotpear.com/index/product/detail/id/1354.html)
* [ESP32-C3 1.44 LCD User Guide @ spotspear](https://spotpear.com/index/study/detail/id/1121.html)
* [GitHub Project](https://github.com/Spotpear/ESP32C3_1.44inch)
