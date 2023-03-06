---
title: Using the I2C bus
tags: ["Implementation"]
layout: "page.njk"
excerpt: >
  The I2C bus is used by many components, sensors, displays and other chips
  to communicate commands and data.
  A central configuration is supported on the device level.
---

The data transfer is not as fast as the SPI bus but it is easy to implement
because only 2 IO lines are required and there are no chip specific signals
required as every participant has a dedicated I2C address.

The ESP8266 and ESP32 SoC doesn't have many GPIO lines so using a bus enables more components in the same device.

## Wiring

I2C requires 4 wires for power and data communication.

Using the default I2C bus pins:

| Signal                               | ESP8266   | ESP32 | Description                     |
| ------------------------------------ | --------- | ----- | ------------------------------- |
| <span class="gpio black">GND</span>  | GND       | GND   | Ground for I2C and Power Supply |
| <span class="gpio red">VCC</span>    | 3.3v      | 3.3v  | Power Supply                    |
| <span class="gpio blue">SDA</span>   | GPIO4(D2) | IO21  | I2C Data Signal                 |
| <span class="gpio yellow">SCL</span> | GPIO5(D1) | IO22  | I2C Clock Signal                |

The I2C bus can be used with 3.3V and 5V master and slave devices. Please check specific datasheets.


### Wiring of I2C Connectors by Adafruit

Adafruit uses JST PH 4-Pin (2mm) connectors on some boards
The wires offered are color-coded:

* Black for GND
* Red for V+
* White for SDA
* Green for SCL


### Wiring of I2C Qwiic Connectors by Sparkfun

Sparkfun uses a JST SH 4-pin (1mm) connector on many boards.

They use a different connector and color scheme but the same order of signals.

* Black = GND
* Red = 3.3V
* Blue = SDA
* Yellow = SCL


### Additional signals

Some chips and boards that use the I2C bus for communication also have some more signals to be controlled
like signals to reset the chips or power on/off.

These are not connected using the 4 core signals and need to be connected by additional wiring.

**Examples:**

* The [OLED Display SH1106](/elements/sh1106.md) is an example that offers a reset pin
  to also enable/disable the display and controlling power consumption before using the I2C bus.
* The CCS811 sensor offers a signal (INT) that can be used to trigger a software interrupt
  when data is ready instead of polling for state.


## Wire Library and supporting utilities

The WireUtil Class in the HomeDing library helps implementing I2C bus data transfers using a data buffer. This class implements some of the common procedures that help implementing I2C based communication to sensors and other chips
by using local byte buffers for sending and receiving data.

It also offers a possibility of dumping the data into the Serial Debug Output for analysis.

Often I2C adaptions are using a (logical) register based access pattern.
Here a data centric access is implemented that separates reading / writing data to a buffer from interpretation of the data in the buffer.
That fits well to those processor implementations that support I2C data exchange through dma implementations.


## I2C addresses and chips using them

Some addresses used by the chips of HomeDing Elements:

| address | used by chips          |
| ------- | ---------------------- |
| 0x11    | SI4721                 |
| 0x27    | LCD,PCF8574            |
| 0x38    | AHT20                  |
| 0x3C    | SH1106,SSD1306,SSD1309 |
| 0x40    | INA219,INA226          |
| 0x51    | RTC,PCF8563            |
| 0x5c    | AM2320                 |
| 0x62    | SCD-4x                 |
| 0x63    | Radio,SI4730           |
| 0x68    | RTC,DS1307,MPU9250     |
| 0x69    | MPU9250                |
| 0x76    | BMP280                 |
| 0x77    | BMP280, BME680         |

A more complete list can be found at <https://i2cdevices.org/addresses>


## See also

* <https://www.adafruit.com/product/3950>
* <https://www.sparkfun.com/qwiic#faqs>
* <https://www.smart-prototyping.com/Qwiic.html>
* <https://diyi0t.com/i2c-tutorial-for-arduino-and-esp8266/>
* <https://github.com/technoblogy/i2c-detective>
* [Using the SPI bus](/dev/spi.md)
