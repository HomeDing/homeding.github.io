---
title: Remote Element
icon: remote
tags:
  - "Element"
excerpt: >
  The Remote Element allows sending actions over the network to other elements in
  HomeDing devices using http GET requests.
layout: "page.njk"
---

To enable sending actions to other DomeDing Devices the Remote Element creates a connectivity to
the specified device. It will receive the local actions and transfer it to the remote device
over the network.

All you need to configure is the real hostname in the `host` attribute of the remote device.

The Remote Element can now be addressed in actions using the extended addressing like:
`alight:light/0?enable=1`.

The action dispatcher in the board implementation will detect that the element is not a local
element by this syntax and will try to find the `remote/alight` Element.

If this Element was configured it will receive the action and will try to transfer it to the
remote element.

Any Element in the remote device can then be used by addressing it using the syntax
`{device}:type/id?name=value`. The property name and the value is passed unchanged.

Because network delivery may be slow compared to local dispatching actions locally the action will
be queued and executed one-by-one even when multiple actions are waiting to be send out.

> **Note** -- The Remote Element might not be able to transfer the action near time or event not
> at all when the remote device is not available. In this case the action will be dropped after
> about 20 seconds.

## Limitations

The Remote Element can only send one message at a time but you can of course have multiple
remote element definitions in a config for multiple remote devices.

The outgoing network package is processed immediately when an action is given to the Remote
Element. This includes retgrieving the IP Address of the remote device in he first
communication. When multiple steps are required and answers are received and need to be parsed
these steps are executed by the next loop to not block the internal execution of actions during
this time.

The central networking feature of the board only allows one current remote action at a time but
is implementing this asynchronously. When the network feature of the board is available again it
can be used by the next Remote Element.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?remote" type="image/svg+xml"></object>

> **host** -- the full hostname of the remote device.

{% include "./elementproperties.md" %}


## Example

On the device named **logger** 2 display elements are defined but there is no local element that
produces actions for these.

``` json
{
  "remote": {
    "alight": {
      "title": "Accent light in the Hall",
      "room": "hall",
      "host": "bulb01"
    }
  }
}
```

To use the functionality the following combination of a sensor and a remote Element can be used
to display sensor values on a remote display:

``` json
{
  "dht": {
    "on": {
      "pin": 0,
      "type": "DHT22",
      "readtime" : "10s",
      "onTemperature": "box:displaytext/t?value=$v",
      "onHumidity": "box:displaytext/h?value=$v"
    }
  },

  "remote": {
    "box": {
      "host": "displaybox"
    }
  }
}
```

## TODO

* [ ] keep/queue messages when network is not available.
* [ ] detect that remote element is not available -> slow down, retry
* [ ] Define what to do in case of an overflow.
