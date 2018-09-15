# Displays

Some Things require a display to fulfill the required functionality for

* show the current status
* present a menu
* show information from a sensor

The HomeDing library therefore supports text based local attached displays but also works fine without a local display.

## Unified Display Adapter

There are many type of displays available today that can be used with the Arduino Environment and the supported boards.
As they have different characteristics and require different libraries the HomeDing library unifies calling display functions by using a common DisplayAdapter Interface.

All the display specific classes need to implement this interface so the HomeDing elements can use any display in this standardized way.

The Elements that currently support sending information to the displays are:

* The main sketch
* The DisplayText Element
* The DisplayDot Element

Functionality that the display is not supporting must just be ignored.

## Accessing the Display

To get access to the DisplayAdapter the Board class provides a member variable that can be read to get a pointer to the actual DisplayAdapter.

This member variable may be NULL in the case that no display is attached.

## Configuring a Display

t.b.I: ???

For every supported display type there is a Element implementation to dynamically configure the attached element. This should be done in the 
env.json file:

```
"DisplaySSD1306": {
  "0": {
    "address": "0x3c",
    "height": 64
  }
}

```

These Elements are only used to define the parameters for the display, create the appropriate DisplayAdapter and add this to the board.
These Elements do no use actions to be controlled.
However the loop () function will be called regularly and can be used.


## Sending actions and values to the display

There are some elements that can receive actions and create the appropriate output on the display.


### DisplayTextElement

This element can receive actions with a textual value. This is placed on the display as defined in the configuration of the Displaytext Element.
[DisplayTextElement](DisplayTextElement)

### DisplayDotElement

This element can receive actions with a Boolean value. This is placed on the display using a filled circle (true) or unfilled (false) circle as defined in the configuration of the DisplayText Element.

[DisplayDotElement](DisplayDotElement)