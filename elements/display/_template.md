---
title: Color Displays based on xxxx
tags: ["Element", "Display", "WIP"]
layout: "page.njk"
description: xxxx
excerpt: >
  The DisplayxxxxElement enables using xxxx based TFT color displays in HomeDing based devices.
---

![xxxx display](/elements/display/xxxx.jpg)


## Reset pin

For intializing the display the `resetpin` parameter defines the GPIO pin that is connected to the display reset signal.
This signal may be used for other components at the same time like display touch controllers.


## Display Brightness Control

TFT displays need a background lightning that is controlled by the GPIO xxxx pin configured in
the parameter `lightpin`.
The `brightness` can be adjusted from 0 to 100.

The light pin can be configured and will be used by the display adapter or driver to control the brightness of the display.


## Rotating the Display

The Display may be used in different scenarios with different rotations. The rotation `0` is defined by the
default implementation of the display hardware and may be portrait or landscape.
The rotation can be changed to 0, 90, 180 or 270.


## Configuration

The Display ST7789 Element supports all parameters to configure all displays. The DisplayConfig structure is used to bundle these and pass them to the dedicated Dispay Adapter. While adopting color displays the set of parameters was extended to support the background color andthe SPI interface. A system wide SPI configuration was also added to the Device Element.

By default and during system startup a white draw/text color is used.


## See also

* [Displays](/elements/display/index.md)
* [Fonts](/elements/display/fonts.md)
