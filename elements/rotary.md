---
title: The Rotary Element
---

# {{data.title}}

::: excerpt rotary
The RotaryElement is used to capture increments and decrements for values using a rotary encoder.
:::

It can be used in combination with a [Value Element](/elements/value.md) to define a logical or numeric value that can be changed using the rotary encoder.

![Rotary Encoder](/sensors/rotary.jpg "w200")

This element uses the RotaryEncoder library available in the Arduino Library Manager.

<!-- 
## Web UI for the Rotary Element

There is a dedicated card for this element available that will be used on the web server config and landing pages:

![Rotary Web UI](/elements/rotaryui.png)

See example in [value element](/elements/value.md).
-->


## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?rotary" type="image/svg+xml"></object>

| Property | Description                                                |
| -------- | ---------------------------------------------------------- |
| `pin1`*  | Specifies the hardware number of the first input pin.      |
| `pin2`*  | Specifies the hardware number of the second input pin.     |
| `step`   | Default:1 the increment/decrement value of one rotary step |
value Internal starting value. (deprecated)
| `onValue` | These actions are emitted when the value has changed. The delta from the last position is used as the value in this event.

\* This parameter must be specified.


## Example Configuration

```json
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

```json
{
  "rotary/in": {
    "active": "true",
    "value": "4"
  }
}
```


## See also

* Value Element
* [Recipe: Dimming a LED using a Rotary Encoder](/recipes/ledrotary.md) 

## Tags

#element #input