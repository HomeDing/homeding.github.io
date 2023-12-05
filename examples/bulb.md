---
title: Bulb Example
layout: "page.njk"
tags: ["Example"]
description: Example for colorful WiFi bulbs with only 1MByte flash memory.
excerpt: >
  The Bulb Example in the HomeDing library is made especially for WiFi bulbs with the ESP8266 processor inside.
  These devices only have a small amount of Flash Memory available (1 MByte) for program and web UI storage.
---

Because the flash memory is very limited on these devices the minimal sketch only contains
Elements that are used within bulbs. e.g. no sensors and provide the base functionality combined
with a set of elements that can be used in the configuration of the device.

See introduction to [Minimal Examples](/examples/minimal.md).

## Included Elements

The elements that are included in this example sketch are those that support bulbs and other
light devices like NEOpixel based strip controllers.

* [device Element](/elements/device.md) -- for device level configurations.
* [ota Element](/elements/ota.md) -- for OTA update support
* [ntptime Element](/elements/ntptime.md) -- for self-hosted time based on/off automation
* [time Element](/elements/time.md) - time based events
* [state Element](/elements/state.md) -- to save the state of the last settings 
* [scene Element](/elements/scene.md) -- support multiples scene specific settings
* [switch Element](/elements/switch.md) -- interactive switch on/off
* [value Element](/elements/value.md) -- support of simple values like brightness 
* [color Element](/elements/light/color.md)  -- support of color values
* [light Element](/elements/light/light.md) -- driving RGB LEDs using PWM 
* [my9291 Element](/elements/light/my9291.md) -- driving RGB LEDs using the my9291 driver chip.
* [neo Element](/elements/light/neo.md) -- driving RGB LED stripes based on neopixel driver chip.

You can control what elements are included in the firmware file by enabling or disabling the
#define statements for registering the elements in the sketch file.

If you like to know what element are available in a device just ask for the URL http://\<devicename\>/$elements
