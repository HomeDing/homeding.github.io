---
title: The Logical AND Element
id: and
tags: ["Element", "Logic"]
description: Calculate when all input values are true
excerpt: >
  The AND Element combines multiple logic input values to a single output value.
  The output value will be true only when all input values are true.
---

# {{data.title}}

::: excerpt {{data.id}}
{{data.excerpt}}
:::

Actions can be send to this element using the properties value[n].
Every time the value changes the onValue event is emitted.


## Web UI for the AND Element

The standard card for this element is used showing the current calculated output value.


## Element Configuration

<object data="/element.svg?and" type="image/svg+xml"></object>

The up to 8 input values can be used for calculation.

When no input value is given the output value is 0 (false).

**value[0]** - The first input value of the element. Default is 0 (false).

**value[1]** - The second input value of the element. Default is 0 (false).


**invert** - The output value can be logically inverted by setting this property to 1 (true). Default is false.

The non-inverted output value is on HIGH level when all input values are on HIGH level.


### Configuration Example


```json
{
  "and": {
    "a": {
      "value": [ "true", "false"],
      "invert": "false",
      "onValue": "device/0?log=and-output: $v"
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

* <http://homeding/$board/and/a?value[0]=1> to set the first input value to true
* <http://homeding/$board/and/a?value[1]=1> to set the second input value to true
* <http://homeding/$board/and/a?value[1]=0> to set the second input value to false



## See also

* [Elements](/elements/overview.md)
* [OR Element](/elements/or.md)

## Tags
#element #logic-element