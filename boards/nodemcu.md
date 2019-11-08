# The NodeMCU development boards

These boards offer an easy start into the ESP8266 development. The have all you need for programming, offer much memory and a LED for `first step` projects is on board.

* 4 Mbyte Flash ROM
* Based on ESP-12 or ESP-12E
* USB to serial adapter on board
* automatic programming mode
* breadboard friendly (most versions)
* 3.3 volts regulator
* On-board LED

NodeMCU is an open-source firmware for ESP8266 boards that enables scripting a IOT device using the Lua script language.

![nodencm board](/boards/nodemcu.jpg)

There are many derivate versions on the market but usually they follow the published design:

- The pin names Dnn are unified and correspond to GPIO pins with different numbers. Some older boards had different mappings. See also [ESP8266 pins](/boards/pins).

- There is a USB to Serial chip but version varies.

- There is an onboard Power regulator on most boards but their maximum power varies.

## Overview table

| GPIO  | Pin | Functionality |
| ----- | --- | ------------- |
| GPIO0 | D3  | Flash Button  |
| RESET |     | RESET Button  |
| GPIO2 | D4  | Blue LED      |


## Onboard Momentary Buttons

There are 2 Buttons on the Boards:

**Reset** 
This button pulls the reset pin down to GND.

**Flash** 
This button pulls the GPIO0(D3) pin down to GND. It can be used to manually start the program upload mode when is it pushed while resetting or powering up. Later it can be used for any input purpose as long it is leaving the pin in HIGH input when not used.


## More to know

If you are most sure what characteristics a board has, try to find pictures and web sites that focus on describing the differences. Most of the boards behave the same.

There are boards that have a bigger PCB board that doesn't work well with breadboards.


## Burned boards

A overload of the 3.3 V output provided by the nodeMCU boards or a temporary shortcut between the GND and 3.3V pins can damage the onboard regulator or the board itself. 
It happened to me several times.

When only the regulator is damaged you can often cut off the one on the board and use still it by supplying 3.3 volts from an external power source.

After cutting the regulator the USB to serial chip may still work.

Some boards have a diode between the USB 5V line and the onboard regulator that is burned down and can be replaced.

A multi purpose volt meter ??? is helpful.


## See also

- [Boards overview](/boards.md)
- [NodeMCU Documentation](https://nodemcu.readthedocs.io/en/master/)
- <https://frightanic.com/iot/comparison-of-esp8266-nodemcu-development-boards/>
- <https://www.nodemcu.com/index_en.html>
- <https://github.com/nodemcu/nodemcu-devkit-v1.0/blob/master/README.md>
- ESP8266 board adoption for Arduino: <https://arduino-esp8266.readthedocs.io/en/latest/index.html>

