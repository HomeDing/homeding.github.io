---
title: Probe example
layout: "page.njk"
---

:::excerpt
This example shows how to implement special, local elements
that can retrieve sensor data from INA219 and INA266 current and voltage sensors
to build a low-voltage power consumption logging device.
:::

This device is made to probe voltage and current on the power supply of another device for a long time (like days) and log the probe values into a log element to be inspected.

The two sensors supported in this example behave very similar but are different in the register layout and capabilities. Each of them is supported using a specific element and a specific Arduino library. Document on the elements can be found here:

* [INA219 Element](/elements/ina219.md)
* [INA226 Element](/elements/ina226.md)

They are doumented 

The display is there to see the actual values.


## Web User interface

The probe device can be accessed using a standard browser and displays the current values as well as the log from the current measures:

![INA219 Sensor](/examples/probe-ui.png "w600")


## INA219 Sensor

![INA219 Sensor](/examples/probe-ina219.jpg "w600")

This example adds a INA219 element that retrieves data from the INA219 sensor using the INA219_WE library.

The shown sensor board has a 0.1 Ohm shunt resistor and can meassure event low current values.

In the configuration some options can be modified. They are related to the features of the underlying library.

**Example:**

``` json
{
  "ina219": {
    "0": {
      "title": "sensor",
      "description": "Voltage and Current Sensor",
      "range": "32",
      "samples": "12bit",
      "gain": "320",
      "warmuptime": "2s",
      "readtime": "10s",
      "onVoltage": "displaytext/v?value=$v,log/v?value=$v",
      "onCurrent": "displaytext/a?value=$v,log/a?value=$v",
      "onPower": "displaytext/p?value=$v"
    }
  }
}
```


## INA226 Sensor

![INA226 Sensor](/examples/probe-ina226.jpg "w600")

This example adds a INA226 element that retrieves data from the INA226 sensor using the INA226_WE library.

The shown sensor board has a 0.002 Ohm shunt resistor and can measure up to 20 A. When using it for low-current values the resolution doesn't fit. There are other boards with a different shunt resistor that fits better for low-current measurements.

In the configuration some options can be modified. They are related to the features of the underlying library.

**Example:**

``` json
{
  "ina226": {
    "0": {
      "title": "sensor",
      "description": "Voltage and Current Sensor",
      "shunt": "0.002",
      "range": "1",
      "average": "4",
      "warmuptime": "2s",
      "readtime": "10s",
      "onVoltage": "displaytext/v?value=$v",
      "onCurrent": "displaytext/a?value=$v,log/a?value=$v",
      "onPower": "displaytext/p?value=$v"
    }
  }
}
```

## Display

In the example the display is used to show the current values from the sensor.

It is configured in **env.json**. Other supported display can also be used.

``` json
{
  "displaysh1106": {
    "0": {
      "description": "local display",
      "address": "0x3C",
      "height": 64
    }
  }
}
```

In the **config.json** 3 output text placements are defined to show voltage, current and power measurements:

``` json
{
  "displaytext": {
    "v": {
      "x": 0,
      "y": 0,
      "postfix": " V",
      "description": "voltage"
    },
    "a": {
      "x": 0,
      "y": 12,
      "postfix": " mA",
      "description": "Ampere"
    },
    "p": {
      "x": 0,
      "y": 24,
      "postfix": " mW",
      "description": "Power"
    }
  }
}
```

You can see in the sensor configuration the actions that are sent to the displaytext elements.


## Logging

A [Log Element](/elements/log.md) is used to capture the current value from the sensor.

``` json
{
  "log": {
    "a": {
      "title": "mA",
      "description": "log current",
      "averagetime": "00:05:00",
      "filesize": "10000",
      "filename": "/log-a.txt",
      "yformat": "num:2"
    },
    "v": {
      "title": "V",
      "description": "log voltage",
      "averagetime": "00:05:00",
      "filesize": "10000",
      "filename": "/log-v.txt",
      "yformat": "num:2"
    }
  }
}
```

The log file can hold about 640 values per 10 kByte. Recording a 5 min average probe values that are taken every 10s:

* ina219/0?readtime=10s
* log/v?averagetime=00:05:00

This allows storing about 2-4 days of logging information.


## See also

* [examples](/examples/index.md)
* [Boards overview](/boards/index.md)
* [Recipes](/recipes/index.md)

