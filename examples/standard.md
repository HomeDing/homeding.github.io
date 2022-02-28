---
title: Standard Example
---

# {{title}}

:::excerpt
The examples in the HomeDing library are used to compile a firmware that provides the base functionality
combined with a set of elements that can be used in the configuration of the device.

The **standard example** can be used with any board that has a 4MByte Flash memory and is a good jumpstart for any project you may have.
This example e.G. runs on all the [nodemcu boards](/boards/nodemcu.md).
:::

No additional hardware is required to start this example and the Serial interface is used to transfer some internal actions and infos.


## Setup the development environment and board

If this is the first time you use an ESP8266 board, some instructions on how to setup your development environment can be found here:

[Step by Step setting up a development environment](/stepsarduino.md)

There are some options in uploading the required software and registration on the network that s described here:

[Step by Step Bring your device to work](/steps/stepsnewdevice.md)

This includes: 

* Upload the sketch and Web UI
* Connect to the network
* Upload the Web UI files

After flashing the software and the web files the web interface is fully functional but not yet configured.


## Components for the Standard Example

When using nodemcu board there is a LED on the ESP-12 module and another LED on the board itself. The example uses both. When using different boards an external LED can be used.


## Device configuration

The following env.json file can be used as a starting point:

**env.json**

The boot process can show it's state on a LED. Here the LED(D4) from the ESP-12 module is configured for this purpose.

The FLASH button(D3) can be used to start the config mode manually.

``` json
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

**config.json:**

As a starting configuration the blink recipe can be used when your board is a
[NodeMCU board](/boards/nodemcu.md) with a ESP-12 module the led will blink slowly.

``` json
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

## See also

* [examples](/examples/index.md)
* [Boards overview](/boards/index.md)
* [Recipes](/recipes/index.md)
