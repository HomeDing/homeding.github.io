# minding

[boards](boards.md)

This example project is targeting ESP8266 based devices that only have 1 Mbyte of flash memory.

Candidates are the [Esp-01 board](boardesp01.md), [Sonoff devices](boardsonoff.md), Bulb and maybe more.

The sketch only includes the sensor and the core elements jut not displays so the sketch still can be uploaded using OTA because it fits regarding the size.



## Web UI


The Web UI that comes with this example fits into 64 kByte and provides showing actual sensor and actor values.

The main page implemented in index.htm is a minimized version of the ding-info.htm page with a reduced set of available tiles. Included are the tiles for the elements DHT, switch, schedule, timer

## Modifications

This exampe also acts as a starting point for other sensors that need no extensive ui cababilities or use the deep sleep and wakeup modus to save energy when powered by battery or solar.

Not included elements of the library can be added by defining the Element to be included in the sketch. There are some commented lines in the source code that show how this can be achieved.

When you implement your own elements you can just add them to the sketch folder.

See
