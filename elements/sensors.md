---
title: Sensor Element Implementation
id: sensor
tags: ["Element", "Implementation"]
layout: "page.njk"
---

Many sensor elements offer similar functionality and configuration
and therefore are based on the abstract implementation of the "SensorElement" class.

These sensor elements enable reading values from a sensor chip on a specific time interval. When new values could be retrieved these are emitted to other elements using actions.

On the board of the device in the Web UI the actual sensor values are shown as well.

The HomeDing library supports a collection of common sensor chips:

* [Dallas Element](/elements/dallas.md) supports the DS18B20 aka. Dallas Temperature sensor.
* [DHT Element](/elements/dht.md) supports the DHT11, DHT22 and AM2302 temperature+humidity sensors.
* [AM2320 Element](/elements/am2320.md) supports the AM2302 temperature+humidity sensor.
* [SHT20 Element](/elements/sht20.md) supports the SHT2x high precision temperature and humidity sensors.
* [BMP280 Element](/elements/bmp280.md) supports the BMP280 temperature and absolute barometric pressure sensor.
* [BMP680 Element](/elements/bme680.md) supports the BME680 temperature, humidity, pressure and gas resistance sensor.
* [PMS Element](/elements/pms.md) supports the PMS5003 sensor by plantdata to count micro particles in the air.
* [INA219 Element](/elements/ina219.md) using the INA219 power consumption chip.
* [INA226 Element](/elements/ina226.md) using the INA219 power consumption chip.


## Common Sensor Implementation

To simplify the implementation of sensors like these there is a special Element with some common functionality available.
It is used as a base class for Elements that implement the data exchange with a special sensor chip.

Using a sensor often requires to get data probes on a regular basis e.g. every minute or every 5 minutes. Waiting for the next timeslot to take a probe is implemented by defining the `readtime` property on any element configuration.

Only the 2 functions `GetProbe()` and `SendValues()` need to be implemented instead of the `loop()` function.


## Element Configuration

{% include "./sensorproperties.md" %}

{% include "./elementproperties.md" %}


## Get Sensor Data

> bool GetProbe(&values);

When deriving from the SensorElement class the `GetProbe(&values)` function will be called when time has come.

This function will be called similar to the `loop()` function as long as it returns `false` to indicate that retrieving the data has not been completed. This may be required when reading a sensor includes waiting for the sensor being available or data being transmitted to the board.

When returning `true` the data retrieval is assumed to be completed. The data has to be returned by using the passed string parameter.

When returning `true` and an empty string back it is assumed that the sensor cannot be reached and this will end the current data retrieval.


## Sending Actions With Sensor Data.

> void SendValues(&values);

The `SendValues()` function will be called with the latest retrieved data and when actions are defined the sensor specific element will send them out.

The state of the element also needs to be updated.


## Detect non changing values

The data returned by the `GetProbe()` function will be compared against the last retrieved values. If there is no difference no action will be sent immediately.


## Resend values after some time

When data from the sensor has not changed it may be necessary to trigger the actions from time to tome e.g. to inform remote elements about the actual values.

By specifying the `resendtime` property the resent values are sent even when not changed. 
