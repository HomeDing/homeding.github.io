---
title: SHT20 Element
icon: dht
tags: ["Element", "Input"]
layout: "page.njk"
excerpt: >
  The SHT2x sensors provide some high precision temperature and humidity sensors that communicate on the I2C bus.
---

In contrast to other sensors like [DHT20](/elements/dht.md) and [Dallas](/elements/dallas.md) no proprietary protocol on the wire is used as data is exchanged over I2C.

| parameter                     | range                                    |
| ----------------------------- | ---------------------------------------- |
| Supply voltage                | DC : 2.1 - 3.6 V                         |
| Measuring range (humidity)    | 0 ~ 100 % RH                             |
| Measuring range (temperature) | -40 ~ +125 °C                            |
| Humidity accuracy             | ± 3 % RH                                 |
| Temperature accuracy          | ± 0.3 °C                                 |
| Resolution                    | Temperature: 0.04°C, Humidity: 0.01 % RH |
| Response time                 | Temperature: 5 - 30 s, Humidity: 8 s     |
| Interface                     | i2c signal                               |
| i2c address                   | 0x40                                     |

SHT40 is replacement offering some faster response times and better accuracy.

There are different housings and boards for the sensor available.

![SHT20 Sensor](/elements/sht20.jpg)


## Web UI for the SHT20 Element

There is a card for this element available that shows the actual temperature and humidity.

![SHT20 Sensor UI](/elements/sht20ui.png)


## Using the SHT20 Element

The SHT20 Element is not part of the core set of elements
because it is not used very frequently.
It can be registered and added to the firmware by including the definition of
HOMEDING_INCLUDE_SHT20 in the sketch:

``` CPP
#define HOMEDING_INCLUDE_SHT20
```

This element requires no extra library and the calculation for temperature and humidity from the raw values is included in the element implementation.


## Element Configuration

The following properties are available for configuration of the element:

> **address** - The i2c address of the sensor. The default value is 0x40.
>
> **onTemperature** - These actions are emitted by the element when the temperature gets a new value. The action will not be sent when reading the sensor values that stay the same.
>
> **onHumidity** - These actions are emitted by the element when the humidity gets a new value. The action will not be sent when reading ne sensor values that stay the same.

{% include "./sensorproperties.md" %}

{% include "./elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{
  "sht20": {
    "0": {
      "description": "SHT20 Sensor",
      "address": "0x40",
      "onTemperature": "device/0?log=temp: $v\u00dfC",
      "onHumidity": "device/0?log=hum: $v%"
    }
  }
}
```


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**temperature** - The last read temperature value from the sensor.

**humidity** - The last read humidity value from the sensor.


### Example State

``` json
{
  "sht20/0": {
    "active":"true",
    "temperature":"19.92",
    "humidity":"53.4"
  }
}
```


## See Also

* <https://sensirion.com/us/products/catalog/SHT20/>
* <https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Datasheets/Sensirion_Humidity_Sensors_SHT20_Datasheet.pdf>
* <https://github.com/u-fire/uFire_SHT20/blob/master/src/uFire_SHT20.cpp>
