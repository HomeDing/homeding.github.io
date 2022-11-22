---
title: DisplayBar Element
id: displaybar
tags: ["Element", "WIP"]
description: Displaying progress values. 
excerpt: >
  The DisplayBarElement allows sending a progress indicating value to the display
  to display it at a specified position as a bar or percentage number.
  The value can be changed by using an action.
layout: "page.njk"
---

::: excerpt {{id}}
{{excerpt}}
:::

<!-- not implemented check doku ???  -->

Because there may be more values presented on a display at the same time the
DisplayBarElement may exist multiple times in the configuration by using different positions.

It is not required for all displays to support all these Elements and when a device only has a simple LCD
attached maybe only using the DisplayTextElements is appropriate.

You can even use the DisplayDotElement without having an actual Display attached that supports it.

The DisplayBarElement is included in the collection of core elements.

## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?displaybar" type="image/svg+xml"></object>

| Property | Description                             |
| -------- | --------------------------------------- |
| `x`      | Specifies the x position of the text.   |
| `y`      | Specifies the y position of the text.   |
| `value`  | This value will be send to the display. |

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


## Configuration Example


``` json
{
  "displayBar": {
    ???
  }
}
```

## Example State

``` json
{
  "displayBar/on": {
    "value":"true",
    "temperature":"27.30",
    "humidity":"50.50"
  }
}
```

## Tags
#element #display
