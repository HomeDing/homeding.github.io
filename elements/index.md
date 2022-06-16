---
title: Elements Overview
tags: ["Element"]
layout: "page.njk"
excerpt: These Elements are implemented in the HomeDing library.
---

Elements are implementations of a specific input, output or compute functionality that corresponds to a specific functionality like [sensors](/sensors/sensors.md).

The following element implementations are available in the current version of the HomeDing library.


## Input Elements

Input Elements are used to create an action based on a specific input signal like digital HIGH/LOW or analog signals or values from sensors like movement detectors.

:::element digitalin digitalin
{% excerptOf collections.Element, "digitalin" %}
:::

:::element digitalsignal digitalin
{% excerptOf collections.Element, "digitalsignal" %}
:::

:::element analog analog
{% excerptOf collections.Element, "analog" %}
:::

:::element rotary rotary
{% excerptOf collections.Element, "rotary" %}
:::


## Sensor Elements

The [sensor elements](/elements/sensors.md) implement the adoption to a very specific sensor or sensor family. They share
some common implementation to allow gathering values on a regular basis and updating other elements or even other boards by sending actions with the current value.

:::element dht dht
Use DHT11, DHT22 and AM2302 sensors for temperature and humidity and create actions.
:::

:::element am2320 dht
{% excerptOf collections.Element, "am2320" %}
:::

:::element aht20 dht
{% excerptOf collections.Element, "aht20" %}
:::

:::element dallas dallas
{% excerptOf collections.Element, "dallas" %}
:::

:::element bme680 bme680
{% excerptOf collections.Element, "bme680" %}
:::

:::element pms pms
Read sensor values from a PMS5003 sensor by plantdata to count micro particles in the air.
:::

:::element bmp280 bmp280
{% excerptOf collections.Element, "bmp280" %}
:::

:::element bl0937 default
{% excerptOf collections.Element, "bl0937" %}
:::

<!-- BME280 -->

<!-- MPU9250 -->

More detailed information on sensor implementation can be found in [sensor elements implementation](/elements/sensors.md).


## Output and Actor Elements

:::element pwmout pwmout
The [PWMOut Element](/elements/pwmout.md) is used to output an pwm signals based on actions. e.g. LEDs.
:::

:::element digitalout digitalout
The [DigitalOut Element](/elements/digitalout.md) is used to create digital output signals based on actions.
:::

:::element rfcodes default
The [RFCodes Element](/elements/rfcodes.md) is used for sending and receiving RF codes on the 433 MHz band
e.g. to control remote sockets.
:::


## Light Elements

To control a light with only one channel the [Switch Element](/elements/switch.md) and [Value Element](/elements/value.md) can be used
to control dimmable LEDs using [PWM Out Element](/elements/pwmout.md) or switching using [DigitalOut Element](/elements/digitalout.md).

:::element switch switch
The [Switch Element](/elements/switch.md) controls a boolean output value with 0 and 1 values.
It can use input from a [DigitalIn Element](/elements/digitalin.md) with a momentary button and the Web UI.
:::

:::element value value
The [Value Element](/elements/value.md) controls a value in a given range. It can be controlled using several methods
like a [DigitalIn Element](/elements/digitalin.md) or a [Rotary Element](/elements/rotary.md) and the Web UI.
:::

:::element pwmout pwmout
The [PwmOut Element](/elements/pwmout.md) enables creating a PWM digital output signal usually to dimmable LEDs and servos.
:::

:::element digitalout digitalout
The [DigitalOut Element](/elements/digitalout.md) enables creating a digital output on a GPIO pin.
:::

For lights like [bulbs](/boards/bulb.md) or LED stripes that have multiple color channels
the [Color Element](/elements/color.md) can be used to control the light color using a RGB or WRGB color value.

There are special elements to control specific chips or using the PWM capabilities.

:::element color color
The [Color Element](/elements/color.md) controls a RGB or WRGB value that can be used to control light Elements with color support.
:::

:::element light light
The [Light Element](/elements/light.md) can control up to 4 PWM output GPIOs for controlling RGB and WRGB LEDs by color values.
:::

:::element my9291 led
The [MY9291 Element](/elements/my9291.md) implements the protocol to control the Taiwan Mingyang MY9291 LED driver chip that can be found in some bulbs.
:::

:::element neo neo
The [Neo Element](/elements/neo.md) implements the protocol to control ws2812 based LEDs also called Neopixel.
:::

:::element p9813 led
The [P9813 Element](/elements/p9813.md) implements the protocol to control the P9813 LED driver chip also known as Groove chainable LED.
:::


## Light Sensors

:::element BH1750 default
This is a light sensor probong for the intensity of light in lumen.
[BH1750 Element](/elements/bh1750.md)
:::


## Logic and Calculation Elements

Logic elements implement using on/off values expressed as 1/0 values.

:::element button button
The [Button Element](/elements/button.md) can differentiate clicks, double clicks and long press gestures to send out actions.
:::

:::element switch switch
The [Switch Element](/elements/switch.md) controls a boolean output value with 0 and 1 values.
It can use input from a [DigitalIn Element](/elements/digitalin.md) with a momentary button and the Web UI.
:::

:::element and and
The [AND Element](/elements/and.md) combines multiple logic input values to a single output value.
The outgoing value is HIGH(1) when all of the given input values are not LOW(0).
:::

:::element or or
The [OR Element](/elements/or.md) combines multiple logic input values to a single output value.
The outgoing value is HIGH(1) when one of the given input values is not LOW(0).
:::

:::element add add
The ADD Element sums up multiple input values to create a single output value.
:::

:::element map map
{% excerptOf collections.Element, "map" %}
:::

:::element reference default
The [Reference Element](/elements/map.md) creates actions by comparing an incoming value with a reference value.
:::

:::element scene default
The [Scene Element](/elements/scene.md) sends a series of action triggered by a single incoming action.
:::

<div style="clear:both"></div>


## Display Elements

The HomeDing library supports local attached displays but also works fine without a local display.

:::element displayssd1306 displayssd1306
The [DisplaySSD1306 Element](/elements/ssd1306.md) configures the display adapter for using SSD1306 compatible OLED displays with 128\*32 or 128\*64 dots.
:::

:::element displaysh1106 displaysh1106
The [DisplaySH1106 Element](/elements/sh1106.md) configures the display adapter for using SH1106 compatible OLED displays with 128\*32 or 128\*64 dots.
:::

{% iconcard "displaylcd", "/displays/lcd.htm" %}
  The [DisplayLCD Element](/displays/lcd.md) configures the display adapter for using HD44780 compatible LCDs displays using I2C.
{% endiconcard %}

{% imgcard "/displays/max7219.jpg", "/displays/max7219.htm" %}

### [DisplayMAX7219](/displays/max7219.md)

  The [DisplayMAX7219 Element](/displays/max7219.md) uses LED matrixes as displays
  using the MAX7219 chip that can chain multiple 8x8 led displays.
{% endimgcard %}


On the displays several Elements can be used to display data, text and visuals:

:::element displaytext displaytext
The [DisplayText Element](/elements/displaytext.md) show values as text on the display.
:::

:::element displaydot displaydot
The [DisplayDot Element](/elements/displaydot.md) show values as a dot on the display.
:::

:::element displaybar displaybar
The [DisplayBar Element](/elements/displaybar.md) show values as a progress or percentage bar on the display.
:::

:::element displayline displayline
The [DisplayLine Element](/elements/displayline.md) shows a line on the display.
:::

More detailed information on displays and related elements can be found in [displays](/displays/index.md)

## One Value Display Elements

These Elements can be used to display a single value.

:::element max7219 max7219
{% excerptOf collections.Element, "max7219" %}
:::

:::element tm1637 tm1637
{% excerptOf collections.Element, "tm1637" %}
:::


## Time related Elements

:::element time dstime
The [Time Element](/elements/time.md) sends actions with the actual local time.
:::

:::element dstime dstime
The [DSTime Element](/elements/dstime.md) can retrieve the local time using the RTC DS3231 chip.
:::

:::element ntptime ntptime
The [NTPTime Element](/elements/ntptime.md) can retrieve the local time using the NTP protocol from a NTP server.
:::

<!--
:::element dcftime dcftime
The [DCFTime Element](/elements/dcftime.md) can retrieve the local time from a DCF 77kHz signal over the air.
:::
-->

:::element schedule schedule
The [Schedule Element](/elements/schedule.md) creates on and off actions based on the actual local time.
:::

:::element alarm schedule
The [Alarm Element](/elements/alarm.md) creates actions when reaching a defined time of day.
:::

:::element timer timer
The [Timer Element](/elements/timer.md) creates timer (duration) based actions.
:::

<div style="clear:both"></div>

More detailed information on time element and time related implementation can be found in [time elements implementation](/elements/timeelements.md).


## System Elements

:::element device device
The [Device Element](/elements/device.md) is used to configure the device level properties.
:::

:::element ota ota
The [OTA Element](/elements/ota.md) is used to enable and configure Over The Air Updates.
:::

:::element ssdp ssdp
The [SSDP Element](/elements/ssdp.md) is used to discovering devices on the network using SSDP protocol.
:::

:::element value value
The [Value Element](/elements/value.md) is used to
receive and send actions to use and control an internal value.
:::

:::element menu menu
The [Menu Element](/elements/menu.md) is used for
displaying and changing multiple values.
:::

:::element log log
The [Log Element](/elements/log.md) is used for
storing timestamp based sensor values.
:::


## Network Elements

Things based on the HomeDing library are network connected by default as they integrate a web server and web services.

The Network Elements extend the base functionality to connect to other devices and services over the network using different protocols.

:::element remote remote
{% excerptOf collections.Element, "remote" %}
:::

:::element mqtt default
{% excerptOf collections.Element, "mqtt" %}
:::

Service elements interact with services to get or publish data using actions.

:::element weatherfeed weatherfeed
The [Weatherfeed Element](/elements/weatherfeed.md)can retrieve weather forecast information from an internet service.
:::


## Web UI Elements

These elements starting with **web** in their name are only known to the Web UI implementation but are not part of the firmware- The intention is to enrich and customize the Web UI dashboard with elements like presets and macros.

:::element webbutton button
  This element adds a button the Web UI of the board. The button can be used to trigger actions by clicking.
:::


## Other Elements

You can find some more elements in the DevDing example folder.
These implementations are still experimental cases but are published already maybe with some restricted functionality.

:::element ina219 default
INA219 sensor, voltage and current.

This sensor is features by the [Probe example](/examples/probe.md)
:::

:::element ina226 default
INA226 sensor, voltage and current.

This sensor is features by the [Probe example](/examples/probe.md)
:::

:::element radio radio
This element features the external [Radio Library](http://www.mathertel.de/Arduino/RadioLibrary.aspx)
to configure and use various FM radio boards.

This element is part of the [Radio Example](/examples/radio.md).
:::


## See also

* [Element](/dev/elementclass.md)
