---
title: Display Button Element
tags:
  - "Element"
  - "Display"
  - "Input"
  - "WIP"
layout: "page.njk"
description: Display a button
excerpt: >
  The DisplayButtonElement enables creating Actions by touching a visual button on a display supporting pixel based graphics.
---

The **DisplayButtonElement** draws a button at the configured position where click events should be captured.

Displays that do not support pixel based drawings or touch events may not include this Element into the sketch.

The DisplayLineElement is included in the collection of **Display-Draw** elements and can be used on pixel based
displays only.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?displaybutton" type="image/svg+xml"></object>

> **text** -- the text that is displayed on the button
>
> **onclick** -- List of actions to be created on a click event

{% include "./outputproperties.md" %}

{% include "../elementproperties.md" %}

<!-- TODO: documentation


==> + DisplayOutput properties

 -->


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.


## See also

* [Display Touch Elements](/elements/display/touch.md)
* [DisplayText Element](/elements/display/text.md)
* [DisplayTextBox Element](/elements/display/textbox.md)
* [DisplayCircle Element](/elements/display/circle.md)
* [DisplayLine Element](/elements/display/line.md)
* [DisplayButton Element](/elements/display/button.md)