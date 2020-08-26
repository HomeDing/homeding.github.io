# The DisplayLine Element

::: excerpt displayline
The DisplayLineElement allows drawing a simple line on the display when the display supports lines.
:::

It is not required for all displays to support all these Elements and when a device only has a simple LCD
attached maybe only using the DisplayTextElements is appropriate.

The DisplayLineElement is included in the collection of core elements.

![DisplayLine Properties and Actions](/elements/displaylineapi.png)


## Element Configuration

The following properties are available for configuration of the element:

**x0** -- Specifies the starting x position of the line.                                                          

**y0** -- Specifies the starting y position of the dot/circle.                                                          

**x1** -- Specifies the ending x position of the line.                                                          

**y1** -- Specifies the ending y position of the dot/circle.                                                          

## Element Actions

The following actions can be sent to the element:

**redraw** -- The display is updated.                                                        


### Example for Configuration

```JSON
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

**active** -- The element is in activated state.


### Example State

```JSON
{
  "displayline/l": {
    "active": "true"
  }
}
```

