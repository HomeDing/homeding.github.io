---
title: NTP based clock with TM1627 display
---

# {{title}}

This recipe uses the time from the internet and displays the current local time on a 4 digit display based on the TM1627 chip.

This recipe can run this on any board.

![image](/recipes/ntpclock2.jpg "w600")

* In **env.json** the system and hardware should be configured to get the time.
* In **config.json** the display elements and actions are configured.

## Setup the Display

You need to add a [NTPtime Element] to the configuration in **env.json**.

You need to add a [Time Element] and a [TM1627 Element] to the configuration in **config.json**.

Here the display is connected using the GPIO pins D6 for the clock signal and the D7 for the data signal.
The GND and 5.0 V must be connected too.


## Setup the Time

The [NTPTime Element] configures the ESP8266 system to use a ntp server from the internet to get the current time.
This time always returns the greenwich time (GMT).
A configuration is required to calculate the local time that includes the name of the local timezone and the offset to GMT.
If there is a "summertime" period, the start and end of that period can be configured as well.

The POSIX format for this configuration is explained here: <https://developer.ibm.com/technologies/systems/articles/au-aix-posix/>.

Examples for timezones can be found in <https://sites.google.com/a/usapiens.com/opnode/time-zones>.

See <https://sites.google.com/a/usapiens.com/opnode/time-zones> for examples.


## Time Actions and Output

The [Time Element] can create actions based on the local time. This is used to update the display every minute.

The **ontime** event from the [Time Element] send the current time information to the Display element.



## env.json configuration

``` json
{
  ...
  "ntptime": {
    "0": {
      "NTPServer": "pool.ntp.org",
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  }
}
```


## config.json configuration

In **config.json** the display items and the time related actions are configured:

``` json
{
  "tm1637": {
    "0": {
      "title": "Time Display",
      "clockpin": "D6",
      "datapin": "D7",
      "brightness": "4",
      "value": "--:--"
    }
  },
  "time": {
    "clock": {
      "onminute": "tm1637/0?value=$v"
    }
  }
}
```

## See also

* [NTPTime Element]
* [Time Element]
* [TM1627 Element]
* [Control Brightness Value](/recipes/brightness.md)


## Tags
#recipe #display

[NTPTime Element]:/elements/ntptime.md
[Time Element]:/elements/time.md
[TM1627 Element]: /elements/tm1637.md
