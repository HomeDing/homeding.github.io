---
title: Remote Display for Temperature and Humidity
---

# {{title}}

This recipe shows how to implement 2 devices
* A device named "displayding" with a locally attached display to display some information.
* Another device with a DHT sensor that sends the sensor to the display.


## Configuration of the display device

The display device has no need to know about the sensor device because the sensor device will always send the actions across the network.
Only the general display configuration and the displayText elements need to be configured.


### Display general configuration

There is a configuration required that corresponds to the chip inside the display and the protocol used to communicate with the display.

** Example:**

```json
{
  "DisplaySSD1306": {
    "0": {
      "address": "60",
      "height": 64
    }
  }
}
```

This is specified typically in the `env.json` file that holds all the configurations for the board
and the directly connected actors, sensors and displays.
Samples for this configuration can be found in the description of the display elements and some board descriptions.

See also [displays](/displays.md) for a list of the supported displays.

Having done this configuration the display will be used on system startup showing the devicename and the assigned ip-address. 


### Display elements configuration

The following configuration used 2 display elements for text to define 
the position and size of the information that will be shown:

```json
{
  "displaytext": {
    "temp": {
      "x": 0,
      "y": 26,
      "fontsize": 16,
      "prefix": "Temp:",
      "postfix": "°C"
    },
    "hum": {
      "x": 0,
      "y": 44,
      "fontsize": 16,
      "prefix": "Hum: ",
      "postfix": "%"
    }
  }
}
```

The prefix and postfix fits to the purpose of the information that is send to the display device
from the device that has a sensor for temperature and humidity.


## Configuration of the sensor device


The sensor device needs to have the elements configures so that actions are sent to the display device.
This is done by using a remote element for every action that is send across the network.

Here a DHT22 sensor is configured on pin D4.

For sending out to 2 remote elements the 2 remote configurations are used.

```json
{
  "dht": {
    "on": {
      "description": "Local DHT sensor",
      "pin": "D4",
      "type": "DHT22",
      "readtime": "30s",
      "resendtime": "2m",
      "onTemperature": "remote/display-t?value=$v",
      "onHumidity": "remote/display-h?value=$v"
    }
  },
  "remote": {
    "display-t": {
      "host": "displayding",
      "remoteid": "displaytext/t",
      "description": "Display temperature on remode thing."
    },
    "display-h": {
      "host": "displayding",
      "remoteid": "displaytext/h",
      "description": "Display humidity on remode thing."
    }
  }
}
```

## Tags
#recipe #sensor #remote #display