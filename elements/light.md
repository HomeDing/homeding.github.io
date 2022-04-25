---
title: Light Element
id: light
tags: ["Element"]
description: Support GPIO output pins for controlling lights with multiple color channels.
excerpt: >
  The LightElement is used to send a light value to GPIO output pins.
  It can also be used as a base class for other light elements using a specific chip or protocol.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::

The base implementation in the LightElement can be used for single channel light values like a single LED or a single RGB Led attached directly to GPIO pins.

The output is using PWM signals for controlling the overall brightness.

## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?light" type="image/svg+xml"></object>

**pin** - Specifies the output pin(s) that are used to connect to the light. This can be a list with up to 4 pins. 
Define one pin for normal single color leds ("pin":"D6") or 3 pins for RGB ("pin": "D8,D6,D7") or 4 pins for WRGB ("pin":"15,14,12,5").
 
**value** - This is the value used for the PWM output. This can be a single value for one pin or a (W)RGB value for up to 4 pins. The values is always using the 32-bit storage format for RGB values like `x00rrggbb` or 0..255.

**brightness** - The brightness factor can be used to dim the light in general. The brightness value must be in the range 0..255. The default is 128.

**enable** - This boolean 0/1 value controls the output. When 0 is given the value for output is given with 0 but the current value is kept. This allows easy switching on and off.


### Color Values

Color values are specified using the 32-bit hex format with a leading 'x' or '#'.
The format #RRGGBB is used like in the css web standard and some plain color names from the css web standard can be used as well.

The '#' sign has to been avoided in URLs because it will not be passed from a URL to the server.

Colors are transformed internally to a 32 value like `xWWRRGGBB`. 

There are some simple colors available by name:

| color value | name  |
| ----------- | ----- |
| #00000000   | black |
| #00ff0000   | red   |
| #0000ff00   | green |
| #000000ff   | blue  |
| #ffffffff   | white |


### Example configuration

``` json
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

``` json
{
  "light/lx": {
    "active":"true",
    "value":"",
    "brightness":"43.48"
  }
}
```


## See also

* [NeoElement](/elements/neo.md)
* Gamma correction tricks <https://learn.adafruit.com/led-tricks-gamma-correction>


## Tags
#element #output #light