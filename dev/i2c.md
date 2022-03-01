---
title: Using the I2C bus
---

# {{title}}

The I2C bus is used by many components, sensors, displays and other chips to communicate commands and data.

The data transfer is not as fast as the SPI bus but it is easy to implement
because fewer lines are required and the chip-select line that enables
an individual bus participant is replaced by a participant address.

The ESP8266 SoC doesn't have many GPIO lines so using a bus enables more components in the same device. 

## Wiring

I2C requires 4 wires for power and data communication. 

At least the order of the lines are used by some of the standards in the Arduino space is equal. 

### Wiring of I2C Connectors by Adafruit

Adafruit uses JST PH 4-Pin (2mm) connectors on some boards
The wires offered are color-coded:

- Black for GND
- Red for V+
- White for SDA
- Green for SCL


### Wiring of I2C Qwiic Connectors by Sparkfun

Sparkfun uses a JST SH 4-pin (1mm) connector on many boards.

They use a different connector and color scheme but the same order of signals.

- Black = GND
- Red = 3.3V
- Blue = SDA
- Yellow = SCL


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

The WireUtil Class in the HomeDing library helps implementing I2C bus data transfers using a data buffer. This class implements some of the common procedures that help implementing I2C based communication to sensors and other chips.

It also offers a possibility of dumping the data into the Serial Debug Output for analysis.

Often I2C adaptions are using a (logical) register based access pattern.
Here a data centric access is implemented that separates reading / writing data to a buffer from interpretation of the data in the buffer.
That fits well to those processor implementations that support I2C data exchange through dma implementations.

See: [Using the I2C bus](/i2c.md)


## I2C addresses and chips using them


https://i2cdevices.org/addresses

0x27 : LCD Display, PCF8574 Port extender

0x68 : MPU9250
0x69 : (MPU9250) 
0x76 : BMP280
0x77 : (BMP280) BME680

(alternate address in brackets)

## See also

* <https://www.adafruit.com/product/3950>
* <https://www.sparkfun.com/qwiic#faqs>
* <https://www.smart-prototyping.com/Qwiic.html>
* <https://diyi0t.com/i2c-tutorial-for-arduino-and-esp8266/>
* <https://github.com/technoblogy/i2c-detective>
