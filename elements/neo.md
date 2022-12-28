---
title: Neo Element
id: neo
layout: "page.njk"
tags: ["Element", "Light"]
---

Neopixels is a brand name for LED stripes with the ws2812 chip.

These LED stripes and RGB LEDs are using the ws2812 or similar protocol that sends RGB values over a 1 wire data line. Multiple LEDs on a single data line are chained so the data goes through the first LED to the next one. Every LED is taking of the very first RGB value and passes on all the others.

The neo allows driving these LEDs by using the Adafruit Neopixel Library and by providing some color animations and transitions.

A very similar functionality applies to the [Light Element](/elements/light.md) that can drive a single RGB or single color LED.

<!--
If you require more complex light situations and light animations 
Consider using the [DMX Element](/dmx.md) to get light input actions using the DMX Artnet protocol that is supported by light mixers and consoles for stage and installation purpose.
https://www.bastelgarage.ch/esp-01-ws2812-sk6812-steuerplatine
-->


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?neo" type="image/svg+xml"></object>

**pin**\* - The pin that is used for data transmission to the first ws2812 in the chain. Defaults to GPIO2(D4).

**count** - Number of pixels that are attached. The default is 8 and must be specified in the config only.

**brightness** - The brightness factor can be used to dim the light in general. The brightness value must be in the range 0..255. The default is 127.

**value** - Is used for color mode to pass a list of colors like `red,blue,green,white` . See explanation for `Color mode` below, 

**config** - Neo Pixels my have different colors on the channels. Can be set to `rgb` or `grb` (default).

**mode** - The effect to be used. See below

**duration** in msecs - This parameter is used to specify the number you of milliseconds for a transition in a color animation
or fading from one value to another. When not specified the value 0 is used to make the new value effective immediately.


## Color mode

The color mode is switched on by an action that sets the **value** properties to a list of colors.
Examples for color setting actions are:

* `neo/stripe?value=0x223344`
* `neo/stripe?value=blue`
* `neo/stripe?value=xFF0000,x00FF00,x0000FF`

When assigning a single color value all the pixels will be set to this color.

When passing a list of color values the pattern is repeated until all pixels have been assigned a new color.

For valid color values, see [LightElement](/elements/light.md).


## Wheel mode

This mode is activated by setting the `mode` property to `wheel`.

In this mode the colors of all pixels are changing slowly through all colors of the RGB spectrum.

The **duration** parameter is used to specify the number you of milliseconds for a complete cycle.

Example:

* `neo/stripe?mode=wheel`


## Flow mode

This mode is activated by setting the `mode` property to `flow`.

In this mode the colors of all pixels are changing slowly through all colors of the RGB spectrum with every pixel along the stripe having a delay.

The **duration** parameter is used to specify the number you of milliseconds for a complete cycle.

Example:

* `neo/stripe?mode=flow`


## Pulse mode

This mode is activated by setting the `mode` property to `pulse` after setting colors like in the color mode.

In this mode the given colors from the value are used with a up and down ramping brightness.

The **duration** parameter is used to specify the number you of milliseconds for a complete cycle.

Example:

* `neo/stripe?value=green`
* `neo/stripe?mode=pulse`


## See also

* Good hardware tips from <https://learn.adafruit.com/adafruit-neopixel-uberguide/powering-neopixels>
* [Light Element](/elements/light.md)


## Tags
#element #output #light
