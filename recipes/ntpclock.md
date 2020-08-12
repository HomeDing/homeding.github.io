# NTP based clock

This recipe uses the time from the internet and displays the current local time on a display.

This recipe can run this on a board that has a display integrated like the
[wifikit8](/boards/wifikit8.md) or [wroom2](/boards/wroom2.md).

You may need to adjust the DisplayXXX configuration in `env.json`.

![image](/recipes/ntpclock.png)

In `env.json` the system and hardware should be configured to get the time and to initialize the display.
In `config.json` the display elements and actions are configured.

![image](/recipes/ntpclockpanel.png)

The [ntptime element](/elements/ntptime.md) configures the ESP8266 system to use an ntp server on the internet to get the current time. This time always returns the greenwich time (GMT). 
A configuration is required to calculate the local time that includes the name of the local timezone and the offset to GMT. It there is a "summertime" period, the start and end pf that period can be configured as well.

The POSIX format for this configuration is explained here: <https://developer.ibm.com/technologies/systems/articles/au-aix-posix/>.

Examples for timezones can be found in <https://sites.google.com/a/usapiens.com/opnode/time-zones>.

See <https://sites.google.com/a/usapiens.com/opnode/time-zones> for examples.

The [time element](/elements/time.md) can create actions based on the local time. This is used to update the display every second and every time the date changes.

The `ondate` and `ontime` events send the current date / time information to the displaytext elements.

The [displaytext elements](/elements/displaytext.md)
 the ESP8266 system to use an ntp server on the internet to get the current time. This time always returns the greenwich time (GMT). 
A configuration is required to calculate the local time that includes the name of the local timezone and the offset to GMT. It there is a "summertime" period, the start and end pf that period can be configured as well.



## env.json configuration

```JSON
{
  ...

  "ntptime": {
    "0": {
      "ntpserver": "pool.ntp.org",
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"
    },
    
  "DisplaySSD1306": {
    "0": {
      "address": "60",
      "resetpin": "D0",
      "height": 32
    }
  }
}
```


## config.json configuration

In `config.json` the display items and the time related actions are configured:

```JSON
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

The 2 display text elements are placed on the display and will show current time and date.

## See also

???

* <ntptime>
* <time>
* <DisplaySSD1306>
* <displaytext>
