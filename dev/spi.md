---
title: Using the SPI bus
tags: ["Implementation"]
layout: "page.njk"
excerpt: >
  The SPI bus is used by components that require fast communication like displays and memory.
  A central configuration is supported on the device level.
---

SPI (Serial Peripheral Interface) is a serial bus interface introduced by Motorola Corp.

In contrast to the [i2c bus](/dev/i2c.md) the SPI bus supports sending and receiving data at the same time
by using separate inbound (MISO) and outbound (MOSI) signals on the bus-host, usually the processor.

There is no addressing of components in the protocol so a dedicated select signal (CS) is required for every slave.


## Using standard SPI pins on ESP8266

There are 2 hardware supported SPI interfaces within the ESP8266.

The "General SPI" is available on GPIOs 6-11. This bus is used to communicate to the flash memory using multiple data lines
and cannot be used to connect to SPI clients other than memory.

The "HSPI" is available on GPIOs 12-15 using the following functions.

| GPIO   | ESP8266 pin | functionality |
| ------ | ----------- | ------------- |
| GPIO12 | D6          | MISO          |
| GPIO13 | D7          | MOSI          |
| GPIO14 | D5          | SCL (Clock)   |
| GPIO15 | D8          | CS            |

When using the standard `SPI` Arduino implementation on the ESP8266 these lines are used.
However each slave device must use it's own chip select (CS) line.

The SPI pins MISO, MOSI and SCL are configured in the [Device Element] as they are shared among all devices on the bus.

The CS pin is must be specified individually for every device on the bus. The DC pin may be shared.


## Using standard SPI pins on ESP32

There are 4 hardware supported SPI interfaces within the ESP32 partly used for special functionality.

The "SPI0" and "SPI1" are used to communicate with the flash memory. It is using multiple data lines
and cannot be used to connect to SPI clients other than memory.

The "SPI2" and "SPI3" can be used as general purpose SPI interfaces also called `VSPI` and `HSPI`.


### The VSPI interface

The VSPI is the SPI interface is used by the standard Arduino SPI implementation.

| GPIO   | function     |
| ------ | ------------ |
| GPIO19 | MISO         |
| GPIO23 | MOSI         |
| GPIO18 | CLK          |
| GPIO05 | CS (example) |

Some ESP32 chips have fixed GPIO ports assigned to the VSPI bus and the
MISO, MOSI and CLK pins cannot be changed and must not be initialized.
Before using the interface a SPI.begin() must be called.
Each slave device must use it's own chip select (CS) line.


### The HSPI interface

This SPI is used as an alternative SPI interface often used for SD Cards.

| GPIO   | functionality |
| ------ | ------------- |
| GPIO12 | MISO          |
| GPIO13 | MOSI          |
| GPIO14 | CLK           |
| GPIO15 | CS (example)  |

The MISO, MOSI and CLK pins cannot be changed and must not be initialized.
Each slave device must use it's own chip select (CS) line.


## SD Card

SD Cards are supported in 2 different SPI implementations by the ESP32:

1. the 1-bit SD implementation using the standard SPI interface (VSPI)
2. the 4-bit SDMMC implementation using the hardware implemented SD/MMC host controller (HSPI)

For the later solution the HSPI interface can be extended to use 4 data bits in parallel:

| ESP32 PIN | SD Name | SD Pin |      |
| --------- | ------- | ------ | ---- |
| IO12      | Data 2  | 1      |      |
| IO13      | Data 3  | 2      |      |
| IO15      | CMD     | 3      |      |
|           | VDD     | 4      | 3.3V |
| IO14      | CLK     | 5      |      |
|           | VSS     | 6      | GND  |
| IO2       | Data 0  | 7      |      |
| IO4       | Data 1  | 8      |      |
|           |         | 9      |      |


### Additional signals

Some SPI clients require chips and boards that use the I2C bus for communication
also have some more signals to be controlled by the host like selecting data from commands.

These are not connected using the SPI core signals and need to be connected by additional wiring.


## See also

* [Using the I2C bus](/dev/i2c.md)
* <https://lastminuteengineers.com/esp32-pinout-reference>
* <https://techoverflow.net/2021/07/26/what-is-the-spi-pinout-of-the-esp32-esp-wroom-32/>
* <https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/spi_master.html>

