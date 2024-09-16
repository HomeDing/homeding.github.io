---
title: DCFTime Element
icon: dcftime
tags:
  - "Element"
  - "Time"
  - "WIP"
layout: "page.njk"
description: Support DCF77 signals to get current time over the air. 
excerpt: >
  The DCFtimeElement allows receiving the DCF77 signal that is available in central Europe
  broadcasting the official central European time.
---

The frequency is 77.5 kHz and it takes a full minute to receive the full information.

The configuration for this element is only the pin with the digital input signal.

When a valid time had been decoded the board time will be adjusted.

This element is not sending out actions.

When time based actions are required the [time element](/elements/time.md) can be used.

## Element Configuration

**pin** - GPIO pin with the decoded DCF77 signal from the receiver


## See also

* [Time Elements](/elements/timeelements.md)
