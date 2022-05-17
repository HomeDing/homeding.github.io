---
title: Time display using a TM1627 display and brightness control
tags: ["Recipe"]
layout: "page.njk"
description: Time display with the brightness control.
---

A 4-digit 7-segment display with the tm1637 chip to display the current time.
This display is not a full featured display and can display a single value only.
It is configured using the [TM1637 Element].

The time is updated by the [Time Element] every minute.

The current time is retrieved from an NTP sever on the internet using the [NtpTime Element].

Here an additional [Value Element] is used to control the brightness of a display.

The [RTCState Element] is used save the current brightness value for a reboot.

![image](/recipes/ntpclock2.jpg "w600")

* In **env.json** the system is configured to get the time.
* In **config.json** the display and control element and actions are configured.

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

A [NTPtime Element] is configured to get the current time from a NTP server.

A [State Element], here the RTCState Element, is added to store the current brightness value in
a non volatile memory that keeps the last brightness as long as power is supplied.

``` json
{
  ...
  "ntptime": {
    "0": {
      "NTPServer": "pool.ntp.org",
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    }
  },
  "rtcstate": {
    "0": {
    }
  }
}
```


## config.json configuration

A 4 digit 7-segment display with the tm1637 chip is defined to display the current time.

The time is updated by the time element every minute.

A brightness value can be configured with initial values.
By using the useState property this element persists its value in the state memory.
The current value is stored to rtc memory and will be available after a restart
as long as power to the board has not been interrupted.


``` json
{
  "tm1637": {
    "0": {
      "title": "Time Display",
      "type": "tm1637",
      "clockpin": "D6",
      "datapin": "D7",
      "brightness": "1",
      "value": "--:--"
    }
  },
  "time": {
    "clock": {
      "onminute": "tm1637/0?value=$v"
    }
  },
  "value": {
    "bright": {
      "title": "Brightness",
      "useState": "true",
      "min": 0,
      "max": 8,
      "value": 4,
      "onvalue": "tm1637/0?brightness=$v"
    }
  }
}
```

## See also

* [NTP Clock with OLED](/recipes/ntpclock.md) - Display the current time and date from the internet time service.

[NTPtime Element]: /elements/ntptime.md
[Time Element]: /elements/time.md
[TM1637 Element]: /elements/tm1637.md
[Value Element]: /elements/value.md
[State Element]: /elements/state.md
[RTCState Element]: /elements/state.md