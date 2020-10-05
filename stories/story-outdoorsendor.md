# Outdoor Sensor

**Table of Contents**

- [Intro](#intro)
- [Supplies](#supplies)
- [Prepare Arduino Environment for ESP8266](#prepare-arduino-environment-for-esp8266)
- [Include required libraries](#include-required-libraries)
- [Upload the standard example sketch](#upload-the-standard-example-sketch)
- [Joining the WiFi Network](#joining-the-wifi-network)
- [Upload the web UI](#upload-the-web-ui)
- [Configuration Files](#configuration-files)
  - [env.json](#envjson)
  - [config.json](#configjson)
- [Wiring](#wiring)
- [Device Dashboard](#device-dashboard)
- [Extending](#extending)

## Intro

Some weather parameters are interesting to be measured by using an outside sensor like

* Temperature
* Humidity
* sun light
* rain

This is how to build a device that simply captures the air temperature and humidity parameters
from a DHT22 sensor by using the Homeding library.
It is easy to use other common [sensor elements](/elements/sensors.md)
that are supported by the library and you can easily add other sensors by implementing a specific element.

In contrast to the sensor that must be exposed to the outside air the microprocessor board should be placed
into a water proof housing. Only the USB power line is going out.

This sensor is placed in a location where direct rain and sunlight could not reach it so there was no need for special shielding. Also USB power is available and the device can be powered all the time.

[pictures]... ???

Another example of an outdoor sensor using a solar panel and LiPo batteries is available at [???]. The specific electronic and parameters are discussed in this story.

[Outdoor sensor with Solar Panel](/stories/story-outdoorsendorsolar.md).


## Supplies

All you need to build this project is a ESP8266 based board like the nodemcu board
and a DHT22 sensor to measure temperature and humidity.

* A USB plug and a micro-usb cable for power supply.
* 1 nodemcu board with the ESP8266 CPU.
* 1 BME680 sensor breakout board.
* A water proof housing
* Wires, solder, ...


## Prepare Arduino Environment for ESP8266

You must have a working environment for ESP8266:

1. Install latest version of Arduino IDE (currently version 1.8.13).

2. Use Board Manager to install the install the esp8266 support. 
   
   A detailed instruction can be found here: <https://arduino-esp8266.readthedocs.io/en/latest/installing.html#boards-manager>

3. Setup the board options for a NodeMCU 1.0 with 1MByte SPIFFS File System

![board options](/stories/arduino-boardoptions.png)


## Include required libraries

To install the HomeDing library use the Arduino Library Manager and search for `HomeDing`.

When you install the HomeDing library you will see a popup with some required libraries that can be installed automatically
as the HomeDing library relies on some common extra libraries for sensors and displays to work. 

![Install libraries](/stories/arduino-libraryinstall.png)

Sometimes (with unknown reasons) the installation of the libraries fails so all the required libraries need to be installed manually.

More details about the required libraries can be found on the documentation website at 
<https://homeding.github.io/#page=/elements.md>.


## Upload the standard example sketch

The [Standard Example](/examples/standard.md) already includes all that is needed so simply use this example.
Some configuration will be required, see below.

For simplicity on adding the new device to the network you may add the SSID and passphrase of your home WiFi in the `secrets.h`
file next to the `standard.ino` sketch file.
But you can also use the built-in WiFi Manager to add the device to the network without this hard-coded configuration.

![Network Secrets in Code](/stories/sketch-secrets.png)

Now everything regarding implementation of the sketch is done and the firmware can be compiled and uploaded.

When the device boots with the new firmware for the first time you can use the Serial Monitor to inspect the 
output during booting.

Here you can see the information about the interim name of the device and IP address:

```txt
???
```


## Joining the WiFi Network

When you have configured your local WiFi network in secrets.h the device will be available on your network.

When you want to use the built-in WiFi Manager to join the network you can reach the configuration page
by joining the temporary device hotspot named `homeding-xxxxxx` and opening [http://192.168](http://192.168.4.1/setup).

A more detailed description on this process can be found on the page [Step by Step Bring your device to work](/stepsnewdevice.md).


## Upload the web UI

This steps enables the Web UI of the device by uploading the required files into the filesystem.

The simplest way to do this is by using the Builtin Web based Upload Utility that can be reached at <http://homeding-xxxxxx/$boot.htm>.

![Builtin Upload Utility](/boot.png)

By pressing the start button all required files from the homeding documentation website are transferred to the device.
The list of files is available at: https://homeding.github.io/v01/list.txt.

This method is very useful when starting with a new board.

After the upload has finished a more beautiful homepage will be shown.

## Configuration Files

2 configuration files must be used to configure the sensor.

### env.json

The `env.json` contains only the system settings that do not change while configuring a specific functionality.
 
To create a `env.json` file on the device just open the IDE from the menu
and copy the following configuration into the right text area and then click the save button.

When requested enter `/json.txt` into the filename field.

When you reboot the device either by pressing the reset button on the board or in the UI the device will register itself
on the network using the name specified in the env.json file (here: outdoor).
Opening the url `http://outdoor` will redirect directly to the built-in dashboard. 


```json
{
  "device": {
    "0": {
      "name": "outdoor",
      "reboottime": "24h",
      "description": "Outdoor sensor",
      "logfile": 1,
      "savemode": "false",
      "homepage":"/board.htm",
      "led": "D0",
      "button": "D4"
    }
  },
  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' OTA Updates"
    }
  },
  "ssdp": {
    "0": {
      "ModelUrl": "https://www.mathertel.de/Arduino"
    }
  }
}
```


### config.json

The `config.json` contains the sensor specific settings.

To create a `config.json` file on the device just open the IDE from the menu
and copy the following configuration into the right text area and then click the save button.

When requested enter `/config.txt` into the filename field.

```json
{
  "dht": {
    "on": {
      "type": "DHT22",
      "description": "Temperature and Humidity sensor",
      "pin": "D5",
      "readtime": "30s",
      "resendtime": "2m",
      "ontemperature": "device/0?log=temp:$v,remote/display-t?value=$v",
      "onhumidity": "log/hum?value=$v,device/0?log=hum:$v,remote/display-h?value=$v"
    }
  },
  "ntptime": {
    "0": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },
  "log": {
    "h": {
      "description": "log humidity",
      "filesize": "10000",
      "filename": "/humlog.txt"
    },
    "t": {
      "description": "log temperature",
      "filesize": "10000",
      "filename": "/templog.txt"
    }
  }
}
```

YOu may want to adjust the time zone to fit your location in the ntptime element. An accurate time is required for logging.


## Wiring

The principle wiring of a DHT22 sensor can be seen in this picture:

![DHTWiring](/elements/dhtwires.png)

As you can see in the config.json file the data pin that was configured on the software side is the D5 GPIO pin so data from the sensor chip must be connected here. VCC must be connected to 5V or 3.3V and GND must be connected to GND.

More details on the DHT22 connecting options can be found in the [DHT Element](/elements/dht.md) description.


## Device Dashboard

The information the device is gathering can be found on the device dashboard.

Open <http://outdoor/board.htm> to open the dashboard and see current sensor values and the log graphs:


## Extending

The HomeDing library offers a lot of options that can be used to create more value from your sensor device.


* You can setup a new device with a display and then configure the sensor to send over the actual values using remote actions.
* The same sensor type can be used in-house also to log temperature and humidity, just build another one.
* You can add more sensor values like air pressure and see high and low weather effects and trends.
  <br />See the story [Build a In-house IoT Air Quality sensor](/stories/story-airquality.md)
* You can configure some low energy options and run your sensor by solar power.
  <br />See the story [Build a In-house IoT Air Quality sensor](/stories/story-airquality.md)

