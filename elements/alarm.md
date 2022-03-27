---
title: The Alarm Element
id: alarm
tags: ["Element", "Time"]
layout: "page.njk"
description: Create Alarm events.
excerpt: The AlarmElement creates a single action at a specific time that can be used e.g. for wakeup signals.
---

<!-- ## Web UI for the Timer Element -->

## Element Configuration

This element implements the following properties and actions:

<object data="/element.svg?alarm" type="image/svg+xml"></object>

**time**  the time of day when the a the actions will be emitted.

**onTime** The actions to be emitted.

{% include "./elementproperties.md" %}

### Configuration Example


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

## Tags
#element #time