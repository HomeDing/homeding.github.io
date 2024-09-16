---
title: Schedule Element
icon: schedule
tags:
  - "Element"
  - "Time"
layout: "page.njk"
description: Create events started on time.
excerpt: >
  The ScheduleElement creates on and off events based on the current local time.
---

When using this element a real time retrieving element must be configured as well
like the [NTPTime](/elements/ntptime.md) or [DCFTime](/elements/dcftime.md).

One Schedule Element can be used to create a timespan during a day that creates 2 possible events.
The first one when the `on`-time has passed and a second one when the `off`-time has passed.

When starting the device the following events are emitted:

* When starting before the defined time span the `off`-event will be emitted.
* When starting the device in the middle of this time span the `on`-event will be emitted.
* When starting after the defined time span the `off`-event will be emitted.

The `onvalue` event is always emitted together with the `on` and `off` event situations.


## Element Configuration

<object data="/element.svg?schedule" type="image/svg+xml"></object>

The following properties are available for configuration of the element:

> **mode** -- The element supports 3 modes:
>
> * **"on"** for always on,
> * **"off"** for always off and
> * **"timer**" for switching the value using the timer settings.
>
> **ontime** -- Specifies the start of the time span.
>
> **offtime** -- Specifies the end of the time span.
>
> **onon** -- These actions are emitted when the on time has passed.
>
> **onoff** -- These actions are emitted when the off time has passed.
>
> **onvalue** -- These actions are emitted when the value is changing.

{% include "./elementproperties.md" %}

## Element State

The following properties are available with the current values at runtime

**active** -- Is set to true when the element is active.

**value** -- Current output value of the element.

## Example Configuration

``` json
{
  "schedule": {
    "lights": {
      "ontime": "04:00:00",
      "offtime": "18:00:00",
      "onon": "device/main?log=now on.",
      "onoff": " device/main?log=now off."
    }
  }
}
```

## Example State

``` json
{
  "button/start": {
    "active": "true",
    "value": ???
  }
}
```

## See also

* [Time Elements](/elements/timeelements.md)
