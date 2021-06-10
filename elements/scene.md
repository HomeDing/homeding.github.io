# Scene Element

::: excerpt rotary
The SceneElement is used to send a series of action triggered by a single incoming action.
:::

In normal cases when only one or few actions should be triggered multiple actions can be listed inline.
The scene element allows sending multiple actions beyond this limit or when different element
need to send the same list of events but different values.

The scene element also can be used to configure presets of multiple element values
at a single place by using multiple scene definitions.

A scene element can also be triggered over the network by using a simple link like:

    http://homeding/$board/scene/day?value=30


## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?scene" type="image/svg+xml"></object>

**onValue** - This is an array of actions are emitted when the value of the scene element is set to any value.

**value** - This property can be set to any value to trigger all defined actions on this element.
It can be initialized to 

From the base element implementation the following properties are available for configuration:

**title** - Caption text for the element. Used in the boards.

**description** - A line of text that gives a short description of the device used in the web UI.

**room** - The location of the device.

**loglevel** - This property holds the element specific log level. The default value is LOGGER_LEVEL_ERR == 1. 


### Example Configuration

```JSON
{
  "scene": {
    "day": {
      "onvalue": [
        "light/ceiling?brightness=$v",
        "light/wall?brightness=$v",
        "switch/steps?value=0"
      ],
      "value":1
    },
    "night": {
      "onvalue": [
        "light/ceiling?brightness=0",
        "light/wall?brightness=0",
        "switch/steps?value=1"
      ]
    },
    "off": {
      "onvalue": [
        "light/ceiling?brightness=0",
        "light/wall?brightness=0",
        "switch/steps?value=0"
      ]
    }
  }
}
```


## State

```JSON
{
  "scene/night": {
    "active":"true",
    "value":"9"
  }
}
```

## Tags

#element
