# ESP-01board with DHT22

:::excerpt
This little board has a DHT22 sensor and power regulator for a ESP-01 module.
:::


![ESP-01 base board with DHT22](/boards/esp01-dht.jpg)

The ESP-01 only offers only small flash sizes so it is recommended to load the minimal sketch with added support for the DHTElement on the ESP-01 by using one of the adapter options. See general [ESP-01 board](/boards/esp01.md) description.


## System configuration

The env.json file should only contain the system configuration:

```JSON
{
  "device": {
    "0": {
      "loglevel": 0,
      "name": "esp01",
      "title": "ESP-01 module",
      "description": "ESP-01 module.",
      "homepage": "/ding.htm"
    }
  },
  "ota": {
    "0": {
      "port": 8266,
      "description": "Listen for 'over the air' OTA Updates"
    }
  }
}
```


## Device configuration

The config.json file should contain the following configuration. More options are documented in the [DHT Element](/elements/dht.md) description.

```JSON
{
  "dht": {
    "0": {
      "pin": "2",
      "type": "DHT22",
      "readtime": "30s"
    }
  }
}
```

## See also

* [Boards overview](/boards.md)
* [DHT Element](/elements/dht.md)
* [ESP-01 board](/boards/esp01.md)


## Tags

#board