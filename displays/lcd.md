# The DisplayLCD Element

<div class="excerpt">
  <img src="/i/displaylcd.svg">
  <p>The RemoteElement allows sending actions to other elements in HomeDing devices on the network.</p>
</div>

The DisplayLCDElement needs to be configured to activate the display adapter for LiquidCrystal displays based on HD44780 chips. It is required to also have a I2C bus adapter for the display because a diret connection will require 8 IO ports not available on ESP8266 boards. 

The library LiquidCrystal_PCF8574 needs to be installed using the Arduino Library Manager.

These displays ae available with

* 2 lines of 8 characters
* 2 lines of 16 characters (most common and default)
* 4 lines of 16 characters

The initialization of the I2C bus uses the default SDA (D4) and SCL (D3) GPIOs. When you use different GPIO lines you can adjust this in the scl and sda parameters of the board.

To show some output on the display use the [DisplayText Element](/elements/displaytext) and the [DisplayDot Element](/elements/displaydot)

## configuration

```JSON
"displayLCD": {
  "0": {
    "description": "LCD",
    "address": "0x27",
    "lines" : 2,
    "columns" : 16
  }
}
```
