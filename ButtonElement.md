# The Button Element

This element is used to capture button events as digital input and emit corresponding events.

The physical input level can differ from the logical input level because some buttons are pulling an input down to ground others pull them up. Also switches can be used with this Element.

## Element Configuration

The following properties are available for configuration of the element:

| Property | Description |
| ---      | --- |
| pin*     | Specifies the hardware number of the pin.
| invers   | In normal mode a HIGH input value is reported as level 1. In inverse mode a LOW input value is reported as level 1. Normal mode is default.
| type     | Without specified type the Button will report the current state of the input. <br/> “TOGGLE” enables switching the level between 1 and 0.
| onon     | Actions.<br/>These actions are emitted when the logical level is switched to 1.
| onoff    | Actions. <br/> These actions are emitted when the logical level is switched to 0.

\* This parameter must be specified.

## Element State

The following properties are available with the current values at runtime

| Property | Description |
| ---      | --- |
| active   | Is set to true when the Element is active.
| level    | Current logical level of the button input.

## Example Configuration

```JSON
"button": {
  "start": {
    "pin": 14,
    "type": "TOGGLE",
    "invers": "true",
    "onon": "device/main?log=start.",
    "onoff": " device/main?log=stop."
  }
}
```

## Example State

```JSON
"button/start": {
  "active":"true",
  "level":"1"
}
```