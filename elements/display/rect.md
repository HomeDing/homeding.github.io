---
title: DisplayRect Element
icon: displayrect
tags:
  - "Element"
  - "Display"
layout: "page.njk"
description: Displaying a circle boolean values.
excerpt: >
  The DisplayRect Element allows showing a rectangular with a stroke and fill color.
  This can be used to visualize a boolean value on the display and show it at a specified position
  as a shallow or filled rectangle. The value can be changed by using an action.
---

Displays that do not support pixel based drawings may not include this Element into the sketch.

The DisplayRect is included in the collection of **Display-Draw** elements and can be used on pixel based
displays only.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?displayrect" type="image/svg+xml"></object>

{% include "./outputproperties.md" %}

The DisplayRect Element is using the `value` as a boolean value to enable drawing the background of the circle.
This enables using the DisplayDot Element to be used for visualizing boolean values.

{% include "../elementproperties.md" %}


## Element Actions

The following actions can be sent to the element:

> **redraw** -- The display is updated.
>
> **value** -- when a false or 0 value is given the fillcolor of the rectangle will not be used and the display background will be shown.

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
      "h": 36
    }
  }
}
```


## Element State

The following properties are available with the current values at runtime

> **active** - Is set to true when the element is active.
>
> **value** - Current value of the element.


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
* [DisplayTextBox Element](/elements/display/textbox.md)
* [DisplayLine Element](/elements/display/line.md)
* [DisplayCircle Element](/elements/display/circle.md)
* [DisplayButton Element](/elements/display/button.md)