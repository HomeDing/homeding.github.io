---
title: Display TouchGT911 Element
tags: ["Element", "Display", "Input", "WIP"]
layout: "page.njk"
excerpt: >
  The DisplayTouchGT911 Element enables retrieving touch events on displays
  using the 5-Point Capacitive Touch Sensor based on the GT911 chip.
---

The DisplayTouchElements share the same functionality while supporting different Touch controllers.

The GT911 Controller is using the i2c bus for communication.

## Driver implementation

The driver for this chip is embedded in the HomeDing library in folder `src/lib` and can be
extracted to a library format on demand. It will be included in the firmware binary when the DisplayTouchGT911 Element is included using the definition `HOMEDING_INCLUDE_DISPLAYTOUCHGT911` is used in the man sketch.

Other Driver implementation for other environments and non maintained libraries
can be found in GitHub. The implementation documentaton and the reference implementation from Goodix
for Android was taken as a primary source.


## Element Configuration

<!-- <object data="/element.svg?analog" type="image/svg+xml"></object> -->

The following properties are available for configuration of the element:

> **width** -- The width of the touch surface
>
> **height** -- The height of the touch surface
>
> **rotation** -- Rotation of the display in use using 0, 90, 180 or 270 degree.
>
> **address** -- The I2C address of the GT911 controller.


## See also

* [Display Touch Elements](/elements/display/touch.md)
* [i2c bus](/dev/i2c.md)
* <https://www.goodix.com/en/product/touch/touch_screen_controller>
* <https://github.com/goodix> reference implementation for Android
* <https://gitlab.com/AdyaAdya/goodix-touchscreen-linux-driver/-/blob/master/goodix_mainline.c?ref_type=heads>
* <https://github.com/nik-sharky/arduino-goodix>

* <https://github.com/klaper/Sonoff-Tasmota/blob/4d9272f701682ecca3f93af927cf768a4a3274ce/lib/lib_display/GT911/GT911.cpp>
*
* <https://github.com/DiveInEmbedded/GT911-Touch-driver/blob/main/Core/Src/GT911.c>
* <https://github.com/friendlyarm/linux-3.4.y/blob/nanopi2-lollipop-mr1/drivers/input/touchscreen/gt9xx.c>
* <https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/blob/ceadf44410d174abf8c8f9db83cfdf0c637fb2f3/src/drive/fx50xx/focaltech.cpp>
* <https://github.com/lewisxhe/SensorLib/blob/master/src/TouchDrvGT911.hpp>
* <https://github.com/lvgl/lvgl_esp32_drivers/blob/master/lvgl_touch/gt911.h>

<!-- 
* <https://github.com/arduino-libraries/Arduino_GigaDisplayTouch> This library is in an early
  stage and implemented for Arduino boards based on mbed operating system only. I like the
  cleaness of the interface. Rotation support is missing as well.
* <https://github.com/TAMCTec/gt911-arduino> This library is almost working but has some buffer
  overflows when communication is not correct (found more than 5 points) and needs software reset.
* <https://github.com/u4mzu4/Arduino_GT911_Library>
 -->

