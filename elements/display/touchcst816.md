---
title: Display TouchCST816 Element
tags:
  - "Element"
  - "Display"
  - "Input"
  - "WIP"
layout: "page.njk"
excerpt: >
  The DisplayTouchCST816 Element enables retrieving one point touch events
  on displays using the Capacitive Touch Sensor based on the CST816 chip.
---

The DisplayTouchElements share the same functionality while supporting different Touch
controllers. See [Display Touch Elements](/elements/display/touch.md) for details on how Buttons
on the display can be used.

The CST816 is a one point touch sensor that is used for touch screens in small devices.
It can report the current touch position and calculate some gestures.

The CST816 controller is connected on the i2c bus and executes the continuous touch scanning.
Usually the CST816 controller need no configuration for operating because once programmed configurations
(like resolution and hardware specifics) have been saved in the controller by the manufacturer.
The found touch coordinates are available in registers matching the display dimension.


## Driver implementation

There are several Arduino libraries and source code available for this chip. As only the read
out of current coordinates is required a local driver was implemented and is available as part
of the HomeDing library and located in the `src\ib` folder in file `cst816.h` It will be
included in the firmware binary when the DisplayTouchCST816 Element is included using the
definition `HOMEDING_INCLUDE_DISPLAYTOUCHCST816` is used in the man sketch.

The driver only covers functionality for detecting touch events but not for configuration.
It automatically detects the used i2c address of the touch controller.

Other Driver implementation for other environments and non maintained libraries can be found in
GitHub. The implementation documentaton and the reference implementation from Goodix for Android
was taken as a primary source.


## Element Configuration

<!-- <object data="/element.svg?touchCST816" type="image/svg+xml"></object> -->

The following properties are available for configuration of the element:

> **address** -- The I2C address of the CST816 controller. The driver can autodetect the i2c address.
>
> **width** -- The width of the touch surface. When not specified the width of the display is used.
>
> **height** -- The height of the touch surface. When not specified the height of the display is used.
>
> **rotation** -- Rotation of the display in use using 0, 90, 180 or 270 degree.
>
> **resetpin** -- The GPIO for the reset signal to the chip.
>
> **interruptpin** -- The GPIO for the interrupt signal to the chip. (not actually used)


### Configuration Example

```JSON
{
  "DisplayTouchCST816": {
    "0": {
      "rotation": "270",
      "resetpin": 21,
      "interruptpin": 16
    }
  }
}
```


## Boards

The following boards are using the CST816 controller:

* [LilyGO T-Display-S3](/boards/esp32s3/lilygo-t-display-s3.md)
* [ESP32-C3 micro board with a round Touch Display](/boards/esp32c3/jczn-esp32-2424s012.md)

## See also

* [Display Touch Elements](/elements/display/touch.md)
* [i2c bus](/dev/i2c.md)

* <https://github.com/koendv/cst816t>
* CST816_TouchLib <https://github.com/mjdonders/CST816_TouchLib>
* <https://github.com/fbiego/CST816S>
* <https://github.com/RIOT-OS/RIOT/tree/master/drivers/cst816s>
* <https://components.espressif.com/components/espressif/esp_lcd_touch_cst816s>
* <https://github.com/espressif/esp-bsp/issues/178>

