# The HomeDing - PWMLED Example

Example dimming a LED using PWM Analog output and buttons.

```JSON
{
  "device": {
    "0": {
      "name": "pwmdevice",
      "reboottime": "30m",
      "description": "Example dimming a LED using PWM Analog output and buttons."
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
  },

  "button": {
    "up": {
      "pin": 12,
      "inverse": "true",
      "onoff": "value/led?up=16"
    },
    "down": {
      "pin": 13,
      "inverse": "true",
      "onoff": "value/led?down=16"
    }
  },


  "value": {
    "led": {
      "value": 20,
       "min": 0,
       "max": 255,
     "onchange": "pwmout/led?value=$v",
      "description": "Build-in LED"
    }
  },

  "pwmout": {
    "led": {
      "pin": 16,
      "range": 255,
      "value": 10,
      "inverse": "true",
      "description": "Build-in LED"
    }
  }
}`
```