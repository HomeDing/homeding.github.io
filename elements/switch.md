---
title: Switch Element
layout: "page.njk"
icon: switch
tags:
  - "Element"
excerpt: >
  The SwitchElement switches a boolean output value and is used to toggle the state of a boolean values to on/off values
  by a single action.
---

The Switch Element can be triggered from a [DigitalIn Element](/elements/digitalin.md) with a momentary button and
the Web UI also allows toggeling using the web frontend.


## Web UI for the Switch Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

![Switch Web UI](/elements/switchui.png)

The Web UI for the Switch Element shows the actual state of the switch and the output value as a green/red signal.

## Element Configuration

<object data="/element.svg?switch" type="image/svg+xml"></object>

The following properties are available for configuration of the element:

> **value** -- An initial/default value can be set using the configuration.
> 
> **onValue** -- These actions will be emitted whenever the value has changed.
> 
> **label** -- The label is used together with the menu element to show the current selected value.

{% include "./elementproperties.md" %}

In some cases it is required to use a momentary input to change the state of a boolean value from on to off and reverse.

It is also possible to use multiple momentary input elements even from external devices located at different places for the same switch.

This Element supports [Persisting Current State of Elements](/elements/state.md) for the current values.

> **useState** -- set to true for saving the current values in the Device State.

## Inbound Actions

The actions received by the switch element can set the value to a specific logical level or toggle the existing level.

**switch/{id}/toggle=1** this inbound action will toggle the logical level of the switch from High to Low and reverse.

**switch/{id}/value={n}** this inbound action will set the logical level of the switch to the given value.
The passed value of `0` will set the value of the switch to `0`.
All other passed values will set the value of the switch to `1`.


## Outbound Actions

The actions emitted by the switch element are following the common naming conventions also found in other elements.

**onHigh** - these actions are send when a logical level from a digital input a timer or a switch is changing to a HIGH value.
The value given in the actions is `1`.

**onLow** - these actions are send when a logical level from a digital input a timer or a switch is changing to a LOW value.
The value given in the actions is `0`.

**onValue** - these actions are send when a logical level from a digital input a timer or a switch is changing its value.
The value given in the actions is `0` or `1`.


## State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


## Examples

The Digital In Element gets the level of an GPIO pin and when released sends an action to the switch element to toggle the value.

The switch has the current value modified and send a action to the digital output element driving the onboard LED at D4

![Input Switch Output](/recipes/in-switch-out.png)

``` json
{
  "digitalin": {
    "in": {
      "description": "Input momentary button",
      "pin": "D3",
      "invert": 1,
      "pullup": 1,
      "onLow": "switch/light?toggle=1"
    }
  },

  "switch": {
    "light": {
      "description": "Control light level",
      "value": 0,
      "onValue": "digitalout/led?value=$v"
    }
  },

  "digitalout": {
    "led": {
      "pin": "D0",
      "invert": "true",
      "description": "Builtin LED is on Port D0 = GPIO16"
    }
  }
}
```

To use a momentary button at another device the digital input there can use a remote device to send actions to the same switch element.

``` json
{
  "digitalin": {
    "in": {
      "description": "Input momentary button",
      "pin": "D3",
      "invert": 1,
      "pullup": 1,
      "onLow": "remote/light?toggle=1"
    }
  },

  "remote": {
    "light": {
      "description": "Light at kitchen device",
      "host": "kitchending",
      "remoteid": "switch/light"
    }
  }
}
```

## See also

* [Persisting Current State of Elements](/elements/state.md)
* [Rotary Element](/elements/rotary.md)
* [Menu Element](/elements/menu.md)
* [LED On/OFF Recipe](/recipes/led.md)
