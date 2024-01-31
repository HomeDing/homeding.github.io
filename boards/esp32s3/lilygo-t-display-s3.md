---
title: LilyGO T-Display-S3
tags: ["Board", "WIP"]
layout: "page.njk"
description: ESP32-S3 board with integrated TFT color display.
excerpt: > 
  The LilyGO T-Display-S3 board has an integrated TFT color display **with**
  optional capacitive touch and a USB-C type connector.
---

The T-Display-S3 is a [ESP32-S3](/boards/esp32s3/index.md) based development with a 1.9" IPS LCD color touch screen and two
separate momentary buttons. Communication to the display is using a fast 8 bit interface. The USB-C board is supported by the
ESP32-S3 chip.

![TTGO T-Display](/boards/esp32s3/lilygo-t-display-s3.jpg)


## Arduino Board Configuration

The board is known in the list of predefined board configurations for esp32 by espresif.
It can be used with the following Arduino settings:

* Package: esp32 by Espressif
* Board: LilyGO T-Display-S3

The following board settings can be used:

* JTAG Adapter: Disbled
* Arduino Runs On: Core 1
* Events Runs On: Core 1
* USB Mode: Hardware CDC amd JTAG
* USB CDC On Boot: Enabled
* USB Firmware MSC on Boot: Disabled
* USB DFU on Boot: Disabled
* Upload Mode: UAT0 / Hardware CDC
* Partition Scheme: 16M Flash (3MB APP/9.9MB FATS)
* Core Debug Level: None
* Erase All Flash: Disabled

For the Arduino-CLI the following boardname and build properties can be used:

```bash
fqbn = "esp32:esp32:lilygo_t_display_s3"
properties = "JTAGAdapter=default,LoopCore=1,EventsCore=1,USBMode=hwcdc,CDCOnBoot=cdc,MSCOnBoot=default,
  DFUOnBoot=default,UploadMode=default,PartitionScheme=app3M_fat9M_16MB,DebugLevel=none,EraseFlash=none"
```


## Display ST7789

The display is a IPS type TFT display using the ST7789 driver chip on the SPI bus. It is
supported by the `GFX Library for Arduino`.

The board supports a display resolution of 170\*320 pixels in 64k colors in RGB565 addressing.

The background lightning can be adjusted using PWM based LED control on pin GPIO38.


## Touch CST816

The touch screen is using the CST816 chip that is supported by the
[Display TouchCST816 Element](/elements/display/touchcst816.md). Is is using the [i2c bus](/dev/i2c.md) as an interface and the
SCL and SDA pins must be specified in the [device element](/elements/device.md) configuration.

The touch controller goes beyond the graphics surface and when touching the soft button marked with a circle below the display
the touch controller reports a touch event on location ???

## Power

The board can be powered through the USB-C connector. It does not support the complete USB-C specification, especially not the
USB-C voltage negotiation protocol and a USB2.0 USB-A to USB-C cable must be used.

The board can run by using the power from a 3.7 V LiPo battery pack attached to the JST-GH 1.25mm 2pin connector on the board.
There is a LiPo charger chip that loads the battery.

The time the device can run on batter power supply depends on the given LiPo capacity. As the display is the most power
consuming part of the device this is switched off on battery mode (no power provided by USB-C).

The battery mode can be controlled by 2 pins:

**GPI15** -- This pin can enable the power to the display on battery. When the pin is pulled high the 3.3 volt is given to the
display and the green LED on the board.
A [Digital Output Element](/elements/digitalout.md) can be used to control this signal.

There is a recipe below that uses the menu touch button to trigger a timer so the display is on for some seconds when needed. 

**GPIO4** -- This pin can be used to messure the current battery voltage and calculate the remaining battery capacity from this.
  


## Buttons

The board is equipped with 3 momentary buttons:

* The reset button is reachable at the side of the main board.
* The Boot button is connected to GPIO0 as usual. It is located **???** left to the USB-C port.
* THe Key Button is connected to GPIO14 and is located **???** left to the USB-C port.

The Key button and the Boot button can be used for functional purpose when the device has booted.


## Example env.json Device Configuration

``` json
{
  "device": {
    "0": {
      "name": "tdisplays3",
      "title": "LilyGO T-Display-S3",
      "description": "LilyGO T-Display-S3R8 with capacitive touch",
      "loglevel": "2",
      "logfile": 1,
      "safemode": "false",
      "homepage": "/board.htm",
      "xcache": "etag",
      "i2c-SDA": "18",
      "i2c-SCL": "17",
      "battery_volt": "4"
    }
  },
  "ota": {
    "0": {}
  },

  "DisplayST7789": {
    "0": {
      "width": "170",
      "height": "320",
      "rotation": "270",

      "busmode": "par8",
      "buspins": "39, 40, 41, 42, 45, 46, 47, 48",
      "ips": 1,
      "rowOffset": 0,
      "colOffset": 35,
      "resetpin": 5,
      "lightpin": 38,
      "cspin": "6",
      "dcpin": "7",
      "wrpin": "8",
      "rdpin": "9",

      "color": "black",
      "border": "black",
      "background": "#cccccc"
    }
  },

  "DisplayTouchCST816": {
    "0": {
      "width": "170",
      "height": "320",
      "rotation": "270",
      "resetpin": 21,
      "interruptpin": 16
    }
  }
}
```

## Enable the display when touching the menu button

```json

```

## See Also

* <https://www.lilygo.cc/products/t-display-s3>
* <https://github.com/Xinyuan-LilyGO/T-Display-S3>
* <https://github.com/teastainGit/LilyGO-T-display-S3-setup-and-examples>

* [Display Elements](/elements/display/index.md)
* [Display ST7789 Element](/elements/display/st7789.md)
* [Display TouchCST816 Element](/elements/display/touchcst816.md)

* [I2C bus](/dev/i2c.md)
* <http://www.lilygo.cn/prod_view.aspx?TypeId=50062&Id=1400&FId=t3:50062:3>
* <https://github.com/Xinyuan-LilyGO/TTGO-T-Display>


---

```
#include "Arduino.h"
#include "TFT_eSPI.h" /* Please use the TFT library provided in the library. */
#include <esp_adc_cal.h>

#if ESP_IDF_VERSION >= ESP_IDF_VERSION_VAL(5,0,0)
#error  "The current version is not supported for the time being, please use a version below Arduino ESP32 3.0"
#endif

/* The product now has two screens, and the initialization code needs a small change in the new version. The LCD_MODULE_CMD_1 is used to define the
 * switch macro. */
#define LCD_MODULE_CMD_1
#define PIN_POWER_ON                 15
#define PIN_BAT_VOLT                 4
#define PIN_LCD_BL                   38

TFT_eSPI tft = TFT_eSPI();
unsigned long targetTime = 0;


#if defined(LCD_MODULE_CMD_1)
typedef struct {
    uint8_t cmd;
    uint8_t data[14];
    uint8_t len;
} lcd_cmd_t;

lcd_cmd_t lcd_st7789v[] = {
    {0x11, {0}, 0 | 0x80},
    {0x3A, {0X05}, 1},
    {0xB2, {0X0B, 0X0B, 0X00, 0X33, 0X33}, 5},
    {0xB7, {0X75}, 1},
    {0xBB, {0X28}, 1},
    {0xC0, {0X2C}, 1},
    {0xC2, {0X01}, 1},
    {0xC3, {0X1F}, 1},
    {0xC6, {0X13}, 1},
    {0xD0, {0XA7}, 1},
    {0xD0, {0XA4, 0XA1}, 2},
    {0xD6, {0XA1}, 1},
    {0xE0, {0XF0, 0X05, 0X0A, 0X06, 0X06, 0X03, 0X2B, 0X32, 0X43, 0X36, 0X11, 0X10, 0X2B, 0X32}, 14},
    {0xE1, {0XF0, 0X08, 0X0C, 0X0B, 0X09, 0X24, 0X2B, 0X22, 0X43, 0X38, 0X15, 0X16, 0X2F, 0X37}, 14},
};
#endif

void setup()
{

    // This IO15 must be set to HIGH, otherwise nothing will be displayed when USB is not connected.
    pinMode(PIN_POWER_ON, OUTPUT);
    digitalWrite(PIN_POWER_ON, HIGH);

    Serial.begin(115200);

    tft.begin();
    tft.setRotation(3);
    tft.setTextSize(1);
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_GREEN, TFT_BLACK);

#if defined(LCD_MODULE_CMD_1)
    for (uint8_t i = 0; i < (sizeof(lcd_st7789v) / sizeof(lcd_cmd_t)); i++) {
        tft.writecommand(lcd_st7789v[i].cmd);
        for (int j = 0; j < lcd_st7789v[i].len & 0x7f; j++) {
            tft.writedata(lcd_st7789v[i].data[j]);
        }

        if (lcd_st7789v[i].len & 0x80) {
            delay(120);
        }
    }
#endif

    // Turn on backlight
    ledcSetup(0, 2000, 8);
    ledcAttachPin(PIN_LCD_BL, 0);
    ledcWrite(0, 255);

}

void loop()
{
    if (millis() > targetTime) {
        esp_adc_cal_characteristics_t adc_chars;

        // Get the internal calibration value of the chip
        esp_adc_cal_value_t val_type = esp_adc_cal_characterize(ADC_UNIT_1, ADC_ATTEN_DB_11, ADC_WIDTH_BIT_12, 1100, &adc_chars);
        uint32_t raw = analogRead(PIN_BAT_VOLT);
        uint32_t v1 = esp_adc_cal_raw_to_voltage(raw, &adc_chars) * 2; //The partial pressure is one-half

        tft.fillScreen(TFT_BLACK);
        tft.setCursor(0, 0);

        // If the battery is not connected, the ADC detects the charging voltage of TP4056, which is inaccurate.
        // Can judge whether it is greater than 4300mV. If it is less than this value, it means the battery exists.
        if (v1 > 4300) {
            tft.print("No battery connect!");
        } else {
            tft.print(v1);
            tft.print("mV");
        }
        targetTime = millis() + 1000;
    }
    delay(20);
}
```
