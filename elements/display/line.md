---
title: DisplayLine Element
icon: displayline
tags:
  - "Element"
layout: "page.njk"
description: Displaying a static line.
excerpt: >
  The DisplayLineElement allows drawing a simple fixed line on the display
  when the display supports pixel drawing.
---

It is not required for all displays to support all these Elements and when a device only has a simple LCD
attached maybe only using the DisplayTextElements is appropriate.

The DisplayLineElement is included in the collection of core elements.


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
      "x0": 0,
      "y0": 12,
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
* [DisplayDot Element](/elements/display/dot.md)
* [DisplayLine Element](/elements/display/line.md)
* [DisplayButton Element](/elements/display/button.md)