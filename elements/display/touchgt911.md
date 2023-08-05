---
title: Display TouchGT 911 Element
tags: ["Element", "Display", "Input", "WIP"]
layout: "page.njk"
excerpt: >
  The Display Touch GT911 Element enables retrieving touch events on displays
  using the 5-Point Capacitive Touch Sensor based on the GT911 chip.
---

The DisplayTouchElements share the same functionality while supporting different Touch controllers.

The GT911 Controller is using the i2c bus for communication.

## Element Configuration

<!-- <object data="/element.svg?analog" type="image/svg+xml"></object> -->

The following properties are available for configuration of the element:

**width** --

**height** --

**rotation** --

**address** -- The I2C address of the GT911 controller.

<!-- TODO: documentation


There are multiple implementations - even some for arduino but they are all in an early stage or
not maintained any more.

* <https://github.com/arduino-libraries/Arduino_GigaDisplayTouch> This library is in an early
  stage and implemented for Arduino boards based on mbed operating system only. I like the
  cleaness of the interface. Rotation support is missing as well.
* <https://github.com/TAMCTec/gt911-arduino> This library is almost working but has some buffer
  overflows when communication is not correct (found more than 5 points) and needs software reset.
* <https://github.com/u4mzu4/Arduino_GT911_Library>

The gt911.h / gt911.cpp is my own assembled version working for ESP32.

### See also

* <https://github.com/goodix> reference implementation for Android
* <https://www.goodix.com/en/product/touch/touch_screen_controller>
* <https://github.com/lvgl/lvgl_esp32_drivers/blob/master/lvgl_touch/gt911.h>


 -->

## See also

* [Display Touch Elements](touch.md)
* [i2c bus](/dev/i2c.md)
