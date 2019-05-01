# Alarm Element

<div class="excerpt">
  <img src="/i/alarm.svg">
  <p>The AlarmElement creates a single action at a specific time that can be used e.g. for wakeup signals.</p>
</div>

<!-- ## Web UI for the Timer Element -->

## Element Configuration

This element implements the following properties and actions:

<!-- ![DigitalOutProperties and Actions](/elements/alarmapi.png) -->

| Property | Description                                             |
| -------- | ------------------------------------------------------- |
| `time`   | the time of day when the a the actions will be emitted. |
| `onTime` | The actions to be emitted.                              |


### Example for Configuration

```JSON
"alarm": {
  "wakeup": {
    "time": "06:00",
    "onTime": "digitalout/light?value=1"
  }
}
```

