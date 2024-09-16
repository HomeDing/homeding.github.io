---
title: DisplayRect Element
icon: displayrect
tags:
  - "Element"
  - "Display"
layout: "page.njk"
description: Displaying a circle boolean values.
excerpt: >
  The DisplayRect Element allows showing a rectangular with a border and background color.
  This can be used to visualize a boolean value on the display and show it at a specified position
  as a shallow or filled rectangle. The value can be changed by using an action.
---

This element is supported on all GFX based displays. It can be used as a background giving object e.g. for text elements.

The DisplayRectElement is included in the collection of core Display elements.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?displayrect" type="image/svg+xml"></object>

{% include "./outputproperties.md" %}

The DisplayDot Element is using the `value` as a boolean value to enable drawing the background of the circle.
This enables using the DisplayDot Element to be used for visualizing boolean values.

{% include "../elementproperties.md" %}


## Element Actions

The following actions can be sent to the element:

> **redraw** -- The display is updated.


### Configuration Example

This example shows how to configure this element:

``` json
{
  "displayrect^^": {
    "b": {
      "title": "Display a header background",
      "border": "none",
      "background": "#FDEFB2",
      "x": 0,
      "y": 0,
      "w": 480,
      "h": 36,
    }
  }
}
```


## Element State

The following properties are available with the current values at runtime

> **active** - Is set to true when the element is active.
>
> **value** - Current output value of the element.


### Example State

``` json
{
  "displayrect/r0": {
    "active": "true",
    "value": "1"
  }
}
```

## See also

* [DisplayText Element](/elements/display/text.md)
* [DisplayDot Element](/elements/display/dot.md)
* [DisplayLine Element](/elements/display/line.md)
* [DisplayButton Element](/elements/display/button.md)
