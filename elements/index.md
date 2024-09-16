---
title: Elements Overview
tags: 
  - "Element"
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

{{ elemCard("pwmout") }}
{{ elemCard("digitalout") }}
{{ elemCard("rfcodes", "rfsend") }}


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

{{ elemCard("bh1750", "no" ) }}


## Logic, Data and Calculation Elements

{{ elemCard("button" ) }}
{{ elemCard("switch" ) }}

{{ elemCard("value") }}
{{ elemCard("menu") }}
{{ elemCard("log") }}

Logic elements implement using on/off values expressed as 1/0 values. See [Calc Abstract Element](/elements/calc.md)

{{ elemCard("and" ) }}
{{ elemCard("or") }}

{{ elemCard("add") }}
{{ elemCard("map") }}
{{ elemCard("reference") }}
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

{{ elemCard("time") }}
{{ elemCard("dstime") }}
{{ elemCard("ntptime") }}

<!--
:::element dcftime
The [DCFTime Element](/elements/dcftime.md) can retrieve the local time from a DCF 77kHz signal over the air.
:::
-->

{{ elemCard("schedule") }}
{{ elemCard("alarm", "schedule" ) }}
{{ elemCard("timer") }}

More detailed information on time element and time related implementation can be found in [time elements implementation](/elements/timeelements.md).


## System Elements

{{ elemCard("device") }}
{{ elemCard("ota") }}
{{ elemCard("ssdp") }}


## Network Elements

Things based on the HomeDing library are network connected by default as they integrate a web server and web services.

The Network Elements extend the base functionality to connect to other devices and services over the network using different protocols.

{{ elemCard("remote") }}
{{ elemCard("mqtt", "default") }}

Service elements interact with services to get or publish data using actions.

{{ elemCard("weatherfeed") }}


## Storage related Elements

{{ elemCard("sd", "sdcard" ) }}
{{ elemCard("sdmmc", "sdcard" ) }}


## Audio related Elements

The [Audio Elements](/elements/audio/index.md) can be used to create / control audio related devices and chips.

{{ elemCard("audio/tone", "tone" ) }}

{{ elemCard("audio/radio", "radio" ) }}

This element is using the external [Radio Library](http://www.mathertel.de/Arduino/RadioLibrary.aspx)
to configure and use various FM radio chips and boards and is contained in the special [Radio Example](/examples/radio.md).

{{ elemCard("audio/audio", "audio" ) }}


## Other Elements

You can find some more elements in the examples folder.

These implementations are for special purpose or are still experimental cases
but are published already maybe with some restricted functionality.

{{ elemCard("diag") }}

This element is part of the [DevDing example](/examples/devding.md)

{{ elemCard("ina219") }}
{{ elemCard("ina226") }}

The ina219 and ina226 sensor elements are part of the [Probe example](/examples/probe.md)


## Web UI Elements

The elements starting with a **web** prefix in their name are only known to the Web UI implementation but are not part
of the firmware- The intention is to enrich and customize the Web UI dashboard with elements like presets and macros.

{{ elemCard("webbutton", "button") }}


## See also

* [Element implementation details](/dev/elementclass.md)
