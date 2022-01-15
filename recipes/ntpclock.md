---
title: NTP based clock with OLED
---

# {{data.title}}

This recipe uses the time from the internet and displays the current local time on a OLED display.

This recipe can run this on a board that has a display integrated like the
[wifikit8](/boards/wifikit8.md) or [wroom2](/boards/wroom2.md) ure use a separate display.

![image](/recipes/ntpclock.png)

In `env.json` the system and hardware should be configured to get the time and to initialize the display.
In `config.json` the display elements and actions are configured.

![image](/recipes/ntpclockpanel.png)


## Setup the Display

You may need to add a Display Element configuration in `env.json`.
Here a [DisplaySSD1306 Element] is used but you can also use other
displays like [DisplaySH1106 Element] or [DisplaySSD1309 Element].


## Setup the Time

The [NTPTime Element] configures the ESP8266 system to use a ntp server from the internet to get the current time.
This time always returns the greenwich time (GMT).
A configuration is required to calculate the local time that includes the name of the local timezone and the offset to GMT.
If there is a "summertime" period, the start and end of that period can be configured as well.

The POSIX format for this configuration is explained here: <https://developer.ibm.com/technologies/systems/articles/au-aix-posix/>.

Examples for timezones can be found in <https://sites.google.com/a/usapiens.com/opnode/time-zones>.

See <https://sites.google.com/a/usapiens.com/opnode/time-zones> for examples.


## Time Actions and Output

The [Time Element] can create actions based on the local time. This is used to update the display every second and every time the date changes.

The `ondate` and `ontime` events from the [Time Element] send the current date / time information to the displayText elements.

The [DisplayText Element] defines the place on the display where the time will be shown.


## env.json configuration

```json
{
  ...

  "ntptime": {
    "0": {
      "NTPServer": "pool.ntp.org",
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    },
    
  "DisplaySSD1306": {
    "0": {
      "description": "local display",
      "resetPin": "D0",
      "height": 32
    }
  }
}
```


## config.json configuration

In `config.json` the display items and the time related actions are configured:

```json
{
  "displaytext": {
    "date": {
      "x": 0,
      "y": 0,
      "description": "show the date"
    },

    "time": {
      "x": 0,
      "y": 16,
      "fontsize": 16,
      "description": "show the time"
    }
  },

  "time": {
    "0": {
      "ondate": "displaytext/date?show=$v",
      "ontime": "displaytext/time?show=$v"
    }
  },

}
```

## See also

* [NTPTime Element]
* [Time Element]
* [DisplaySH1106 Element]
* [DisplaySSD1306 Element]
* [DisplaySSD1309 Element]
* [DisplayText Element]


## Tags
#recipe #display

[NTPTime Element]:/elements/ntptime.md
[Time Element]:/elements/time.md
[DisplaySH1106 Element]:/elements/sh1106.md
[DisplaySSD1306 Element]:/elements/ssd1306.md
[DisplaySSD1309 Element]:/elements/ssd1309.md
[DisplayText Element]:/elements/displaytext.md
