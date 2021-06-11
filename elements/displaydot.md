# The DisplayDot Element

::: excerpt displaydot
The DisplayDotElement allows sending a boolean value to the display and place it at a specified position as a shallow or filled dot/circle.
The value can be changed by using an action.
:::


Because there may be more values presented on a display at the same time the
DisplayDotElement may exist multiple times in the configuration by using different positions.

It is not required for all displays to support all these Elements and when a device only has a simple LCD
attached maybe only using the DisplayTextElements is appropriate.

You can even use the DisplayDotElement without having an actual Display attached that supports it.

The DisplayDotElement is included in the collection of core elements.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?displaydot" type="image/svg+xml"></object>

**x** -- Specifies the x position of the dot/circle.                                                          

**y** -- Specifies the y position of the dot/circle.                                                          

## Element Actions

The following actions can be sent to the element:

**value** -- This boolean interpreted value is sent to the display.

**clear** -- The value is set to false and the display is updated.

**redraw** -- The display is updated.                                                        


### Configuration Example


```JSON
{
  "displaydot": {
    "b": {
      "x": 15,
      "y": 0,
      "description": "Display a blinking dot"
    }
  }
}
```

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


### Example State

```JSON
{
  "displaydot/b": {
    "active": "true",
    "value": "1"
  }
}
```


## Tags
#element #display
