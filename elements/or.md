---
title: OR Element
icon: or
tags: ["Element"]
layout: "page.njk"
description: Calculate when at least one of the input values is true.
excerpt: >
  The OR Element combines multiple logic input values to a single output value.
  The output value will be true only when at least one of the input values is true.
---

Actions can be send to this element using the properties value[n].
Every time the value changes the onValue event is emitted.


## Web UI for the OR Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

![OR Web UI](/elements/orui.png "w400")

This card shows the current output computed from the last logical input values.
It is updated every time the status of the device is polled by the page.


## Element Configuration

<object data="/element.svg?or" type="image/svg+xml"></object>

The up to 8 input values can be preset and the output can be inverted.

When no input value is given the output value is 0.

**value[0]** - The first input value of the element. Default is 0.

**value[1]** - The second input value of the element. Default is 0.

**invert** - The output value can be logically inverted by setting this property to true. Default is false.

The non-inverted output value is on HIGH level when all input values are on HIGH level.


### Configuration Example


``` json
{
  "or": {
    "o": {
      "value": [ "true", "false"],
      "invert": "false",
      "onValue": "device/0?log=or-output: $v"
    }
  }
}
```

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


## Implementation Details

When input values have changed event is not created immediately but when the next loop function is called.
This avoids flickering values on the output for a certain degree.

You can set values using a browser by sending actions to the element by requesting for the URLs like:

* <http://homeding/$board/or/a?value[0]=1> to set the first input value to true
* <http://homeding/$board/or/a?value[1]=1> to set the second input value to true
* <http://homeding/$board/or/a?value[1]=0> to set the second input value to false



## See also

* [Elements](/elements/index.md)
* [AND Element](/elements/and.md)
* [ADD Element](/elements/add.md)
