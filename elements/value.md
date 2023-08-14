---
title: Value Element
icon: value
tags: ["Element"]
layout: "page.njk"
excerpt: >
  The ValueElement combines receiving modifying actions for an internal state value and sending actions on changing the value.
  This can e.g. be used to drive a LED or a relay.
---

## Web UI

On the board page this element is presented by using a specialized widget that visualizes and enables controlling the actual value:

![Value Widget](/elements/valueui.png)

The slider can be used to adjust the value interactively and the arrows allow single step changes.

The setup icon opens a dialog to change the configuration properties.


## Value Properties and actions

The Value Element is used to implement a property or parameter as a single value independent from a specific Element. The Value Element can send actions to other Elements whenever the value changes.

The values itself can be modified by other Elements using several modifying actions and by the corresponding web UI.

<!-- 
ToDo: A default value can be specified in the configuration but can be saved to  survive restarting the device.
  -->


### Example

Two Buttons should be used to increment and decrement the brightness of an attached LED.

### Solution

* Two ButtonElements are created to capture this input from digital input lines.
* Each button will trigger an up / down action for a ValueElement.
* The ValueElement defines the default value and valid range for the value.
* When the value changes the new value is sent to the PWMOutElement.

Here the ValueElement can help. It allows

* Setting a default value used at startup
* Get an up action to increment the value
* Get a down action to decrement the value
* Get a set action to set the value (e.g. to 0)
* Can limit the value to a lower and upper limit
* Send out an action when the value changes.

## Element Configuration

<object data="/element.svg?value" type="image/svg+xml"></object>

The following properties are available for configuration of the element.

> **min** -- Defines the minimum of the value.
> 
> **max** -- Defines the maximum of the value.
> 
> **step** -- The value will be incremented / decremented by the multiple of the step value
> when using the up / down actions.
> 
> **value** -- An initial/default value can be set using the configuration.
> 
> **onValue** -- These actions will be emitted whenever the value has changed.
> 
> **up** -- the value can be incremented by the passed value. Negative values are allowed.
> 
> **down** -- the value can be decremented by the passed value.
> 
> **label** -- The label is used together with the menu element to show the current selected value.

{% include "./elementproperties.md" %}

This Element supports [Persisting Current State of Elements](/elements/state.md) for the current values.

> **useState** -- set to true for saving the current values in the Device State.


## Examples for actions

The value element accepts actions like

* `value/led?up=1` to increment by 1
* `value/led?up=10` to increment by maximal 10
* `value/led?down=1` to decrement by 1
* `value/led?up=-1` to decrement by 1

## Element State

The current value is reported as the state of a value element.

``` json
{
  "value/volume": {
    "active": "true",
    "value": "4"
  }
}
```

## Example Configuration

``` json
{
  "value": {
    "volume": {
      "min": 0,
      "max": 15,
      "value": 3,
      "onvalue": "radio/r?volume=$v"
    }
  }
}
```

## See also

* [Persisting Current State of Elements](/elements/state.md)
* [Rotary Element](/elements/rotary.md)
* [Menu Element](/elements/menu.md)
* [Dimmable LED recipe](/recipes/leddim.md)


