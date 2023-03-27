---
title: Elements Overview
tags: ["Element"]
layout: "page.njk"
excerpt: >
  Elements are implementations of a specific input, output or compute functionality that corresponds to a specific functionality
  like Sensors, Displays, Light, I/O control and internal control logic.
  Elements are implemented in the HomeDing library as Components that can be controlled using setup configuration and runtime actions.
---

* [Sensor Elements](/elements/sensors.md) and [Sensor components](/sensors/sensors.md)
* [Light Elements](/elements/light.md)
* [Audio Elements](/elements/audio/index.md)
* [Displays](/elements/display/index.md)


The following element implementations are available in the current version of the HomeDing library.


## Input Elements

Input Elements are used to create an action based on a specific input signal like digital HIGH/LOW or analog signals or values from sensors like movement detectors.

:::element digitalin
{% excerptOf collections.Element, "digitalin" %}
:::

:::element digitalsignal digitalin
{% excerptOf collections.Element, "digitalsignal" %}
:::

:::element analog
{% excerptOf collections.Element, "analog" %}
:::

:::element rotary
{% excerptOf collections.Element, "rotary" %}
:::

:::element touch
{% excerptOf collections.Element, "touch" %}
:::


## Sensor Elements

The [sensor elements](/elements/sensors.md) implement the adoption to a very specific sensor or sensor family. They share
some common implementation to allow gathering values on a regular basis and updating other elements or even other boards by sending actions with the current value.

:::element dht
Use DHT11, DHT22 and AM2302 sensors for temperature and humidity and create actions.
:::

:::element am2320 dht
{% excerptOf collections.Element, "am2320" %}
:::

:::element aht20 dht
{% excerptOf collections.Element, "aht20" %}
:::

:::element dallas
{% excerptOf collections.Element, "dallas" %}
:::

:::element bme680
{% excerptOf collections.Element, "bme680" %}
:::

:::element pms
Read sensor values from a PMS5003 sensor by plantdata to count micro particles in the air.
:::

:::element bmp280
{% excerptOf collections.Element, "bmp280" %}
:::

<!--
TODO: element bme280 bme280
-->

:::element bl0937 default
{% excerptOf collections.Element, "bl0937" %}
:::

<!-- MPU9250 -->

More detailed information on sensor implementation can be found in [sensor Elements](/elements/sensors.md) implementation.


## Output and Actor Elements

:::element pwmout
The [PWMOut Element](/elements/pwmout.md) is used to output an pwm signals based on actions. e.g. LEDs.
:::

:::element digitalout
The [DigitalOut Element](/elements/digitalout.md) is used to create digital output signals based on actions.
:::

:::element rfcodes default
The [RFCodes Element](/elements/rfcodes.md) is used for sending and receiving RF codes on the 433 MHz band
e.g. to control remote sockets.
:::


## Light Elements

To control a light with only one channel the [Switch Element](/elements/switch.md) and [Value Element](/elements/value.md) can be used
to control dimmable LEDs using [PWM Out Element](/elements/pwmout.md) or switching using [DigitalOut Element](/elements/digitalout.md).

:::element switch
The [Switch Element](/elements/switch.md) controls a boolean output value with 0 and 1 values.
It can use input from a [DigitalIn Element](/elements/digitalin.md) with a momentary button and the Web UI.
:::

:::element value
The [Value Element](/elements/value.md) controls a value in a given range. It can be controlled using several methods
like a [DigitalIn Element](/elements/digitalin.md) or a [Rotary Element](/elements/rotary.md) and the Web UI.
:::

:::element pwmout
The [PwmOut Element](/elements/pwmout.md) enables creating a PWM digital output signal usually to dimmable LEDs and servos.
:::

:::element digitalout
The [DigitalOut Element](/elements/digitalout.md) enables creating a digital output on a GPIO pin.
:::

For lights like [bulbs](/boards/bulb.md) or LED stripes that have multiple color channels
the [Color Element](/elements/color.md) can be used to control the light color using a RGB or WRGB color value.

There are special elements to control specific chips or using the PWM capabilities.

:::element color
The [Color Element](/elements/color.md) controls a RGB or WRGB value that can be used to control light Elements with color support.
:::

:::element light
The [Light Element](/elements/light.md) can control up to 4 PWM output GPIOs for controlling RGB and WRGB LEDs by color values.
:::

:::element my9291 led
The [MY9291 Element](/elements/my9291.md) implements the protocol to control the Taiwan Mingyang MY9291 LED driver chip that can be found in some bulbs.
:::

:::element neo
The [Neo Element](/elements/neo.md) implements the protocol to control ws2812 based LEDs also called Neopixel.
:::

:::element p9813 led
The [P9813 Element](/elements/p9813.md) implements the protocol to control the P9813 LED driver chip also known as Groove chainable LED.
:::


## Light Sensors

:::element bh1750 default
This is a light sensor probong for the intensity of light in lumen.
[BH1750 Element](/elements/bh1750.md)
:::


## Logic and Calculation Elements

Logic elements implement using on/off values expressed as 1/0 values. See [Calc Abstract Element](/elements/calc.md)

:::element button
The [Button Element](/elements/button.md) can differentiate clicks, double clicks and long press gestures to send out actions.
:::

:::element switch
The [Switch Element](/elements/switch.md) controls a boolean output value with 0 and 1 values.
It can use input from a [DigitalIn Element](/elements/digitalin.md) with a momentary button and the Web UI.
:::

:::element and
The [AND Element](/elements/and.md) combines multiple logic input values to a single output value.
The outgoing value is HIGH(1) when all of the given input values are not LOW(0).
:::

:::element or
The [OR Element](/elements/or.md) combines multiple logic input values to a single output value.
The outgoing value is HIGH(1) when one of the given input values is not LOW(0).
:::

:::element add
The ADD Element sums up multiple input values to create a single output value.
:::

:::element map
{% excerptOf collections.Element, "map" %}
:::

:::element reference default
The [Reference Element](/elements/map.md) creates actions by comparing an incoming value with a reference value.
:::

:::element scene
{% excerptOf collections.Element, "scene" %}
:::

:::element select
{% excerptOf collections.Element, "select" %}
:::


## Display Elements

The HomeDing library supports local attached [displays](/elements/display/index.md) but also works fine without a local display.

:::element display/ssd1306
The [DisplaySSD1306 Element](/elements/display/ssd1306.md) configures the display adapter for using SSD1306 compatible OLED displays with 128\*32 or 128\*64 dots.
:::

:::element display/sh1106
A The [DisplaySH1106 Element](/elements/display/sh1106.md) configures the display adapter for using SH1106 compatible OLED displays with 128\*32 or 128\*64 dots.
:::

:::element display/lcd
{% excerptOf collections.Element, "display/lcd" %}
:::

:::element display/max7219
{% excerptOf collections.Element, "display/max7219" %}
:::


On the displays several Elements can be used to display data, text and visuals:

:::element display/text
The [DisplayText Element](/elements/display/text.md) show values as text on the display.
:::

:::element display/dot
The [DisplayDot Element](/elements/display/dot.md) show values as a dot on the display.
:::

:::element display/bar
The [DisplayBar Element](/elements/display/bar.md) show values as a progress or percentage bar on the display.
:::

:::element display/line
The [DisplayLine Element](/elements/display/line.md) shows a line on the display.
:::

More detailed information on displays and related elements can be found in [displays](/elements/display/index.md).


## One Value Display Elements

These Elements can be used to display a single value.

:::element max7219
{% excerptOf collections.Element, "max7219" %}
:::

:::element tm1637
{% excerptOf collections.Element, "tm1637" %}
:::


## Time related Elements

:::element time dstime
The [Time Element](/elements/time.md) sends actions with the actual local time.
:::

:::element dstime
The [DSTime Element](/elements/dstime.md) can retrieve the local time using the RTC DS3231 chip.
:::

:::element ntptime
The [NTPTime Element](/elements/ntptime.md) can retrieve the local time using the NTP protocol from a NTP server.
:::

<!--
:::element dcftime
The [DCFTime Element](/elements/dcftime.md) can retrieve the local time from a DCF 77kHz signal over the air.
:::
-->

:::element schedule
The [Schedule Element](/elements/schedule.md) creates on and off actions based on the actual local time.
:::

:::element alarm schedule
The [Alarm Element](/elements/alarm.md) creates actions when reaching a defined time of day.
:::

:::element timer
The [Timer Element](/elements/timer.md) creates timer (duration) based actions.
:::

More detailed information on time element and time related implementation can be found in [time elements implementation](/elements/timeelements.md).


## System Elements

:::element device
The [Device Element](/elements/device.md) is used to configure the device level properties.
:::

:::element ota
The [OTA Element](/elements/ota.md) is used to enable and configure Over The Air Updates.
:::

:::element ssdp
The [SSDP Element](/elements/ssdp.md) is used to discovering devices on the network using SSDP protocol.
:::

:::element value
The [Value Element](/elements/value.md) is used to
receive and send actions to use and control an internal value.
:::

:::element menu
The [Menu Element](/elements/menu.md) is used for
displaying and changing multiple values.
:::

:::element log
The [Log Element](/elements/log.md) is used for
storing timestamp based sensor values.
:::


## Network Elements

Things based on the HomeDing library are network connected by default as they integrate a web server and web services.

The Network Elements extend the base functionality to connect to other devices and services over the network using different protocols.

:::element remote
{% excerptOf collections.Element, "remote" %}
:::

:::element mqtt default
{% excerptOf collections.Element, "mqtt" %}
:::

Service elements interact with services to get or publish data using actions.

:::element weatherfeed
The [Weatherfeed Element](/elements/weatherfeed.md)can retrieve weather forecast information from an internet service.
:::


## Storage related Elements

* SD Card Element

:::element sd sdcard
{% excerptOf collections.Element, "sd" %}
:::

:::element sdmmc sdcard
{% excerptOf collections.Element, "sdmmc" %}
:::


## Audio related Elements

The [Audio Elements](/elements/audio/index.md) can be used to create / control audio related devices and chips.

:::element audio/radio
{% excerptOf collections.Element, "radio" %}

This element is using the external [Radio Library](http://www.mathertel.de/Arduino/RadioLibrary.aspx)
to configure and use various FM radio chips and boards.

This element is part of the [Radio Example](/examples/radio.md).
:::

:::element audio/audio audio
{% excerptOf collections.Element, "audio" %}

The [Audio Element](/elements/audio/audio.md) element is part of the [WebRadio Example](/examples/webradio.md).
:::


## Other Elements

You can find some more elements in the examples folder.

These implementations are for special purpose or are still experimental cases
but are published already maybe with some restricted functionality.

:::element diag no
{% excerptOf collections.Element, "diag" %}
This element is part of the [DevDing example](/examples/devding.md)
:::

:::element ina219 no
{% excerptOf collections.Element, "ina219" %}
This sensor is part of the [Probe example](/examples/probe.md)
:::

:::element ina226 no
{% excerptOf collections.Element, "ina226" %}
This sensor is part of the [Probe example](/examples/probe.md)
:::


## Web UI Elements

These elements starting with **web** in their name are only known to the Web UI implementation but are not part of the firmware- The intention is to enrich and customize the Web UI dashboard with elements like presets and macros.

:::element webbutton button
  This element adds a button the Web UI of the board. The button can be used to trigger actions by clicking.
:::


## See also

* [Element](/dev/elementclass.md)