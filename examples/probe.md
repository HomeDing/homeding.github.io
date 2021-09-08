# Probe example

:::excerpt
This example shows how to implement special, local elements
that can retrieve sensor data from INA219 and INA266 current and voltage sensors
to build a low-voltage power consumption logging device.
:::


## Web User interface

The probe device can be accessed using a standard browser and displays the current values as well as the log from the current measures:

![INA219 Sensor](/examples/probe-ui.png "w400")


## INA219 Sensor

![INA219 Sensor](/examples/probe-ina219.jpg "w600")

This example adds a INA219 element that retrieves data from the INA219 sensor using the INA219_WE library.

The shown sensor board has a 0.1 Ohm shunt resistor and can meassure event low current values.

In the configuration some options can be modified. They are related to the features of the underlying library.

**Example:**

```JSON
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
      "onVoltage": "displaytext/v?value=$v",
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

```JSON
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

```JSON
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

```JSON
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

```JSON
{
  "log": {
    "a": {
      "title": "mA",
      "description": "log current",
      "x-averagetime": "00:02:00",
      "filesize": "10000",
      "filename": "/a-log.txt",
      "yformat": "num:2"
    }
  }
}
```

## See also

* [examples](/examples/index.md)
* [Boards overview](/boards.md)
* [Recipes](/recipes/index.md)

