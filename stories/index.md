---
title: Examples and Stories
tags: ["Example", "Story"]
layout: "page.njk"
excerpt: >
  The Homeding library comes with some example sketches but also with some more
  detailed building stories and educative stories explaining insights and options.
---

The **examples** can be used as a starting point for new projects. As the HomeDing Library enables runtime configuration
there are many examples on how to configure elements in the [Elements](/elements/index.md) descriptions and in the
[Recipes collection](/recipes/index.md).

The **stories** provide a full documentation required to build a specific device for a specific need
with pictures and extensive step-by-step documentation.


## Examples

The [Examples](/examples/index.htm) are installed in the Arduino Environment together with the
library and can be found in the examples list of the Arduino IDE. In the
[Examples](/examples/index.htm) description you can also find a short description on how to
include/exclude the Elements in a specific firmware.


#### [Standard Example](/examples/standard.md)

> The Standard Example is a good starting point for building new devices using a ESP8266 based
> board like the [NodeMCU] versions or ESP32 based boards and requires 4MByte flash memory at a
> minimum.
>
> It has most existing elements enabled ready for configuration and also
> has the files for the embedded web server in the data folder.
>
> Most of the [recipes](/recipes/index.md) work with this sketch.

#### [Minimal Examples](/examples/minimal.md)

> The **Plug** and **Bulb** examples show how to reduce the number of available elements and use
> only a bare minimum part of the embedded web site so the whole solution fits into a ESP8266
> board and devices with only 1 MByte Flash memory like the ESP-01 and of-the-shelf bulbs or
> sockets.

> The **Bulb Example** includes the elements usable for bulbs to control and drive LEDs like
> value, switch, state, time, ntptime, scene, light, color, neo, my9291.
>
> The **Plug Example** includes the elements usable for relays and plug devices including power
> measurement like

#### [RFBridge Example](/examples/rfbridge.md)

> The RFBridge Example uses a local element for communicating over RF signals by using 433 or 315
> MHz receivers and transmitters to build a special purpose device for bridging between WiFi and
> RF protocols.

#### [Probe Example](/examples/probe.md)

> The Probe Example shows how to implement special, local elements that can retrieve sensor data
> from INA219 and INA266 current and voltage sensors to build a low-voltage power consumption
> logging device. It can be used with any board that has a 4MByte Flash memory like the
> [NodeMCU] boards.

#### [Develop Example](/examples/devding.md)

> This example is very like the [Standard Example](/examples/standard.md) but has some add-ons
> that help during development. It can be used with any board that has a 4MByte Flash memory
> like the [NodeMCU] boards.

#### Webradio Example

> The Webradio Example is implemented especially for the ESP32 Wroover with PSRAM to build a Web
> Radio by using an Arduino library. This Web Radio can be controlled through the embedded web
> interface.

#### [Radio Example](/examples/radio.md)

> The Radio example has a local Element to control the features of the Arduino [Radio
> Library](https://github.com/mathertel/Radio) that to control many Radio FM receiver chips.
> The [Radio Element](https://homeding.github.io/elements/audio/radio.htm) is available as part of
> this example.

#### [Micro Example](/examples/micro.md)

> This is not a real example but is used to flash small devices with firmware for specific conditions.
> See also [Micro Example Readme](https://github.com/HomeDing/HomeDing/tree/develop/examples/micro)


## Stories

The stories provide a full documentation required to build a specific device for a specific need
with pictures and extensive step-by-step documentation.

#### Building a Simple Sensor device

> The [Outdoor Sensor Story](/stories/story-outdoorsensor.md) is about
> how to build a device that simply captures the air temperature and humidity parameters
> from a DHT22 sensor by using the low-code [Homeding library] and provide a graph with latest values.


#### Building a Air Quality Sensor device

> The [Air Quality Sensor](/stories/story-airquality.md) is about how to build an indoor air
> quality sensor.
>
> The sensors used here are the BME680 for getting temperature, humidity, pressure and organic
> gas values and the PMS5003 to get density of the micro particles.


#### **Building a Weather Display**

> The [Weather Display](/stories/story-weatherdisplay.md) is about
> how to build a device with a display to show actual weather conditions from a remote sensor
> and the future weather from an internet service.


#### Smart control for single and multiple lights

> The [Smart control for light](/stories/light-scenes/index.md) is about controlling and
> automating lights in a room like WiFi Bulbs or Floor Lamps switched on and off by a smart plug
> to light up for a specific need and create an **Ambience** that fits.


## See also

* [Examples](/examples/index.md) in detail
* [Boards](/boards/index.md) for Board specific configurations
* [Recipes](/recipes/index.md) for Element configurations

[Homeding library]: https://github.com/HomeDing
[NodeMCU]: /boards/nodemcu.md
