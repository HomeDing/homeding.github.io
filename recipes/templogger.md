---
title: Logging Temperature Sensor
tags: ["Recipe"]
layout: "page.njk"
---

This recipe uses
* A [NTPTime Element] is used to have a valid current time for logging.
* A [DHT Element] to capture temperature values and
* A [Logging Element] to save latest values that can be displayed in the Web UI.

<!-- ![Elements used in templogger recipe](/recipes/templogger.png) -->

## Setup Time

The [NTPTime Element] configures the ESP8266 system to use a ntp server from the internet to get the current time.
This time always returns the greenwich time (GMT).
A configuration is required to calculate the local time that includes the name of the local timezone and the offset to GMT.
If there is a "summertime" period, the start and end of that period can be configured as well.

The POSIX format for this configuration is explained here: <https://developer.ibm.com/technologies/systems/articles/au-aix-posix/>.

Examples for timezones can be found in <https://sites.google.com/a/usapiens.com/opnode/time-zones>.

See <https://sites.google.com/a/usapiens.com/opnode/time-zones> for examples.

``` json
{
  "ntptime": {
    "0": {
        "ntpserver": "pool.ntp.org",
        "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  }
}
```


## Setup the Sensor and Logging

The [DHT Sensor] is connected using 2 GPIO pins:

* The **Data** signal is connected to `D5` to transfer the data using the proprietary one-wire protocol.
* The **GND** line of the sensor is connected to `D6` to power the sensor before a measurement is taken.
* The **VCC** line of the sensor is connected to 3.3V from the board.

Using the GND connection to power up the sensor makes using the DHT sensor more robust as they sometimes stop responding
when permanently powered.

The onTemperature event is sending the value over to the [Logging Element](/elements/log.md). 

The [Logging Element] requires a filesystem to persist the incoming values
in a file with the name given by the `filename` parameter.
Using the `averagetime` the [Logging Element] collects samples during the 10
min. period and writes out the average of the collected values.


``` json
{
  "dht": {
    "on": {
      "pin": "D5",
      "type": "DHT22",
      "readtime": "30s",
      "restart": "true",
      "resendtime": "2m",
      "powerpin": "D6",
      "powerinverse": "true",
      "ontemperature": "log/t?value=$v"
    }
  },
  "log": {
    "t": {
      "description": "log temperature",
      "averagetime": "00:10:00",
      "filesize": "10000",
      "filename": "/templog.txt"
    }
  }
}
```

## Tags
#recipe #sensor

[DHT Sensor]:/elements/dht.md
[DHT Element]:/elements/dht.md
[Logging Element]:/elements/log.md
[NTPTime Element]:/elements/ntptime.md