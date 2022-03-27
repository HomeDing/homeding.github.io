---
title: The Analog Element
id: analog
tags: ["Element", "Input", "Sensor"]
layout: "page.njk"
description: Trigger events based on input voltage
excerpt: >
  The AnalogElement is used to capture the voltage level from the Analog Input pin and to emit corresponding events.
  It also handles some of the often occurring problems around capturing analog values.
---

<!--
## Web UI for the Analog Element

There is a dedicated card for this element available that will be used on the web server config and landing pages:
-->

Analog input signals can be used for a wide range of use cases like capturing values from sensors with an analog output signal.


## Handling Analog signals

There are some features implemented in the Analog Element that are useful when capturing analog signals.

1. The analog input signals like such from analog sensors often have the characteristic that they constantly change around an average value. In many cases these small changes are not relevant to start an action and can be ignored.

2. To allow using the analog element in these situations a hysteresis can be defined. A new value is then only triggering an action when the current input value has more difference to the last reported value than specified. This eliminates the actions caused by small changes.
A hysteresis of 10 is the default value but you can specify any other value and especially 0 that eliminates this effect.

3. In other situations it is only relevant that a analog value is below or above a reference value.
By defining a reference value the reference action will only be dispatched when the input value goes above or below.

On the ESP8266 chip the input value has a precision of 2^10 bits and the input value is represented as a value for 0 to 1024 measuring a voltage at the pin from 0 to 1 volts. The input measuring should not occur while the there is data transmitted over the WiFi because the value will be inaccurate.


## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?analog" type="image/svg+xml"></object>

**readtimems** - The time between capturing input values in milliseconds.

**hysteresis** - The value action is emitted only when the value differs more than defined by hysteresis. Default=10.

**reference** - The reference action is emitted when the value goes below / above the reference value.

**mapInMin** - This is the lower bound of the raw value. This will be mapped to the value given by **mapOutMin**.

**mapInMax** - This is the upper bound of the raw value. This will be mapped to the value given by **mapOutMax**.

**mapOutMin** - This is the lower bound of the output value.

**mapOutMax** - This is the upper bound of the output value.

**onValue** - These actions are emitted when the input level has changed.

**onReference** -These actions are emitted when the input level goes across the reference level.

**onHigh** - These actions are send when the value is above the reference value.
The value given in the actions is `1`.

**onLow** - These actions are send when the value is below the reference value.
The value given in the actions is `0`.

The ESP8266 chip has only one analog input pin so specifying a pin is not required.

{% include "./elementproperties.md" %}

### Example Configuration

``` json
{
  "analog": {
    "0": {
      "reference" : 500,
      "onvalue": "device/0?log=analogvalue=$v",
      "onreference": "device/0?log=analogref=$v"
    }
  }
}
```

**Examples**

A water sensor that is used to detect water on the floor may have some small current leakages but when there is real water coming to the sensor the measured value rises significantly. A reference action can be the solution.

A analog sensing element for weight can produce many values around. When the weight changes significantly a value action can be used. Small changes that occur by movements of the weight can be filtered out by specifying a hysteresis value.


## State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**rawvalue** - This is the original value from the ADC pin.

**value** - When no mapping boundaries are given this is equal the raw value.
When mapping boundaries are given this is the calculated value.

**reference** - This is 1 when the value is above the reference value otherwise 0.


### Example State

``` json
{
  "analog/0": {
    "active":"true",
    "value":"13",
    "rawvalue":"721",
    "reference":"0"
  }
}
```


## See also

* <https://www.esp8266.com/wiki/doku.php?id=esp8266_gpio_pin_allocations>

## Tags

#element #input