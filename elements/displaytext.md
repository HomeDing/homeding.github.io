# The DisplayText Element

::: excerpt displaytext
The DisplayTextElement allows sending a value to the display and place it at a specified position as text including a prefix and postfix.
The value can be changed by using an action.
:::


Because there may be more values presented on a display at the same time the
DisplayTextElement may exist multiple times in the configuration by using different positions and fontsize.

The DisplayTextElement is included in the collection of core elements.

![DisplayText Properties and Actions](/elements/displaytextapi.png)

Be aware that the positions and fontsize of the configurations must match to the capabilities existing display.


## Element Configuration

The following properties are available for configuration of the element:

**x** -- Specifies the x position of the text.                                                          

**y** -- Specifies the y position of the text.                                                          

**clear** -- This property set to any value will remove the text from the display.                          

**prefix** -- This text is always send to the display as a prefix to the value.                              

**postfix** -- This text is always send to the display as a postfix to the value.                             

**fontsize** -- This is the fontsize to be used. Do not specify or use 0 to get the default/smallest fontsize. 
For the OLED drivers the font sizes 10, 16 and 24 are supported.

## Element Actions

The following actions can be sent to the element:

**value** -- This value is sent to the display including prefix and postfix texts.

**clear** -- The value is cleared and the display is updated by sending prefix and postfix texts.

**redraw** -- The value is sent to the display including prefix and postfix texts.                                                        


### Example for Configuration

```JSON
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

The `value` property can be used to make the displaytext to be visible. Using the browser you can set the value using <http://nodeding/$board/displaytext/val?value=hello>

The `clear ` property can be used to remove the text. <http://nodeding/$board/displaytext/val?clear=1>


## Element State

The following properties are available with the current values at runtime

| Property | Description                       |
| -------- | --------------------------------- |
| `value`  | The actual value to be displayed. |


### Example State

```JSON
{
  "displaytext/val": {
    "active":"true",
    "value":"10"
  }
}
```
