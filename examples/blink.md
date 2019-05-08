# The HomeDing - Blink Example ???

## How to setup your first HomeDing

The BlinkDing Example is a perfect project that you can use for your first experience with the HomeDing library. It only requires a NodeMCU Board
or another ESP8266 based Board that has at least 4 MByte Flash Memory.

But let’s start at the beginning:

## Setup Arduino Programming environment to be used with ESP8266 based boards.

Use the board manager to setup the tools required for targeting the ESP8266 boards.

For this step everything is already documented by the ESP8266 Team at

> [https://arduino-esp8266.readthedocs.io/en/2.4.1/installing.html](https://arduino-esp8266.readthedocs.io/en/2.4.1/installing.html)

It takes some time but runs smoothly from my experience. This enables you to verify and upload sketches to the ESP8266 boards.

## Setup the SPIFFS ESP8266 filesystem uploader

For this step everything is already documented by the ESP8266 Team at

> [https://github.com/esp8266/arduino-esp8266fs-plugin](https://github.com/esp8266/arduino-esp8266fs-plugin)

## Install the HomeDing Library

Open the Library Manager in Arduino Environment and search for the HomeBlink Library and install it.

Now the library implementation and the examples are available to be used.


## Connect the Board

The NodeMCU boards all come with a USB port that just needs to be connected to any of the computer USB ports.

Please watch out for messages about a missing driver that you might need to instal. As these boards have different USB bridge chips you might need to find out yourself. Most of the USB bridge chips are detected and driver download starts automatically in most cases.

## Adjust the Configuration

When you use different boards or processor types in the Arduino Environment you have to check that the settings for the board are correct.

For a NodeMCU Board the settings should look like this:

![NodeMCU Configuration](ConfigMenu.png)

You may have to adjust the USB port as this varies on different computers.

## Open the HomeBlink example project

Because you will need to change the network identification it is a good idea to make a copy of the example project to your Arduino sketch folder.

> **Important**
>
> Be sure to include the `data` folder as well as it contains the necessary files for the web server.

<!--

## Adjust your network identification

In the sketch file you find the 2 settings you need to adopt to your own wireless network environment:


```c++
const char *ssid = "NetworkName";
const char *password = "NetworkPass";
```

-->

## Upload the project

If everything is setup correctly you should not get any problems. It just takes some time.

You can open the serial monitor and will see some diagnostics messages. Because the configuration is still missing the default settings are used.

You can reach your new device under [http://HomeDing](http://homeding/)

## Upload the webserver files and configuration

Using the menu *ESP8266 Sketch Data Upload* the files from the data folder are packed into a SPIFFS format and uploaded into the Flash Memory of the Board.

These files contain the required files for the UI part of the web server and the configuration file of the Ding.

## Elements used

* **Timer Element**

  The Timer Element is used to create the on and off actions and send them to the Digital Out Element and log output.

* **DigitalOut Element**

  This Element implements using a digital ouput pin.
  The Actions from the Timer Element is used to set the level ON and OFF.
  Because the LED is on when output is LOW the logical output is inverted to the Physical output.

* **Device Element**

  This Element is used to define the name of the Ding on the network.

* **SSDP Element**

  This Element is used to broadcast the Ding on the network using SSDP Protocol.