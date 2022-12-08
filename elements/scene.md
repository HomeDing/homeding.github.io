---
title: Scene Element
id: scene
tags: ["Element"]
excerpt: >
  The SceneElement is used to operate on a list of actions triggered by incoming actions.
  They can be send out step by step using a defined delay or by actions.
layout: "page.njk"
---

::: excerpt {{id}}
{{excerpt}}
:::

In the configuration a list of `steps` is defined containing actions for other elements.

This list can be executed automatically using a defined `delay` and a `start` action
or can be started individually by a `next` action.

In normal cases when only one or few actions should be triggered multiple actions can be listed inline
in action configurations of elements.

The scene element allows sending multiple actions beyond this limit or when different element
need to send the same list of events but different values.

The scene element also can be used to configure presets of multiple element values
at a single place by using multiple scene definitions.

A scene element can also be controlled over the network by using a simple links like:

``` txt
http://homeding/$board/scene/day?start
http://homeding/$board/scene/night?start
http://homeding/$board/scene/stations?next
```

## Element Configuration

<object data="/element.svg?scene" type="image/svg+xml"></object>

This element implements the following properties and actions:

> **steps[]** - This is an array of actions are emitted
> when the value of the scene element is set to any value.
>
> **delay** - This property can be set to enable automatic starting all steps one after one.
> This property specifies the delay duration like `2s`.
> When not set a `next` action is required to advance to the next step.
>
> **start** - This action is used to start at step[0] and advance automatically when a delay is configured.
>
> **next** - This action will start sending the actions of the next step.
>
> **prev** - This action will start sending the actions of the previous step

{% include "./elementproperties.md" %}


### Configuration Example

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

# element
