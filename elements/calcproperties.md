
The [Calc Element](/elements/calc.md) is used as a base class
where the following properties are available for configuration:

> **type** -- (internal)
> This property controls how the input values are scanned and can be modified by the derived elements.
> The logical elements set this to datatype-boolean to enable scanning of `true` and `false` values.
> The datatype-numeric and is used by the AddElement for scanning numbers.
>
> **value[n]** --
> The input values of the element are given using the value array notation. n must be in the range of 0 to 7.
>
> **invert** --
> The boolean calculations result is inverted when this property is set to true.
>
> **onValue** -- These actions are emitted when the output value has changed.
