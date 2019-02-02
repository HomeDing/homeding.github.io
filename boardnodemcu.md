# The nodeMCU Boards

NodeMCU is an open-source firmware for ESP8266  boards that enables scripting a IOT device using the Lua script language.

NodeMCU also had defined a board for development purpose that is based on the ESP-12 module with 4 Mbyte Flash and a USB to Serial converter.

However there are many derivate versions on the market:

* The pin names Dnn are unified and correspond to GPIO pins with different numbers. Some older boards had different mappings. See also [boardpins](boardpins.md).

* There is a USB to Serial chip but version varies.

* There is an onboard Power regulator on most boards but their maximum power varies.

### Onboard Momentary Buttons

There are 2 Buttons on the Boards:

* **Reset** This button pulls the reset pin down to GND.

* **Flash** This button pulls the GPIO0(D3) pin down to GND. It can be used to manually start the program upload mode when is it pushed while resetting or powering up. Later it can be used for any input purpose as long it is leaving the pin in HIGH input when not used.

## More to know

If you are most sure what characteristics a board has, try to find pictures and web sites that focus on describing the differences. Most of the boards behave the same.

There are boards that have a bigger PCB board that doesn't work well with breadboards. 

A overload of the 3.3 V output provided by the nodeMCU boards or a temporary shortcut between the GND and 3.3V pins can damage the board.
It happened to me several times.

Most of the cases the diode between the USB 5V line and the onboard regulator was burned down.


## See also

* [boards](boards.md)
* [NodeMCU Documentation](https://nodemcu.readthedocs.io/en/master/)
* <https://frightanic.com/iot/comparison-of-esp8266-nodemcu-development-boards/>
* <https://www.nodemcu.com/index_en.html>
* <https://github.com/nodemcu/nodemcu-devkit-v1.0/blob/master/README.md>
