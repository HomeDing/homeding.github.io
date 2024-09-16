---
title: Display Touch Element
tags:
  - "Element"
  - "Display"
  - "Input"
layout: "page.njk"
excerpt: >
  The Display Touch Elements enables detecting touch events by touching a specific area on a
  display.
---

The Display Touch Element interface with the chips that can detect touch positions on a touch
enabled display.

The touch events are used together with the displayed buttons. Based on the coordinates an
active [DisplayButton Element](/elements/display/button.md) is searched and the actions of the
Button Element are triggered. This allows having multiple buttons placed on the same display for
different purpose.

There are some different chips and technologies available for touch detection.


## Capacitive Touch Sensors

Capacitive touchscreens are often used on smartphones and tablets as they are very responsive to
a touch and even work through screen protector glass. They work by messuring the changing
capacity when a object (finger or stylus) is nearby the surface. They don't need any touch
force. However they may report accidentally touch events.

The [DisplayTouchGT911](touchgt911.md) Element is enabling the GT911 is a 5-Point Capacitive
Touch Sensors for 7" to 8" panels using the I2c bus for communication. It can deliver Input
results every 40 / 10 msec.


## Resistive Touch Sensors

Resistive touchscreens work by messuring the changed resistance when some pressure is made on the surface.
They are often cheaper and may be better in rough environments and do not support multi-touch events.
A stylus is often required to create accurate touch events.


## See also

* [DisplayButton Element](/elements/display/button.md)
* <https://www.makeuseof.com/tag/differences-capacitive-resistive-touchscreens-si/>
