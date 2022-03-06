---
title: Portal
description: Portal
layout: "page.njk"
excerpt: >
  This Portal feature enables inspecting and controlling the local HomeDing devices
  by using a central web application.
---

The Homeding based devices are made to run standalone, no dependency of cloud services or other local central servers. 
This approach ensures that all the devices running independent from each other and when one fails the others can continue working.

However, it is useful to have a combining view on all of your devices in the local network
and this exactly what can be found in the minimalist portal implementation that is available in the
[Github WebFiles](https://github.com/HomeDing/WebFiles) repository. 

The Portal is built using a Single Page Application (SPA) architecture and relies on one service only that is used to detect all the Homeding devices. This is supported by the mdns service announcements.


## Homepage and Menu

![Portal Homepage](/portal/homepage.png)

This is the homepage of the portal that shows the local time only. It works even when there is no homeding based device present in the local network.

The menu on the left side is populated by the 2 static entries "Home" and "Monitor" and by the names of all the devices that were found.

Using this menu you can open the default page of every listed device. 

To refresh the current page and menu the refresh symbol in the header can be used.


## Monitor

![Portal Homepage](/portal/monitor.png)

This is a monitoring implementation that summarizes some useful technical information from every device that is reported by the `$sysinfo` service of every device that allows some insights:

* In the first column the actual status is displayed using a symbol
* The hostname of the device
* The actual free heap memory of the device. If this value constantly drops a memory leak is likely to be there that needs to be identified and removed.
* The version of the firmware
* The uptime of the device. 
* The safemode status of the device.


## Homeding mDNS service announcements

The mDNS is a network protocol that allows finding network participants like computers, servers and devices.
Apple has an implementation of this protocol named Bonjour.

It can also be used as a replacement for a DNS server but also can advertise specific services. The later is used to announce the existence of services on the local network like

* Arduino devices that accept OTA updates
* Media servers
* Printers
* more on <http://www.dns-sd.org/serviceTypes.html>

The HomeDing library announces the device by default using the service type `_homeding._tcp` in addition to the ota.arduino ???.
This announcement can be switched off using the `sd` property in the [DeviceElement](/elements/device.md).

<!-- The ESP boards cannot only be used for supporting electronic devices like sensors, switches or built into devices but can also be used as a general purpose web server.

So why not using a board to create a web portal that combines the functionality of multiple devices into a single presentation. -->


## Get the List of HomeDing Devices

The nodejs based server of the WebFiles project offers a REST service with the URL `/$devices` that returns the list of discovered devices.

In the server a mDNSBrowser is enabled that starts a query every 30 seconds to discover new devices and take unresponsive devices off the list.

The list of hostnames returned by this service is used to build the list of devices in the menu and in the monitor implementation.


## Showing a device 

The Homeding devices already have a good presentation UI of the functionality defined by the local configured elements on the `Board` page.
Some other devices may have a special implemented control page like you can see in the [Radio example](/examples/radio.md).

The portal uses the default page of the device that can be reached by opening `http://homeding/` [^hostname] and then following the configured redirect.

The page shown can be changed in the property `homepage` in the [Device Element](/elements/device.md).



<!-- 
https://openconnectivity.org/developer/specifications/upnp-resources/upnp/

https://openconnectivity.org/developer/specifications/upnp-resources
https://web.archive.org/web/20151107123618/http://upnp.org/specs/arch/UPnP-arch-DeviceArchitecture-v2.0.pdf

http://wiki.micasaverde.com/index.php/Luup_UPNP_Files -->

[^hostname]: replace `homeding` with the network name of your device to use this link.
