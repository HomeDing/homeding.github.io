# Step by Step setting up a development environment

This is a step by step instruction on how to setup you local computer for using ESP8266 boards and the HomeDing library.


- [Install the Arduino Environment](#install-the-arduino-environment)
- [Install the ESP8266 toolchain](#install-the-esp8266-toolchain)
- [Install the ESP8266 filesystem Upload utility](#install-the-esp8266-filesystem-upload-utility)
- [Done.](#done)
- [See also](#see-also)


## Install the Arduino Environment

1. To install latest version of Arduino IDE (currently version 1.8.12) please visit <https://www.arduino.cc/>. 

2. Download the Arduino IDE for your operating system from the `Software -> Download` menu. 

3. Install the software and all drivers.


## Install the ESP8266 toolchain

THe ESP8266 toolchain like compiler and linker comes in a package that can be installed using the Arduino board manager. 

1. Start the Arduino IDE and open the Preferences dialog.

2. Enter `https://arduino.esp8266.com/stable/package_esp8266com_index.json` into the `Additional Board Manager URLs` field. You can add multiple URLs, separating them with commas.

3. Open the menu Boards Manager in the Arduino IDE from the Tools -> Board menu and find entry **esp8266 by ESP8266 Community** and install the latest version.

Detailed instruction can be found here: <https://arduino-esp8266.readthedocs.io/en/latest/installing.html#boards-manager>


## Install the ESP8266 filesystem Upload utility

To upload (the initial) Web UI into the SPIFFS flash rom there is a special utility available.

A detailed instruction on how to install it can be found here: <https://github.com/esp8266/arduino-esp8266fs-plugin>


## Done.

Now you are ready to build Arduino projects and sketch and upload them to the device.


## See also

* [Bring your device to work](/stepsnewdevice.md)
* [Standard example](/examples/standard)
* [Build a In-house IoT Air Quality sensor.](/stories/story-airquality.md) 