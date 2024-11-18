---
title: DisplayLine Element
icon: displayline
tags:
  - "Display"
  - "Element"
layout: "page.njk"
description: Displaying a static line.
excerpt: >
  The DisplayLineElement enables drawing a simple fixed line on a display supporting pixel based graphics.
---

Displays that do not support pixel based drawings may not include this Element into the sketch.

The DisplayLineElement is included in the collection of **Display-Draw** elements and can be used on pixel based
displays only.

It is possible to draw a line in any direction.  The Bounding Box of the Element will be adjusted to used the correct
order where (x <= x1) and (y <= y1).


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?displayline" type="image/svg+xml"></object>

> **x1** -- Specifies the ending x position of the line.
>
> **y1** -- Specifies the ending y position of the line.

{% include "./outputproperties.md" %}

{% include "../elementproperties.md" %}

## Element Actions

The following actions can be sent to the element:

**redraw** -- The display is updated.


### Configuration Example

This example shows how to configure this element:

``` json
{
  "displayline": {
    "l": {
      "x": 0,
      "y": 12,
      "x1": 127,
      "y1": 12,
      "description": "Display a line"
    }
  }
}
```

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.


### Example State

``` json
{
  "displayline/l": {
    "active": "true"
  }
}
```

## See also

* [DisplayText Element](/elements/display/text.md)
* [DisplayTextBox Element](/elements/display/textbox.md)
<!-- * [DisplayLine Element](/elements/display/line.md) -->
* [DisplayRect Element](/elements/display/rect.md)
* [DisplayCircle Element](/elements/display/circle.md)
* [DisplayButton Element](/elements/display/button.md)