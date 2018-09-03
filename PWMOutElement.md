# The PWMOut Element

This element is used to create a variable PWM signal at the specified output pin.

## Element Configuration

The following properties are available for configuration of the element:

| Property | Description |
| ---      | --- |
| pin*     | Specifies the hardware number of the pin.
| invers   | In normal mode the value speifies the amount of HIGH output time. In inverse mode a LOW output time is specified by the value.
| range    | The range specifies the maximum valid value.
| value    | The value of the pwm output. This property is typically set to an initial value in the configuration and then will be changed on demand.

\* This parameter must be specified.

## Element State

The following properties are available with the current values at runtime

| Property | Description |
| ---      | --- |
| active   | Is set to true when the Element is active.
| value    | Current logical value of the pwm signal.


## Example Configuration

```JSON
"pwmout": {
  "led": {
    "pin": "D4",
    "range": 255,
    "value": 10,
    "invers": "true",
    "description": "Build-in LED"
  }
}
```

## Example State

```JSON
```