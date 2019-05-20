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


## Element configuration

**indicator** A single chatacter is used as an indicator of the current menu or value that will be changed when using the rotary encoder.

Index the actual value that is focussed  

Mode: select, change

**onDisplay** the action that will be dispatched whenever a change happens

**onSelection**

**onValue**

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