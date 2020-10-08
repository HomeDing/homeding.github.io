# Light Element

::: excerpt light
The LightElement is used to send a light value to GPIO pins.
It can be used as a base class for other light elements using a specific chip or protocol.
:::

The base implementation in the LightElement can be used for single channel light values like a single LED or a single RGB Led attached directly to GPIO pins.

The output is using PWM signals for controlling the overall brightness.

## Properties

These properties can be configured:

**pin** - Specifies the output pin(s) that are used to connect to the light. This can be a list with up to 4 pins.
 
**value** - This is the value used for the PWM output. This can be a single value for one pin or a RGB(W) value for up to 4 pins. The values is always using the 32-bit storage format for RGB values like `x00rrggbb` or 0..255.

**brightness** - The brightness factor can be used to dim the light in general. The brightness value must be in the range 0..100. The default is 50.

**duration** - This parameter is used to specify the number you of milliseconds for a transition from one value to another. When not specified the value 0 is used to make the new value effective immediately.


### Example configuration

```JSON
{
  "light": {
    "lx": {
      "pin": "",
      "value": "0",
      "brightness": "25"
      "duration": "0"
    }
  }
}
```


## Outbound Actions

There are no actions being sent by this element.


## State

```JSON
{
  "light/lx": {
    "active":"true",
    "value":"",
    "brightness":"43.48",
    "pressure":"99784",
    "gas":"72724"
  }
}
```


# See also

* [NeoElement](elements/neo.md)
* Gamma correction tricks <https://learn.adafruit.com/led-tricks-gamma-correction>


## Tags
#element #output