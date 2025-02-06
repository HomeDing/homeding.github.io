---
title: Waveshare Panel ESP32-S3-LCD-4.3
tags:
  - "Board"
  - "WIP"
layout: "page.njk"
description: ESP32-S3 board with fast 800 * 480 px, 16 bit LCD color touch display
excerpt: >
  This is a ESP32-S3 based board including a 4.3 inch Capacitive Touch Display with 800×480 pixels, 5-point Touch and 16
  MByte Flash Memory.  with a 800*480px 16 bit color display and touch controller.  This panel is supported by the
  [HomeDing BigDisplay Example]
---

[text](https://atctwo.net/about/)

[text](https://www.waveshare.com/esp32-s3-touch-lcd-4.3.htm)
[text](https://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-4.3)

[text](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/partition-tables.html)


![waveshare ESP32-S3-LCD-4.3 board](waveshare-s3-touch-43.jpg)

This board is equipped with:

* 4.3 inch, 800 * 480 px Display based on ST7796UI supporting 16 bit parallel panel interface
  The display is supported by the "GFX Library for Arduino".
* ESP32-S3 processor in ESP32-S3-Wroom-1 module
* 8 MByte Flash
* 8 MByte PSRAM
 
* Touch Sensor: FT6336U on I2C, Address 0x38
* I2C bus using SDA=6, CLK=5
* USB-C connector connected to the processor
* SD Card slot
* TF card slot

* Connector for I2C  
* Connector and adaption for CAN bus
* Connector for Sensor with 3.3V power and 1 data/analog IO line.
* Connector and adaption for RS485 bus
* PH2.0 Connector for 3.7V lithium battery


* Boot button
* Reset button

Label: ESP32-s3-LCD-4.3

## Partition


[text](https://atctwo.net/projects/)

# Name,   Type, SubType, Offset,  Size, Flags
nvs,      data, nvs,     0x9000,  0x5000,
otadata,  data, ota,     0xe000,  0x2000,
app0,     app,  ota_0,   0x10000, 0x330000,
app1,     app,  ota_1,   0x340000,0x330000,
ffat,     data, fat,     0x670000,0x180000,
coredump, data, coredump,0x7F0000,0x10000,


```
"board": "esp32:esp32:esp32s3",
"configuration": "JTAGAdapter=default,PSRAM=opi,FlashMode=qio120,FlashSize=8M,LoopCore=1,EventsCore=1,USBMode=hwcdc,CDCOnBoot=cdc,MSCOnBoot=default,DFUOnBoot=default,UploadMode=default,PartitionScheme=default_8MB,CPUFreq=240,UploadSpeed=921600,DebugLevel=none,EraseFlash=none,ZigbeeMode=default",
```

CH422G IO expansion chip


## Arduino Configuration

The ESP32S3 Dev Module (esp32) can be used with the following settings:

Dev Board selects ESP32S3 DEV Module

There are 2 USB-C connetors available. This configuration uses the one labeled with USB (not UART).

* JTAG Adapter: Disbled
* PSRAM: OPI PSRAM
* Flash Mode: QIO 80MHz
* Flash Size: 8MByte (64Mb)
* Arduino Runs On: Core 1
* Events Runs On: Core 1
* USB Mode: Hardware CDC amd JTAG
* USB CDC On Boot: Disabled
* USB Firmware MSC on Boot: Disabled
* Upload Mode: UAT0 / Hardware CDC
* Partition Scheme: ___
* CPU Frequency: 240MHz
* Upload Speed: 921600
* Core Debug Level: None
* Erase All Flash: Disabled


## env.json configuration

``` json
{
  "device": {
    "0": {
      "name": "Waveshare",
      "title": "Panel 800*480",
      "description": "Panel with 800 px",
      "loglevel": "2",
      "logfile": 2,
      "safemode": "false",
      "homepage": "/board.htm",
      "cache": "etag"
    }
  },
  "ota": {
    "0": {}
  },
  "ntptime": {
    "on": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },

  "DisplayEsp32panel": {
    "0": {
      "busmode": "RGBPanel",
      "buspins": "14,38,18,17,10,39,0,45,48,47,21,1,2,42,41,40",
      "width": "800",
      "height": "480",
      "color": "x000000",
      "background": "#bbbbbb",
      "lightpin": 45
    }
  }
} 
```


## See also

* [WaveShare Shop](https://www.waveshare.com/esp32-s3-touch-lcd-4.3.htm)
* [Overview by WaveShare](https://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-4.3)


"C:\Users\Matthias\Documents\Arduino\ESP32Waveshare\lvgl_Porting\ESP_Panel_Board_Custom.h"


# define ESP_PANEL_LCD_NAME          ST7262

# define ESP_PANEL_LCD_WIDTH         (800)

# define ESP_PANEL_LCD_HEIGHT        (480)

# define ESP_PANEL_LCD_BUS_SKIP_INIT_HOST    (1)     // 0/1

# define ESP_PANEL_LCD_BUS_TYPE      (ESP_PANEL_BUS_TYPE_RGB)

# elif ESP_PANEL_LCD_BUS_TYPE == ESP_PANEL_BUS_TYPE_RGB

    #define ESP_PANEL_LCD_RGB_CLK_HZ            (16 * 1000 * 1000)
    #define ESP_PANEL_LCD_RGB_HPW               (4)
    #define ESP_PANEL_LCD_RGB_HBP               (8)
    #define ESP_PANEL_LCD_RGB_HFP               (8)
    #define ESP_PANEL_LCD_RGB_VPW               (4)
    #define ESP_PANEL_LCD_RGB_VBP               (16)
    #define ESP_PANEL_LCD_RGB_VFP               (16)
    #define ESP_PANEL_LCD_RGB_PCLK_ACTIVE_NEG   (1)     // 0: rising edge, 1: falling edge
    #define ESP_PANEL_LCD_RGB_DATA_WIDTH        (16)    //  8 | 16
    #define ESP_PANEL_LCD_RGB_PIXEL_BITS        (16)    // 24 | 16
    #define ESP_PANEL_LCD_RGB_FRAME_BUF_NUM     (1)     // 1/2/3
    #define ESP_PANEL_LCD_RGB_BOUNCE_BUF_SIZE   (0)     // Bounce buffer size in bytes. This function is used to avoid screen drift.
                                                        // To enable the bounce buffer, set it to a non-zero value. Typically set to `ESP_PANEL_LCD_WIDTH * 10`
                                                        // The size of the Bounce Buffer must satisfy `width_of_lcd * height_of_lcd = size_of_buffer * N`,
                                                        // where N is an even number.

    #define ESP_PANEL_LCD_RGB_IO_HSYNC          (46)
    #define ESP_PANEL_LCD_RGB_IO_VSYNC          (3)
    #define ESP_PANEL_LCD_RGB_IO_DE             (5)   // -1 if not used
    #define ESP_PANEL_LCD_RGB_IO_PCLK           (7)
    #define ESP_PANEL_LCD_RGB_IO_DISP           (-1)    // -1 if not used

    #define ESP_PANEL_LCD_RGB_IO_DATA0          (14)
    #define ESP_PANEL_LCD_RGB_IO_DATA1          (38)
    #define ESP_PANEL_LCD_RGB_IO_DATA2          (18)
    #define ESP_PANEL_LCD_RGB_IO_DATA3          (17)
    #define ESP_PANEL_LCD_RGB_IO_DATA4          (10)
    #define ESP_PANEL_LCD_RGB_IO_DATA5          (39)
    #define ESP_PANEL_LCD_RGB_IO_DATA6          (0)
    #define ESP_PANEL_LCD_RGB_IO_DATA7          (45)
    #define ESP_PANEL_LCD_RGB_IO_DATA8          (48)
    #define ESP_PANEL_LCD_RGB_IO_DATA9          (47)
    #define ESP_PANEL_LCD_RGB_IO_DATA10         (21)
    #define ESP_PANEL_LCD_RGB_IO_DATA11         (1)
    #define ESP_PANEL_LCD_RGB_IO_DATA12         (2)
    #define ESP_PANEL_LCD_RGB_IO_DATA13         (42)
    #define ESP_PANEL_LCD_RGB_IO_DATA14         (41)
    #define ESP_PANEL_LCD_RGB_IO_DATA15         (40)


# define ESP_PANEL_LCD_COLOR_BITS    (16)        // 8/16/18/24

# define ESP_PANEL_LCD_BGR_ORDER     (0)         // 0=RGB 1=BGR

# define ESP_PANEL_LCD_INEVRT_COLOR  (0)         // 0/1

# define ESP_PANEL_LCD_SWAP_XY       (0)         // 0/1

# define ESP_PANEL_LCD_MIRROR_X      (0)         // 0/1

# define ESP_PANEL_LCD_MIRROR_Y      (0)         // 0/1

# define ESP_PANEL_LCD_IO_RST        (-1)

# define ESP_PANEL_LCD_RST_LEVEL     (0)         // 0: low level, 1: high level

===

# define ESP_PANEL_USE_TOUCH         (1)         // 0/1

# define ESP_PANEL_TOUCH_NAME        GT911

# define ESP_PANEL_TOUCH_H_RES       (ESP_PANEL_LCD_WIDTH)

# define ESP_PANEL_TOUCH_V_RES       (ESP_PANEL_LCD_HEIGHT)  

/*Touch Panel Bus Settings*/

# define ESP_PANEL_TOUCH_BUS_TYPE            (ESP_PANEL_BUS_TYPE_I2C)

/*Touch panel bus parameters*/

# if ESP_PANEL_TOUCH_BUS_TYPE == ESP_PANEL_BUS_TYPE_I2C

    #define ESP_PANEL_TOUCH_I2C_ADDRESS     (0)     
    #define ESP_PANEL_TOUCH_I2C_CLK_HZ      (400 * 1000)
                                                    // Typically set to 400K
    #define ESP_PANEL_TOUCH_I2C_SCL_PULLUP  (1)     // 0/1
    #define ESP_PANEL_TOUCH_I2C_SDA_PULLUP  (1)     // 0/1
    #define ESP_PANEL_TOUCH_I2C_IO_SCL      (9)
    #define ESP_PANEL_TOUCH_I2C_IO_SDA      (8)

# define ESP_PANEL_USE_BACKLIGHT         (0)         // 0/1

# if ESP_PANEL_USE_BACKLIGHT

/*IO num of backlight pin*/

# define ESP_PANEL_BACKLIGHT_IO          (45)

# define ESP_PANEL_BACKLIGHT_ON_LEVEL    (1)         // 0: low level, 1: high level

/*Set to 1 if you want to turn off the backlight after initializing the panel; otherwise, set it to turn on*/

# define ESP_PANEL_BACKLIGHT_IDLE_OFF    (0)         // 0: on, 1: off

/*Set to 1 if use PWM for brightness control*/

# define ESP_PANEL_LCD_BL_USE_PWM        (1)         // 0/1

# endif /*ESP_PANEL_USE_BACKLIGHT*/


/*Set to 0 if not using IO Expander*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// Please utilize the following macros to execute any additional code if required. //////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #define ESP_PANEL_BEGIN_START_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_EXPANDER_START_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_EXPANDER_END_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_LCD_START_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_LCD_END_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_TOUCH_START_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_TOUCH_END_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_BACKLIGHT_START_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_BACKLIGHT_END_FUNCTION( panel )
// #define ESP_PANEL_BEGIN_END_FUNCTION( panel )

/**

* Do not change the following versions, they are used to check if the configurations in this file are compatible with
* the current version of `ESP_Panel_Board_Custom.h` in the library. The detailed rules are as follows:
*
* 1. If the major version is not consistent, then the configurations in this file are incompatible with the library
*      and must be replaced with the file from the library.
* 2. If the minor version is not consistent, this file might be missing some new configurations, which will be set to
*      default values. It is recommended to replace it with the file from the library.
* 3. Even if the patch version is not consistent, it will not affect normal functionality.
*

 */

# define ESP_PANEL_BOARD_CUSTOM_FILE_VERSION_MAJOR 0

# define ESP_PANEL_BOARD_CUSTOM_FILE_VERSION_MINOR 1

# define ESP_PANEL_BOARD_CUSTOM_FILE_VERSION_PATCH 1

# endif /*ESP_PANEL_USE_CUSTOM_BOARD*/

// *INDENT-OFF*
