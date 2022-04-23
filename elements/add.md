---
title: ADD Element
icon: add
tags: ["Element"]
layout: "page.njk"
description: Calculate sum of values
excerpt: The ADD Element sums up multiple input values to create a single output value.
---

Actions can be send to this element using the properties value[n].
Every time the value changes the onValue event is emitted with the sum of all input values.

## Web UI for the ADD Element

The standard card for this element is used showing the current calculated output value.

## Element Configuration

<!-- <object data="/element.svg?add" type="image/svg+xml"></object> -->

The up to 8 input values can be used for calculation. When no input value is given the output value is 0.

> **value[0]** - The first input value of the element. Default is 0.
>
> **value[1]** - The second input value of the element. Default is 0.

{% include "./elementproperties.md" %}

### Configuration Example

``` json
{
  "add": {
    "a": {
      "value": [ 1, 2, 3 ],
      "onValue": "device/0?log=add-output: $v"
    }
  }
}
```

## Element State

The following properties are available with the current values at runtime

> **active** - Is set to true when the element is active.
>
> **value** - Current output value of the element.

## Implementation Details

When input values have changed event is not created immediately but when the next loop function is called.
This avoids flickering values on the output for a certain degree.

You can set values using a browser by sending actions to the element by requesting for the URLs like:

* <http://homeding/$board/add/a?value[0]=1> to set the first input value to 1
* <http://homeding/$board/add/a?value[1]=6> to set the second input value to 6

## See also

* [Elements](/elements/index.md)

