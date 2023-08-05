# Wemos OLED with ESP32

<https://www.instructables.com/ESP32-With-Integrated-OLED-WEMOSLolin-Getting-Star/>

Module: ESP-WROOM-32

Board: Wemos LOLIN32
OLED: SSD1306, 0.96″

<https://randomnerdtutorials.com/esp32-built-in-oled-ssd1306/>

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
    "0": {}
  },
  "diag": {
    "0": {}
  },
  "DisplaySSD1306": {
    "0": {
      "address": "60",
      "brightness": "128",
      "height": 64
    }
  }
}
```

``` json
{
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
    }
  },
  "displaytext": {
    "time": {
      "x": 0,
      "y": 0,
      "fontsize": 16,
      "description": "Display the time"
    }
  }
}
```
