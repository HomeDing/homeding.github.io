---
title: XIAO ESP32 C3
tags: ["Board"]
image: "/boards/esp32c3/xiao_esp32c3.jpg"
description: ESP32-C3 thumb-size board with external antenna.
excerpt: >
  The XIAO ESP32 C3 is a thumb-size board with an I-PEX connector for an external antenna.
---

{% from 'macros.njk' import carousel %}

The XIAO ESP32 C3 board using the ESP32-C3 processor is a very small sized board that can easily be
flashed and comes with a connector for an external antenna.

{{ carousel([
  { "file": "./xiao_esp32c3.jpg", "text": "XIAO ESP32C3 board"},
  { "file": "./xiao_esp32c3-1.jpg", "text": "XIAO ESP32C3 board"},
  { "file": "./xiao_esp32c3-2.jpg", "text": "XIAO ESP32C3 back view"}
]) }}

This board comes with

* ESP32-C3 WIFI & Bluetooth LE RISC-V Single-Core CPU
* USB-C connector, directly connected to ESP32-C3 processor.
* 4MB Flash
* Boot and Reset Button
* GPIO 2 - 10 and 20 on connector pins
* somehow compatible to other XIAO boards and shields
* I-PEX connector for an external antenna
* LiPo charging (battery connector pads on the back)
* JTag signals (through connector pads on the back)
* 5V to 3.3V regulator on board.
* Board size: 18 * 21 mm

The ESP32-C3 processor has a 32-bit single core RISC-V CPU running at max. 160MHz and
400KB SRAM memory. Bluetooth LE is supported. See [ESP32-C3 Boards](/boards/esp32c3/index.md)

There is no antenna on this board and the external antenna that is shipped with the board or any other 2.4 GHz WiFi antenna with a common I-PEX connector must be connected for using any WiFi or Bluetooth functionality. An external antenna usually provides outstanding RF performance compared to on-board antenna solutions.

As there are no additional power consuming components on this board it fits good for battery based use cases.  It has a
onboard lithium battery charging chip to recharge using the USB-C connector.


## LiPo charging

There is a battery connector using solder pads available on the bottom of the board to attach a Li-Ion Battery. The charging using the USB power. A on-board LED will indicate the charging mode.
There is no further interface or API for control.


## Arduino Board configuration

The ESP32 Board Manager in the Arduino environment has a dedicated board type
`XIAO_ESP32C3 (esp32)` that fits to this board. No further setting is required.

* Flash Mode is QIO
* Flash Size 4MByte (32Mbit)
* 400KB SRAM Memory


For compiling with the Arduino CLI the following board settings can be used:

``` txt
"board": "esp32:esp32:XIAO_ESP32C3"
"configuration": "CDCOnBoot=default,PartitionScheme=default,CPUFreq=160,FlashMode=qio,
  FlashFreq=80,FlashSize=4M,UploadSpeed=921600,DebugLevel=none,EraseFlash=none",
}
```

## System configuration

The following **env.json** file can be used as a starting point for the configuration of this board and includes all definitions for the on-board hardware:

```json
{
  "device": {
    "0": {
      "name": "xiaoc3",
      "title": "XIAO ESP32C3",
      "description": "XIAO_ESP32C3 board",
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
  "state": {
    "0": { "savedelay": "8s" }
  },
  "digitalin": {
    "boot": {
      "title": "Boot button signal",
      "pin": "9",
      "invert": "true"
    }
  }
}
```

<!---
### config.json

```json
{
  "value": {
    "sw": {
      "title": "Stateful Value",
      "min": "0",
      "max": "100",
      "useState": "true"
    }
  }
}
```
-->

## See Also

* [Boards overview](/boards/index.md)
* [ESP32-C3 Boards](/boards/esp32c3/index.md)
* Manufacurer and Shop: <https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html>
* <https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/>
* <https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html>

