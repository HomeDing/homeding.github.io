---
title: The Startup Sequence
tags: ["Implementation"]
layout: "page.njk"
excerpt: >
  After a reboot or when powering up the network connection needs to be established or
  configured and the operating mode is chosen based on counting reset cycles.
---

[ ] 5 minutes startup timeout to restart
[ ] 60 seconds runtime to set the reset counter to 0


There are several operating modes implemented that help in network and device configurations and allow even
starting a device without or with a wrong configuration. This is based on the available network configuration
and a counter of the latest reset cycles.

The network configuration is given by the [WiFi Manager](/dev/wifimanager.md).

The reset counter is incremented immediately after the restart of the device and is set to the value 0
after successfully running a device for at least 60 seconds.

A reset can be enforced by powering off and on the device or by using the `RST` / `EN` button
that is available on many boards.

Sometimes the wireless network is not available and a configured network connection can not be
established. In this case the device will restart after 5 minutes with a reset
counter set to 0. This allows starting in a normal operation mode after a network dropout.


## Captive Mode

This mode is automatically chosen when no network configuration is given or after several resets
in a row.

In this operating mode an access point is created with a name `HomeDing-xxxxxx` using the last 6
digits of the MAC adddress of the board. Any client can connect to this access point and can
access the WiFi Setup Dialog of the [WiFi Manager](/dev/wifimanager.md).

In this mode NO configured element will be activated.

Using the WiFi Setup Dialog the network connection details can configured and persisted on the
board.

The reset counter is set to 0 after successfully running the captive mode for at least 60 seconds
or by updating a new network connectivity.


## Normal Run Mode

This mode is enabled when the reset counter has the value 1.

This is the regular working mode for a configured device.

* All configured Elements created.
* The last [state information of elements](/elements/state.md) is given to the elements.
* The System Elements are started.
* When network is available the Elements requiring a Network are started.
* When a current time is available the Elements requiring a current time are started.

When the `secure` property is set in the device configuration some
device configuration functionality is disabled protect.


## Unsecure Run Mode

This mode is enabled when the reset counter has the value 2.  It can be enabled by resetting or
re-powering the device twice within 60 seconds. This mode and behaves exactly like the Normal
Run Mode in the non-secure mode.

This mode is available for enabling OTA updates on devices with the `secure` property is set in
the device configuration.


## Bare Run Mode

This mode is enabled when the reset counter has the value 3.

* The network configuration is used for network connectivity.
* Only a [Device element] and an [OTA Element] is created without loading any configuration
  file.

This results in a device using a generic name like `ESP-xxxxxx` or `ESP32-xxxxxx`. on the local
network.

The Web Server files can be uploaded and the device can be configured through uploaded
configuration files or the integrated IDE functionality.


## Enforced Captive Mode

This mode is enabled when the reset counter has the value 4 or greater. The device runs the
Captive mode described above.

When the Captive mode is unused for 5 minutes or ended by configuring a new network connectivity
the reset counter is set to 0 and a restart is executed.


---


## System LED

when a System led is configured in the device configuration the following signals can be seen:

| state of the device                  | frequency      | signal form       |
| ------------------------------------ | -------------- | ----------------- |
| connecting to network in safe mode   | 1 per 700msec. | fast long pulse   |
| connecting to network in unsafe mode | 1 per 700msec. | fast short pulse  |
| WiFi Manager mode                    | 1 per 3 sec.   | slow short signal |

