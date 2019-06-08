# The Blink-Ding Example

> #Draft

The Blink-Ding Example is a perfect project that you can use for your first experience with the HomeDing library.

It only requires a NodeMCU Board only or another ESP8266 based Board that has at least 4 MByte Flash Memory.

Be sure your environment is prepared as lined out in the [setup instructions](examples/setup).

## Uploading the sketch

...

## Uploading the web data

...

## Register the device to your network.

...



## Adjust your network identification

In the sketch file you find the 2 settings you need to adopt to your own wireless network environment:


```c++
const char *ssid = "NetworkName";
const char *password = "NetworkPass";
```

-->

## Upload the project

If everything is setup correctly you should not get any problems. It just takes some time.

You can open the serial monitor and will see some diagnostics messages. Because the configuration is still missing the default settings are used.

You can reach your new device under [http://HomeDing](http://homeding/)

## Upload the webserver files and configuration

Using the menu *ESP8266 Sketch Data Upload* the files from the data folder are packed into a SPIFFS format and uploaded into the Flash Memory of the Board.

These files contain the required files for the UI part of the web server and the configuration file of the Ding.

## Elements used

* **Timer Element**

  The Timer Element is used to create the on and off actions and send them to the Digital Out Element and log output.

* **DigitalOut Element**

  This Element implements using a digital ouput pin.
  The Actions from the Timer Element is used to set the level ON and OFF.
  Because the LED is on when output is LOW the logical output is inverted to the Physical output.

* **Device Element**

  This Element is used to define the name of the Ding on the network.

* **SSDP Element**

  This Element is used to broadcast the Ding on the network using SSDP Protocol.