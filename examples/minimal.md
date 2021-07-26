# The minimal footprint example

:::excerpt
The examples in the HomeDing library are used to compile a firmware that provides the base functionality
combined with a set of elements that can be used in the configuration of the device.

The **minimal example** 
runs on the ESP8266 boards that only have a small amount of Flash Memory (1 MByte) available for program and web UI storage
like the [ESP-01](/boards/esp01.md) and devices like [sonoff S20 switch](/boards/sonoffbasic.md) and [bulbs](/boards/bulb.md).
:::

You can find many retail IoT devices with the ESP8266 chip like those from [sonoff](/boards/sonoff.md) or the bulbs from tuya but they are not really usable during development.
So while developing for a device with the 1 MByte Flash Memory restriction
and often also a missing auto-reset before flashing new firmware
it is recommended to use a board like a [NodeMCU](/boards/nodemcu.md) but keep an eye of memory consumption.


## Reduced memory footprint 

Compared to the [Standard example](/examples/standard.md) some measures have been taken to reduce required program memory. 

From the 1 MByte of memory only 128kByte of memory is used for the file system
leaving about 445 kByte for program space while still enabling OTA / network based updates.

When compiling the sketch to create a firmware only a small set of elements are included (see below). The web files are also minimized and reduced in functionality to allow a minimal UI implementation and logging is disabled to save memory in the filesystem.
Compared to the Standard example about 52 kByte less program space is required.
When disabling the debug port in the Board configuration another 1.5 kByte can be saved. 


## Reducing the set of Elements 

The elements that are included in this example sketch are those that support sockets, switches and lights but no sensors and displays. The logical, time and remote elements are included as well to support integration.

As of this writing the elements included are:

ota, device, value, button, switch, and, reference, time, alarm, ntptime, timer, schedule, digitalin, digitalout, remote, dht, color, light, neo, bl0937, my9291, ssdp

You can control what elements are included in the firmware file by enabling or disabling the #define statements for registering the elements in the sketch file.

If you like to know what element are available in a device just ask for the URL http://\<devicename\>/$elements


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

To upload either the Flash utility or the drag&drop upload tool can be used. The uploadfiles.bat also contains the command required to upload using the ESP Upload tool on the command line. The upload options are explained in detail in [file upload](/examples/fileupload).



## Web UI

The Web UI that comes with this example fits into 128 kByte and provides showing actual sensor and actor values implemented in the /ding.html file that is also available on the standard Web UI for the standard example.

* network configuration : /$setup
* UI to upload: /$upload
* min editor: /microide.htm
* no full icon set - only one device icon. /i/default.svg
* favicons.


## Modifications

This example also acts as a starting point for other sensors that need no extensive ui capabilities or use the [deep sleep mode](/boards/deepsleep.md) and wake-up modus to save energy when powered by battery or solar.

Not included elements of the library can be added by defining the Element to be included in the sketch. There are some commented lines in the source code that show how this can be achieved.

When you implement your own elements you can just add them to the sketch folder.




## OTA Update


https://github.com/arendst/Sonoff-Tasmota

https://goblinsleg.wordpress.com/category/sonoff-tasmota/

https://github.com/ct-Open-Source/tuya-convert/wiki/Compatible-devices

https://www.heise.de/ct/artikel/Tuya-Convert-Escaping-the-IoT-Cloud-no-solder-need-4284830.html

https://goblinsleg.wordpress.com/category/sonoff-tasmota/
https://goblinsleg.wordpress.com/2017/12/28/diy-home-automation-with-openhab-2-part-3/



