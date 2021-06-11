# Temperature display

This recipe implements a device with a locally attached LCD display to show time temperature and humidity from a BME680 sensor.

![Elements used in led recipe](/recipes/tempdisplayflow.png)


## System Configuration

There is a configuration for the LCD display required. Here a HD44780 standard LCD display on the I2C bus is used.

* In the [Device Element](/elements/device.md) configuration the i2c pins must be specified. Here only these 2 properties are shown. 
* The [DisplayLCD Element](/elements/lcd.md) is defined with the i2c address and LCD size.
* The [NTPTime Element](/elements/ntptime.md) is used to retrieve the actual time from the default ntp server.

```JSON
{
  "device": {
    "0": {
      "i2c-scl": "D1",
      "i2c-sda": "D2"
    }
  },
  "displaylcd": {
    "0": {
      "description": "HD44780 LCD Display",
      "address": "0x27",
      "lines" : 2,
      "columns" : 16
    }
  },
  "ntptime": {
    "0": {
      "zone": "1",
      "readtime": "04:00:00"
    }
  }
}
```

This is specified typically in the env.json file that holds all the configurations for the board and the directly connected actors, sensors and displays.
Samples for this configuration can be found in the description of the display elements and some board descriptions.

See also [displays](/displays.md) for a list of the supported displays.

Having done this configuration the display will also be used on system startup showing the device-name and the assigned ip-address. 


## Display elements

The configuration used 3 display elements for text to define the position and size of the information that will be shown:


## Time events

Based on the time given from the [NTPTime Element](/elements/ntptime.md) the [Time Element](/elements/time.md) creates an action every second to update the time displayed on the LCD.


## BME680 sensor

The BME680 sensor measures the temperature and humidity every 10 seconds and sends actions whenever the values have changed.
These are used to update the displaytext elements. 


```JSON
{
  "displaytext": {
    "time": {
      "x": "0",
      "y": "0"
    },
    "temp": {
      "x": "0",
      "y": "1",
      "value": "--.--",
      "postfix": "\u00dfC"
    },
    "hum": {
      "x": "8",
      "y": "1",
      "value": "--.--",
      "postfix": "%"
    }
  },
  "time": {
    "t": {
      "description": "send actual time to displaytext",
      "ontime": "displaytext/time?value=$v"
    }
  },
  "bme680": {
    "bd": {
      "address": "0x77",
      "readtime": "10s",
      "ontemperature": "displaytext/temp?value=$v",
      "onhumidity": "displaytext/hum?value=$v"
    }
  },

}
```


## See also

* [Device Element](/elements/device.md)
* [NTPTime Element](/elements/ntptime.md)
* [DisplayLCD Element](/elements/lcd.md)
* [DisplayText Element](/elements/displaytext.md)
* [Time Element](/elements/time.md)
* [BME680 Element](/elements/bme680.md)
  
  

