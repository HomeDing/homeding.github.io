# Logical AND Element

> Draft ???

<div class="short">
  <a href="#page=/elements/and.md"><img src="/i/and.svg"></a>
  <p><strong><a href="#page=/elements/and.md">AND Element</a></strong><br/>
  combines multiple logic input values to a single output value.</p>
</div>

Actions can be send to this element using the properties value1 and value2.
Every time the value changes the onValue event is emitted.

## Element Configuration

The input values can be preset and the output can be inverted:

**value1** - The input value #1 of the element. Default is 0.

**value2** - The input value #2 of the element. Default is 0.

**invert** - The output value can be logically inverted by setting this property to true. Default is false.

The non-inverted output value is on HIGH level when all input values are on HIGH level.

### Example for Configuration

```JSON
"and": {
  "both": {
    "value1": "0",
    "value2": "0",
    "invert": "false",
    "onValue": "device/0?log=and-output: $v"
  }
},
```

## Element State

The following properties are available with the current values at runtime

**value** - actual output value.


## Implementation Details

When input values have changed event is not created immediately but when the next loop function is called.
This avoids fickering values on the output for a certain degree.

## See also

* or element


