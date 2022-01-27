---
title: Step by Step Bring your device to work
---

# {{data.title}}

This is a step by step instruction to bring a device based on the HomeDing library to work.

 
- [Get a (brand new) EPS8266 board.](#get-a-brand-new-eps8266-board)
- [Upload the appropriate sketch](#upload-the-appropriate-sketch)
- [Register the device on the local WiFi network](#register-the-device-on-the-local-wifi-network)
- [Find the new device on the network](#find-the-new-device-on-the-network)
- [Upload the Web UI files to the onboard file system](#upload-the-web-ui-files-to-the-onboard-file-system)
  - [SPIFFS Upload Utility](#spiffs-upload-utility)
  - [File Upload Utility](#file-upload-utility)
  - [Web based Update](#web-based-update)
  - [File Upload in IDE](#file-upload-in-ide)
  - [File Save in IDE](#file-save-in-ide)
  - [Using Upload tools like cUrl](#using-upload-tools-like-curl)
- [Choose an icon](#choose-an-icon)
- [See also](#see-also)



## Get a (brand new) EPS8266 board.

The easiest board to start is any board that sticks to the nodemcu layout and features
and therefore can just be plugged into an USB board.

The following steps assume a board of this kind but different boards will not work very different.

See also [Boards supported by the HomeDing library](/boards.md)


## Upload the appropriate sketch

For a nodemcu board having a ESP8266 chip and 4 MByte of Flash ROM the best sketch to start is the
[standard example](/examples/standard.md) that includes a lot of element types and board features.

You need to select the "NodeMCU 1.0 (ESP12-E Module)" board in the Arduino Board Manager
and use a memory layout that leaves 1 MByte for the SPIFFS file system by selecting
  "4M (1M SPIFFS)" in the "Flash Size" option.

You probably will have some benefits from the debug output on the Serial port at this point
    and therefore should activate "Serial" in the "Debug Port" option
    and "None" in the "Debug Level" option.

Select the right COM port and upload the sketch. It should only take about a minute
and the reboot the board.


## Register the device on the local WiFi network

<video width="650" height="380" controls autostart>
  <source src="setup-steps.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


There is a "hard way" to configure your local WiFi network name and passphrase into the source code in the file "secrets.h". If you like to follow this approach you can change the file and upload again.

Using the built-in WiFi Manager is the preferred method for connecting to a network and avoids hard-coding network credentials and re-programming your devices when your network changes .

Connect to the unsecured network called "HomeDing" by using any mobile device or computer with WiFi adapter.
Now you have a direct connectivity to this device and can start configuration. Some mobile devices or computer will
automatically open the network configuration page.

![WiFi Manager UI](/wifimanager.png)

If the WiFi Manager UI is not starting after joining the network please open http://192.168.4.1/ or http://192.168.4.1/$setup manually.

The current device name is shown in this dialog and you will find the device later on the registered network using http://\<devicename\>.

* Select your private WiFi Network and enter the passphrase.
* Press "Connect" to connect.

It may take some time and if everything is fine you will see the HomeDing network disappear and you can re-join your local network.


You may also look into the Serial output using the `Serial Monitor` of the Arduino Environment to see some messages about what is happening inside the device.

```TXT
SDK:2.2.2-dev(38a443e)/Core:2.6.3=20603000/lwIP:STABLE-2_1_2_RELEASE/glue:1.2-16-ge23a07e/BearSSL:89454af
00:00:02 sys:i Device starting...
...
00:00:04 sys:t connected.
00:00:04 sys:i airding 192.168.2.118
00:00:04 sys:t Connected to: DEVNET
...
```


## Find the new device on the network

As long as there is no configuration mode requested the device will register itself on the local network
using a temporary device name and then start into normal operating mode.

Without any configuration the devicename is constructed by "ESP-" and a device specific hex number given by the digits of the uniques network adapter MAC address.

try:

* http://\<devicename from the WIFI Manager dialog\>
* http://\<devicename from the Serial Monitor\> (should be identical)
* http://\<ip-address from the Serial Monitor\>


## Upload the Web UI files to the onboard file system

There are 3 sources where you can find the files to upload for the web UI.

* The `data` folder in the standard example has a copy of the WebUI files that fits to the set of elements of the standard example and some more.
* On homeding.github.io these files are available as well and can be downloaded.   
* The `WebFiles` project on https://www.github.com/HomeDing/WebFiles is used to create files for the WebUI. 


To transfer the files to the device multiple methods are available:


### SPIFFS Upload Utility 

Using the ESP8266 filesystem Upload utility can be used to upload all files from a `data` folder at once.

This method has the bad effect that all existing files will be deleted because a complete filesystem image is created and transferred.

This method is useful when starting with a new board.


### File Upload Utility

![Builtin Upload Utility](/upload.png)

The firmware offers an upload interface as part of the embedded web server. This upload service can be used by the builtin minimal UI available at 
<http://homeding/$upload.htm>. This UI is implemented with minimal size (looks plain ugly) but is part of the firmware.

This method is useful when uploading new files or update individual files. Cannot delete files and keeps other files.

Upload works by using drag&drop. select the files (not folders) and drop them over the "drop here" region. All files will be uploaded.

To upload icon files for the elements in the `/i` folder you can click the `I-Upload` link before dropping these files.


### Web based Update

![Builtin Upload Utility](/boot.png)

The firmware offers an update interface as part of the embedded web server.
This is available at <http://homeding/$boot.htm>.
By pressing the start button all files from the homeding documentation website are transferred to the device.
The list of files and files for download are available at: https://homeding.github.io/v02/list.txt.

This method is useful when updating a standard firmware by a new version and the UI files need to be updated.

This method is also useful when starting with a new board.


### File Upload in IDE

After an initial upload of files the built in [Micro IDE](/microide.md) can be used. 
It has a upload area that can be used to upload files into the filesystem like in File Upload Utility.

Only files in the root folder (not /i/*.svg) can be uploaded.


### File Save in IDE

The [Micro IDE](/microide.md) can create new files and can update existing files by entering text and saving it to a (new) filename.


### Using Upload tools like cUrl

* When working with commandline tools the following cURL statement can be used to upload individual files.

    curl --form "fileupload=test.txt;filename=/test.txt" http://homeding/


## Choose an icon

![Select Icon](/stepupdateicon.png)

Every device can have a special icon that you will recognize in the shortcut or link.


## See also

* [Standard Example](/examples/standard.md)
* [Recipes](/recipes/index.md)
* [Elements](/elements/overview.md)
