# Plant Waterering

> draft ???

```JSON
{
  "timer": {
    "water": {
      "type": "LOOP",
      "waittime": "8s",
      "pulsetime": "12m",
      "cycletime": "6h",
      "onon": "digitalout/relais?on,device/0?log=on",
      "onoff": "digitalout/relais?off,device/0?log=off",
      "description": "Water timing"
    }
  },

  "digitalout": {
    "relais": {
      "pin": 2,
      "inverse": "true",
      "description": "Water Relais and LED"
    }
  }
}
```

