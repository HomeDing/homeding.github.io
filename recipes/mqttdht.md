---
title: Use a DHT sensor to report temperature and humidity to a MQTT server.
tags: ["Receipe"]
layout: "page.njk"
excerpt: >
  This recipe shows how to combine a DHT sensor probing temperature and humidity and publish both values to a mqtt server.
---

## How it works

The [DHT Element] is configured to get temperature and humidity values from the sensor every 2 minutes.

The `ontemperature` and `onhumidity` events create actions that are sent to the [MQTT Element].

The [MQTT Element] is configured to publish the values to the server named "homemqtt" using the admin account and the secret password.
Values are availabe on the topics `diysensor/dht/temperature` and `diysensor/dht/humidity`.

``` json

{
  "dht": {
    "on": {
      "type": "DHT22",
      "description": "Temperature and Humidity sensor",
      "pin": "D5",
      "readtime": "2m",
      "restart": "true",
      "powerpin": "D6",
      "powerinvert": "true",
      "ontemperature": "mqtt/home?temperature=$v",
      "onhumidity": "mqtt/home?humidity=$v"
    }
  },
  "mqtt": {
    "home": {
      "loglevel": "2",
      "server": "mqtt://admin:secret@homemqtt:1883",
      "publish": "diysensor/dht/+",
      "retain": 1
    }
  }
}
```

[DHT Element]: /elements/dht.md
[MQTT Element]: /elements/mqtt.md
