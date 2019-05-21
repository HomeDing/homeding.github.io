# Radio Example

'''JSON
{
  "rotary": {
    "0": {
      "description": "Rotary Input",
      "pin1": "D5",
      "pin2": "D6",
      "step": 1,
      "onchange": "value/frequency?up=$v"
    }
  },
  "digitalin": {
    "0": {
      "description": "vol up",
      "pin": "D7",
      "inverse": "true",
      "pullup": "true",
      "onhigh": "value/volume?up=1",
      "onlow": "value/volume?up=1"
    }
  },
  "value": {
    "volume": {
      "min": 0,
      "max": 15,
      "value": 3,
      "onchange": "radio/r?volume=$v"
    },
    "frequency": {
      "min": 8700,
      "max": 10800,
      "step": 10,
      "value": 8930,
      "onchange": "radio/r?frequency=$v"
    }
  },
  "menu": {
    "0": {
      "loglevel": 2,
      "onValue": "device/0?log=menu-v:$v"
    }
  },
  "radio": {
    "r": {
      "description": "A Radio",
      "loglevel": 2,
      "volume": 0,
      "onVolume": "displaytext/v?value=$v",
      "onFrequency": "displaytext/f?value=$v",
      "onStationName": "displaytext/text?value=$v",
      "onRDSText": "device/0?log=text:$v",
      "onRSSI": "displaytext/rssi?value=$v"
    }
  },
  "displaytext": {
    "f": {
      "x": 0,
      "y": 0
    },
    "v": {
      "x": 8,
      "y": 0
    },
    "rssi": {
      "x": 12,
      "y": 0
    },
    "text": {
      "x": 0,
      "y": 1
    }
  }
}
```