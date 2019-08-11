# Light Toggle with timer

This recipe implements a light switch that keeps light on for a specific time before switching off automatically.

> (lightimerflow.png) ???

The simple configuration combines an digitalinput, a timer and an digitaloutput.

* When the input driven by a momentary button is going down an action is sent to the timer making the timer starting from the beginning of it's sequence.

* The timer is configured to have a pulse time of 3 minutes and no waiting time. When the timer starts the output value is  going HIGH immediately and drops to LOW in the end. The timer will end because no loop mode is specified.

* The timer value is sent to the digital output that can drive a LED or a relais module.

```JSON
{
  "digitalin": {
  ...???
  },
  
  "timer": {
    "light": {
      "pulsetime": "00:03:00",
      "loglevel": 1,
      "onvalue": "digitalout/light?value=$v"
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

* When more momentary buttons are required to control the light you can use other device that have a configuration from the remotebutton recipe???.
