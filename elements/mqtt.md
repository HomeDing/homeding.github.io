---
title: MQTT Element
icon: mqtt
tags: ["Element", "Network"]
layout: "page.njk"
description: publishing values to a MQTT Sever
excerpt: >
  The MQTTElement enables publishing values to a MQTT Sever using the mqtt protocol.
---

MQTT is a protocol with a lot of variations in the implementations.
This is what I discovered while looking at some MQTT implementations available on the internet.

The MQTTElement is made to support the mqtt protocol on the network to transfer values to MQTT Servers.
<!-- and to receive value changes from MQTT Servers. -->
Therefore it is not supporting all MQTT features as it is used only to publish and to subscribe to existing topics.

The MQTTElement is using the [Arduino PubSubClient Library] from Nick O’Leary that can be installed using the Arduino Library Manager
or directly from <https://github.com/knolleary/pubsubclient> and API documentation from <https://pubsubclient.knolleary.net/>.

The library was developped with restricted memory in mind and is the library with the smallest footprint I could find.
It supports MQTT 3.1 and 3.1.1. on secure and insecure connections with QoS 0 and 1. The message size is limited to 128 bytes.

This fits into most needs and keeps the program and heap memory consumption low.


## Element Configuration

<!-- <object data="/element.svg?mqtt" type="image/svg+xml"></object> -->

**server** - The URI to reach the MQTT server on the network. The parameter is using the
[MQTT URI-Scheme] like `mqtt://server:port` or `mqtts://server:port`.

**clientID** - This is the client id identiying the participating device. This defaults to the given hostname specified in the device configuration.

**fingerprint** - On secured connections the fingerprint parameter is used to verify the identity of the server.
When not configures the server identity will not be checked.

**buffersize** - On secured connections this buffer size specifies the fixed maximum length of a received package.

**publish** - The topic to be used for publishing. See below how to use this parameter.

**retain** - When publishing messages this flag can be set to true to tell the broker
  to remember the last sent message for subscribers.

**subscribe** - The topic to be subscribed. See below how to use this parameter.

**qos** - When subscribing the QOS defines...

**onValue** - These actions are emitted when a message for the subscribed topic arrived. See below how to use this parameter.

{% include "./elementproperties.md" %}


### Configuration Examples

These examples use a DHT Element to create actions to show how they can be send using MQTT.

This configuration simply publishes a single temperature value

``` json
"dht": {
  "on": {
    ...
    "ontemperature": "mqtt/home?temperature=$v",
  }
},
"mqtt": {
  "home": {
    "server": "mqtt://pi:rasp-pwd@raspberry:1883",
    "publish": "home/outside/temp",
    "retain": 1
  }
}
```

This configuration publishes 2 values from the DHT sensor
using the wildcard publish mechanism:

``` json
"dht": {
  "on": {
    ...
    "ontemperature": "mqtt/home?temperature=$v",
    "onhumidity": "mqtt/home?humidity=$v"
  }
},
"mqtt": {
  "home": {
    "server": "mqtt://pi:rasp-pwd@raspberry:1883",
    "publish": "home/outside/+",
    "retain": 1
  }
}
```

This configuration subscribes to a single topic and value :

``` json
"mqtt": {
  "home": {
    "server": "mqtt://pi:rasp-pwd@raspberry:1883",
    "subscribe": "home/outside/temp",
    "retain": 1
    onValue": "???"
  }
}
```


## Server Connection

The network and security parameters on how to reach the MQTT server on the network are specified by the
`server` parameter using the [MQTT URI-Scheme]:

> **mqtt[s]://[username:password@]servername[:port]**.

### Secure Connections

To enable encrypted (secure) communication you must provide a link to the server using the `mqtts` protokol.

``` json
"server": "mqtts://alias:adapass@io.adafruit.com:8883"
```

When using the mqtts protocol the Element uses a WifiClientSecure connection to communicate with the server.

The client probes for a small receive buffer. Servers that do not support negotiation of buffer sizes create the problem that a 16k buffer will be allocated taking most of the heap memory space that may cause the device to fail. You can specify a smaller fixed buffer size in case you know that only small data packages are received.

The `buffersize` parameter specifies the fixed maximum length of a received package.
The parameter must be a power of 2 like 512 or 1024.
When not set or set to 0 the client probes with the server on a minimal supported TSL buffer size
to identify the minimal acceptable buffer size minimizing the consumed heap memory.

512 bytes buffer size is the minimum.

To verify that the device communicates with the right server the `fingerprint` parameter can be set to the certificate fingerprint of the server.


### MQTT Authentication

MQTT provides username/password authentication as part of the protocol.
This can be configured by specifying a username and password in the URI in the `server` property.

``` json
"server": "mqtt://pi:rasp-pwd@raspberry:1883"
```

### MQTT Port

The [MQTT standard port] 1883 is used by default for non-secure connections when not specified.

The [MQTT standard port] 8883 is used by default for secure connections when not specified.


## Publish and Subscribe to multiple topics

Publishing and consuming values from multiple topics of a device or sensor is a common use-case. Using MQTT it is common to group all data from a sensor on the same node in the topic tree like:

``` txt
publish 'outside/sensor/temperature' '24.00'
publish 'outside/sensor/pressure' '9980'
publish 'outside/sensor/humidity' '70.20'
```

The `+` wildcard in a subscription is supports subscribing to all topics within a node:

``` txt
subscribe 'outside/sensor/+'
```

The MQTTElement can handle these grouped MQTT topcis and values.
The mode is enabled using a `+` wildcard as the last character
in the `publish` parameter specifying the topic tree.
When the MQTTElement is active all received actions will be treated as data publishing actions:

``` txt
/api/state/mqtt/outside?temperature=24.00
/api/state/mqtt/outside?pressure=9980
```

Please be aware that common actions/topics using 'start' and 'stop'
will not result in data publishing as they are handled by the base Element implementation.
So just avoid these names.


## Actions for MQTT subscriptions

The `onValue` event occurs when data to a subscribed topic arrives.

The actions can be defined as usual by using the `$v` placeholder for the value

``` json
  "onValue": "device/0?log=received:$v"
```

The actions can also contain the following placeholders to send the full ($t) or partial (k) topic name

When receiving `'outside/sensor/temperature'='24.00'` the

* `$t` (topic) placeholder will contain the fill topic name: `outside/sensor/temperature`
* `$k` (key) placeholder will contain the partial topic name: `temperature`
* `$v` (value) will contain the value `24.00`

The placeholders for topic names are helpful when subscribing using a wildcard in the subscribe parameter.


## Topic Names

The data processed MQTT brokers are organized in a hierarchical way. The topic names use the syntax contain use a folder syntax like `device/sensor/type`.

When using your private MQTT broker you are free to define your own hierarchy but when using brokers on the internet you must look out for naming conventions respecting a pre-defined structure. This is important especially for clustered brokers that process from many thousands of devices.

Special characters in topic names to be avoided:

* '#' --  This wildcard is used to subscribe to all messages of a broker across all levels.
* '+' --  This wildcard is used to subscribe to all messages of a broker within a level.
* '/' -- used for the hierarchy structure in topic names.
* '$' --  used as special start character for data from the broker system

* '*' (wildcards), '>' --  may have special meanings
* (empty topics) -- just don't work.

There are some public available documents on how to build up topic names in general:

* <https://tinkerman.cat/post/mqtt-topic-naming-convention>
* <https://pi3g.com/2019/05/29/mqtt-topic-tree-design-best-practices-tips-examples/>


## See also

* Standard Port Numbers: <https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml>
* <https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml>
* <<https://docs.solace.com/Open-APIs-Protocols/MQTT/MQTT-Topics.htm>


[MQTT URI-Scheme]: https://github.com/mqtt/mqtt.org/wiki/URI-Scheme
[MQTT standard port]: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
[TLS]:https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html
[Arduino PubSubClient Library]: http://pubsubclient.knolleary.net/
