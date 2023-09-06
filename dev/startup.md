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



## Startup logging output

The following samples will show you how the startup sequence is shown in the log and explains the output in detail.


### Device Startup on first time

After uploading the HomeDing firmware the very first time the log output will show the following
messages:

```txt
00:00:06 >Device DevDing starting...
00:00:06 >formatting...
00:00:06 >setup done
00:00:06 >Captive Mode: HomeDing123A45
```

The `Device ____ starting...` messages is showing the name of the sketch (example) that is used.

The `formatting...` message is shown because the filesystem will be created during this very
first start sequence.

The `setup done` messages is created at the end of the Arduino startup() function just before
the loop() will start.

The `Captive Mode: HomeDingNNNNNN` message is shown when an Access point is created with the given name
for starting a network configuration with the [WiFi Manager].

This sequence of messages will also happen when uploading the firmware with the `Erase All Flash
Before Sketch Upload: Enabled` option.


### Device Startup without configuration

When no network configuration is available the device will immediately start into the Captive mode.

```txt
00:00:06 >Device DevDing starting...
00:00:06 >setup done
00:00:06 >Captive Mode: HomeDing123A45
```

After 5 minutes without using the captive mode the device will restart:

```txt
00:05:06 >no config.
00:05:06 >reboot...
```

The `no config.` message is shown after 5 minutes without getting a network configuration.

The `reboot...` message is shown because a reboot was initiated.


### Network configuration

In Captive mode, when a configuration is given using the [WiFi Manager] the following logs are
created:

```txt
00:02:39 >setup network ____
00:02:44 >ok. 
00:02:44 >reboot...
```

The `setup network ____` message is shown when a new network configuration is received.

The `ok.` message is shown when the network connection was successful.

The `reboot...` message is shown because a reboot was initiated.


### Regular Startup Without Configuration

The startup mesages on a regular boot when no configuration is available (or is not used in bare
mode) look like:

```txt
00:00:06 >Device DevDing starting...
00:00:06 >setup done
00:00:06 >HomeDing
00:00:06 >connect as 'esp32-123a45' to WiFI DEVNET...
00:00:12 >esp32-123a45 192.168.2.206
00:00:12 >connected to DEVNET (unsafe mode)
00:00:12 >start http://esp32-123a45/
```

`HomeDing` Greeting
This message is also shown on an attached and configured display.

`connect as 'esp32-123a45' to WiFI DEVNET...` -- devicename and network name used for connecting

`esp32-123a45 192.168.2.206` - successful connected to the network with the devicename and IP address.
This message is also shown on an attached and configured display.

`start http://esp32-123a45/`


### Regular Startup

The following startup mesages are created for a configured device (name="hdboard") and safemode
enabled.
They look similar to the messages written when no element configuration is given but the devicename is taken from the device Element. 

```txt
00:11:09 >Device DevDing starting...
00:11:09 >setup done
00:11:09 >HomeDing 
00:11:09 >connect as 'hdboard' to WiFI DEVNET...
00:11:12 >hdboard 192.168.2.206
00:11:12 >connected to DEVNET (safe mode)
00:11:12 >start http://hdboard/
```

see also: [Safe Mode]


### 2. reset in between 60 seconds

When a second reset or reboot is executed without having 60 seconds of normal operating time
the device will start in unsafe mode and the connected message will look like:

```txt
00:15:22 >Device DevDing starting...
00:15:22 >setup done
00:15:22 >reset #2
00:15:22 >HomeDing 
00:15:22 >connect as 'hdboard' to WiFI DEVNET...
00:15:23 >hdboard 192.168.2.206
00:15:23 >connected to DEVNET (unsafe mode)
00:15:23 >start http://hdboard/
```

The `reset #2` message shows the internal reset counter.

see also: [Safe Mode]


### 3. reset in between 60 seconds

When a third reset or reboot is executed without having 60 seconds of normal operating time the
device will start in **bare** mode. In this mode the device will start using the network
configuration but no device configuration file will be used. The message sequence will look
like:

```txt
00:00:06 >Device DevDing starting...
00:00:06 >setup done
00:00:06 >reset #3
00:00:06 >HomeDing 
00:00:06 >connect as 'esp32-123a45' to WiFI DEVNET...
00:00:08 >esp32-123a45 192.168.2.206
00:00:08 >connected to DEVNET (unsafe mode)
00:00:08 >start http://esp32-123a45/
```

The `reset #3` message shows the internal reset counter.

The same devicename is used that is used on booting without configuration. The IP address will
likely be the same.


### 4. reset in between 60 seconds

When a forth reset or reboot is executed without having 60 seconds of normal operating time the captive mode is started
without connecting the device to a local network.

```txt
00:00:06 >Device DevDing starting...
00:00:06 >setup done
00:00:06 >reset #4
00:00:06 >Captive Mode: HomeDing123A45
```

The `reset #4` message shows the internal reset counter.


[Safe Mode]:/dev/safemode.md