---
title: The Network Startup Sequence
layout: "page.njk"
tags: ["Implementation"]
excerpt: >
  After a reboot or when powering up a board the network connection needs to be established or configured. Therefore the startup sequence is focusing on  re-establishing a prior network configuration and also give the user the chance to enter the setup mode.
---

The following flow is implemented:

![startupnetflow.png](/dev/startupnetflow.png)

The full start of the board is delayed for 6 seconds to give the user the chance to start the setup mode. See [WiFi Manager](/dev/wifimanager.md).

When a connection to a network already had been established before the start the builtin autostart feature of the ESP8266 normally only needs a few seconds to re-establish the connection. This is based on the auto reconnect feature of the esp8266 SDK that stores the ssid and network passphrase in flash memory after each successfull network connection.

Otherwise a fresh connect is started to the last configured network from the  [WiFi Manager](/dev/wifimanager.md) or the optional network and password configuration given in the file `secret.h`.

Sometimes the wireless network is just not available and a network connection can not be established. In this case no [WiFi Manager](/dev/wifimanager.md) is started and by restarting the device another connection attempt will be made. This allows starting normal operation mode as soon as possible after a network dropout.

## System LED

when a System led is configured in the device configuration the following signals can be seen:

| state of the device   | frequency | signal form  |
| --------------------- | --------- | ------------ |
| connecting to network | 2 sec     | long signal  |
| WiFi Manager mode     | 6 sec     | short signal |

