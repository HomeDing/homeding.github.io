# Waveshare ESP32-S3 Touch 4.3

WIP ???

ESP32-S3-Touch-LCD-4.3 is a microcontroller development board based on the [ESP32-S3 chip](/boards/esp32s3/index.md) supporting
large-capacity Flash and PSRAM, a touch screen and various connectors for external components.

* Onboard 4.3-inch LCD screen, 800x480 resolution, 65K color.
* capacitive touch, 5-point display touch controller
* SD Card
* 512 KB static RAM
* 384 KB ROM, gestapelter
* 8 MB Flash und
* 8 MB PSRAM

* **UART Port** -- Use CH343P chip for USB to UART for connecting the UART_TXD(GPIO43) and UART_RXD(GPIO44) pin of the ESP32-S3. which is for firmware programming and log printing.
* **USB Connector** -- GPIO19(DP) and GPIO20(DN) are the USB pins of ESP32-S3, which can be connected the cameras with UVC protocol. For more details about the UVC driver, you can refer to this link.
* **Sensor interface** -- This interface is connected to GPIO6 as ADC, which can be connected to Sensor kit.
* **CAN Interface** -- can be used as a USB interface too, you can switch CAN/USB with the FSUSB42UMX chip. The USB interface is used by default (when the USB_SEL pin of FSUSB42UMX is set to LOW).
* **I2C interface** -- ESP32-S3 provides multi-lane hardware, currently uses GPIO8(SDA) and GPIO9(SCL) pins as I2C bus for loading IO expansion chip, touch interface and I2C interface.
* **RS485 interface** -- the development board onboard RS485 interface circuits for directly connecting to RS485 device communication, and support automatic switching of RS485 circuit transceiver mode.
* **PH2.0 battery header** -- The development board utilizes the efficient charge and discharge management chip CS8501. It can boost a single-cell lithium battery to 5V. Currently, the charging current is set at 580mA, and users can modify the charging current by replacing the R45 resistor. For more details, you can refer to Schematic diagram.


## Display driver

[text](https://github.com/moononournation/Arduino_GFX)

Arduino_ESP32RGBPanel

[text](https://esphome.io/components/display/rpi_dpi_rgb#waveshare-esp32-s3-touch-4-3)


## Display Touch Controller


Touch is controlled by a GT911, and works well with the bb_captouch library.

SDA=8, SCL=9, IRQ=4



# See Also

* [waveshare Product Page](https://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-4.3)
* [waveshare wiki](https://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-4.3)
* [text](https://github.com/Westcott1/Waveshare-ESP32-S3-Touch-LCD-4.3-and-Arduino)
