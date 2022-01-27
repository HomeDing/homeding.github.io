---
title: Simple Service Discovery Protocol (SSDP) Element
id: nn
tags: ["Element", "System"]
---

# {{data.title}}

::: excerpt ssdp
The SSDPElement allows specifying the properties to send SSDP messages to the local network so the device can be discovered by Plug & Play Services.
:::

The SSDP element is a system element to configure this functionality and cannot send or receive actions. 
It controls the UPnP discovery protocol that can be used to inform other participants on the network about the existence and embedded features of a device.

On Windows you can find these devices in your network view in the explorer.

![DLNA devices in Network](/elements/ssdp-windows.png)

A double click opens the default page of the device.

On every device a property dialog can be opened to see more details

![DLNA device Properties](/elements/ssdp-windows-properties.png)

If you like your device to show up with some hints about the configured functionality the configuration of this element can be used.


## How UPNP works

Core of the implementation is to send out a short broadcast message that informs that a device is existing and how to get more information about it. 

This allows to download a XML based device specification from the URL 
<http://homeding/ssdp.xml> <sup>\*1</sup>

The [UPNP DeviceArchitecture Specification] contains all the details.

```XML
<?xml version="1.0" encoding="ISO-8859-1"?>
<root xmlns="urn:schemas-upnp-org:device-1-0">
  <specVersion>
    <major>1</major>
    <minor>0</minor>
  </specVersion>
  <URLBase>http://192.168.2.225:80/</URLBase>
  <device>
    <deviceType>upnp:rootdevice</deviceType>
    <friendlyName>lcddevice</friendlyName>
    <presentationURL>/</presentationURL>
    <serialNumber>005D1FA0</serialNumber>
    <modelName/>
    <modelNumber>Dec 13 2019</modelNumber>
    <modelURL>https://www.mathertel.de/Arduino</modelURL>
    <manufacturer>Matthias Hertel</manufacturer>
    <manufacturerURL>https://www.mathertel.de</manufacturerURL>
    <UDN>uuid:38323636-4558-4dda-9188-cda0e65d1fa0</UDN>
  </device>
</root>
```

The **name** is taken from the name in the device configuration and is equal to the network name.

The **modelname** is taken from the description in the device configuration.


## Element Configuration

The information in this data set can be configured by using the properties in the SSDPElement. 

**Manufacturer** Name of Brand

**ManufacturerURL** Some meaningful URL to the manufacturer homepage.

**ModelURL** Some meaningful URL describing the device.

**ModelNumber** can be overwritten. Usually it is the compilation date of the firmware.


The SSDP element is a system element to configure this functionality and cannot send or receive actions.

On Windows you can find these devices in your network view in the explorer.

If you like your device to show up with some hints about the configured functionality the configuration of this element can be used.

## Example Configuration

```json
{
  "ssdp": {
    "0": {
      "Manufacturer": "Matthias Hertel",
      "ManufacturerURL": "https://www.mathertel.de",
      "ModelUrl": "https://www.mathertel.de/Arduino",
      "ModelNumber": "v01.12"
    }
  }
}
```


## See also

* [UPNP DeviceArchitecture Specification](http://upnp.org/specs/arch/UPnP-arch-DeviceArchitecture-v1.0-20080424.pdf)

---

**\*1**: replace `homeding` with the network name of your device.