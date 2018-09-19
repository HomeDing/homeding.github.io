# Configuring singleton elements

In some cases there is only on element of a type required while other elements can exist multiple times in a HomeDing configuration.

Those Elements that can exist only once, because they relate to a specific hardware of a library that cannot be used in multiple ways can be detected by looking at the public class member variable “singleton” that is marking Elements as being there only once.
Examples are a common display that is used for multiple information or different codes that are sent via the same interface. In these cases a common configuration setting is required.

For these use cases the Element configuration mechanism can be used as well.
The Elements implemented for this kind of purpose are always using the id = ``0`` as a convention. This allows using the same addressing schema even when the id is meaningless.

Configuration of the I2C Bus fs a specific board:

```JSON
"I2C" : {
  "0": {
    "SDA" : "D4",
    "SCL" : "D3"
  }
}
```

Configuration of the local Display of a specific board:

```JSON
"DisplayI2CLCD": {
  "0": {
    "width": "20",
    "height": "2"
  }
}
```

This example shows how a (physically) attached display that exists once is configured to use the I2C bus wiring on a board that also exists once only.

The I2C Element is only defining what pins are used for the I2C bus. The I2C Element itself doesn’t do any further initialization.

The DisplayI2CLCD Element starting up the display and registers itself as the Display Adapter for the HomeDing Device.

Both Element configurations are required only once.

It is intended to save these hardware and environment specific configuration into the env.json file.


## TODO

* [ ] PCF8574
* [ ] Create new Element on first level, when element is registered 

