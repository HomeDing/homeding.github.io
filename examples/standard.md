# Standard Example

Th standard example can be used on any board that has a 4MByte Flash memory and is a good jumpstart for any project you may have. This example e.G. runs on all the [nodemcu boards](/boards/nodemcu.md).

No additional hardware is required to start this example and the Serial interface is used to transfer some internal actions and infos.

If this is the first time you use an ESP8266 board, some instructions on how to setup your development environment can be found here:

[Step by Step setting up a development environment](/stepssetup.md)

There are some options in uploading the required software and registration on the network that s described here:

[Step by Step Bring your device to work](/stepsnewdevice.md)

This includes: 

* Upload the sketch and Web UI
* Connect to the network
* Upload the Web UI files

After flashing the software and the web files the web interface is fully functional but not yet configured.

The following env.json file can be used as a starting point:

**env.json**

```JSON
{
  "device": {
    "0": {
      "name": "homeding",
      "description": "minimal config for http://homeding device",
      "reboottime": "24h",
      "led": "D4",
      "button": "D3"
    }
  }
}
```

As a starting configuration the blink recipe can be used when your board is a
[NodeMCU board](boards/nodemcu) with a ESP-12 module the led will blink slowly.

**config.json:**

```JSON
{
  "timer": {
    "blink": {
      "description": "Timer for testing",
      "type": "LOOP",
      "waittime": "0s",
      "pulsetime": "1s",
      "cycletime": "2s",
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
}
```

This configuration can be used as a starting point to implement your own projects.

See also:

* [Boards overview](/boards.md)
* [Recipes](/recipes.md)