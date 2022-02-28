---
title: Examples and Stories
tags: Example, Story
---

# {{title}}


## Examples

These examples that come with the library. They are used as the base for the educative stories that explain 


**[Standard Example](/examples/standard.md)**

> This example has a sketch and the web site for a NodeMCU or similar board. Most of the recipes work with this sketch.


**[Minimal Example](/examples/minimal.md)**

> This example shows how to reduce the number of available elements and use only a bare minimum part of the embedded web site 
> so the whole solution fits into a ESP8266 board with only 1 MByte Flash memory like the ESP-01.


**[Probe Example](/examples/probe.md)**

> shows how to implement special, local elements that can retrieve sensor data from INA219 and INA266 current and voltage sensors to build a low-voltage power consumption logging device.
> It can be used with any board that has a 4MByte Flash memory like the [nodemcu boards](/boards/nodemcu.md).


**[Develop Example](/examples/devding.md)**

> This example is very like the [standard example](/examples/standard.md) but has some add-ons that help during development.
> It can be used with any board that has a 4MByte Flash memory like the [nodemcu boards](/boards/nodemcu.md).


**[Radio Example](/examples/radio.md)**

> t.b.d.


<!-- * **[RFBridge](/examples/_RFGateway.md)** -->


## Stories

The stories provide a full documentation required to build a specific device for a specific need
with pictures and extensive step-by-step documentation.

These examples can be extended or modified by configuration. Examples on how to configure elements
can be found  in the [recipes collection](/recipes/index.md) and in the [elements documentation](/elements/index.md).


**Building a Simple Sensor device**

> The [Outdoor Sensor Story](/stories/story-outdoorsensor.md) is about
> how to build a device that simply captures the air temperature and humidity parameters
> from a DHT22 sensor by using the low-code [Homeding library] and provide a graph with latest values.


**Building a Air Quality Sensor device**

> The [Air Quality Sensor](/stories/story-airquality.md) is about
> how to build an indoor air quality sensor.
>
> The sensors used here are the BME680 for getting temperature, humidity, pressure 
> and organic gas values and the PMS5003 to get density of the micro particles.


**Building a Weather Display**

> The [Weather Display](/stories/story-weatherdisplay.md) is about
> how to build a device with a display to show actual weather conditions from a remote sensor
> and the future weather from an internet service.


## See also

* [Examples](/examples/index.md) in detail
* [Boards](/boards/index.md) for Board specific configurations
* [Recipes](/recipes/index.md) for Element configurations

[Homeding library]: https://github.com/HomeDing