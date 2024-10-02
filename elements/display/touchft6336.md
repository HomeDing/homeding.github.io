---
title: Display TouchFT6336U Element
tags:
  - "Display"
  - "Element"
  - "WIP"
layout: "page.njk"
---

The FT6336U from FocalTech is a Self-Capacitive Touch Panel Controller and is part of the FT6x36 controller family.

These controllers have an internal processor
and firmware that actively scans the panel, detects the touch events and calculates coordinates and gestures.

The FT6336U variant is prepared to read up to 2 touch points and can detect some simple gestures.

## Driver Implementation

The processor on the board can read the event data from the FT6x36 chip using the i2c bus using a 8-bit register addressing mode.

This interface is directly supporting reading the coordinates with the resolution of the underlying display when configured correctly by the vendor.

The implementation can be found directly in the Element reading the 5 relevant registers with
the coordinates for the first touch point. This is done directly without using one of the
available Arduino libraries.


## Element Configuration

<!-- <object data="/element.svg?touchft6336" type="image/svg+xml"></object> -->

There is no need con figure the i2c address as there is a fixed address used for these drivers.

The width and height is already known to the display touch controller through the configuration.

The following properties are available for configuration of the element:

> **rotation** -- Rotation of the display in use using 0, 90, 180 or 270 degree.


## See also

* [Display Touch Elements](/elements/display/touch.md)
* [i2c bus](/dev/i2c.md)
* [ESP32S3 SC01 Plus Panel](/boards/esp32s3/sc01-plus.md)

