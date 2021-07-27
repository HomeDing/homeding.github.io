# The ScheduleElement

::: excerpt schedule
The ScheduleElement creates actions based on the time of day.
:::

When using this element a real time retrieving element must be configured as well like the [NTPTime](/elements/ntptime.md) or [DCFTime](/elements/dcftime.md).

One Schedule Element can be used to create a timespan during a day that creates 2 possible events. The first one when the `on`-time has passed and a second one when the `off`-time has passed.

When starting the device the following events are emitted:

* When starting before the defined time span the `off`-event will be emitted.
* When starting the device in the middle of this time span the `on`-event will be emitted.
* When starting after the defined time span the `off`-event will be emitted.

The `onvalue` event is always emitted together with the `on` and `off` event situations.


## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?schedule" type="image/svg+xml"></object>

**title** - Caption text for the element. Used in the boards.

**description** - A line of text that gives a short description of the device used in the web UI.

**mode** - The element supports 3 modes: **"on"** for always on, **"off"** for always off anf **"timer**" for switching the value using the timer settings.

**ontime** - Specifies the start of the time span.

**offtime** - Specifies the end of the time span.

**onon** - These actions are emitted when the on time has passed.

**onoff** - These actions are emitted when the off time has passed.

**onvalue** - These actions are emitted when the value is changing.


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.

## Example Configuration

```JSON
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

```JSON
{
  "button/start": {
    "active": "true",
    "value": ???
  }
}
```

## See also

* [Time Elements](/timeelements.md)
