---
title: "Step by Step setting up the Arduino environment"
tags: ["Steps"]
date: "2020-03-01"
layout: "page.njk"
excerpt: >
  These are the steps to follow to setup a basic arduino development environment
  that allows programming new software to the original Arduino boards.
---

These are the steps to follow to setup a basic arduino development environment that allows programming new software to the original Arduino boards.

For the ESP8266 or ESP32 processors some additional tools need to be installed as described below.

  
## Download the Arduino Environment

On the web site <https://www.arduino.cc> you can find the software for programming microprocessors.

Open the **Software** menu the downloads are available in the Download Options area
like **Windows 7 and later** or **MAC OS X 10.10 or newer**.

The Windows App is some kind of restricted and I cannot recommend to install this option from the Windows Store.

After clicking on the download option you will be asked to spend some money to the Arduino AG
but you don't need tp pay and can step forward to the download using the "**JUST DOWNLOAD**".

Install the software with all options set. This will also install some drivers for the common USB to Serial chips
that are on the diverse processor boards. This is required for uploading the program to the board
and see information from the boards sent to the computer e.g. to find bugs in the software.


## Setup the tools for ESP8266

The Arduino environment can be used to target different processors. To use the ESP8266 we need to install some tools.

First you have to open the Arduino application and configure the source of these tools. In the menu "File" -> "Preferences"
there is an input field "Additional Boards Manager URLs:" where you have to enter the following URL:

<http://arduino.esp8266.com/stable/package_esp8266com_index.json>

If you need multiple URLs in this field you can enter them separated by a comma.


## Setup the tools for ESP32

The Arduino environment can be used to target different processors. To use the ESP32 we need to install some tools.

First you have to open the Arduino application and configure the source of these tools. In the menu "File" -> "Preferences"
there is an input field "Additional Boards Manager URLs:" where you have to enter the following URL:

<https://dl.espressif.com/dl/package_esp32_index.json>

If you need multiple URLs in this field you can enter them separated by a comma.


## Download the tools for the board 

The real download of the tools is done using the built-in Boards Manager.

In the Menü "Tools" you find a line starting with "Board: " that can open a Sub-Menu where you find the "Boards Manager".

Here you find the list of available tools to support the specific microprocessor. Search for ESP8266 or ESP32
and install the latest version of the tools.

This takes a while so just be patience.


## Select the Board

In the Menü "Tools" you find a line starting with "Board: " that can open a Sub-Menu
where you find all the supported boards.

Here you need to select the board grouped by the processor type.
You find boards like "NodeMCU 1.0" that is very common for ESP8266 processors
or the "ESP32 Dev Module". You should know what you have.


## Connect the Board - The cable problem

The NodeMCU boards all come with a USB port that just needs to be connected to any of the computer USB ports. 

Here is a problem with the cable as there exist many micros usb cables that only connect the GND and +5V connections
for the power but not the 2  wires for data. These cables are not usable at all for programming but you can use them later
when only power is required when boards can run standalone and only need the power to run.

Please watch out for messages about a missing driver that you might need to instal.
As these boards have different USB bridge chips you might need to find out yourself.
Most of the USB bridge chips are detected and driver download starts automatically in most cases.

After have connected the board with the cable you should find a new entry in the 
the Sub-Menü "Tools" -> "Port:" that you need to select.

If you don't find a new entry please check the following:

* The cable is not providing data connectivity.
* The driver for the USB chip is not installed.
* An old version of a USB chip driver is installed and needs to be replaced.
* Uninstalling Arduino and installing a new version also has helped in the past.


## Next steps

After having setup your environment and having configured the board correctly you can start using one of the examples providing together with the HomeDing library.


## See also

* ESP8266 board adoption for Arduino: <https://arduino-esp8266.readthedocs.io/en/latest/index.html>
