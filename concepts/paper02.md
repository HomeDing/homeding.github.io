---
title: Software and Library Architecture
---

# {{data.title}}

1. [Building your own connected Things made easy](/concepts/paper01.md)
2. **Software Architecture**
3. [Elements and Actions](/concepts/paper03.md)
4. [Builtin Web server](/concepts/paper04.md)
5. [Device Discovery](/concepts/paper05.md)

These are the functional blocks of a device based on the HomeDing library:

<img src="concepts/architectureblocks.png" alt="drawing" style="width:600px;height:420px"/>

The heart if the HomeDing library implementation is the board class that covers the creation and configuration of the elements and enables exchanging actions among the elements and the web server.

The web server is the **door** to the network that enables to use the UI from the files on the filesystem and by providing REST based services to interact with the device.  

A micro implementation of a JSON parser and some utilities are provided for this central role.


## Building self-contained and autonomous Things

In the market many Home Automation systems and gadgets are available that require to buy, build or use a central system that controls the Things.


### No Cloud please – but as an option

Amazon, Google and others are proving such a central system on the internet "in the cloud" that are used by companies to build central portals to control the IoT devices e.g. by voice.
Power sockets or bulbs e.g. need to be connected to the internet all time and some of your personal data needs to be shared with the cloud providers.

Some of these systems offer real powerful features and cannot be easily replaced by a private system inside your household.

But without these cloud based systems your devices might not work or have some functional limitations.

Using these services may be something you consider for specific solutions but is is not required to connect to the internet when building Things that do not need such a service.
Therefore, you also do not need to register yourself or your thing anywhere. It is all yours.


### No Hub or central device required

Some systems like Philips Hue system or the IKEA TRÅDFRI systems requires to buy a hub as a central controller because the Things in these systems cannot connect directly to the Home WLAN. They use another network protocol to communicate and the hub is required to „translate“ between these protocols like ZigBee or Z-Wave and the regular WLAN.

Because the processors today include the WLAN networking capabilities directly this kind of design is not required any more and is even a bad design because Things may fail to operate because of the possible central failure of the hub.

For simple solutions this also adds too much overhead and complexity to have a smart easy start building your own things.


## Elements 

The Elements are the implementation blocks for the adaption of specific sensors, actors, other IO attached modules and for more time and logic modules. They are created and initialized on demand by the board when reading the configuration files.

When creating the upload program for a device many elements can be included. As they are configured they will be activated by using the parameters from the configuration files.

For many devices the standard example contains already all the element implementations that are used by the recipes available in the documentation. These can be adopted by just modifying the configuration.

Some elements are started right after reading the configuration, some after the network is available and some when the local time was received.


## Configuration at runtime

The standard board already includes a lot of Elements when being compiled. Therefore, it is possible to use them in a configuration without recompiling the program itself.

As the ESP chips offer a lot of memory this approach works fine. For compiling to different board layout like the ESP-01 board or the ESP8285 chip with less flash memory it is possible to compile with a reduced set of elements to make the program fit into memory. See more on this topic in the [minimal example](/examples/minimal.md)

Be aware that the number of configured elements is also a limiting factor because every Element not only needs program space but also memory for variables.

The configuration of the HomeDing device is using in 2 files:

* The system, hardware related features and the network configuration is defined in the `env.json` file. This file contains the configuration of the system level elements and hardware related elements like
    * [Device Element](/elements/device.md)
    * [OTA Element](/elements/ota.md)
    * [SSDP Element](/elements/ssdp.md)
    * [Display Elements](../displays.md)

  There is no real need to change this file frequently and it stays the same for a specific board. In the documentation about the boards I know you can find samples for typical env.json files. 

* The configuration of other elements is  placed in the `config.json` file. This file can be updated to change the behavior of the device.

* The web based configuration features will update the `config.json` file only.

* The configuration is split into these 2 files this way to make sure the device can start and can be reached over the network even when the configuration of the non-system elements in `config.json` is corrupted.


## Web based configuration

Every device with a standard board can also host the functionality of a web interface that can be used to create or modify the configuration by dragging new elements into the activation area and changing the parameters.
For this level no programming skills are required.  

It is also easy to implement new Elements or modify existing elements to create specific solutions based for other attached modules or to for specific functionality.

The base sketch of a device can also be modified for using very specific boards like ESP-01 boards that do not have full memory options available. Yu can find examples for this in the library.


### Web User Interface always built-in

Instead it is possible to connect to a Thing directly to watch and control it by using a standard browser.

Things built with the HomeDing library support a programming interface (API.md) that you can use by directly typing the requests and commands into the Address field and see the results on the Thing or as a response in the browser.

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

### Next: [Elements and Actions](/concepts/paper03.md)