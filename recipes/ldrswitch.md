---
title: Blink Recipe
tags: ["Recipe"]
layout: "page.njk"
---

This recipe uses 1 LDR sensor to implement a touchless on/off switch.

The LDR is used to create a analog signal that can be captured using the [Analog Input](/elements/analog.md) element.

Using your hand or a finger you can darken the actual LDR so the analog input value drops below a reference value.

Using the **onlow** action from the [Analog Input](/elements/analog.md) element
a [Switch Element](/elements/switch.md) is triggered to create a digital on/off signal.

The digital signal from the switch is given to an [Digital Output](/elements/digitalout.md) element to show the actual on/off value using a LED.


## Configuration

``` json
{
  "analog": {
    "0": {
      "reference": "450",
      "onlow": "switch/s1?toggle=1"
    }
  },
  "switch": {
    "s1": {
      "description": "switch on/off",
      "onvalue": "digitalout/led?value=$v"
    }
  },
  "digitalout": {
    "led": {
      "pin": "D4",
      "inverse": "true",
      "value": "0",
      "description": "Builtin LED on GPIO2(D4)"
    }
  }
}
```

## See also

* [Analog Input Element](/elements/analog.md)
* [Digital Output Element](/elements/digitalout.md)
* [Switch Element](/elements/switch.md)

