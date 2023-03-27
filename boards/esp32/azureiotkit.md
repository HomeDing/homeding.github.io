---
title: ESP32 Azure IoT Kit
tags: ["Board"]
layout: "page.njk"
description: ESP32 based IoT Kit designed by Microsoft for Azure
excerpt: >
  This is a ESP32 based board based on ESP-WROVER-B module designed by Microsoft as a reference IoT Kit Azure. It is no more fully supported.
---

This is **Work in progress**

![ESP32 Azure IoT Kit](/boards/esp32/azureiotkit.jpg)

<https://www.espressif.com/sites/default/files/documentation/esp32-azure_iot_kit_hardware_design_guide__en.pdf>

https://github.com/lzyms/ESP32IoTCentral

https://github.com/ewertons/esp32-azureiotkit-sensors

https://iotexpert.com/debugging-ssd1306-display-problems/


``` cpp
// right button
#define PIN_INPUT 0

// Azure LED
#define PIN_LED 33

#define LED_GPIO_AZURE 33
#define LED_GPIO_WIFI 32
```

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

## Device Configutation

``` json


```


## ESP32 WROVER Module

Compile with 


## OLED Display

SSD1306 

* 0x3c: (SH1106,SSD1306,SSD1309)

## SD Card

SDElement to mount the sd card file system on the `/sd` folder.





https://forum.arduino.cc/t/how-to-best-configure-esp32-arduino-vs-code-debug/698140

https://www.esp32.com/viewtopic.php?t=23393


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

