# The minimal footprint example

This is the example that runs on the ESP8266 boards that only have a small amount of Flash Memory (1 MByte) available for program and web UI storage.

This can be used as a firmware for some lights and socket switches like the [sonoff](/boards/sonoff.md) S20 device. 

A typical board for this is a [ESP8266-01 board](/boards/boardesp01) with 1MByte (not 512kBype) Flash Memory.

You can also find retail IoT devices with this chip like those from [sonoff](/boards/sonoff.md) or the bulbs from tuya but they are not really usable during development.

## Reducing the Memory footprint 

From the 1 MByte of memory only 128kByte of memory is used for the file system leaving about 445 kByte for program space while still enabling OTA / network based updates.

When compiling the sketch to create a firmware only some elements are included (see below). The web files are also minimized and reduced in functionality to allow a minimal UI implementation and logging is disabled to save memory in the filesystem.
Compared to the Standard example about 52 kByte less program space is required.
When disabling the debug port in the Board configuration another 1.5 kByte can be saved. 


## Reducing the set of Elements 

The elements that are included in this example sketch are those that support sockets, switches and lights but no sensors and displays. The logical, time and remote elements are included as well to support integration.

* Value, Button, Switch
* AND
* Analog
* Timer, NTPTime Schedule, Alarm
* digitalin, digitalout
* PWMOut
* PMS
* DHT, BME680, DS18B20

You can control what elements are included in the minimal.ino sketch file by enabling or disabling the #define statements for registering the elements. 


## How to Configure and Upload

There are 2 transfer jobs to upload the firmware and the files of the filesystem.

### 1. Compile and upload the sketch

The sketch from this example can be compiled without any dependencies to external libraries.
There are some options documented in the source code e.g. to enable WS2812 LED stripes (a.k.a. NeoPixels) that you may like to enable after installing the required libraries.

You can upload using a USB / Serial cable when flashing the first time or use the OTA feature after flashing any OTA enabled firmware.
The example includes the OTA upload feature to enable remote updates.

### 2. Upload the file system

It is intended to configure the device by changing the env.json and config.json file in the data folder before uploading.
The icon in /favicon.ico and /i/default.svg can be replaced by one of the icons from the library of icons of the [full example](/examples/full)

To upload either the Flash utility or the drag&drop upload tool can be used. The uploadfiles.bat also contains the command required to upload using the ??? tool on the command line.
The upload options are explained in detail in [file upload](examples/fileupload).





## Included Web UI

By using the flash upload tool you must upload the files from within the data folder into the filesystem of the device. This includes a minimal UI that can stay in 128 kByte.

* network configuration : $setup
* UI to upload: $upload
* min editor: /edit.htm?filename.ext
* home page: /index.htm
* no icon set - only one device icon. /i/default.svg


## Included configuration

The configuration (env.json and config.json) that come with this example only contain a minimal configuration using the LED on port Dxx to blink.




## OTA Update


https://github.com/arendst/Sonoff-Tasmota

https://goblinsleg.wordpress.com/category/sonoff-tasmota/

https://github.com/ct-Open-Source/tuya-convert/wiki/Compatible-devices

https://www.heise.de/ct/artikel/Tuya-Convert-Escaping-the-IoT-Cloud-no-solder-need-4284830.html

https://goblinsleg.wordpress.com/category/sonoff-tasmota/
https://goblinsleg.wordpress.com/2017/12/28/diy-home-automation-with-openhab-2-part-3/



