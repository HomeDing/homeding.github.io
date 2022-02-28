---
title: Menu Element
id: menu
tags: ["Element"]
excerpt: >
  The MenuElement allows controlling multiple values or switches by using a single rotary encoder.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::

In the configuration a list of elements is defined that can be controlled.

To select the actual element from the list the **select** action is used typically a **DigitalInputElement** with a momentary button can be used.
The select input is used to circle through the list of values.

To change the selected value a **RotaryElement** or up/down buttons can be used.

Some rotary encoders already have a built-in momentary button when pressing the knob down. The menu element is especially made for using these as input but an extra button works well also.

For visualization of the actual selected value actions are created by the menu element that can be sent to display elements.

The Elements that can be controlled by the MenuElement are the **ValueElement** with numbers and the **SwitchElement** with the values 0 and 1. There is actually a direct dependency between the MenuElement and these value elements because the menu implementation directly knows and uses the public members of the ValueElement and SwitchElement implementation class.
 

## Web UI for the menu element

There is no special card made for this element because the values can be controlled directly. 


## Using a display

For simple displays that can only display a limited number of characters the `onDisplay` action can be used to show the id and current value of the selected element.

When using a display with some higher resolution the id and value can be shown at different textElements using the `onMenu` and `onValue` actions.

<!-- Display photo ??? -->

This is a picture of the menu on a LCD display from the radio example.
The fist line is used for permanently showing the frequency and signal strength while the 2. line is used to display the menu and the station name from the RDS signal.

## Actions and input

### Select actions

The select input allows selecting one of the values that is part of the menu.
Every incoming `select` action will advance the menu in the list of values by one. When the last value is reached the first value will be selected.

Usually this event can be directly bound to a digitalinput element as shown in the configuration example to scroll through the menu items.

The select action can also be send using the <http://homeding/$board/menu/0?select=1>

### Value actions

The value actions are used to change the selected value.
 
Every incoming value action will be forwarded to the selected value using a `up` action with the given value from the incoming event. This is typically an increment or decrement by 1 but the value element can be configured for other steps. 

Usually 2 buttons for up/down or a rotary encoder can be used to create these actions as shown in the configuration example.

In the Radio example the menu element is used to control volume, the frequency and some switches like the mono-switch using a rotary encoder and a button.

## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?menu" type="image/svg+xml"></object>

**onDisplay** These actions will be dispatched whenever another value is selected or the value has changed.

**onValue** These actions will be dispatched whenever the value has changed.

**onMenu** These actions will be dispatched whenever another value is selected.

### Configuration Example

This example shows how to control 2 values using a digitalin and a rotary element:

Rotary, digitalin ---> menu

``` json
{
  "rotary": {
    "0": {
      "description": "Rotary Input",
      "pin1": "D5",
      "pin2": "D6",
      "step": 1,
      "onchange": "menu/0?value=$v"
    }
  },
  "digitalin": {
    "0": {
      "description": "select",
      "pin": "D7",
      "inverse": "true",
      "pullup": "true",
      "onlow": "menu/0?select=1"
    }
  },
  "value": {
    "volume": {
      "min": 0,
      "max": 15,
      "value": 3,
      "onchange": "radio/r?volume=$v"
    },
    "frequency": {
      "min": 8700,
      "max": 10800,
      "step": 10,
      "value": 8930,
      "onchange": "radio/r?frequency=$v"
    }
  },
  "menu": {
    "0": {
      "loglevel": 2,
      "onDisplay": "device/0?log=menu-v:$v"
    }
  }
}
```


## See also

* [Elements](/elements/overview.md)
* [Radio Example](/examples/radio.md)