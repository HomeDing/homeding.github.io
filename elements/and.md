# Logical AND Element

::: excerpt and
The AND Element combines multiple logic input values to a single output value.
:::


Actions can be send to this element using the properties value1 and value2.
Every time the value changes the onValue event is emitted.

## Web UI for the AND Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

![AND Web UI](/elements/andui.png)

This card shows the current output computed from the last logical input values.
It is updated every time the status of the device is polled by the page.

## Element Interface

![AND Properties and Actions](/elements/andapi.png)


## Element Configuration

The input values can be preset and the output can be inverted:

**value1** - The input value #1 of the element. Default is 0.

**value2** - The input value #2 of the element. Default is 0.

**invert** - The output value can be logically inverted by setting this property to true. Default is false.

The non-inverted output value is on HIGH level when all input values are on HIGH level.


### Configuration Example


```JSON
{
  "and": {
    "a": {
      "value01": "true",
      "value02": "false",
      "invert": "false",
      "onValue": "device/0?log=and-output: $v"
    }
  }
}
```

## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


## Implementation Details

When input values have changed event is not created immediately but when the next loop function is called.
This avoids fickering values on the output for a certain degree.

You can set values using a browser by sending actions to the element by requesting for the URLs like:

* <http://nodeding/$board/and/a?value02=1> to set the vaue02 input to true
* <http://nodeding/$board/and/a?value02=0> to set the vaue02 input to false



## See also

* [Elements](/elements.md)
  
<!-- * or element -->


## Tags
#element #logic-element