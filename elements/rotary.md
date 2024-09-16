---
title: Rotary Element
icon: rotary
tags:
  - "Element"
  - "Input"
layout: "page.njk"
excerpt: >
  The RotaryElement is used to capture increments and decrements for values using a rotary encoder.
---

It can be used in combination with a [Value Element](/elements/value.md) to define a logical or numeric value that can be changed using the rotary encoder.

![Rotary Encoder](/sensors/rotary.jpg "w200")

This element uses the RotaryEncoder library available in the Arduino Library Manager.


## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?rotary" type="image/svg+xml"></object>

**pin1**\* -- Specifies the hardware number of the first input pin.

**pin2**\* -- Specifies the hardware number of the second input pin.

**step** -- Default:1 the increment/decrement value of one rotary step.

**value** -- current value.

**onValue** -- These actions are emitted when the value has changed. The delta from the last position is used as the value in this event.

{% include "./elementproperties.md" %}

\* This parameter must be specified.


## Example Configuration

``` json
{
  "rotary": {
    "in": {
      "description": "Rotary Input",
      "pin1": "D5",
      "pin2": "D6",
      "step": 10,
      "onValue": "value/led?up=$v"
    }
  }
}
```


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


### Example State

The internal value can be seen in the rotary state but should not directly be used as a value.

``` json
{
  "rotary/in": {
    "active": "true",
    "value": "4"
  }
}
```


## See also

* [Value Element](/elements/value.md)
* [Recipe: Dimming a LED using a Rotary Encoder](/recipes/ledrotary.md)
