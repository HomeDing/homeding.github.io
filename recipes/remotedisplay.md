# Remote Display for Temperature and Humidity

> draft ???

This recipe implements a device with a locally attached display to display some information from another device.

## Display configuration

There is a configuration required that corresponds to the chip inside the display and the protocol used to communicate with the display.

** Example:**

```JSON
{
  "DisplaySSD1306": {
    "0": {
      "address": "60",
      "height": 64
    }
  }
}
```

This is specified typically in the env.json file that holds all the configurations for the board and the directly connected actors, sensors and displays. Samples for this configuration can be found in the description of the display elements and some board descriptions.

See also [displays](/displays.md) for a list of the supported displays.

Having done this configuration the display will be used on system startup showing the devicename and the assigned ip-address. 

## Display elements

The following configuration used 2 display elements for text to define 
the position and size of the information that will be shown:

```JSON
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

The prefix and postfix fits to the purpose of the information that is send to the display device from another device that has a sensor for temperature and humidity.


## Remote sending actions

The device that has the sensors attached needs to have the elements configures so that actions are sent to the display device.
This is done by using the element for the sensor and elements for the remote actions an elements.

Here a DHT22 sensor is configured on pin D4.

For sending out to 2 remote elements the 2 remote configurations are used.

```JSON
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

