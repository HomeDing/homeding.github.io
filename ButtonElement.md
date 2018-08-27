# The Button Element

This element is used to capture button events as digital input and emit corresponding events.

The physical input level can differ from the logical input level because some buttons are pulling an input down to ground others pull them up. Also switches can be used with this Element.

## Properties

The following properties are available for config, actions and state of a button element:

| Properties | Type | Description |
| --- | --- | --- | 

| pin	Config	Specifies the hardware number of the pin. <br/> This parameter must be specified.
| invers	Config	In normal mode a HIGH input value is reported as level 1.
In inverse mode a LOW input value is reported as level 1. 
Normal mode is default.

| Type	Config	Without specified type the Button will report the current state of the input.
“TOGGLE” enables switching the level between 1 and 0.

| onon	Config	Actions.
These actions are emitted when the logical level is switched to 1.

| onoff	Config	Actions.
These actions are emitted when the logical level is switched to 0.

| active	State	Is set to true when the Element is active.
level	State	Current logical level of the button input.

### Example for Configuration

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

Example for State

```JSON
'button/start': {
  'active':'true',
  'level':'1'
}
```