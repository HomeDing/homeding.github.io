# Available Elements

The following element implementations are available in the current version of the HomeDing library.

\* For some Elements a specific library is required.


## Input Elements

These elements are used to create an action based on a specific input signal like digital HIGH/LOW or analog signals or values from sensors like movement detectors .

<div class="short">
  <a href="#page=elements/digitalin.md"><img src="i/digitalin.svg"></a>
  <p><strong><a href="#page=elements/digitalin.md">DigitalIn Element</a></strong><br />
  Input Element used with momentary buttons or switches but also from sensors giving a HIGH/LOW value.</p>
</div>

<div class="short">
  <a href="#page=elements/analog.md"><img src="/i/analog.svg"></a>
  <p><strong><a href="#page=elements/analog.md">Analog Element</a></strong><br/>
  Input Element to capture a analog voltage using the builtin ADC.</p>
</div>

<div class="short">
  <a href="#page=elements/rotary.md"><img src="/i/rotary.svg"></a>
  <p><strong><a href="#page=elements/rotary.md">Rotary Element</a> *</strong><br/>
  Input Element for using a rotary encoder.</p>
</div>

<div style="clear:both"></div>

## Sensor Elements

The [sensor elements](elements/sensors.md) implement the adoption to a very specific sensor or sensor family. They share
some common implementation to allow gathering values on a regular basis and updating other elements or even other boards by sending actions with the current value.

<div class="short">
  <a href="#page=elements/dht.md"><img src="/i/dht.svg"></a>
  <p><strong><a href="#page=elements/dht.md">DHT Element</a> *</strong><br/>
  Use DHT11, DHT22 and AM2302 sensors for temperature and humidity and create actions.</p>
</div>

<div class="short">
  <a href="#page=elements/bme680.md"><img src="/i/bme680.svg"></a>
  <p><strong><a href="#page=elements/bme680.md">BME680 Element</a> *</strong><br/>
  Read BME680 sensor data with temperature, humidity, pressure and gas resistance.</p>
</div>

<div class="short">
  <a href="#page=elements/pms.md"><img src="/i/pms.svg"></a>
  <p><strong><a href="#page=elements/pms.md">PMS Element</a></strong><br/>
  Read sensor values from a PMS5003 sensor by plantdata to count micro particles in the air.</p>
</div>

<!-- DS18B20 -->
<!-- BME280 -->
<!-- BMP280 -->
<!-- MPU9250 -->

<div style="clear:both"></div>

More detailed information on the sensor implementation can be found in [sensor elements](/elements/sensors.md).


## Output and Actor Elements

<div class="short">
  <a href="#page=elements/pwmout.md"><img src="/i/pwmout.svg"></a>
  <p><strong><a href="#page=elements/pwmout.md">PWMOut Element</a></strong><br/>
  Output Element to output an pwm signals based on actions. e.g. LEDs.</p>
</div>

<div class="short">
  <a href="#page=elements/digitalout.md"><img src="/i/digitalout.svg"></a>
  <p><strong><a href="#page=elements/digitalout.md">DigitalOut Element</a></strong><br/>
  Output element to create digital output signals based on actions.</p>
</div>

<div class="short">
  <a href="#page=elements/rfsend.md"><img src="/i/rfsend.svg"></a>
  <p><strong><a href="#page=elements/rfsend.md">RFSend Element</a> *</strong><br/>
  Send out RF codes on the 433 MHz band to control remote sockets.</p>
</div>

<div style="clear:both"></div>


## Logic Elements

Logic elements implement using on/off values expressed as 1/0 values. 

<div class="short">
  <a href="#page=elements/button.md"><img src="/i/button.svg"></a>
  <p><strong><a href="#page=elements/button.md">Button Element</a></strong><br/>
  Element that can differentiate clicks, double clicks and long press gestures to send out actions.</p>
</div>

<div class="short">
  <a href="#page=elements/switch.md"><img src="/i/switch.svg"></a>
  <p><strong><a href="#page=elements/switch.md">Switch Element</a></strong><br/>
  Element to switch a value on and off using a digital input witgh a monetary button.</p>
</div>

<div class="short">
  <a href="#page=elements/and.md"><img src="/i/and.svg"></a>
  <p><strong><a href="#page=elements/and.md">AND Element</a></strong><br/>
  combines multiple logic input values to a single output value.</p>
</div>

<div style="clear:both"></div>


## Display Elements

The HomeDing library supports local attached displays but also works fine without a local display.

<div class="short">
  <a href="#page=displays/ssd1306.md"><img src="/i/displayssd1306.svg"></a>
  <p><strong><a href="#page=displays/ssd1306.md">DisplaySSD1306</a> *</strong><br/>
  Adapter for SSD1306 compatible OLED displays with 128\*32 or 128\*64 dots.</p>
</div>

<div class="short">
  <a href="#page=displays/sh1106.md"><img src="/i/displaysh1106.svg"></a>
  <p><strong><a href="#page=displays/sh1106.md">DisplaySH1106</a> *</strong><br/>
  Adapter for SH1106 compatible OLED displays with 128\*32 or 128\*64 dots.</p>
</div>

<div class="short">
  <a href="#page=displays/lcd.md"><img src="/i/displaylcd.svg"></a>
  <p><strong><a href="#page=displays/lcd.md">DisplayLCD</a> *</strong><br/>
  Adapter for HD44780 compatible LCDs displays using I2C adapter.</p>
</div>

<div class="short">
  <a href="#page=elements/displaytext.md"><img src="/i/displaytext.svg"></a>
  <p><strong><a href="#page=elements/displaytext.md">DisplayText Element</a></strong><br/>
  Show values as text on the display.</p>
</div>

<div class="short">
  <a href="#page=elements/displaydot.md"><img src="/i/displaydot.svg"></a>
  <p><strong><a href="#page=elements/displaydot.md">DisplayDot Element</a></strong><br/>
  Show binary values as dot on the display.</p>
</div>

<div class="short">
  <a href="#page=elements/displaybar.md"><img src="/i/displaybar.svg"></a>
  <p><strong><a href="#page=elements/displaybar.md">DisplayBar Element</a></strong><br/>
  Display a progress bar.</p>
</div>

<div style="clear:both"></div>

More detailed information on displays and related elements can be found in [displays](/displays.md)


## Time related Elements

<div class="short">
  <a href="#page=elements/time.md"><img src="/i/time.svg"></a>
  <p><strong><a href="#page=elements/time.md">Time Element</a></strong><br/>
  Send actions with the actual local time.</p>
</div>

<div class="short">
  <a href="#page=elements/dstime.md"><img src="/i/dstime.svg"></a>
  <p><strong><a href="#page=elements/dstime.md">DSTime Element</a></strong><br/>
  Get the actual local time using the RTC DS3231 chip.</p>
</div>

<div class="short">
  <a href="#page=elements/ntptime.md"><img src="/i/ntptime.svg"></a>
  <p><strong><a href="#page=elements/ntptime.md">NTPTime Element</a></strong><br/>
  Get the actual local time using the NTP protocol from a NTP server.</p>
</div>

<div class="short">
  <a href="#page=elements/dcftime.md"><img src="/i/dcftime.svg"></a>
  <p><strong><a href="#page=elements/dcftime.md">DCFTime Element</a></strong><br/>
  Get the actual local time from a DCF 77kHz signal over the air.</p>
</div>

<div class="short">
  <a href="#page=elements/schedule.md"><img src="/i/schedule.svg"></a>
  <p><strong><a href="#page=elements/schedule.md">Schedule Element</a></strong><br/>
  Creating on and off actions based on the actual local time.</p>
</div>

<div class="short">
  <a href="#page=elements/alarm.md"><img src="/i/alarm.svg"></a>
  <p><strong><a href="#page=elements/alarm.md">Alarm Element</a></strong><br/>
  Element for creating a action based on the time of day.</p>
</div>

<div class="short">
  <a href="#page=elements/timer.md"><img src="/i/timer.svg"></a>
  <p><strong><a href="#page=elements/timer.md">Timer Element</a></strong><br/>
  Element for creating timer (duration) based actions.</p>
</div>



## System Elements

<div class="short">
  <a href="#page=elements/device.md"><img src="/i/device.svg"></a>
  <p><strong><a href="#page=elements/device.md">Device Element</a></strong><br/>
  configuration of the device and board.</p>
</div>


<div class="short">
  <a href="#page=elements/ota.md"><img src="/i/ota.svg"></a>
  <p><strong><a href="#page=elements/ota.md">OTA Element</a></strong><br/>
  Enable and configure Over The Air Updates</p>
</div>

<div class="short">
  <a href="#page=elements/ssdp.md"><img src="/i/ssdp.svg"></a>
  <p><strong><a href="#page=elements/ssdp.md">SSDP Element</a></strong><br/>
  Enable and configure discovering devices on the network.</p>
</div>

<div class="short">
  <a href="#page=elements/value.md"><img src="/i/value.svg"></a>
  <p><strong><a href="#page=elements/value.md">Value Element</a></strong><br/>
  Receiving and sending actions to use and control an internal value.</p>
</div>

<div class="short">
  <a href="#page=elements/remote.md"><img src="/i/remote.svg"></a>
  <p><strong><a href="#page=elements/remote.md">Remote Element</a></strong><br/>
  sending actions to elements in other devices over the local network.</p>
</div>

<div class="short">
  <a href="#page=elements/menu.md"><img src="/i/menu.svg"></a>
  <p><strong><a href="#page=elements/menu.md">Menu Element</a></strong><br/>
  elements/menu)               |</p>
</div>

<div class="short">
  <a href="#page=elements/log.md"><img src="/i/log.svg"></a>
  <p><strong><a href="#page=elements/log.md">Log Element</a></strong><br/>
  storing timestamp based sensor values.</p>
</div>

## Other Elements

<div class="short">
  <a href="#page=elements/radio.md"><img src="/i/radio.svg"></a>
  <p><strong><a href="#page=elements/radio.md">Radio Element</a></strong><br/>
  This element is part of the <a href="#page=examples/radio.md">Radio Example</a>
  and uses the external <a href="http://www.mathertel.de/Arduino/RadioLibrary.aspx">Radio Library</a>
  to configure various FM radio boards.</p>
</div>

<!-- <div class="short">
<a href="#page=elements/xxx.md"><img src="/i/default.svg"></a>
<p>
  This element is part of the <a href="#page=examples/radio.md">Radio Example</a>
   and enables the configuration of a XXX amplifier chip e.g to set volume.</p>
</div> -->

<div class="short">
<a href="#page=elements/webbutton.md"><img src="/i/button.svg"></a>
<p>
  This element configures a button in the web ui to trigger an action by clicking.
</p>
</div>

## Required external libraries

| Library used                                        | Elements effected                                                                 |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Adafruit NeoPixel]                                 | [Neo](/elements/neo.md)                                                           |
| [LiquidCrystal_PCF8574]                             | [LCD display](/displays/lcd.md)                                                   |
| [ESP8266 and ESP32 Oled Driver for SSD1306 display] | [SDD1306 display](/displays/ssd1306.md) and [SH1106 display](/displays/sh1106.md) |
| [RotaryEncoder]                                     | [Rotary Element](elements/rotary)                                                 |
| [DHT sensor library for ESPx]                       | [DHT Element](elements/DHT)                                                       |
| [OneWire]                                           | [DS18B20 Element](elements/ds18b20.md)                                            |

<!-- | [TabRF] | [RFSend Element](elements/rfsend) -->
<!-- + Wire + SoftwareSerial -->

[Adafruit NeoPixel]: https://github.com/adafruit/Adafruit_NeoPixel
[LiquidCrystal_PCF8574]: https://github.com/mathertel/LiquidCrystal_PCF8574
[ESP8266 and ESP32 Oled Driver for SSD1306 display]: https://github.com/ThingPulse/esp8266-oled-ssd1306
[RotaryEncoder]: https://github.com/mathertel/RotaryEncoder
[DHT sensor library for ESPx]: 
[OneWire]:

<!-- [TabRF]: https://github.com/mathertel/tabrf "Table driven RF library" -->


## See also

* [Element](elementclass)