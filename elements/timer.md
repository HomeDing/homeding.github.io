# Timer Element

<div class="excerpt">
  <img src="/i/timer.svg">
  <p>The TimerElement creates events based on a one-time or cyclic timing pattern.</p>
</div>

During the specified time period the output value will be switched on and off once. The timer can be restarted automatically.

## Web UI for the Timer Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

![Timer Web UI](/elements/timerui.png)

The web ui for the timer element show the pulsetime of the cycletime using the green bar and the actual passed part of the cycletime using the red bar.

The buttons allow restarting the cycle or advancing to the `on` or `off` time or stopping the timer.

This diagramm shows the state, value and actions based on the settings:

```
        events: +--> "on"         +--> "off"
                +--> "value=1"    +--> "value=0"
                |                 |
________________/‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾\______________

<-- waittime --> <-- pulsetime -->
<------------- cycletime ----------------------->
<- _state=0  --> <- _state=1 ----> <- _state=2 -> <- _state=3 (no LOOP) ...
```

When started and the specified wait time has passed the output value is set to one for the specified time.

The cycle time and the type LOOP can be specified to restart the timer automatically.

An action is emitted every time the output value changes and when the timer has ended.


## Element Configuration

The timer elements implements the following properties and actions:

![Timer Properties and Actions](/elements/timerapi.png)

??? ontimerend event

| Properties   | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| description  | Short description of the element.                             |
| type         | When set to `loop` the timer restarts after ending the cycle. |
| waittime     | time before "on" action                                       |
| pulsetime\*1 | time between "on" and "off" action.                           |
| cycletime\*2 | time of a complete timer cycle.                               |
| onon         | Actions dispatched when the pulse time starts.                |
| onoff        | Actions dispatched when the pulse time ends.                  |
| onvalue      | Actions dispatched when the pulse time starts or ends         |
| ontimerend   | dispatched when a timer cycle has finished.                   |

\*1 required property
\*2 When cycletime is not not specified or too low the cycletime gets adjusted to waittime+pulsetime.

## Control the Element

The timer element can run on it's own but can also be controlled by the following incomming actions:

| Action | Description                                                |
| ------ | ---------------------------------------------------------- |
| start  | Receiving this action starts the timer from the beginning. |
| stop   | Receiving this action stop the timer.                      |
| next   | Receiving this action advances the timer to on / off .     |


### Example for Configuration

```JSON
"timer": {
  "led": {
    "type": "LOOP",
    "waittime": "4s",
    "pulsetime": "8s",
    "cycletime": "20s",
    "onon": "digitalout/led?on",
    "onoff": "digitalout/led?off"
  }
}
```

## State

The state of the timer element includes:

| Property | Description                                                   |
| -------- | ------------------------------------------------------------- |
| active   | Is set to true when the Element is active.                    |
| state    | Current state state of the element (0...3). See diagram above |
| time     | time passed since starting the cycle (in seconds).            |
| value    | Current output value.                                         |


### Example for State

```JSON
"timer/relais": {
  "active": "true",
  "state": "0",
  "time": "2",
  "value": "0"
}
```

## See also

* [Time Elements](timeelements)