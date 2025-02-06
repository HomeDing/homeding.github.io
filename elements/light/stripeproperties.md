
From the base [Stripe Element](/elements/light/stripe.md) implementation the following properties are available for configuration:

> **count** -- Number of pixels that are attached. This value must be specified in the config only. The default is 1.
>
> **brightness** -- The brightness factor can be used to dim the light in general. The brightness value must be in the range 0..100. The default is 50.
>
> **value** -- Is used for color mode to pass a list of colors like `red,blue,green,white`.
> For valid color values, see [LightElement](/elements/light/light.md).
>
> **mode** -- The display effect to be used. See Color Modes description in  [StripeElement](/elements/light/stripe.md)
>
> **duration** in msec -- This parameter is used to specify the number you of milliseconds for a transition in a color animation
> or fading from one value to another. When not specified the value 0 is used to make the new value effective immediately.

