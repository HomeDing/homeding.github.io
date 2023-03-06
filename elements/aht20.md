---
title: AHT20 Element
icon: dht
tags: ["Element", "Sensor"]
layout: "page.njk"
description: Support of the AHT20 air temperature and humidity sensor chips.
excerpt: >
  The AHT20Element allows retrieving temperature and humidity values from the AHT20 sensors
  from aosong.
---

This temperature and humidity sensor from [aosong](http://www.aosong.com/)
is using the i2c bus for communication and offers a 12 bit resolution for values.

| parameter                     | range                                     |
| ----------------------------- | ----------------------------------------- |
| Supply voltage                | DC : 2.2 - 5.5V                           |
| Measuring range (humidity)    | 0 ~ 100 % RH                              |
| Measuring range (temperature) | -40 ~ + 85 °C                             |
| Humidity accuracy             | ± 2 % RH ( 25 °C )                        |
| Temperature accuracy          | ± 0.3 °C                                  |
| Resolution                    | temperature: 0.01 °C Humidity: 0.024 % RH |
| Response time                 | temperature: 5s humidity: 8s 1/e (63%)    |
| Interface                     | I2C signal                                |
| i2c address                   | 0x38                                      |

This chip is used inside some packaged sensors like the DHT20 and AM2301B.


## Web UI for the AHT20 Element

There is a dedicated card for this element available to show the actual temperature and humidity.

![T/H Sensor UI](/elements/dhtui.png)


## Using the AHT20 Element

The AHT20 Element is not part of the core set of elements. is is not requiring any library as dependency.

The `HOMEDING_INCLUDE_AHT20` must be defined in the main sketch to compile and register the element.

``` cpp
// Use some more Elements that need additional libraries
#define HOMEDING_INCLUDE_AHT20
#include <HomeDing.h>
```

## Connecting a AHT20 Sensor

The sensor is using the I2C bus for communication and is usually placed on a adapter board
giving access to the required pins.

Using the default I2C bus pins:

| Signal                               | ESP8266   | ESP32 | Sensor  | Description                     |
| ------------------------------------ | --------- | ----- | ------- | ------------------------------- |
| <span class="gpio black">GND</span>  | GND       | GND   | GND     | Ground for I2C and Power Supply |
| <span class="gpio red">VCC</span>    | 3.3v      | 3.3v  | VCC/VDD | Power Supply                    |
| <span class="gpio blue">SDA</span>   | GPIO4(D2) | IO21  | SDA     | I2C Data Signal                 |
| <span class="gpio yellow">SCL</span> | GPIO5(D1) | IO22  | SCL     | I2C Clock Signal                |

The required power for the sensor is low and the 3.3V from most CPU boards can be used.

The common i2c bus is configured in the [device element](/elements/device.md).
For more details on using the i2c bus and specifying pins see [I2C bus](/dev/i2c.md).


## Element Configuration

<object data="/element.svg?aht20" type="image/svg+xml"></object>

The following properties are available for configuration of the element:

> **onTemperature** -- These actions are emitted by the element when the temperature gets a new value.
> The action will not be sent when reading the sensor values that > stay the same.
>
> **onHumidity** -- These actions are emitted by the element when the humidity gets a new value. 
> The action will not be sent when reading ne sensor values that stay > the same.
>
> **powerinverse** -- This property controls the physical level of the powerpin. When set to true the sensor is enabled by creating a physical LOW level.

{% include "./sensorproperties.md" %}

{% include "./elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{
  "aht20": {
    "th": {
      "title": "AHT20",
      "description": "Temperature and Humidity sensor",
      "readtime": "30s",
      "onTemperature": "device/0?log=temp: $v\u00dfC",
      "onHumidity": "device/0?log=hum: $v%"
    }
  }
}
```


## Element State

The following properties are available with the current values at runtime

> **active** -- Is set to true when the element is active.
>
> **temperature** -- The last read temperature value from the sensor.
>
> **humidity** -- The last read humidity value from the sensor.


### Example State

``` json
{
  "aht20/th": {
    "active":"true",
    "temperature":"27.41",
    "humidity":"38.10"
  }
}
```


## See Also

* <http://www.aosong.com/en/products-32.html>
* <https://www.adafruit.com/product/5183>
* <https://learn.adafruit.com/modern-replacements-for-dht11-dht22-sensors>
* <https://kandrsmith.org/RJS/Misc/Hygrometers/calib_many.html>
