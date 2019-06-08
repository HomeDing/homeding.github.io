# NeoElement for WS2812 LEDs

> Draft !!! ???


The WS2812 LEDs, also known also Neopixels can be addressed to emit red, green and blue light by a very special protocol that is transmitted over a single data line.

Multiple LEDs on a single data line are chained so the data goes through the first LED to the next one. Every LED is taking of the very first RGB value and passes on all the others.

The NeoElement allows driving these LEDs by using the Adafruit Library and by providing some color animations and transitions.

---

The same functionality applies to the [RGBElement](elements/rgb.md) that can drive a single RGB LED or light.

--- 

If you require more complex light situations and light animations 
Consider using the [DMX Element](dmx.md) to get light input actions using the DMX Artnet protocol that is supported by light mixers and consoles for stage and installation purpose.

---

https://www.bastelgarage.ch/esp-01-ws2812-sk6812-steuerplatine

## Properties

These properties are used to setup the attached LEDs:

**brightness** The brightness factor can be used to dim the light in general. The brightness value must be in the range 0..255. The default is 255.

**count** number of pixels that are attached. The default is 16 and must be specified in the config only.

**pin** The pin that is used for data transmission. Defaults to GPIO2(D4).

## Light and Color

There are some effects built into the NeoElement that can be controlled by using the following actions:

**duration** in msecs. When this value is given the next color or pattern will faded to.

**color** sets all pixels to the passed color or color pattern.

When more than one color is given, the pattern is applied to all the leds.

color=red
color=red,white
color=blue,green,red,black
color=#0000FF,#00FF00,#FF0000,#000000


**fade**

**rainbow**

 

## Color Values

here the color notation is used that is known from the web css standard by specifying RGB values in the format #RRGGBB.

This is transformend internally to a 32 value 0x00RRGGBB.

There are some simple colors vailabe by name:

#000000 black
#ff0000 red
#00ff00 green
#0000ff blue
#ffffff white

# See also

* [RGBElement](elements/rgb.md)