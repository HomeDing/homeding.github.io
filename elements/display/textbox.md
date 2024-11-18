---
title: DisplayTextBox Element
icon: displaytext
tags:
  - "Element"
  - "Display"
layout: "page.njk"
description: Displaying text values.
excerpt: >
  The DisplayTextBoxElement allows showing a text on the display in a rectange area
  at a specified position as text including a prefix and postfix.
  The value can be changed by using an action.
---

In contrast to the DisplayTextElement the DisplayTextBoxElement can draw a specific fill color and border
and also allows right and center aligned text on the configuration by using different positions and fontsize.

The DisplayTextBox is included in the collection of **Display-Draw** elements and can be used on pixel based
displays only.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?displaytextbox" type="image/svg+xml"></object>

> **clear** -- This property set to any value will remove the text from the display.
>
> **prefix** -- This text is always send to the display as a prefix to the value.
>
> **postfix** -- This text is always send to the display as a postfix to the value.
>
> **fontsize** -- This is the fontsize to be used. Do not specify or use 0 to get the
> default/smallest fontsize. For the OLED drivers the font sizes 10, 16 and 24 are supported.
>
> Be aware that the positions and fontsize of the configurations must match to the capabilities existing display.

{% include "./outputproperties.md" %}

{% include "../elementproperties.md" %}


## Element Actions

The following actions can be sent to the element:

**value** -- This value is sent to the display including prefix and postfix texts.

**clear** -- The value is cleared and the display is updated by sending prefix and postfix texts.

**redraw** -- The value is sent to the display including prefix and postfix texts.


### Configuration Example

This example shows how to configure this element:

``` json
{
  "displaytextbox": {
    "val": {
      "x": 0,
      "y": 1,
      "prefix": "val=",
      "postfix": "",
      "description": "Display the value"
    }
  }
}
```

The `value` property corresponds to the shown text. Using the browser you can set the value using <http://homeding/$board/displaytext/val?value=hello>

The `clear` property can be used to remove the text. <http://homeding/$board/displaytext/val?clear=1>


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


### Example State

``` json
{
  "displaytextbox/val": {
    "active":"true",
    "value":"10"
  }
}
```

## See also

* [DisplayText Element](/elements/display/text.md)
* [DisplayLine Element](/elements/display/line.md)
* [DisplayRect Element](/elements/display/rect.md)
* [DisplayCircle Element](/elements/display/circle.md)
* [DisplayButton Element](/elements/display/button.md)
