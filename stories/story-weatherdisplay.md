# Build a Weather forecast display

**This is Work in progress**
<!-- ??? -->

**Table of Contents**

- [Intro](#intro)
- [Information in browser](#information-in-browser)
- [Supplies](#supplies)
- [Prepare Arduino Environment for ESP8266](#prepare-arduino-environment-for-esp8266)
- [Include required libraries](#include-required-libraries)
- [Customize the standard example sketch](#customize-the-standard-example-sketch)
- [Upload the web UI Files](#upload-the-web-ui-files)
- [Add the DHT22 Sensor](#add-the-dht22-sensor)
- [Add the DHT22 Sensor Configuration](#add-the-dht22-sensor-configuration)
- [Add the Display Configuration](#add-the-display-configuration)
- [Add the Weatherfeed Configuration](#add-the-weatherfeed-configuration)
- [Adding some network features](#adding-some-network-features)
- [Adding some logging](#adding-some-logging)
- [Actions](#actions)
- [Configuration Files](#configuration-files)
  - [env.json](#envjson)
  - [config.json](#configjson)
- [Links and references](#links-and-references)

## Intro

The weather of today is a fact, just look outside or use some sensors.

The weather of tomorrow is relevant for planning.

![Weather display](/stories/weatherdisp1.jpg)

This solution combines both using a ESP8266 board, a DHT22 sensor and a OLED display that you can get under 7€.

The software is based on the HomeDing library and the OpenWeather forecast service.
The library also supports looking into the display of the device remotely using a web browser.

The ESP8266 board used here is a combination of a ESP8266 with 4 MByte Flash ram and a 128*32 pixel display. 

* The actual temperature and humidity is taken from a DHT22 sensor attached to the device.
* The forecast information is coming from the openweather service. The free version (only registration) is sufficient.
* There is the option to use a remote sensor that can be placed e.g. outside using another ESP8266 board.
* There is also the option use different displays or sensors as the library is very flexible in using different displays with different chips or different sensors like the BME680 including air pressure.

By using the HomeDing library it is easy to build a device that is connected to your home Network only and can be reached and controlled by any browser on the network. It comes with a selection of `Elements` that allow using the most common sensor chips, devices and other services.

It also brings a complete solution for hosting a web side inside device instead of using a cloud based solution to display the sensor data and interact with the device.

## Information in browser

The display content is also available when using a browser and open the Web UI of the device.

The Homeding library provides a web version when opening the http://<devicename>/board.htm:

![Weather board screenshot](/stories/weatherboard.png)



## Supplies

![Weather display](/stories/weatherdisp2.jpg)



The hardware parts you need to build this project and used in this story are

* 1 **[Wifi Kit 8 Module ESP8266 with OLED](https://homeding.github.io/#page=/boards/wifikit8.md)** (used in this description).
* 1 **[DHT22 sensor](https://homeding.github.io/#page=/elements/dht.md)**
* 1 USB plug and a micro-usb cable for power supply.
* 1 10K resistor when using a plain DHt22 sensor. When using an adapter board it may be included already.


??? 
* [ ] picture : small display and DHT22
* [ ] picture : sonoff , ESP12 direct usage, BMP280 icon





Alternates are 

* **[Wemos labeled board with OLED](https://homeding.github.io/#page=/boards/wemosoled.md)**.
* **[Esp-Wroom-02 Module ESP8266 with OLED and 18650](https://homeding.github.io/#page=/boards/wroom2.md)**.
* combination of a nodemcu board and a [supported display](https://homeding.github.io/#page=/displays.md).
* **[BMP280 sensor](https://homeding.github.io/#page=/elements/bmp280.md)**.
* **[BME680 sensor](https://homeding.github.io/#page=/elements/bme680.md)**.
* or just no sensor when the forecast service is enough.


## Prepare Arduino Environment for ESP8266

1. Install latest version of Arduino IDE (currently version 1.8.2).

2. Use Board Manager to install the esp8266 support. 
   
   A detailed instruction can be found here: <https://arduino-esp8266.readthedocs.io/en/latest/installing.html#boards-manager>

3. Install the Arduino ESP8266 filesystem upload utility.  

   A detailed instruction can be found here: <https://github.com/esp8266/arduino-esp8266fs-plugin>

4. Setup the board options for a NodeMCU 1.0 with 1MByte reserved memory for the File System

![board options](/stories/arduino-boardoptions.png)


## Include required libraries

The HomeDing library relies on some common extra libraries for sensors and displays to work. 

When you install the HomeDing library you will see a popup with these required libraries that can be installed automatically.

![Install libraries](/stories/arduino-libraryinstall.png)

Sometimes (with unknown reasons) the installation of the libraries fails so all the required libraries need to be installed manually.

More details about the required libraries can be found on the documentation website at 
<https://homeding.github.io/#page=/elements.md>.

This is the list of current required libraries:

* Adafruit NeoPixel
* LiquidCrystal_PCF8574.h
* ESP8266 and ESP32 Oled Driver for SSD1306 display
* RotaryEncoder
* DHT sensor library for ESPx
* OneWire


## Customize the standard example sketch

The [Standard Example] already includes some of the more common sensors as elements so only some configuration will be required.

This applies to the WeatherFeed element [WeatherFeed Element] that needs to be activated by including the [WeatherFeed Element] into the firmware.
This is done by by defining `#define HOMEDING_INCLUDE_WEATHERFEED` in the element register section of the sketch before the `Arduino.h` file inclusion.

```CPP
...
#define HOMEDING_INCLUDE_DISPLAYSH1106

#define HOMEDING_INCLUDE_WEATHERFEED

#include <Arduino.h>
...
```

For simplicity on adding the new device to the network you may add the SSID and passphrase of your home WiFi in the `secrets.h` file next to the `standard.ino` sketch file. But you can also use the built-in WiFi Manager to add the device to the network without this hard-coded configuration.

![Network Secrets in Code](/stories/sketch-secrets.png)

Now everything regarding implementation of the sketch is done and the firmware can be compiled and uploaded.


## Upload the web UI Files

The standard example comes with a `data` folder that contains all file for the web UI.

Before you upload these files you may want to add the env.json and config.json file you can find with this article because this will make things easier.

The content of these files is what makes the IoT device special and behaving as an Weather forecast display.
It is explained in detail in this story what needs to be configured in these files.

The use the ESP8266 file upload utility and upload all the files.
It needs a reboot to activate the configuration.


## Add the DHT22 Sensor

The DHT22 Sensor is communicating with the board using the a single data line with a specific protocol.
It is connected to the 3.3 V power supply, GND and the GPIOx(Dx) ??? pin of the ESP8266 board.

The GPIOx(Dx) ??? pin needs to be configured in the `config.json` file you can see below.

    ESP8266 board     DHT22
    GND ------------- (4) GND
    3.3v ------------ (1) VCC
    GPIO2(D4???) ------- (2) Data


## Add the DHT22 Sensor Configuration

The configuration of the DHT22 sensor should be placed into the `config.json` file.
Here the following configuration is used to read the values from the sensor once every minute.

```JSON
{
  "dht": {
    "on": {
      "pin": "D4???",
      "type": "DHT22",
      "readtime": "60s",
      "onTemperature": "device/0?log=temp: $v\u00dfC",
      "onHumidity": "device/0?log=hum: $v%"
    }
  }
}
```

As we like to see the actual values on the displace the `onTemperature` and `onHumidity` actions will send the values to the display using a [DisplayText Element].

As these values from the sensor do not change frequently the are only sent when changing. No `resendtime`is required.


## Add the Display Configuration

The configuration of the [Display Element] should be placed into the `env.json` file. The I2C bus configuration must also be done in this file in the device configuration. Here are the relevant parts, the full file can be found below.  

when using other boards the pin assignments may differ.

```JSON
  "device": {
    "0": {
      "I2C-SDA": "D2",
      "I2C-SCL": "D1"
      ...

  "DisplaySSD1306": {
    "0": {
      "address": "60",
      "resetpin" : "D0",
      "height": 32
    }
  }
```

The display is used to show some values from the sensor and the forecast. The [DisplayText element]s are used and configured to display values
on the display. Here you can find the names and positions of the values including some default texts, units and positions.
The lower line of text is used to display the verbal result of the rain forecast.

The full definition with all used [DisplayText Element]s can be found below. This on is defining a position where the actua temperature from the sensor is shown:

```JSON
{
    "displaytext": {
      "temp": {
        "x": 0,
        "y": 0,
        "value": "__.__"
        "postfix": "°C"
      }
    }
}
```

The values themselves will be "pushed" to the display using actions defined on the `DHT` and `weatherfeed` elements.


## Add the Weatherfeed Configuration

???


```JSON
```

We will add the actions later.

To test the setup again just reboot the device and use a browser and open http://airding/board.htm and you will see the actual pm35 value of the sensor displayed and they will be updated about every 10 seconds but this value is normally not changing often.

![PMS UI](/stories/air-pmsui.png)

You can get higher values by placing a candle light next to the sensor as a candle produces much of these particles.

Now you can put everything in a nice housing because all the other configurations and even software updates can be done remotely.


## Adding some network features

The following configuration extract in env.json is enabling
* updating the firmware over the air
* allows detecting the network using the SSDP network protocol.

```json
{
  ...
  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' OTA Updates"
    }
  },
  "ssdp": {
    "0": {
      "Manufacturer": "yourName"
    }
  },
  "ntpTime": {
    "0": {
      "readTime": "36h",
      "zone": "-2"
    }
  }
}
```

You should adjust the timezone to your location. If you are in doubt you can use the web site https://www.timeanddate.com/ to get the offset from UTC/GMT. "-2" is right for Germany summertime.

You may also adjust the ota password after reading the instructions regarding the save mode in the documentation at 
<https://homeding.github.io/index.htm#page=/savemode.md>.

After a restart you may find the airding device on the network and after getting a reply from the ntp server the local time is available.


## Adding some logging

Just the actual values may not give enough so some more elements can be used.

For this story the [Log element] and the [NPTTime Element] are used to record the history of sensor values in a log file and the Web UI card for this element can display it as a graph.

The following configuration creates the 2 log elements for gas and particles:


```JSON
{
  "log": {
    "pm": {
      "description": "Log of pm25",
      "filename": "/pmlog.txt",
      "fileSize": "10000"
    },
    "aq": {
      "description": "Log of gas quality",
      "filename": "/aqlog.txt",
      "fileSize": "10000"
    }
  }
}
```

## Actions

Now we need to transfer the actual values to the log elements by using actions. The actions are using an URL notation to pass a key and value to the target element. Many Elements support emitting actions on certain events that happen like capturing a new sensor value.

Actions are configured at the element that emits actions 2 entries are required:

* The pms/p25 `onValue` event sends the actual value to the log/pm element using a value action.
* The bme680/bd `onGas` event sends the actual value to the log/pm element using a value action.

```JSON
{
  "pms": {
    "pm25": {
      ...
      "onValue": "log/pm?value=$v"
    }
  },
  "bme680": {
    "bd": {
      ...
      "onGas": "log/aq?value=$v"
    }
  }
}
```

Now all the elements are configured like this:

![Panel diagram](/stories/air-panel.png)


## Configuration Files

### env.json

```json
{
  "device": {
    "0": {
      "name": "weatherding",
      "description": "Weather Display",
      "reboottime": "96h",
      "button": "D3",
      "led": "D4",
      "securemode": "false",
      "I2C-SDA": "D2",
      "I2C-SCL": "D1"
    }
  },

  "ota": {
    "main": {
      "port": 8266,
      "passwd": "123",
      "description": "Over the Air Updates"
    }
  },

  "ssdp": {
    "0": {
      "manufacturer": "Matthias Hertel"
    }
  },

  "DisplaySSD1306": {
    "0": {
      "address": "60",
      "resetpin" : "D0",
      "height": 32
    }
  }
}
```


### config.json

```json
{
  "pms": {
    "pm25": {
      "description": "Air particle sensor",
      "pinrx": "D6",
      "pintx": "D5",
      "readtime": 300,
      "onvalue": "log/pm?value=$v"
    }
  },
  "bme680": {
    "bd": {
      "description": "Environmental sensor",
      "readtime": "300",
      "ongas": "log/aq?value=$v"
    }
  },
  "log": {
    "pm": {
      "description": "Log of pm25",
      "filename": "/pmlog.txt",
      "filesize": "10000"
    },
    "aq": {
      "description": "Log of gas quality",
      "filename": "/aqlog.txt",
      "filesize": "10000"
    }
  }
}
```

## Links and references

* HomeDing Source Code Repository: <https://github.com/HomeDing/HomeDing>
* HomeDing Documentation: <https://homeding.github.io/>
* About the Standard Example: <https://homeding.github.io/#page=/examples/standard.md>
* The DHT Element: <https://homeding.github.io/#page=/elements/dht.md>
* WeatherFeed Element: <https://homeding.github.io/#page=/elements/WeatherFeed.md>

Display
DisplayText

* PMS Element: <https://homeding.github.io/#page=/elements/pms.md>
* Log element: <https://homeding.github.io/#page=/elements/log.md>
* NPTTime Element: <https://homeding.github.io/#page=/elements/ntptime.md>


[Standard Example]: https://homeding.github.io/#page=/examples/standard.md
[DHT Element]: https://homeding.github.io/#page=/elements/dht.md
[WeatherFeed Element]: <https://homeding.github.io/#page=/elements/WeatherFeed.md>

[BME680 Element]: https://homeding.github.io/#page=/elements/bme680.md
[PMS Element]: https://homeding.github.io/#page=/elements/pms.md
[Log element]: https://homeding.github.io/#page=/elements/log.md
[NPTTime Element]: https://homeding.github.io/#page=/elements/ntptime.md