---
title: Alarm Element
tags:
  - "Element"
  - "Time"
icon: "schedule"
layout: "page.njk"
description: Create Alarm events.
excerpt: >
  The AlarmElement creates a single action 
  when reaching a defined time of day.
  This can be used e.g. for wakeup signals.
---

<!-- ## Web UI for the Timer Element -->

## Element Configuration

<object data="/element.svg?alarm" type="image/svg+xml"></object>

This element implements the following properties and actions:

> **time**  the time of day when the a the actions will be emitted.
>
> **onTime** The actions to be emitted.

{% include "./elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{
  "alarm": {
    "wakeup": {
      "time": "06:00",
      "onTime": "digitalout/light?value=1"
    }
  }
}
```
