# WebServer and Web UI

1. [Building your own connected Things made easy](/concepts/paper01.md)
2. [Software Architecture](/concepts/paper02.md)
3. [Elements and Actions](/concepts/paper03.md)
4. **WebServer and Web UI**

## Overview 

Building things without the need to use a cloud solution is possible because every device can be directly reached using a standard browser.
A small web server in every devices enables

* pages that allow directly changing the actual state of elements
* pages that visualise the current values
* pages that allow changing the configuration and upload new files
* intersacting with the elements using http+REST based services
* connecting independant devices over the network.


## WebServer for static files

The HomeDing library includes a web server implementation that delivers the files stored in the file system of the device.
This is the key machanism that allows the pages the images and other ressources that build this embedded web site to be loaded into the browser.

Beside delivering files the web server also supports listing the existing files as well as update and delete operations.

You can reach the embedded web site by opening the URL: <http://homeding/> <sup>\*1</sup>


## The embedded Web Site

The following web pages are implemented in the standard board web site
that can run on any node based board and is part of the [Standard example](/examples/standard.md) ready to be uploaded into the SPIFFS filesystem.

The development source for this web site can be found on github in the repository <https://github.com/HomeDing/WebFiles>.

Included functionality:

* A static page with some internal links and showing some system information.
* Configuration overview, Visualize all elements
* Web based IDE to list and edit files.
* Current system log information
* Network setup dialog
* A graphical overview of the defined actions between elements 

See also
[Embedded Web Site for HomeDing Devices](/website.md).

There is a reduced web site available for the boards and devices that have only 1MByte of Flash on board.


## WebServer for services

The web server also implements services that allow to interact with the elements and the board functionality of the device.

This is used by the embedded web-site and for linking multiple devices that exchange actions.

These are not static responses but computed results. The URLs used for the services all start with a ressource name using a `$` character.

E.g. the current state of the elements can be requested from the device by asking for using the URL: <http://homeding/$board> \*

More detailled information on the implemented services can be found in [Web Services](/webservices.md).


## See also

* Web site structure and Pages
* services
* micro implementations

---

**\*1**: replace `homeding` with the network name of your device.