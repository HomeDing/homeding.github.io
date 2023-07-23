---
title: ESP32 Azure IoT Kit
tags: ["Board"]
layout: "page.njk"
description: ESP32 based IoT Kit designed by Microsoft for Azure
excerpt: >
  This is a ESP32 based board based on ESP-WROVER-B module designed by Microsoft as a reference IoT Kit Azure. It is no more supported.
---



This is **Work in progress**

![ESP32 Azure IoT Kit](/boards/esp32/azureiotkit.jpg)

<https://www.espressif.com/sites/default/files/documentation/esp32-azure_iot_kit_hardware_design_guide__en.pdf>

<https://github.com/lzyms/ESP32IoTCentral>

<https://github.com/ewertons/esp32-azureiotkit-sensors>

<https://iotexpert.com/debugging-ssd1306-display-problems/>


## LEDs

There are 2 green LEDs available:

* The LED labeled "Azure" is available on GPIO 33.
* The LED labeled "WiFi" is available on GPIO 32.

Both LEDs are not connected directyl but through a small MOSFET that inverts the signal. The LEDs will light up when the signal level is HIGH.

``` json
{
  "digitalout": {
    "led-azure": {
      "value": "1",
      "title": "digitalout/led-azure",
      "pin": "33"
    },
    "led-wifi": {
      "value": "1",
      "title": "digitalout/led-wifi",
      "pin": "32"
    }
  }
}
```


## Input Buttons

There are 2 buttons available

* The left button is bound to the RESET of the CPU chip.
* The right button is available on GPIO pin 0.

The right button is pulling the input level to LOW when pressed.

``` json
{
  "digitalin": {
    "key": {
      "pin": "0"
    }
  }
}
```


## Buzzer

pin 27


## I2C bus

The sensors and the display are reachable on the I2C bus
using the signals (sda=25, scl=26).


## Barometer FBM320

0x6D


## Ambient Light Sensor BH1750

This sensor is available on the i2c bus on address 0x23 (default).

In the description of the [BH1750 Element](elements\bh1750.md)
you can find more details.


## Motion Sensor MPU6050

3-axis gyroscope, 3-axis accelerometer

This sensor is available on the i2c bus on address 0x68.

* <https://invensense.tdk.com/products/motion-tracking/6-axis/mpu-6050/>
* <https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf>

## Magnetometer MAG3110

0x0E

<!-- <https://www.nxp.com/docs/en/data-sheet/MAG3110.pdf> -->


## Humidity and Temperature Sensor HTS221

0x5F

<!-- <https://www.st.com/resource/en/datasheet/hts221.pdf> -->


```
**Info**
DeviceName: azurekit
Build Date & Time: Mar 22 2023T13:23:03

Scan i2c (sda=25, scl=26)...
* 0x0e: ()
* 0x23: ()
* 0x3c: (SH1106,SSD1306,SSD1309)
* 0x5f: ()
* 0x68: (RTC,DS1307)
* 0x6d: ()
127 adresses scanned.
  6 devices found.
```

## Device Configuration

This is a device specific configuration for this board :

``` json
{
  "device": {
    "0": {
      "name": "azurekit",
      "title": "Azure Kit",
      "description": "ESP32 Azure IoT Kit by Espressif",
      "button": "0",
      "led": "33",
      "i2c-SDA": "25",
      "i2c-SCL": "26",
      "i2c-frequency": "50000"
    }
  },
  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123"
    }
  },
  "diag": {
    "0": {}
  },
  "ntptime": {
    "on": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },
  "displayssd1306": {
    "0": {
      "address": "60",
      "xresetpin": "D6",
      "brightness": "80",
      "xrotation": 90,
      "width": 128,
      "height": 64
    }
  }
}

```


## ESP32 WROVER Module

Compile with


## OLED Display

SSD1306

* 0x3c: (SH1106,SSD1306,SSD1309)

## SD Card

The SD card is available at the standard SPI bus of ESP32. The
[SD Card Element](/elements/sd.md) can be used to extend the filesystem
and to mount the sd card file system on the `/sd` folder.

| function | ESP32 pin |
| -------- | --------- |
| CS       | GPIO13    | ??? TODO: to be verified !
| SPI-bus  | VSPI      |


## Critics

* The SSD1306 based display requires a reset line for some cases but the RST signal is not connected to any GPIO.


*  


<https://forum.arduino.cc/t/how-to-best-configure-esp32-arduino-vs-code-debug/698140>

<https://www.esp32.com/viewtopic.php?t=23393>


## See also

* <https://www.espressif.com/en/products/devkits/esp32-azure-kit/resources>
* [Hardwware Design Kit](esp32-azure_iot_kit_hardware_design_guide.pdf)

* <https://docs.microsoft.com/en-us/samples/azure-samples/esp32-iot-devkit-get-started/sample/>

* <https://www.bing.com/aclk?ld=e84j1SJUdrrMrkgMfjTDnMvjVUCUwkCsE4dWcgS9pQq1t7lxzMiLJZsrlrkH7Yl5Vko_nFddX8x9Re3CJJJyBl9i1n_se_rY4iVSzRUsWck47IXclY7tu6rVGkRyKRrG6g2yLFlEI2po4MOFSkAx42hnNFZ42usVhyS2kStKWdk1tOcz8GFBGOjlciMOryC02iJRHvoA&u=aHR0cHMlM2ElMmYlMmZhenVyZS5taWNyb3NvZnQuY29tJTJmZGUtZGUlMmZzZXJ2aWNlcyUyZmlvdC1odWIlMmYlM2ZPQ0lEJTNkQUlEMjEwMDA0OV9TRU1fMTZlY2NkYjMxYzIyMTliZjhhYzRhZGY1MDE1M2Q0ZTIlM2FHJTNhcyUyNmVmX2lkJTNkMTZlY2NkYjMxYzIyMTliZjhhYzRhZGY1MDE1M2Q0ZTIlM2FHJTNhcyUyNm1zY2xraWQlM2QxNmVjY2RiMzFjMjIxOWJmOGFjNGFkZjUwMTUzZDRlMg&rlid=16eccdb31c2219bf8ac4adf50153d4e2&ntb=1>

* <https://www.esp32.com/viewtopic.php?t=10978>

* Kauf: <https://www.mouser.de/ProductDetail/Espressif-Systems/ESP32-Azure-IoT-Kit/?qs=PqoDHHvF64%2BuVX1eLQkvaQ==>

* <https://www.espressif.com/en/news/Microsoft_Plug-and-Play_with_ESP32-Azure_IoT_Kit?position=2&list=5lhO4nzwU4M75DgLB1L8bi8c49nLFSieLWkTJ_miAdk>
*
* <https://buildazure.com/esp32-azure-iot-kit-dev-board-espressif/>
* <https://github.com/espressif/esp-iot-solution/blob/master/examples/esp32_azure_iot_kit/readme_en.md>
* <https://www.espressif.com/sites/default/files/documentation/esp32-azure_iot_kit_hardware_design_guide__en.pdf>

