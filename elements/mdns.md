---
title: Multicast DNS Service
icon: mdns
tags:
  - "Element"
  - "System"
excerpt: >
  The mDNS service is used as the standard device discovery mechanism for HomeDing devices.
  This allows finding all devices in the home network.
layout: "page.njk"
---


Multicast DNS (mDNS) is a protocol that sends one to many network packages containing DNS information records. This is also known as `zeroconf` or `bonjour` protocol and allows finding network devices
without the need for a dedicated central DNS server.

The advantage of mDNS in in announcing not just IP addresses but also the kind of service offered by a device.

There is a bunch of services in the IoT space that already uses this protocol and it can be seen as a quasi standard:

| Service signature    | Usage                                                        |
| -------------------- | ------------------------------------------------------------ |
| _arduino._tcp.local  | Device can be updated using Arduino network firmware update. |
| _homeding._tcp.local | Device offers HomeDing services                              |
| _http._tcp.local     | Device has a http web server                                 |


can be disabled by setting the **sd** (Service Discovery) property in the configuration of the [Device Element] to false.

## CLI tool to discover HomeDing devices

The WebFiles project <https://github.com/HomeDing/WebFiles> that implements a central portal to show all devices offers a command line tool to list existing devices by using the command: `node discoverDevices.js`.


## mDNS implementation

In the devices the mDNS implementation is covered by the ESP8266mDNS/ESPmDNS library provided by the Arduino board base  firmware.

In the portal and the CLI tool the mDNS implementation is covered by the `multicast-dns` javascript library.


http:///<portal-server>/api/discovery



``` json
{
  "airding":{
    "host":"airding.local",
    "title":"",
    "path":"/board.htm",
    "ts":"2021-05-09T11:28:56.486Z"
  },
  "rfbridge":{
    "host":"rfbridge.local",
    "title":"Funk Schaltsteckdosen",
    "path":"/board.htm",
    "ts":"2021-05-09T11:28:56.485Z"
  }
}
```




Used in the Home Portal solution.
multicast DNSservice


## See also

* DNS-Based Service Discovery <https://datatracker.ietf.org/doc/html/rfc6763>
* [Simple Service Discovery Protocol (SSDP) Element](/elements/ssdp.md)
* [Device Element]

[Device Element]: /elements/device.md