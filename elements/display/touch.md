---
title: Display Touch Element
tags: ["Element", "Display", "Input"]
layout: "page.njk"
excerpt: >
  The Display Touch Elements enables detecting touch events by touching a specific area
  on a display.
---

The Display Touch Element interface with the chips that can detect touch positions on a touch
enabled display. These elements will try to find an active
[DisplayButton Element](/elements/display/button.md) that corresponds
to the touch coordinates so that Actions can be triggered through the button element.
This allows having multiple buttons placed on the same display for different purpose.

There are some different chips and technologies available for touch detection:

## Capacitive Touch Sensors

The [DisplayTouchGT911](touchgt911.md) Element is enabling the GT911 is a 5-Point Capacitive
Touch Sensors for 7" to 8" panels using the I2c bus for communication. It can deliver Input
results every 40 / 10 msec.

## Res

