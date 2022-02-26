---
title: Control the brightness of a display
---

# {{title}}

Here an additional [value](/elements/value.md) element is used to control the brightness of a display.

## env.json configuration

A [State Element](/elements/state.md), here the RTCState Element, is added to store the current brightness value in
a non volatile memory that keeps the last brightness as long as power is supplied.

```json
{
  ...
  "rtcstate": {
    "0": {
    }
  }
}
```


## config.json configuration

In **config.json** the value element is configured to set a valid brightness in the display.

By using the useState property this element persists its value in the state memory.

```json
{
  ...
  "value": {
    "bright": {
      "title": "Brightness",
      "loglevel": 2,
      "useState": "true",
      "min": 0,
      "max": 8,
      "value": 4,
      "onvalue": "tm1637/0?brightness=$v"
    }
  }
}
```

## See also

* [NTP Clock with OLED](/recipes/ntpclock.md) - Display the current time and date from the internet time service.
* [NTP Clock with TM1627](/recipes/ntpclock2.md) - Display the current time from the internet time service on a 4 digit display.
