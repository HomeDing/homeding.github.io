---
title: Light Element
icon: light
tags:
  - "Element"
  - "Light"
layout: "page.njk"
description: Support GPIO output pins for controlling lights with multiple color channels.
excerpt: >
  The LightElement is used as a base class to control a light by WRGB Value and Brightness. It can control
  up to 4 PWM GPIO output pins directly for WRGB lights.
  It is used as a base class for other light elements using a specific chip or protocol.
---

The Homeding Library supports several ways of controlling Lamps and lights beyond switching on/off and dimming.
This includes controlling lights that can create a wide range of colors and stripes of LEDs that can be controlled individually.

The base implementation in the LightElement can directly be used for single channel light values
like a single LED or a single RGB Led attached directly to GPIO pins.

The output is using PWM signals for controlling the brightness.
This class also offers some basic patterns for brightness and color animations.

Other Elements for controlling single value lights are:

* [MY9291 Element](/elements/light/my9291.md)

The LED stripes with individual controllable LEDs are based on the [Stripe Element](/elements/light/stripe.md)
that

* [Neo Element](/elements/light/neo.md)
* [Apa102 Element](/elements/light/apa102.md)
* [P9813 Element](/elements/light/p9813.md)


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?light" type="image/svg+xml"></object>

> **value** -- This is the value used for the PWM output. This can be a single value for one pin or a (W)RGB value for up to 4 > pins. The values is always using the 32-bit storage format for RGB values like `x00rrggbb` or 0..255.
>
> **brightness** -- The brightness factor can be used to dim the light in general. The brightness value must be in the range 0..> 255. The default is 128.
>
> **enable** -- This boolean 0/1 value controls the output. When 0 is given the value for output is given with 0 but the current > value is kept. This allows easy switching on and off.
>
> **pin** -- Specifies the output pin(s) that are used to connect to the light. This can be a list with up to 4 pins.
> Define one pin for normal single color leds ("pin":"D6")
> for 3 pins RGB (e.g. `"pin": "D8,D6,D7"`) or
> for 4 pins for WRGB (e.g. `"pin":"15,14,12,5"`).
>  
> **mode** -- The mode must be set to `pwm` to directly enable LED control using pwm signal. For other light implementations the mode must not be set to not conflict with protocols of specific implementations.

{% include "../elementproperties.md" %}


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


### Configuration Example

This example shows how to configure this element:

``` json
{
  "light": {
    "lx": {
      "pin": "15,14,12,5",
      "mode": "pwm",
      "value": "x100000",
      "enable": "true",
      "brightness": "25",
      "duration": "3s"
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

* [NeoElement](/elements/light/neo.md)
* Gamma correction tricks <https://learn.adafruit.com/led-tricks-gamma-correction>
