# Alarm with timer for duration


```JSON
"alarm": {
  "morning": {
    "time": "18:51",
    "ontime": "timer/alarm?start=1",
    "description": "Alarm for testing"
  }
},

"timer": {
  "alarm": {
    "pulsetime": "20s",
    "loglevel": 1,
    "onvalue": "digitalout/led?value=$v"
  }
},

"digitalout": {
  "led": {
    "pin": "D0",
    "inverse": "true",
    "value": "0",
    "description": "Builtin LED is on Port D0 = GPIO16"
  }
}
```
