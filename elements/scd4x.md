---
title: SCD4x Element for CO2 Sensors
icon: no
tags: ["Element", "Sensor", "WIP"]
layout: "page.njk"
excerpt: >
  The SCD40 and SCD41 sensors from sensirion are available on breakout boards to meassure the CO2 in the air by providing values in ppm units.
---

The sensor chips are pre-adjusted to offer reasonable output values.
For providing exact values the temperature and humidity is measured and available as well.

The SCD40 and SCD41 sensors differ in resolution and the single measurement mode is only supported by the SCD41 version.

Both sensors are using the I2C bus for communication and the SCD4XElement implementation allows configuration
and creating actions by reading probe values from the sensors.
