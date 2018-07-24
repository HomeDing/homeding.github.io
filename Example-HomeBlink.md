# How to setup your first HomeDing

The BlinkDing Example is a perfect project that you can use for your first experience with the HomeDing library. It only requires a NodeMCU Board

or another ESP8266 based Board that has at least 4 MByte 

runs in ESP-01 with 1MByte ???

But let’s start at the beginning:

## Setup Arduino Programming environment to be used with ESP8266 based boards.

Use the board manager to setup the tools required for targeting the ESP8266 boards.

For this step everything is already documented by the ESP8266 Team at

>> [https://arduino-esp8266.readthedocs.io/en/2.4.1/installing.html](https://arduino-esp8266.readthedocs.io/en/2.4.1/installing.html)

It takes some time but runs smoothly from my experience.

Now you can verify and upload sketches to the ESP8266 board.

## Setup the SPIFFS ESP8266 filesystem uploader

For this step everything is already documented by the ESP8266 Team at 

>> [https://github.com/esp8266/arduino-esp8266fs-plugin](https://github.com/esp8266/arduino-esp8266fs-plugin)

## Install the HomeDing Library

Open the Library Manager in Arduino Environment and search for the HomeBlink Library and install it.

Now the library implementation and the examples are available to be used.


## Connect the NodeMCO with the computer via USB



## Adjust the Configuration

When you use different boards or processor types in the Arduino Environment you have to check that the settings for the board are correct.

For a NodeMCU Board the settings should look like this:


???

You may have to adjust the USB port as this varies on different computers.

## Open the HomeBlink example project

Because you will need to change the network identification it is a good idea to make a copy of the example project to your Arduino sketch folder.

Important:

Be sure to include the data folder as well as it contains the necessary files for the web server.

## Adjust your network identification

In the sketch file you find the 2 settings you need to adopt to your own wireless network environment:

Network:

Password:

## Upload the project

If everything is setup correctly you should not get any problems. It just takes some time.

You can open the serial monitor and will see some diagnostics messages. Because the configuration is still missing the default settings are used.

You can reach your new device under [http://HomeDing](http://homeding/)

## Upload the webserver files and configuration
