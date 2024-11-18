
The `DisplayOutputElement` captures the parameters for defining a visual Element on the display.  Tis is common for
multiple Elements even when they are not used by the element.

The following properties are available for configuration:

> **x** -- Specifies the x position of the Element.
>
> **y** -- Specifies the y position of the Element.
>
> **w** or **width** -- Specifies the width of the Element.
>
> **h** or **height** -- Specifies the height of the Element.
>
> **align** -- The alignment of the text.  Possible values are "left" (default), "center" and "right".
> This configuration is used by the [DisplayTextBox Element](/elements/display/textbox.md) only
>
> **fontsize** -- Specifies the size of the text used for drawing the Element.
> This configuration is used by the [DisplayTextBox Element](/elements/display/textbox.md) only
>
> **stroke** or **color** -- Specifies the stroke color of the Element. When no color is specified on the
> element the default stroke color from the display is used.
>
> **fill** or **background** -- Specifies the background color of the Element. When no color is specified on
> the element the default fill color from the display is used.
>
> **border** -- Specifies the border color of the Element. When no color is specified on
> the element the default color from the display is used.
>
> **value** -- Specifies a value for the Element. This is used for some Output Elements only.
>
> **clear** -- The value is cleared.
