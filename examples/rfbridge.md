---
title: RF Bridge Example
tags:
  - "Example"
  - "WIP"
layout: "page.njk"
description: --
excerpt: >
  This example has a local RFCodes Element to send and receive RF Signals using 433 MHz
  transmitters and receivers with the <a href="https://github.com/mathertel/rfcodes">RFCodes
  library</a>. Some more Elements help to automate light and switch processes.
---

The [RFCodes Element] depends on the [RFCodes library](https://github.com/mathertel/rfcodes)
that you can find also through the Arduino library manager. Be sure to install it before
compiling/verifying/uploading.


* 2 new elements
* not in standard as only used for a gateway
* can receive and send
* needs xxxx library to be installed
* proprietary RF singals can be added

## RF sending device

This example shows how to combine the Elements RFSend and Schedule to build a device that you can use to replace a RF sender
and also includes some basic scheduling features.
In this example you can also find a nice web UI for controlling the configured elements.

## RF probing

include input, UI

## RF receiving

MAP


## configure a command

<!-- reference to rfsend library -->

[RFCodes Element](/elements/rfcodes.md)