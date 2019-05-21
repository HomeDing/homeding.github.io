# Menu Element ???

`**DRAFT**`

The MenuElement allows controlling multiple value elements using
* one rotary encoder or up/down buttons
* one **selegt** button
* and a display

to show the actual menu selection and value.

Some rotary encoders already have a built-in momentary button when pressing the knob down. The menu element is especially made for using these as input but an extra button works well also.

There is actually a direct dependency between the menu element and the value element because the menu implementation directly knows and uses the public members of the ValueElement class.

## web UI 

Picture???

Display foto

## Actions and input

### Select actions

The select input allows selecting one of the values that is part of the menu.
Every incoming `select` action will advance the menu in the list of values by one. When the last value is reached the first value will be selected.

Usually this event can be directly bound to a digitalinput element as shown in the configuration example to scroll through the menu items.

### Value actions

The value actions are used to change the selected value. 
Every incoming value action will be forwarded to the selected value using a `up` action with the given value from the incomming event.

Usually 2 buttons for up/down or a rotary encoder can be used to create these actions as shown in the configuration example.

In the Radio example the menu element is used to control volume, the frequency and the mono-switch using a rotary encoder and a button.

## Element configuration

**indicator** A single chatacter is used as an indicator of the current menu or value that will be changed when using the rotary encoder.

Index the actual value that is focussed  

**onDisplay** the action that will be dispatched whenever a change happens

**onValue**

**onMenu**


displaytext element

### Configuration Example

Rotary, digitalin ---> menu

List of elements with label
Turn to change
Press to select

1: label
2: other value label
3: other button

Press

Label: current value
turn to change
press to Set and return

Displaytext

Number: label
Label: value

```JSON
{"menu": {
  "radio": {
    display: "displaytext/set",
    menuprefix: "$v:",
    valueprefix: "$v=",
    items: "type/id,type/id,...",
    Ilabels: "Volume,Frequency"
  }
}
}
```

Later: labels are fetched from config.json


## See also

* [availableelements](availableelements)
* [Radio Example](examples/radio)

