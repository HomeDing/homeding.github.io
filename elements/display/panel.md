---
title: Color Displays using the ESP32-S3 16-bit panel interface
tags:
  - "Element"
  - "Display"
layout: "page.njk"
excerpt: >
  The DisplayESP32PanelElement enables using displays connected with the ESP32 Panel interface.
---

<!-- ![xxxx display](/elements/display/xxxx.jpg) -->

Some chips supports the 16-bit graphics display bus from the esp32-s3 processor to transfer in-memory graphics data to the display.

It is used in the [Panel ESP32-8048S043C](/boards/esp32s3/panel-8048S043.md).

## Configuration

The **busmode** must be set to "RGBPanel".

The **buspins** is the list of the 16 GPIO pins used for the data transfer.


## Display Brightness Control

TFT displays need a background lightning that is controlled by a GPIO pin configured in
the parameter `lightpin`.
The `brightness` can be adjusted from 0 to 100.


## Rotating the Display

The Display driver may be used in different scenarios with different rotations. The rotation `0` is defined by the default
implementation of the display hardware and may be portrait or landscape. The rotation can be changed to 0, 90, 180 or 270.


## See also

* [Displays](/elements/display/index.md)
* [Fonts](/elements/display/fonts.md)
