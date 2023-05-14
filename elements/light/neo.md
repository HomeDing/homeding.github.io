---
title: Neo Element
icon: neo
tags: ["Element", "Light"]
layout: "page.njk"
excerpt: >
  The Neo Element implements using LED Stripes and LED panels based on the ws2812 chip
  and protocol and provides some color animations and transitions.
  Neopixels is a brand name for LED stripes with the ws2812 chips.
---

These LED stripes and RGB LEDs are using the ws2812 chip with a specific protocol that sends RGB
values over a 1 wire data line. Multiple LEDs on a single data line are chained so the data goes
through the first LED to the next one. Every LED is taking of the very first RGB value and
passes on all the others.

<!--
If you require more complex light situations and light animations 
Consider using the [DMX Element](/dmx.md) to get light input actions using the DMX Artnet protocol that is supported by light mixers and consoles for stage and installation purpose.
https://www.bastelgarage.ch/esp-01-ws2812-sk6812-steuerplatine
-->


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?neo" type="image/svg+xml"></object>

> **config** - Neo Pixels my have different colors on the channels. Can be set to `rgb` or `grb`
> (default).

From the Stripe Element base implementation the following properties are available for
configuration:

> **value** - Is used for color mode to pass a single color like `green` or a list of colors like
> `red,blue,green,white`. See explanation for `Color mode` below,
>
> **mode** -- The effect to be used. See below.
>
> **duration** -- The duration of a effect cycle animation or transition in msecs.
>
> **effectLength** -- A length parameter to the effect. See below.
>
> **datapin** -- The pin that is used for data transmission to the first LED in the chain. If
> only one pin is required to be specified the **pin** property can be used too.
>
> **clockpin** -- The pin that is used for clock signal when required by the LED chips transfer protocol.
>
> **count** -- Number of pixels that are attached. The default is 8 and must be specified in the
> config only.

From the Light Element base implementation the following properties are available for
configuration:

> **enable**
>
> **brightness** -- The brightness factor can be used to dim the light in general. The brightness
> value must be in the range 0..100. The default is 50.


{% include "../elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{
  "neo": {
    "rgb": {
      "datapin": "2",
      "count": 1
    }
  },
}
```

## Color mode

The color mode is switched on by an action that sets the **value** properties to a list of colors.
Examples for color setting actions are:

* `neo/stripe?value=0x223344`
* `neo/stripe?value=blue`
* `neo/stripe?value=xFF0000,x00FF00,x0000FF`

When assigning a single color value all the pixels will be set to this color.

When passing a list of color values the pattern is repeated until all pixels have been assigned
a new color.

For valid color values, see [LightElement](/elements/light/light.md).


## Flow mode

This mode is activated by setting the `mode` property to `flow`.

In this mode the colors of all pixels are changing slowly through all colors of the RGB spectrum with every pixel along the stripe having a delay.

The **duration** parameter is used to specify the number you of milliseconds for a complete cycle.

Example:

* `neo/stripe?mode=flow`


## See also

* [Color Element](/elements/light/color.md)
* [Stripe Element](/elements/light/stripe.md)
* [Light Element](/elements/light/light.md)
* Good hardware tips from <https://learn.adafruit.com/adafruit-neopixel-uberguide/powering-neopixels>
