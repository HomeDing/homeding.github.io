# Reference Element

::: excerpt default
The ReferenceElement allows creating actions by comparing an incoming value with a reference value.
:::

The output of comparing the 2 values can be used to switch a device on or off. This can be used e.g. to control heating or light
based on the actual temperature or light brightness.

<!-- ## Web UI for the AND Element -->


## Element Configuration

<object data="/element.svg?reference" type="image/svg+xml"></object>

**value** - The input value for the comparisation typically coming from a sensor.

**reference** - The reference input value for the comparisation typically coming from a value element.

**invert** - The output value can be logically inverted by setting this property to true. Default is false.

<!-- **hysteresis** - The value action is emitted only when the value differs more than defined by hysteresis. Default=10. -->

**onReference** -These actions are emitted when the value goes across the reference value.

**onHigh** - These actions are send when the value is above the reference value.
The value given in the actions is `1`.

**onLow** - These actions are send when the value is below the reference value.
The value given in the actions is `0`.



### Configuration Example


```JSON
{
  "reference": {
...
  }
}
```

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


<!-- ## Implementation Details -->


## See also

* [Elements](/elements.md)
* [Analog Element](/elements/analog.md)
<!-- * [Thermostat Recipe](/recipes/thermostat.md) -->
  

## Tags

#element #logic-element
