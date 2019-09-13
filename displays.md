# Displays

The HomeDing library supports local attached displays but also works fine without a local display.

There are many use cases that required a small display used togther with a ESP8266 board. Some boards like the [Wifi Kit 8](/boards/wifikit8.md) or the [Wemos OLED](/boards/wemosoled.md) already come with an onboard display:

* show the current status
* present a menu
* show information from a sensor on the device

## Display Elements

To enable a locally attached display a display element needs to be configured (preferred in `env.json`). It needs to match to the display type and the chip that is driving the display.

Supported display are: 

* Monochrome OLED displays using the chips
    * [SH1106](/displays/sh1106.md)
    * [SSD1306](/displays/ssd1306.md)

* Monochrome LCD displays
    * [Liquid Chrystal](/displays/lcd.md) displays with a HD44780 chip attached in the I2C bus using a PCF8574 chip.

The configured and therefore activated display element will automatically activate the corresponding display adapter implementation and will configure it according to the setting given in the configuration.

## Display Information Elements

A display usually can show more that just one single information. This is why there are some elements implemented that will
put a specific type of information on the configured display.

Supported information types are:

* text
* boolean (on/off)
* The DisplayText Element
* The DisplayDot Element


## Web UI for displays

For the display elements a special Web UI is implemented that shows the current display on the web UI of the device.

The frame is created from the display adapter elements while displaytext and displaydot elements put their information into the frame.

To keep the initialization in the required order it is recommended to configure the display adapter in the env.json and configure the text and dot elements in the config.json file.


## Startup and system information

On startup, when a display is configured some system information is dispayed before the elements are started.
The same information is also written to the Serial interface and can be observed using the Serial Monitor.

1. "HomeDing"
   
   This shows that the system is running a HomeDing sketch and that the display was recognized and is working.

2. Devicename and IP address

3. cleared
   
