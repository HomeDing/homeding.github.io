# The DigitalOut Element

The DigitalOutElement is used to set the level of a digital output pin. This can e.g. be used to drive a LED or a relay.

The physical output level can differ from the logical output value because some external components require am active HIGH and other active LOW signal.


## Element Configuration

The following properties are available for configuration of the element:

| Property  | Description |
| ---       | --- |
| `pin`*    | Specifies the hardware number of the pin.
| `inverse` | In normal mode a HIGH output level is created on value 1. In `inverse` mode a LOW output level is created on value 1. Normal mode is default.
| `value`   | The default value of the output.

\* This parameter must be specified.

## Element Actions

The following actions are available to change the output level:

| Action | Description |
| ---    | --- |
| `on`   | sets the logical output to value 1. The physical output depends on `inverse`.
| `off`  | sets the logical output to value 0. 
| `value` | The new logical value of the output.

The physical output depends on `inverse`.

## Element State

The following properties are available with the current values at runtime

| Property | Description |
| ---      | --- |
| `active` | Is set to true when the element is active.
| `value`  | Current logical output value.

## Example for Configuration

```JSON
"digitalout": {
  "led": {
    "pin": "D0",
    "inverse": "true",
    "value": "0",
    "description": "Builtin LED is on Port D0 = GPIO16"
  }
}
```

## Example State

```JSON
"digitalout/led": {
  "active":"false",
  "value":"0"
}
```
