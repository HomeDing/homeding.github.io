---
title: CALC Abstract Element
tags: ["Element"]
layout: "page.njk"
description: Base Element implementation for calculation supporting elements.
excerpt: >
  The CalcElement is implementing the common functionality for the Elements that create one output value from multiple input values.
  This Element is not intended to be used directly. Use the AND, OR and ADD Elements.
---

## Web UI for the Elements

The standard card for these elements is used showing the current calculated output value.

Up to 8 input values can be used for calculation.

When no input value is given the output value is 0 by default.

## Element Configuration

{% include "./calcproperties.md" %}

{% include "./elementproperties.md" %}


## State

The following properties are available with the current values at runtime

**active** -- Is set to true when the element is active.

**value** -- The current output value is reported in the state.


### Example State

``` json
{
  "add/duration": {
    "active":"true",
    "value":"13"
  }
}
```


## Implementation details

This base Element implementation implements the common functionality
and eases implementation of the calculation elements.

The derived elements must set the datatype property as required and need to implement the calc() method.

This method is called when any input value has be set to calc the new output value.

The common state implementation returns the current output value.

Internally all possible input values are stored in _inStringValues Strings after some input validation:

* values that have not been set using a value[] action contain empty strings.
* The number of used i-values is stored in the variable _inputs so re-calculations only need to analyse
  the in-values in index 0...(_inputs-1)
* DATATYPE::STRING 


The number of max. 8 values can be changed by the CALCELEMENT_MAX_INPUTS definition.

## See Also

* [AND Element](/elements/and.md)
* [OR Element](/elements/or.md)
* [ADD Element](/elements/add.md)
