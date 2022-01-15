---
title: The startup sequence
---

# {{data.title}}

After a reboot or when powering up a board the network connection needs to be established or configured. Therefore the startup sequence is focusing on  re-establishing a prior network configuration and also give the user the chance to enter the setup mode.

The following flow is implemented:

![startupnetflow.png](/startupnetflow.png)

The full start of the board is delayed for 6 seconds to give the user the chance to start the setup mode. See [WiFi Manager](/wifimanager.md).

When a connection to a network already had been established before the start the builtin autostart feature of the ESP8266 normally only needs a few seconds to re-establish the connection. This is based on the auto reconnect feature of the esp8266 SDK that stores the ssid and network passphrase in flash memory after each successfull network connection.

Otherwise a fresh connect is started to the last configured network from the  [WiFi Manager](/wifimanager.md) or the optional network and password configuration given in the file `secret.h`.

Sometimes the wireless network is just not available and a network connection can not be established. In this case no [WiFi Manager](/wifimanager.md) is started and by restarting the device another connection attempt will be made. This allows starting normal operation mode as soon as possible after a network dropout.


