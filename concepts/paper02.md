# Software Architecture

## Overview

This picture shows how the main parts of the architecture of the HomeDing library evolved from the POC:

<img src="concepts/architectureblocks.png" alt="drawing" style="width:600px;height:420px"/>


The heart if the HomeDing library implementation is the board class that covers the creation and configuration of the elements and enables exchanging actions among the elements and the web server. A micro implementation of a JSON parser and some utilities are provided for this central role.

The Elements are the implementation blocks that are that are covering the specific adaption for sensors, actors, other IO attached modules and are also used for timer based actions and logic modules. They are created and initialized on demand by the board when reading the configuration files.

In the standard example many of the elements are already part of the uploaded program and can be activated by just modifying the configuration. 

It is easy to implement new Elements or modify existing elements to create specific solutions based for other attached modules or to for specific functionaliyty

The script of a Ding is used for starting the available functionality and add additional elements if required while the configuration is  the place that specifies what elements are active and how they operate and interact.

## Building self-contained Things

In the market many Home Automation systems and gadgets are available that require to buy, build or use a central system that controls the Things.

### No Cloud please – but as an option

Amazon, Google and others are proving such a central system on the internet "in the cloud". Things like voice-controlled speakers and power sockets need to be connected to the internet all time and some of your personal data needs to be shared with the cloud providers.

Some of these systems offer real powerful features and cannot be easily replaced by a private system inside your household.

Using these services may be something you consider for some solutions but is is not required to connect to the internet when building Things that do not need such a service.
Therefore, you also do not need to register yourself or your thing anywhere. It is all yours.

### No Hub or central device required

Some systems like Philips Hue system or the IKEA TRÅDFRI systems requires to buy a hub as a central controller because the Things in these systems cannot connect directly to the Home WLAN. They use another network to communicate and the hub is required to „translate“ between these different protocols.

Because the processors today include the WLAN networking capabilities directly this kind of design is not required any more and is even a bad design because Things may fail to operate because of the possible central failure of the hub.

For simple solutions this also adds too much overhead and complexity to have a smart easy start building your own things.

### Web User Interface always built-in

Instead it is possible to connect to a Thing directly to watch and control it by using a standard browser.

Things built with the HomeDing library support a programming interface (API) that you can use by directly typing the requests and commands into the Address field and see the results on the Thing or as a response in the browser.

The standard interface provided by the HomeDing library allows to configure and control any internal Element out of thee box just by using the browser.

As an more advanced option it is possible to implement your own very specific Web User Interface using html, css and some javascript.

## Building must be easy

The HomeDing library is some more than just a library that can be used within your sketches and also contains files for building an integrated web server and some specific configuration techniques.

Nevertheless the start to use this must be easy and without any problems.

The setup to use the HomeDing library is just the standard setup for ESP8266 boards:

* Download and install the Arduino Environment
* Download and install the board
* Download and install the SPIFFS plugin for supporting uploading files to the onboard filesystem 

After a setup of the Arduino environment only a few typical steps will be required to have the first Ding setup:

* Upload a sample sketch that doesn’t requires special Hardware or Libraries
* Upload the Web files.

Start browser and see...

### Next: [Elements and Actions](/concepts/paper03)
