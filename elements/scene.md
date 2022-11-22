---
title: Scene Element
id: scene
tags: ["Element"]
excerpt: >
  The SceneElement is used to send a series of actions triggered by a single incoming action.
  They can be send out step by step using a defined delay.
layout: "page.njk"
---

::: excerpt {{id}}
{{excerpt}}
:::

In normal cases when only one or few actions should be triggered multiple actions can be listed inline.
The scene element allows sending multiple actions beyond this limit or when different element
need to send the same list of events but different values.

The scene element also can be used to configure presets of multiple element values
at a single place by using multiple scene definitions.

A scene element can also be triggered over the network by using a simple link like:

    http://homeding/$board/scene/day?start
    http://homeding/$board/scene/night?start


## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?scene" type="image/svg+xml"></object>

**steps[]** - This is an array of actions are emitted when the value of the scene element is set to any value.

**delay** - This property can be set to delay each step from each other. This property can be specified in milli-seconds or seconds.

{% include "./elementproperties.md" %}


### Example Configuration

``` json
{
  "scene": {
    "day": {
      "steps": [
        "light/ceiling?brightness=$v",
        "light/wall?brightness=$v",
        "switch/steps?value=0"
      ],
      "delay": 1
    },

    "night": {
      "steps": [
        "light/ceiling?brightness=0",
        "light/wall?brightness=0",
        "switch/steps?value=1"
      ],
      "delay": 0
    },
    "off": {
      "steps": [
        "light/ceiling?brightness=0",
        "light/wall?brightness=0",
        "switch/steps?value=0"
      ],
      "delay": 0
    }
  }
}
```

## State

``` json
{
  "scene/night": {
    "active": "true"
  }
}
```

## Tags

#element
