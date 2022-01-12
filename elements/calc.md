---
title: The CALC Element
id: calc
tags: ["Element"]
description: Base Element implementation for calculation supporting elements.
excerpt: >
  The CalcElement is implementing the common functionality for the Elements that create one output value from multiple input values.
  This Element is not intended to be used directly. Use the AND, OR and ADD Elements.
---

# {{data.title}}

::: excerpt {{data.id}}
{{data.excerpt}}
:::

## Web UI for the Elements

The standard card for these elements is used showing the current calculated output value.


## Element Configuration

The up to 8 input values can be used for calculation.

When no input value is given the output value is 0 by default.


## Common properties

**value[n]** -
The input values of the element are given using the value array notation. n must be in the range of 0 to 7.

**type** -
This property controls the input values notation and cannot be modified. The logical elements set this to datatype-boolean to enable scanning of `true` and `false` values.
The datatype-numeric and is used 
by the AddElement for scanning numbers.

*onValue** -
These actions are emitted when the output value has changed.


## State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** -
The current output value is reported in the state.



### Example State

```json
{
  "add/duration": {
    "active":"true",
    "value":"13"
  }
}
```


## Implementation details

This base Element implementation 
Implements the common functionality and eases implementation of the calculation function.

The derived elements must set the datatype property as required and need to implement the calc() method.

This method is called when any input value has be set to calc the new output value.

The common state implementation returns the current output value.


## See Also

And
Or
Add