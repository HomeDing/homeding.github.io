# Radio Example

> #Draft

The radio example shows how to build a more complex internet connected device that has a dedicated
element for controlling a FM radio chip (and a I2C bus controllable amplifier)

The hardware required for this example are:

* a NodeMCU board with ESP8266
* a radio chip like the RDA5807 that can receive FM and is controllable using the I2C bus
* a mobile phone headset (at minimum) or
* an amplifier and speakers.
* The TPA2016 amplifier chip is supported as well by this example
* some buttons or a rotary encoder
* a display like the LCD

The elements used in this example are from the standard element set:

* rotary encoder or digitalin element
* menu element
* value elements

The elements that come with the example are

* radio element
* TPA2016 element


```TEXT

// http://lcddevice/$board/radio/r?volume=1
// http://lcddevice/$board/radio/r?volume=12
// http://lcddevice/$board/board/0?loglevel=1
// http://lcddevice/$board/radio/r?softmute=0
// http://lcddevice/$board/radio/r?softmute=1

// http://lcddevice/$board/value/frequency?value=10390
// http://lcddevice/$board/value/frequency?value=8930
// http://lcddevice/$board/value/frequency?value=9560
// http://lcddevice/$board/value/frequency?value=9440


bool RadioElement::set(const char *name, const char *value)
{
  LOGGER_ETRACE("set(%s, %s)", name, value);
  bool ret = true;
  int v;

  if (_stricmp(name, "volume") == 0) {
    v = _atoi(value);
    if (active && v != _volume) {
      radio.setVolume(v);
      _board->dispatch(_volumeAction, v);
    }
    _volume = v;

  } else if (_stricmp(name, "frequency") == 0) {
    v = _atoi(value);
    if (active && v != _freq) {
      radio.setFrequency(v);
      _board->dispatch(_frequencyAction, v);
    }
    _freq = _atoi(value);

  } else if (_stricmp(name, "mono") == 0) {
    if (active) {
      radio.setMono(_atob(value));
    }

  } else if (_stricmp(name, "mute") == 0) {
    if (active) {
      radio.setMute(_atob(value));
    }

  } else if (_stricmp(name, "softmute") == 0) {
    if (active) {
      radio.setSoftMute(_atob(value));
    }

  } else if (_stricmp(name, "bassboost") == 0) {
    if (active) {
      radio.setBassBoost(_atob(value));
    }

  } else if (_stricmp(name, "onStationName") == 0) {
    _stationAction = value;

  } else if (_stricmp(name, "onRDSText") == 0) {
    _rdsTextAction = value;

  } else if (_stricmp(name, "onFrequency") == 0) {
    _frequencyAction = value;

  } else if (_stricmp(name, "onVolume") == 0) {
    _volumeAction = value;

  } else if (_stricmp(name, "onRSSI") == 0) {
    _rssiAction = value;



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