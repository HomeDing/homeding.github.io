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

## Try 1 : reconnect

When a connection to a network already had been established before the start the builtin autostart feature of the ESP8266 normally only needs a few seconds to re-establish the connection. This is based on the auto reconnect feature that stores the ssid and network passphrase in flash memory after each successfull network connection.

By default 12 sec. are given for re-connecting.
The duration can be configures using the `connecttime` property in the device configuration.


## Try 2 : connect to configured network from WiFi Manager

When the first attempt did not connect
a fresh connect is started to the configured network from the [WiFi Manager](/dev/wifimanager.md).

By default 12 sec. are given for connecting.
The duration can be configures using the `connecttime` property in the device configuration.


## Try 3 : connect to the hard-coded network

When the previous attempts did not connect
the optional network and password configuration given in the file `secret.h`.
When no password is configured (empty strings) this try is not executed.


## Try again

Sometimes the wireless network is just not available and a network connection can not be established.
In this case no [WiFi Manager](/dev/wifimanager.md) is started and by restarting the device another connection attempt will be made.
This allows starting normal operation mode as soon as possible after a network dropout.


## Start WiFi Manager

The WiFi Manager will automatically be started when no previous network and no configured network could be found.

The WiFi Manager can be started by pressing then sys button during the connect attempts in the 1-3 phases.
Therefore even when a connection was established fast these phases will stay and wait for a possible WiFi Manager configuration request.

The WiFi Manager can be started also by resetting the device without power loss 2 times in a row
during the  connect attempts in the 1-3 phases in case no system-button is available or configured.


## WiFi Manager

The WiFi Manager will stay for about 5 min. and wait for a configuration attempt.


## System LED

when a System led is configured in the device configuration the following signals can be seen:

| state of the device                  | frequency      | signal form       |
| ------------------------------------ | -------------- | ----------------- |
| connecting to network in safe mode   | 1 per 700msec. | fast long pulse   |
| connecting to network in unsafe mode | 1 per 700msec. | fast short pulse  |
| WiFi Manager mode                    | 1 per 3 sec.   | slow short signal |

