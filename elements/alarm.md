# Alarm Element

::: excerpt alarm
The AlarmElement creates a single action at a specific time that can be used e.g. for wakeup signals.
:::

<!-- ## Web UI for the Timer Element -->

## Element Configuration

This element implements the following properties and actions:

<object data="/element.svg?alarm" type="image/svg+xml"></object>

**time**  the time of day when the a the actions will be emitted.

**onTime** The actions to be emitted.

### Configuration Example


```JSON
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