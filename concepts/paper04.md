# WebServer and Web UI

1. [Building your own connected Things made easy](/concepts/paper01.md)
2. [Software Architecture](/concepts/paper02.md)
3. [Elements and Actions](/concepts/paper03.md)
4. **WebServer and Web UI**

Building things without the need to use a cloud solution is possible because every device can be directly reached using a standard browser.
A small web server in every devices enables

* pages that allow directly changing the actual state of elements
* pages that visualise the current values
* pages that allow changing the configuration and upload new files
* intersacting with the elements using http+REST based services


## WebServer for static files

The HomeDing library includes a web server implementation that delivers the files stored in the SPIFFS file system of an ESP8266 device.

The pages the images and other ressources that build this embedded web site can be downloaded into the browser.

You can reach the embedded web site by opening the URL: <http://homeding/> \*

See [Web site structure and Pages](website.md)


## The embedded Web Site

The following web pages are implemented in the standard board web site
that can run on any node based board and is part of the [Standard example](examples/standard.md) ready to be uploaded into the SPIFFS filesystem.

The development source for this web site can be found on github in the repository <https://github.com/HomeDing/WebFiles>.

Included functionality:

* A static page with some internal links and showing some system information.
* Configuration overview, Visualize all elements
* Web based IDE to list and edit files.
* Current system log information
* Network setup dialog
* A graphical overview of the defined actions between elements 

More detailled information on the embedded web site can be found in [Web site structure and Pages](website.md).

There is a reduced web site available for the boards and devices that have only 1MByte of Flash on board.


## WebServer for services

The web server also implements some services that allow to interace with the elements and the board functionality of the device.

These are not static responses but computed results. The URLs used for the services all start with a ressource name using a `$` character.

E.g. the current state of the elements can be requested from the device by asking for using the URL: <http://homeding/$board> \*

More detailled information on the implemented services can be found in [Web Services](webservices.md).


## See also

* Web site structure and Pages
* services
* micro implementations

\* replace `homeding` with the network name of your device.

