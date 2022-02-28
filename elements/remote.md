---
title: Remote element
id: remote
tags: ["Element"]
excerpt: >
  The RemoteElement allows sending actions to other elements in HomeDing devices on the network.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::

Every local defined remote element is a shadow of another element on a remote board and acts as a proxy for addressing the remote element as if it was part of the local configuration.

It has its own local name like “remote/led” to be used in messages. The configuration of this element specifies the device/network name of the remote thing and the type and id of the element inside. The property name and the value is passed unchanged.

Because network delivery is slow compared to local dispatching actions locally the action will be queued and executed one-by-one even when multiple actions are waiting to be send  out.

The Remote Element can only send one message at a time but you can of course have multiple remote element definitions in a config.

The outgoing network package  is sent immediately when an action is triggered. The answer is then received and analyzed in the next loop event and is not blocking the internal execution of actions.

The central networking feature of the board only allows one current remote action at a time but is implementing this asynchronously. When the network feature of the board is available again it can be used by the next Remote Element.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?remote" type="image/svg+xml"></object>

<!-- missing property descriptions ??? -->


## Example

On the 	device named **logger** 2 display elements are defined but there is no local element that produces actions for these.

``` json
{
  "displaytext": {
    "t": {
      "x": 0,
      "y": 36,
      "prefix": "Temp:",
      "postfix": "°C"
    },
    "h": {
      "x": 0,
      "y": 50,
      "prefix": "Hum: ",
      "postfix": "%"
    }
  }
}
```

You can test these by using the following URLs to trigger the actions with your browser:

<http://homeding/$board/display/t?show=20.30>

<http://homeding/$board/display/h?show=45.00>

On the device named **dht22-probe** the dht element is configured to create actions when the temperature or humidity changes and the values are passed to the 2 defined remotes:

``` json
{
  "dht": {
    "on": {
      "pin": 0,
      "type": "DHT22",
      "readtime" : "10s",
      "onTemperature": "remote/display-t?show=$v",
      "onHumidity": "remote/display-h?show=$v"
    }
  },

  "remote": {
    "display-t": {
      "host": "displaybox",
      "remoteid": "displaytext/t"
    },
    "display-h": {
      "host": "displaybox",
      "remoteid": "displaytext/h"
    }
  }
}
```

## TODO
- [ ] keep/queue messages when network is not available.
- [ ] detect that remote element is not available -> slow down, retry
- [ ] Define what to do in case of an overflow.

