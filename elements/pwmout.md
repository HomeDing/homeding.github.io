# The PWMOut Element

::: excerpt pwmout
The PWMOutElement is used to create a variable PWM signal at the specified output pin.
This can e.g. be used to drive a LED or a servo motor.
:::


## Web UI for the PWMOut Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

![PWMOut Web UI](/elements/pwmoutui.png)

The Web UI for the PWMout element shows the actual output level in values and by showing a simple bar chart.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?pwmout" type="image/svg+xml"></object>

| Property  | Description |
| ---       | --- |
| `pin`*    | Specifies the hardware number of the pin.
| `inverse` | In normal mode the value speifies the amount of HIGH output time. In inverse mode a LOW output time is specified by the value.
| `range`   | The range specifies the maximum valid value.
| `value`   | The value of the pwm output. This property is typically set to an initial value in the configuration and then will be changed on demand.

\* This parameter must be specified.

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.

## Example Configuration

```JSON
{
  "pwmout": {
    "led": {
      "pin": "D4",
      "range": 255,
      "value": 10,
      "inverse": "true",
      "description": "ESP-12 blue led (D4) can be dimmed"
    }
  }
}
```

@verbatim

http://devdevice/$board/pwmout/led?value=0
http://devdevice/$board/pwmout/led?value=100
http://devdevice/$board/pwmout/led?value=255


## Example State

```JSON
```

## Tags
#element #output
