---
title: Dallas Element
icon: dallas
tags: ["Element", "Sensor"]
layout: "page.njk"
description: Support of the Dallas / DS18B20 based sensors.
excerpt: >
  The DallasElement allows retrieving temperature values from DS18B20 aka. Dallas Temperature sensors
  and creates actions when new values are available.
---

![Dallas pins](/elements/dallaspins.jpg)

The DS18B20 is a temperature sensor most often in a simple to-92 housing like a transistor.
Other forms and types are also available including those that can be in contact with water
or other liquids without getting damaged.

The data transmission is using 1 wire only (the OneWire protocol).
In addition to the sensor a 4.7k resistor is required to pull up the data line.

There have been older versions of this chip like DS1820 and DS18S20 and less accurate sensors like the DS18B20 so today the DS18B20 version is the most current one so only this type is supported by the element implementation.

See information in the links to application notes below.


## Web UI for the DS18B20 Element

There is a dedicated card for this element available that shows the actual temperature.

![Dallas Sensor UI](/elements/dallasui.png)


## Using the Dallas Element

The Dallas Element is not part of the core set of elements because the low level communication to the chips the `OneWire` library is used and needs to be installed using the Arduino library manager.

The `OneWire`and the `DallasTemperature` library is required by this element
and installed as dependency when installing the library.

The ``HOMEDING_INCLUDE_DALLAS`` must be defined in the main sketch to compile and register the element.

``` cpp
// Use some more Elements that need additional libraries
#define HOMEDING_INCLUDE_DALLAS
#include <HomeDing.h>
```


## Connecting a Sensor

The Sensor can be driven by using the GND and 3.3 VCC from the processor board and only one data line to a free GPIO port.

In addition to the sensor a 4.7k resistor is required to pull up the data line.

| ESP8266   | ESP32 | DS18B22 | Description                      |
| --------- | ----- | :------ | -------------------------------- |
| GND       | GND   | 1 GND   | Ground                           |
| GPIO2(D4) | IO32  | 2 Data  | Data  with 4.7 K Resistor to VCC |
| 3.3v      | 3.3v  | 3 VCC   | Power Supply                     |


## Element Configuration

<object data="/element.svg?dallas" type="image/svg+xml"></object>

The following properties are available for configuration of the element:

> **pin**\* - Specifies the hardware number of the pin that is used to connect the Dallas sensor for data.
>
> **onTemperature** - These actions are emitted by the element when the temperature gets a new value.
> The action will not be sent when reading ne sensor values that stay the same.

{% include "./sensorproperties.md" %}

{% include "./elementproperties.md" %}

\* This parameter must be specified.


### Configuration Example

This example shows how to configure this element:

``` json
{
  "dallas": {
    "on": {
      "pin": "D4",
      "readtime": "10s",
      "resendtime": "60s",
      "ontemperature": "displaytext/temp?value=$v"
    }
  }
}
```

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the Element is active.

**temperature** - The last read temperature value from the sensor.


### Example State

``` json
{
  "dallas/on": {
    "active":"true",
    "temperature":"27.30"
  }
}
```


## See also

* OneWire library: https://github.com/PaulStoffregen/OneWire
* ... and doku: https://www.pjrc.com/teensy/td_libs_OneWire.html
* DataSheet: https://datasheets.maximintegrated.com/en/ds/DS18B20.pdf
* <https://webnist.de/ds18b20-temperatursensor-am-esp8266-mit-2-aa-batterien-verwenden/>


Notes from manufacturer:
* https://www.maximintegrated.com/en/design/technical-documents/app-notes/4/4377.html
* https://www.maximintegrated.com/en/design/technical-documents/app-notes/1/162.html
