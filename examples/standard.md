# Standard example


> #Draft

acts as a starting point

can run all the recipies that ..


A typical board for this is a [NodeMCU board](boards/nodemcu) with 4GByte Flash Memory, an integrated USB adapter and a regulator for 3.3 V power supply.


This type of device has enough flash memory and IO pins to include all available element implementations that work without dependencies to other libraries.
In addition the file system (SPIFFS) is large enough to provide all Web Server features to allow standalone running the device
including the micro IDE to allow configuration without using an Arduino development environment.

This device will be "always on" by default to provide a web server interface.
Using a battery to power this device will only result in a short lifetime (maybe a few hours or days). 

The device can be updated using the OTA approach from remote.
