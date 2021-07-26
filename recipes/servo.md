# Servo

This recipe uses a switch element and a value element to set a servo to 2 defined positions.

A servo can be controlled using a ignal coming from a PWMOut element.

To control the switch a digital inout element is used to toggle the switch.
The switch only provides a 0 / 1 boolean value but also onHgh and onLow actions can be send.
These actions are used to set the value element to the required low and high value.
As this is passed to the PWMOut element the position of the servo is controlled.

```JSON
{
  "digitalinput": {
    "in": {
      "onLow": "switch/pos?switch=1",
      "pin": "D5",
      "inverse": "true",
      "pullup": "true",
    }
  },

  "switch": {
    "pos": {
    "onHigh": "value/pos?value=42",   
    "onLow": "value/pos?value=210"   
    }
  },

"value": {
    "pos": {
        "onValue": "pwmout/servo?value=$v"
    }
},

"pwmout": {
  "servo": {
    "pin": "D6",
    "range": 255,
    "value": 42,
    "description": "output signal for the servo"
  }
}

}
```

## See also

* [Digital Input Element](/elements/digitalin.md)
* [Switch Element](/elements/switch)
* [Value Element](/elements/value)
* [PWMOut Element](/elements/pwmout)




## SLOPE

to smoothly control a value like the brightness of a LED the slope property of the value element can be used.

It specifies the delta the value is changed per second.

Example to fade a led from off to the full 255 brightness in 8 seconds
the slope can be set to 32 (= 256/8)  

When not spdifying this property the value will be set to the target value immediately.

### menu element excerpt:
WS

The MenuElement allows controlling multiple value elements by sharing the input elements.

## Stuff

switch element to 

timer: pulse every 2 seonds

switch: control up/down

timer-value -> and
switch-value -> and

and-value -> value.up



value controls min and max of servo position

PWMOUT Element to drive the servo

value increment
value decrement



https://www.hackster.io/mitov/esp8266-wi-fi-remote-control-servo-with-rotary-encoder-1a35fa