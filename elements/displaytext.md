---
title: The DisplayText Element
id: displaytext
tags: ["Element"]
description: Displaying text values.
excerpt: >
  The DisplayTextElement allows sending a value to the display
  and show it at a specified position as text including a prefix and postfix.
  The value can be changed by using an action.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::

Because there may be more values presented on a display at the same time the
DisplayTextElement may exist multiple times in the configuration by using different positions and fontsize.

The DisplayTextElement is included in the collection of core elements.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?displaytext" type="image/svg+xml"></object>

**x** -- Specifies the x position of the text.                                                          

**y** -- Specifies the y position of the text.                                                          

**clear** -- This property set to any value will remove the text from the display.                          

**prefix** -- This text is always send to the display as a prefix to the value.                              

**postfix** -- This text is always send to the display as a postfix to the value.                             

**fontsize** -- This is the fontsize to be used. Do not specify or use 0 to get the default/smallest fontsize. 
For the OLED drivers the font sizes 10, 16 and 24 are supported.

Be aware that the positions and fontsize of the configurations must match to the capabilities existing display.


## Element Actions

The following actions can be sent to the element:

**value** -- This value is sent to the display including prefix and postfix texts.

**clear** -- The value is cleared and the display is updated by sending prefix and postfix texts.

**redraw** -- The value is sent to the display including prefix and postfix texts.                                                        


### Configuration Example


``` json
{
  "displaytext": {
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

The `value` property can be used to make the displaytext to be visible. Using the browser you can set the value using <http://homeding/$board/displaytext/val?value=hello>

The `clear ` property can be used to remove the text. <http://homeding/$board/displaytext/val?clear=1>


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


### Example State

``` json
{
  "displaytext/val": {
    "active":"true",
    "value":"10"
  }
}
```

## Tags
#element #display
