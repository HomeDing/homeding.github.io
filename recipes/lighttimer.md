---
title: Light Toggle with timer
---

# {{title}}

This recipe implements a light switch that keeps light on for a specific time before switching off automatically.

> (lightimerflow.png) ???

The configuration combines an digitalin, a timer, a switch and a digitalout element.

* When the input driven by a momentary button is going low an action is sent to the timer and the switch element.

* The switch will toggle the value so you can use the input for switching on and off.
* The timer is started and will run only once until the pulseTime is over.
* When the timer pulseTime ends the switch is forced to the value 0 to switch the light off.

* The switch value is sent to the digital output driving a LED or a relays.

```json
{
  "digitalin": {
    "up": {
      "pin": "D6",
      "description": "up button signal",
      "inverse": "true",
      "pullup": "true",
      "onLow": "switch/light?toggle=1,timer/done?start=1"
    }
  },

  "timer": {
    "done": {
      "loglevel": "0",
      "description": "reset after timeout",
      "pulseTime": "00:05:00",
      "onEnd": "switch/light?value=0"
    }
  }, 

  "switch": {
    "light": {
      "description": "Control light level",
      "value": 0,
      "onValue": "digitalout/light?value=$v"
    }
  },

  "digitalout": {
    "light": {
      "pin": "D0",
      "inverse": "true",
      "value": "0",
      "description": "Light output on port D0 = GPIO16"
    }
  }
}
```

## More functionality

By adding a button element in-between the digital input and the timer
more functions can be supported:

* The `click` action of the button will start the timer as before.
* A `doubleclick` will turn off the light immediately by sending an action to the timer that sets the timer to the end state.
* When more momentary buttons are required to control the light you can use other device that have a configuration from the [Remote Button recipe](/recipes/remotebutton.md).


