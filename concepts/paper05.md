# Device Discovery


1. [Building your own connected Things made easy](/concepts/paper01.md)
2. [Software Architecture](/concepts/paper02.md)
3. [Elements and Actions](/concepts/paper03.md)
4. [Builtin Web server](/concepts/paper04.md)
5. **Device Discovery**

Devices that are available must be found before they can be used.


## Use a device without discovery

As a simple mechanism the device name that is defined in the device configuration in env.json can be used to create a shortcut like http://homeding/ in the browser favorites or on the desktop.

When there is no device configuration with a devicename the device will create a temporary name and report it together with the temporary ip address in the serial output.


## Discover Arduino devices

The Arduino environment includes a mechanism based on the mDNS protocol to detect devices that can be updated over the network. They are listed in the **tools** -> **ports** menu as network ports.

Here you find all devices including the HomeDing based devices that have a ota configuration.

Hint: HomeDing based devices that have no configuration also run a OTA Element and can be discovered. 

Now you have the device name and the URL to the device you can use the built-in UI pages like http://ESP-xxxxxx/$upload.htm to start uploading the web files and create a valid configuration.

The Arduino IDE detects devices that publish an _arduino._tcp service using the mDNS protocol.

When a device configuration file exists you have to configure a OTA Element to enable network updates.


## Discover HomeDing devices

mDNS

devicename

_homeding._tcp

can be disabled by setting the **sd** (Service Discovery) Property to false.

Used in the Home Portal solution.


## Discover using the SSDP protocol

SSDP is part of the UPnP protocol suite that is used to enable discovery of devices. It can be enabled using the [SSDP Element](/elements/ssdp.md).

The devices show up in the Network explorer on Windows.

See also [SSDP Element](/elements/ssdp.md)


## Discover as a Apple Home device


## Discover as a Google Home device


## mDNS

The multicast DNS (mDNS) protocol is widely used for announcing devices and services in a local network.

The discovery definition of the Web of Things (WoT)
standard goes beyond this and also defines how devices can be registered in a central service
so they are discoverable by using a search in the service.
<!-- [Web of Things (WoT)](/concepts/paper06.md) -->

The HomeDing library only supports the local discoverability.

There are some applications available that can show what services are announced in the local network like the "Service Browser" application for Android.


## See also

*  multicast DNS (mDNS) protocol <https://en.wikipedia.org/wiki/Multicast_DNS>