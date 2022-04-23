---
title: Time Element
icon: time
tags: ["Element", "Time"]
layout: "page.njk"
excerpt: >
  The time element creates actions with the current local time as value.
---

When using this element a real time retrieving element must be configured as well like the [NTPTime](/elements/ntptime.md) , [DSTime](/elements/dstime.md) or [DCFTime](/elements/dcftime.md).

There are four different kind of actions supported that have different values and occur on different situations.

The purpose of this element this for example to show the local time on the display.


## Element Configuration

<object data="/element.svg?time" type="image/svg+xml"></object>

The following properties are available for configuration of the element:

> **ontime** -- Actions. These actions are emitted when the time of day value has changed.
> The value contains the full time including the seconds using the format `hh:mm:ss`
>
> **onminute** -- Actions. These actions are emitted when the time of day value has changed. The value contains the time of the day including hour and minute but no seconds using the format `hh:mm`
>
> **ondate** -- Actions. These actions are emitted when the date value has changed. The value contains the full date without the time using the format `YYYYY-MM-DD`
>
> **ontimestamp** -- Actions. These actions are emitted every second with the full timestamp as value using the format `YYYYY-MM-DD hh:mm:ss`

{% include "./elementproperties.md" %}


## Element State

The following properties are available with the current values at runtime

> **active** - Is set to true when the element is active.


## Example Configuration

``` json
{
  "time": {
    "clock": {
      "ontime": "displaytext/time?value=$v"
    }
  }
}
```

## Example State

``` json
{
  "time/0": {
    "active":"true"
  }
}
```

## See also

* [Time Elements](/elements/timeelements.md)

