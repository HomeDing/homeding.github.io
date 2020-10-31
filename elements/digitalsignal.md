# DigitalSignal Element

The `DigitalSignalElement` is used to handle digital input with short time level changes
that might be missed when using the [DigitalInput Element](/elements/digitalin.md). On a changing input a pulse value is created with a defined duration.

When a digital input signals like spikes are created on a GPIO input they may not last long enough to be detected by reading the actual level in the loop function.

To avoid missing these input signals interrupts are used that are triggered by the GPIO hardware when the signal level changes. Inside the interrupt routine itself
no action can be created so every detected digital signal change will incrementing an internal counter that is then analyzed in the loop function.

The output signal is generated with a given minimal duration and stays high as long as the input changes.


## Element Configuration


**pin** - the GPIO pin used for input.

**pullup** - When defining with true the internal pullup resistor for the input pin will be activated.

**duration** - the duration of the generated output pulse with a value of 1

**onHigh** - These actions are emitted when the logical level is switched to `1`.

**onLow** - These actions are emitted when the logical level is switched to `0`.

**onValue** - These actions are emitted when the logical level is switched.


## Element Actions

n/a


### Configuration Example

```JSON
{
  "digitalsignal": {
    "d5": {
      "description": "Listen for level changes on pin D5",
      "pin": "D5",
      "pullup": "true",
      "onvalue": "console/log?value=D5:$v"
  }
}
```

## State

The state of the DigitalSignal element available at runtime includes the current values: 

**active** - Is set to true when the Element is active.

**value** - The current output value from the generated pulse.


### Example State

```JSON
{
  "digitalsignal/d5": {
    "active":"true",
    "value":"0"
  },
}
```

## See also

* [DigitalInput Element](/elements/digitalin.md)


## Tags
#element #input