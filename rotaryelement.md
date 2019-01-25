# The Rotary Element

The RotaryElement is used to capture increments and decrements for values using a rotary encoder.

It can be used in combination with a [Value Element](valueelement) to define a logical value that can be changed using the rotary encoder.

See example in [value element](valueelement).

This element uses the RotaryEncoder library available in the Arduino Library Manager.


## Element Configuration

The following properties are available for configuration of the element:

| Property  | Description                                                                                                                                 |
| --------- | --------------------------------------------------------------- |
| `pin1`*   | Specifies the hardware number of the first input pin.|
| `pin2`*   | Specifies the hardware number of the second input pin.
| `step`    | Default:1 the increment/decrement value of one rotary step
value Internal starting value. (deprecated)
| `onchange` | Actions.<br/>These actions are emitted when the value has changed. The delta from the last position is used as the value in this event.   

\* This parameter must be specified.


## Element State

The following properties are available with the current values at runtime

| Property | Description                                |
| -------- | ------------------------------------------ |
| `active` | Is set to true when the Element is active. |
| `value`  | Current internal value of the rotary position. |


## Example Configuration

```JSON
"rotary": {
  "in": {
    "description": "Rotary Input",
    "pin1": "D5",
    "pin2": "D6",
    "step": 10,
    "onchange": "value/led?up=$v"
  }
}
```

## Example State

The internal value can be seen in the rotary state but should not directly be used as a value.


```JSON
"rotary/in": {
  "active": "true",
  "value": "4"
}
```



## See also

* Value Element
* LED Recipe