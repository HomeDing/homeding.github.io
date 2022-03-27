# Wemos OLED with ESP32

<https://www.instructables.com/ESP32-With-Integrated-OLED-WEMOSLolin-Getting-Star/>

Module: ESP-WROOM-32

Board: Wemos LOLIN32
OLED: SSD1306, 0.96″


see also:

<https://www.electrorules.com/esp32-pinout-reference/>

<https://randomnerdtutorials.com/esp32-pinout-reference-gpios/>


``` json
{
  "device": {
    "0": {
      "name": "lolin32",
      "title": "WeMos Lolin32",
      "description": "ESP32-WROOM-32 with OLED display",
      "loglevel": 2,
      "button": 0,
      "safemode": "false",
      "homepage": "/index.htm",
      "i2c-SDA": "5",
      "i2c-SCL": "4"
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
      "Manufacturer": "me",
      "ModelUrl": "https://www.mathertel.de/Arduino"
    }
  },
  "DisplaySSD1306": {
    "0": {
      "address": "60",
      "brightness": "128",
      "xresetpin": "D6",
      "height": 64
    }
  }
}
```

``` json
{
  "diag": {
    "0": {
      "description": "ota"
    }
  },
  "time": {
    "clock": {
      "onminute": "displaytext/time?value=$v"
    }
  },
  "value": {
    "brightness": {
      "min": 0,
      "max": 255,
      "value": 128,
      "onvalue": "displayssd1306/0?brightness=$v"
    },
    "tout": {
      "type": "string",
      "description": "outside temperature",
      "onvalue": "log/tout?value=$v,displaytext/tout?value=$v"
    },
    "hout": {
      "type": "string",
      "description": "outside humidity",
      "onvalue": "log/hout?value=$v,displaytext/hout?value=$v"
    }
  },
  "weatherfeed": {
    "home": {
      "loglevel": 1,
      "host": "api.openweathermap.org",
      "get": "/data/2.5/onecall?units=metric&${loc}&exclude=current,hourly&appid=${key}&lang=en",
      "key": "835653bf60675caf2c8e6a797f2a0ac2",
      "loc": "lat=50.23&lon=8.65",
      "readtime": "04:00:00",
      "actions": [
        {
          "path": "daily[0]/temp/day",
          "onvalue": "displaytext/t0?value=$v"
        },
        {
          "path": "daily[0]/humidity",
          "onvalue": "displaytext/h0?value=$v"
        },
        {
          "path": "daily[0]/weather[0]/description",
          "onvalue": "displaytext/d0?value=$v"
        },
        {
          "path": "daily[1]/temp/day",
          "onvalue": "displaytext/t1?value=$v"
        },
        {
          "path": "daily[1]/humidity",
          "onvalue": "displaytext/h1?value=$v"
        },
        {
          "path": "daily[1]/weather[0]/description",
          "onvalue": "displaytext/d1?value=$v"
        }
      ]
    }
  },
  "displaytext": {
    "time": {
      "x": 0,
      "y": 0,
      "fontsize": 16,
      "description": "Display the value"
    },
    "t0": {
      "x": 55,
      "y": 16,
      "fontsize": 10,
      "value": "--.--",
      "postfix": "°C ",
      "description": "Display the temp forecast"
    },
    "h0": {
      "x": 100,
      "y": 16,
      "fontsize": 10,
      "postfix": "%",
      "value": "--",
      "description": "Display the hum forecast"
    },
    "d0": {
      "x": 8,
      "y": 26,
      "fontsize": 10,
      "value": "txt",
      "description": "Display the forecast description"
    },
    "t1": {
      "x": 55,
      "y": 41,
      "fontsize": 10,
      "value": "##.##",
      "postfix": "°C ",
      "description": "Display the temp forecast"
    },
    "h1": {
      "x": 100,
      "y": 41,
      "fontsize": 10,
      "postfix": "%",
      "value": "##.##",
      "description": "Display the hum forecast"
    },
    "d1": {
      "x": 8,
      "y": 51,
      "fontsize": 10,
      "value": "txt",
      "description": "Display the forecast description"
    }
  }
}
```
