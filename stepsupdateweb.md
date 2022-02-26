---
title: Step by Step uploading the files for the web UI
---

# {{title}}

There are some options to upload / update the files in the filesystem of a device using the HomeDing library. These are outlined here so you can find the procedure that fits best to your setup an situation. 

To upload the firmware & sketch see [Step by Step Bring your device to work](/stepsnewdevice.md)


## Update the Web UI files from the internet

This method works even when the file system is empty.
It can be used for an initial upload.

Open <http://homeding/$boot.htm> <sup>*1</sup> to use this upload utility:

![Automatic Web Update](/stepsupdatewebboot.png)

This is a builtin upload and update tool for the web files from the documentation web site.
The files are contained in the directory <https://homeding.github.io/v03> and a list of the files can be found <https://homeding.github.io/v03/list.txt>

From this file all files are fetched and uploaded to the device one-by-one when pressing the start button.

There may be multiple versions at the same time.

This method doesn't overwrite the config files on the device so it can be used on configured devices without wiping the configuration.


## Drag & Drop uploading 

This method works even when the file system is empty.
It can be used for an initial upload.

Open <http://homeding/$upload.htm> <sup>*1</sup> to use the drag & drop upload utility:

![Drag&drop Web Update](/stepsupdatewebdrop.png)

The HomeDing device has an embedded web server that offers this simple upload functionality that is built-in the firmware from the sketch.

You can reach it on a un-configured device using the url http://ESP-xxxxxx/$upload.htm.
The real server name or the ip-address of an un-configured device can be found in the serial output.

**Examples:**

* <http://ESP-123456/$upload.htm> - the generic name is used as long as there is no configuration of the [Device Element](/elements/device.md). 
* <http://192.168.2.170/$upload.htm> - The IP address can always be used. It is shown in the serial output.

The files that need to be uploaded to implement the Web UI can be found
in the data folder of the [Standard Example](/examples/standard.md). 

There are 2 upload sets required:

* **The files in the root folder**. These are the files that are directly contained in the data folder.
You can select them all (but not the sub folders) and drop them on the drop region of the page.

* **The symbol files for elements**. These files can be found in the `i` folder.
You need to navigate to <http://homeding/$upload.htm#i> and drop all the files in the folder.


## Drag & Drop uploading in the IDE

This method works even when a IDE is already available in the filesystem
so it cannot be used for an initial upload.

In the right upper corner you can find a drop area similar to the one above. It can only be used to upload files into the root file system.


## Uploading using the SPIFFS filesystem uploader 

If you have the ESP8266 Upload tool installed you can also use this approach to upload the initial files. 

As this method will always upload all files at once you probably will overwrite the configuration files so another method needs to be used when uploading to a configured device.

To verify that the uploaded file are present you can request the list of existing files using
* <http://homeding/$list>

See: <https://github.com/esp8266/arduino-esp8266fs-plugin>

**<sup>*1</sup>**: replace `homeding` with the network name of your device to use this link.
