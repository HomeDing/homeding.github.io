# Blink Recipe

This recipe uses 1 digital output to blink a LED and a timer to create actions.

The timer element loops permanently and produces a action every second alternating with value 0 and 1.

The action is directed to the digitalout element.

The current on the GPIO pins flowing into GND can be much higher than the current given by a HIGH level.
This is one reason why the standard wiring for LEDs is to light the LED on GPIO16(D0) when the output level is low.

Therefore the `inverse` mode is enabled and the initial (logical input) value is set to 0.

## Configuration

```JSON
{
  "timer": {
    "blink": {
      "description": "Timer for testing",
      "type": "LOOP",
      "waittime": "0s",
      "pulsetime": "1s",
      "cycletime": "2s",
      "onvalue": "digitalout/led?value=$v"
    }
  },
  "digitalout": {
    "led": {
      "pin": "D0",
      "inverse": "true",
      "value": "0",
      "description": "Builtin LED is on Port D0 = GPIO16"
    }
  }
}
```

## See also

* [Digital Output Element](/elements/digitalout.md)
* [Timer Element](/elements/timer.md)
