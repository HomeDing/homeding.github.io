# The Rotary Element

<div class="excerpt">
  <img src="/i/digitalout.svg">
  <p>The RotaryElement is used to capture increments and decrements for values using a rotary encoder.</p>
</div>

It can be used in combination with a [Value Element](elements/value) to define a logical value that can be changed using the rotary encoder.

## Web UI for the Rotary Element

There is a dedicated card for this element available that will be used on the web server config and landing pages:

![Rotary Web UI](/elements/rotaryui.png)


See example in [value element](elements/value).

This element uses the RotaryEncoder library available in the Arduino Library Manager.


## Element Configuration

The following properties are available for configuration of the element:

| Property  | Description                                                                                                                                 |
| --------- | --------------------------------------------------------------- |
| `pin1`*   | Specifies the hardware number of the first input pin.|
| `pin2`*   | Specifies the hardware number of the second input pin.
| `step`    | Default:1 the increment/decrement value of one rotary step
value Internal starting value. (deprecated)
| `onValue` | These actions are emitted when the value has changed. The delta from the last position is used as the value in this event.

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
    "onValue": "value/led?up=$v"
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