# Displays

Some things require a display to fulfill the required functionality for

* show the current status
* present a menu
* show information from a sensor on the device

The HomeDing library therefore supports local attached displays but also works fine without a local display.

## Unified Display Adapter

There are many type of displays available today that can be used with the Arduino Environment and the supported boards.

As they have different characteristics and require different libraries the HomeDing library unifies calling display functions by using a common DisplayAdapter Interface.

All the display specific classes need to implement this interface so the HomeDing elements can use any display in this standardized way.

The Elements that currently support sending information to the displays are:

* The main sketch
* The DisplayText Element
* The DisplayDot Element

The DisplayAdapters can only support the functionality that the attached display and the used display library can support
e.g. text oriented display cannot show graphical elements or color.

This is why the DisplayAdapters can just ignore the functional requests that they cannot support.

When a specific HomeDing based device is assembled and configured it is known that a specific functionality can or cannot be supported.

## Supported Display Types


### LCDDisplay



This is a DisplayAdapter for Monochrome LCDs based on HD44780 chips.

In the Arduino Environment the LiquidCrystal library exits for a long time and supports HD44780 compatible LCDs with 2 or 4 lines of 20 characters.

Connecting this display type to Arduino was often made using many IO lines by driving the 4-bit interface mode directly.

For ESP8266 and the limited number of GPIO ports a I2C adapter solution is more adequate. The most frequent found of such an solution ist the PCF8574 remote 8-bit IO adapter chip that converts between the I2C bus and up to 8 digital IO lines.

See [http://mathertel.de/Arduino/LiquidCrystal_PCF8574.aspx](http://mathertel.de/Arduino/LiquidCrystal_PCF8574.aspx)

The library used to drive these displays is "LiquidCrystal_PCF8574".

The DisplayLCDElement can be used to configure the LCDDisplayAdapter.
This should be done in the `env.json` file:

```JSON
"displaylcd": {
  "0": {
"description": "LCD"
  }
}
```

### DISPLAYSH1106Adapter

+ 24 kByte


### DisplaySSD1306Adapter

This is a DisplayAdapter for OLED displays based on the SSD1306 chips.

The DisplaySSD1306Adapter can be used to configure the LCDDisplayAdapter.
This should be done in the `env.json` file:

```JSON
"DisplaySSD1306": {
  "0": {
    "address": "60",
    "SDA": 5,
    "SCL": 4,
    "height": 64
  }
}
```

+ 24 kByte

### Base Display Adapter

This is a dummy DisplayAdapter.

There is a base implementation of the Display Adapter interface that offers all required functionality but just does not
send anything to a display.

When implementing a Display Adapter for a specific display this class can be used to derive from so only the supported functionality needs to be added to a specific display adapter implementation.

## Accessing the Display

To get access to the DisplayAdapter the Board class provides a member variable that can be read to get a pointer to the actual DisplayAdapter.

This member variable may be NULL in the case that no display is attached.

Here is a sample code snippet:

```CPP
DisplayAdapter *display = mainBoard.display;

if (display) {
  display->drawText(0, 0, 0, "HomeDing...");
} // if
```

## Configuring a Display

For every supported DisplayAdapter type there is a Element implementation to dynamically configure the attached element. This should be done in the `env.json` file:

```
"DisplaySSD1306": {
  "0": {
    "address": "0x3c",
    "height": 64
  }
}

```

## Using the display

## Sending actions and values to the display

There are some elements that can receive actions and create the appropriate output on the display.


### DisplayTextElement

This element can receive actions with a textual value. This is placed on the display as defined in the configuration of the Displaytext Element.
[DisplayTextElement](elements/displaytext)

### DisplayDotElement

This element can receive actions with a Boolean value. This is placed on the display using a filled circle (true) or unfilled (false) circle as defined in the configuration of the DisplayText Element.

[DisplayDotElement](elements/displaydot)