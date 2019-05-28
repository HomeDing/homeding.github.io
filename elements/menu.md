# Menu Element

The MenuElement allows controlling multiple value elements by sharing the same input elements

* one [rotary encoder](elements/rotary) or 2 up/down [digitalin elements](elements/digitalin) with buttons
* one [digitalin element](elements/digitalin) with a button to **select**
* and a display to show the actual selected value.

The select input is used to circle through the list of values while the rotary encoder will change the value.

Some rotary encoders already have a built-in momentary button when pressing the knob down. The menu element is especially made for using these as input but an extra button works well also.

There is actually a direct dependency between the menu element and the value element because the menu implementation directly knows and uses the public members of the ValueElement class.

## Web UI for the menu element

There is no special card made for this element because the values can be controlled directly. 

## Using a display

For simple displays that can only display a limited number of characters the `onDisplay` action can be used to show the id and current value of the selected element.

When using a display with some higher resolution the id and value can be shown at different textElements using the `onMenu` and `onValue` actions.

Display photo ???

This is a picture of the menu on a LCD display from the radio example.
The fist line is used for permanently showing the frequency and signal strength while the 2. line is used to display the menu and the station name from the RDS signal.

## Actions and input

### Select actions

The select input allows selecting one of the values that is part of the menu.
Every incoming `select` action will advance the menu in the list of values by one. When the last value is reached the first value will be selected.

Usually this event can be directly bound to a digitalinput element as shown in the configuration example to scroll through the menu items.

### Value actions

The value actions are used to change the selected value. 
Every incoming value action will be forwarded to the selected value using a `up` action with the given value from the incomming event. This is typically an increment or decrement by 1 but the value element can be configured for other steps. 

Usually 2 buttons for up/down or a rotary encoder can be used to create these actions as shown in the configuration example.

In the Radio example the menu element is used to control volume, the frequency and some switches like tjhe mono-switch using a rotary encoder and a button.

## Element configuration

**onDisplay** These actions will be dispatched whenever another value is selected or the value has changed.

**onValue** These actions will be dispatched whenever the value has changed.

**onMenu** These actions will be dispatched whenever another value is selected.

### Configuration Example

This example shows how to control 2 values using a digitalin and a rotary element:

Rotary, digitalin ---> menu

```JSON
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

* [availableelements](availableelements)
* [Radio Example](examples/radio)