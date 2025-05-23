---
title: Using IO pins of the ESP8266 based boards
tags: ["Board"]
---

The ESP8266 17 General Purpose Input/Output (GPIO) pins that can be used for a variety of uses.

However,

* Some IO Pins do have a special purpose when booting up the chips
* Some functionalities are not available to all the ports
* Some Boards do not expose all available ports to the connectors
* Some Boards use the ports for some extra features they provide.

The following overview of the ESP8266 chip and boards was helpful for me to collect all the restrictions.


## Table of pins

The following table is using the **GPIO** pin numbers. They are equivalent to the IOxx numbers in the [ESP8266 Technical Reference] document.

The Pin notation **Dxx** was introduced by the NodeMCU and are written on some boards near to the connector pins. In the NodeMCU documentation they are also called "IO index". The numbers differ from the GPIO numbers.

Not mentioned here are the pin numbers on the real chip. If you need to used them directly, have a look into the [ESP8266 Technical Reference].

| GPIO   | Pin | Special function                   | Limitations                                                                              |
| ------ | --- | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| GPIO0  | D3  | Boot mode select, **flash** switch | HIGH during normal boot, LOW for flashing, output is possible with active=LOW            |
| GPIO1  | D10 | Serial0-TX                         | Limited usage for IO                                                                     |
| GPIO2  | D4  | PWM, Serial1-TX, Boot, LED(module) | Keep HIGH while booting, sends debug info at boot time, output-active-LOW                |
| GPIO3  | D9  | Serial0-RX                         | Limited usage for IO                                                                     |
| GPIO4  | D2  | I2C - SDA                          |                                                                                          |
| GPIO5  | D1  | I2C - SCL                          |                                                                                          |
| GPIO6  | --  | SDIO                               | flash memory (clk), cannot be used as GPIO                                               |
| GPIO7  | --  | SDIO                               | flash memory (MISO, data0), cannot be used as GPIO                                       |
| GPIO8  | --  | Serial1-RX, SDIO                   | flash memory (MOSI, data1), cannot be used as GPIO                                       |
| GPIO9  | D11 | SDIO                               | flash memory (data2), cannot be used as GPIO                                             |
| GPIO10 | D12 | SDIO                               | flash memory (data3), cannot be used as GPIO                                             |
| GPIO11 | --  | SDIO                               | flash memory (CS)                                                                        |
| GPIO12 | D6  | PWM, MISO                          |                                                                                          |
| GPIO13 | D7  | MOSI                               |                                                                                          |
| GPIO14 | D5  | PWM, SCK                           |                                                                                          |
| GPIO15 | D8  | PWM, SS, Boot                      | Keep LOW while booting, output-active-HIGH                                               |
| GPIO16 | D0  | deep sleep reset, LED(board)       | cannot be used when using deep sleep mode, must be connected to RST for deep-sleep mode. |


### Onboard LEDs

On boards using a ESP-12 module the Blue LED on ESP-12 can be switched on by pulling the GPIO2(D4) output to LOW.

The NodeMCU boards also have a LED attached to the port GPIO16(D0) that also can be switched on pulling the GPIO2(D4) output to LOW.
This is a conflict with the deep sleep mode that requires to connect GPIO16(D0) to the RESET. Using the LED will cause a reset in this case.

### Serial communication

By default the boards use the Serial port \#0 to receive and send logging information and to upload new sketches.
On many boards these 2 pins GPIO1(D10), GPIO3(D9) are connected to the USB chip to make these available to you computer.

As long as you need to upload new sketches and see your debug output these pins should not be used.


### Booting

The pins GPIO0(D3), GPIO2(D4) and GPIO15 do have a special meaning when the chip is started after a reset. They control to

* load a sketch from the onboard flash file system
* start uploading a new sketch into the flash
* load a sketch from a SD card (not used by current boards)

For a normal program execution the GPIO0(D3) and GPIO2(D4) pins must have a HIGH signal.

For a starting an upload the GPIO0(D3) pin must have a LOW signal.
This is why many boards have a momentary button to pull the GPIO0(D3) pin down labeled with **flash**.

The GPIO15 needs a LOW signal after reset as long as you do not use booting from a SD card.


### Flash memory

All the SDIO pins are used to connect the SPI flash that contains the program and other data to the ESP8266 chip.
These pins cannot be used for other IO.

In general it is not possible to use them as simple digital input or output.


### I2C / Wire Bus

When connecting chips for displays or other more complex solutions the I2C (also WIRE) bus is a good option.
Only 2 lines are required to communicate with many participants on this bus.

ESP8266 supports this bus by using a software approach. Therefore almost any combination of GPIO lines can be used.

Configuring a NodeMCU1.0 (ESP-12E) includes the definitions for `SCL` and `SDA` as constants that default to

* SCL=GPIO5(D1) (yellow) and
* SDA=GPIO4(D2) (blue).

When using a plain NodeMCU or ESP-12 board I stick to these ports but other boards don't follow this standard.

There are boards that already have a display and use other lines. Be sure to read the manual.

The configuration of the I2C bus is required for many elements and is handled centrally by setting the
`I2C-SDA` and `I2C-SCL` properties in the device element.

See also

* [Device Element](/elements/device.md).
* [Using the I2C bus](/dev/i2c.md)


## minimal wiring for bare boards like ESP-01, ESP-12E

* **VCC** -- 3.3 V
* **CH_PD** -- 10kOhm to VCC(\*1)
* **GPIO00** -- 10kOhm to VCC(\*1) and **FLASH** button to GND
* **GPIO02** -- 10kOhm to VCC
* **GPIO15** -- 10kOhm to GND
* **RST** -- 10kOhm to VCC(\*1) and **RST** button to GND
* **GND** -- Ground

\*1 some versions do have this resistor on board

See also: <https://www.esp8266.com/viewtopic.php?t=4890>


## Summary

* Many pins but already occupied by some functionality.
* Using the I2C bus is a good idea. It is possible to use extension chips.
* Preferring the IO lines GPIO4(D2), GPIO5(D1), GPIO12(D6), GPIO13(D7) and     |
GPIO14(D5) for digital input and output signals is a good ideas as long as they are available on the board.
* Using GPIO0(D3) and GPIO2(D4) as output with inverted logic (LOW as ACTIVE) is without problems and a need for using ESP-1 based devices.
* GPIO0(D3) will already have momentary switch on many boards and can be used after booting for any purpose.

## See also

* [deep sleep mode](/dev/deepsleep.md)
* [ESP8266 Technical Reference]
* [ESP8266EX datasheet]
* [NodeMCU Documentation]
* <https://randomnerdtutorials.com/esp8266-pinout-reference-gpios/>

[ESP8266 Technical Reference]: https://www.espressif.com/sites/default/files/documentation/esp8266-technical_reference_en.pdf
[ESP8266EX datasheet]: https://www.espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf
[NodeMCU Documentation]: https://nodemcu.readthedocs.io/en/master/
