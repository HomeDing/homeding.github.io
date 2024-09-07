---
title: Elements Overview
tags: ["Element"]
layout: "page.njk"
excerpt: >
  Elements are implementations of a specific input, output or compute functionality that corresponds to a specific functionality
  like Sensors, Displays, Light, I/O control and internal control logic.
  Elements are implemented in the HomeDing library as Components that can be controlled using setup configuration and runtime actions.
---

{% from 'macros.njk' import imgCard, elemCard with context %}

* [Sensor Elements](/elements/sensors.md) and [Sensor components](/sensors/sensors.md)
* [Light Elements](/elements/light/light.md)
* [Audio Elements](/elements/audio/index.md)
* [Displays](/elements/display/index.md)

There is a [Element Sheet](/elements/sheet.md) availabe as table data.

The following element implementations are available in the current version of the HomeDing library.


## Input Elements

Input Elements are used to create an action based on a specific input signal like digital HIGH/LOW or analog signals or values from sensors like movement detectors.

{{ elemCard("digitalin") }}
{{ elemCard("digitalsignal", "digitalin") }}
{{ elemCard("analog") }}
{{ elemCard("rotary") }}
{{ elemCard("touch") }}


## Sensor Elements

The [sensor elements](/elements/sensors.md) implement the adoption to a very specific sensor or sensor family. They share
some common implementation to allow gathering values on a regular basis and updating other elements or even other boards by sending actions with the current value.

{{ elemCard("dht") }}
{{ elemCard("am2320", "dht") }}
{{ elemCard("aht20", "dht") }}
{{ elemCard("dallas") }}
{{ elemCard("bme680") }}
{{ elemCard("pms") }}
{{ elemCard("bmp280") }}
{{ elemCard("bl0937", "no") }}
{{ elemCard("scd4x", "no") }}

<!-- TODO: element bme280 bme280 -->

<!-- MPU9250 
 3-Axis gyroscope
 3-Axis accelerometer.
 3-Axis magnetometer 
 
<https://media.digikey.com/pdf/Data%20Sheets/TDK%20PDFs/MPU-9250_Rev_1.1.pdf> 
-->

More detailed information on sensor implementation can be found in [sensor Elements](/elements/sensors.md) implementation.


## Output and Actor Elements

:::element pwmout
The [PWMOut Element](/elements/pwmout.md) is used to output an pwm signals based on actions. e.g. LEDs.
:::

{{ elemCard("digitalout") }}

:::element rfcodes default
The [RFCodes Element](/elements/rfcodes.md) is used for sending and receiving RF codes on the 433 MHz band
e.g. to control remote sockets.
:::


## Light Elements

To control a simple light or bulb the [Switch Element](/elements/switch.md) and [Value Element](/elements/value.md) can be used
to control on/off and the brightness of LEDs using [PWM Out Element](/elements/pwmout.md) or [DigitalOut Element](/elements/digitalout.md).

To control lights, [bulbs](/boards/devices/bulb.md) and LED stripes with colors the following special light elements can be used.

There are special elements to control specific chips or using the PWM capabilities:

{{ elemCard("light") }}
{{ elemCard("my9291", "led") }}

The [Color Element](/elements/light/color.md) can be used to create a light color value of your choice.

{{ elemCard("color") }}

For LED stripes the [Stripe Element](/elements/light/stripe.md) provides the base functionality to control a series of LEDs with individual color values and a overall brightness.

The stripes can be controlled from the following elements implementing the specific protocols:

{{ elemCard("neo") }}
{{ elemCard("apa102", "led") }}
{{ elemCard("p9813", "led") }}


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

{{ elemCard("map") }}

:::element reference default
The [Reference Element](/elements/map.md) creates actions by comparing an incoming value with a reference value.
:::

{{ elemCard("scene") }}
{{ elemCard("select") }}


## Display Elements

The HomeDing library supports local attached [displays](/elements/display/index.md) but also works fine without a local display.

{{ elemCard("ssd1306", "displayssd1306") }}
{{ elemCard("sh1106", "displaysh1106") }}
{{ elemCard("lcd", "displaylcd") }}
{{ elemCard("max7219", "displaymax7219") }}

On the displays several Elements can be used to display data, text and visuals:

{{ elemCard("text", "displaytext") }}
{{ elemCard("dot", "displaydot") }}
<!-- { { elemCard("bar", "displaybar") }} -->
{{ elemCard("line", "displayline") }}
{{ elemCard("rect", "displayrect") }}

More detailed information on displays and related elements can be found in [displays](/elements/display/index.md).


## One Value Display Elements

These Elements can be used to display a single value.

{{ elemCard("max7219") }}
{{ elemCard("tm1637") }}


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

{{ elemCard("remote") }}

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

:::element audio/tone tone
{% excerptOf collections.Element, "tone" %}
:::


:::element audio/radio radio
{% excerptOf collections.Element, "radio" %}
This element is using the external [Radio Library](http://www.mathertel.de/Arduino/RadioLibrary.aspx)
to configure and use various FM radio chips and boards.

This element is part of the [Radio Example](/examples/radio.md).
:::

:::element audio/audio audio
{% excerptOf collections.Element, "audio" %}
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