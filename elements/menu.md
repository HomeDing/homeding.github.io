# Menu Element ???

DRAFT

The MenuElement allows controlling multiple value element using only one rotary encoder and one button and using a display to show the actual menu selection and value.

Some rotary encoders already have a built-in momentary button when pressing the knob down. The menu element is especially made for using these as input but an extra button works well also.


* Screenshot
* Visualization


Configuration

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