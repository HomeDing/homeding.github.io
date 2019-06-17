# Available Elements

The following element implementations are available in the current version of the HomeDing library.

\* For some Elements a specific library is required.

## Sensor and Input Elements

These elements are used to create an action based on a specific input or a specific sensor.

<div class="short">
  <a href="#page=elements/digitalin.md"><img src="/i/digitalin.svg"></a>
  <p><strong><a href="#page=elements/digitalin.md">DigitalIn Element</a></strong><br />
  Input Element typicaly used with momentary buttons or switches.</p>
</div>

<div class="short">
  <a href="#page=elements/analog.md"><img src="/i/analog.svg"></a>
  <p><strong><a href="#page=elements/analog.md">Analog Element</a></strong><br/>
  Input Element to capture a analog voltage from the builtin ADC.</p>
</div>

<div class="short">
  <a href="#page=elements/rotary.md"><img src="/i/rotary.svg"></a>
  <p><strong><a href="#page=elements/rotary.md">Rotary Element</a> *</strong><br/>
  Input Element for using a rotary encoder.</p>
</div>

<div class="short">
  <a href="#page=elements/DHT.md"><img src="/i/DHT.svg"></a>
  <p><strong><a href="#page=elements/DHT.md">DHT Element</a> *</strong><br/>
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



## Logic Elements

Logic elements implement using on/off values expressed as 1/0 values. 

<div class="short">
  <a href="#page=elements/button.md"><img src="/i/button.svg"></a>
  <p><strong><a href="#page=elements/button.md">Button Element</a></strong><br/>
  Element that can differentiate clicks, dounbleclicks and long press gestures to send out actions.</p>
</div>

<div class="short">
  <a href="#page=elements/switch.md"><img src="/i/switch.svg"></a>
  <p><strong><a href="#page=elements/switch.md">Switch Element</a></strong><br/>
  Element to switch a value on and off using a digital input witgh a monetary button.</p>
</div>



## Display Elements

Of course HomeDing devices work without a local display attached but for some use cases they are helpful. 

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

## Time related Elements

<div class="short">
  <a href="#page=elements/time.md"><img src="/i/time.svg"></a>
  <p><strong><a href="#page=elements/time.md">Time Element</a></strong><br/>
  Send actions with the actual local time.</p>
</div>

<div class="short">
  <a href="#page=elements/ntptime.md"><img src="/i/ntptime.svg"></a>
  <p><strong><a href="#page=elements/ntptime.md">NTPTime Element</a></strong><br/>
  Get the actual local time using the NTP protocol from a NTP server.</p>
</div>

<div class="short">
  <a href="#page=elements/ntptime.md"><img src="/i/ntptime.svg"></a>
  <p><strong><a href="#page=elements/ntptime.md">DSTime Element</a></strong><br/>
  Get the actual local time using the RTC DS3231 chip.</p>
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
  Element to manage device level settings.</p>
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
  sending actions to other devices over the local network.</p>
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

<div class="short">
<a href="#page=elements/xxx.md"><img src="/i/default.svg"></a>
<p>
  This element is part of the <a href="#page=examples/radio.md">Radio Example</a>
   and enables the configuration of a XXX amplifier chip e.g to set volume.</p>
</div>

## Elements based on external Arduino Libraries

| Type                              | Library used                                        |
| --------------------------------- | --------------------------------------------------- |
| [DHT Element](elements/DHT)       | [DHTesp]                                            |
| [RFSend Element](elements/rfsend) | [TabRF]                                             |
| [Rotary Element](elements/rotary) | [RotaryEncoder]                                     |
| [BME680 Element](elements/bme680) | [Adafruit BME680]                                   |
| SDD1306 and SH1106 displays       | [ESP8266 and ESP32 Oled Driver for SSD1306 display] |
| LiquidCrystal displays in I2C     | [LiquidCrystal_PCF8574]                             |

[DHTesp]: https://www.arduinolibraries.info/libraries/dht-sensor-library-for-es-px "DHT library for ESP boards."
[TabRF]: https://github.com/mathertel/tabrf "Table driven RF library"
[RotaryEncoder]: https://www.arduinolibraries.info/libraries/rotary-encoder "A library for using a rotary encoder as an input."
[Adafruit BME680]: https://www.arduinolibraries.info/libraries/adafruit-bme680-library
[ESP8266 and ESP32 Oled Driver for SSD1306 display]: https://www.arduinolibraries.info/libraries/esp8266-and-esp32-oled-driver-for-ssd1306-display
[LiquidCrystal_PCF8574]: https://www.arduinolibraries.info/libraries/liquid-crystal_pcf8574

## Planed Elements

| Type           | Functionality                                                                                |
| -------------- | -------------------------------------------------------------------------------------------- |
| WeatherElement | call a service on the internet like OpenWeatherMap to get the forecast of the local weather. |
| (t.b.d.)       | Meassure Distance using a sonar sensor                                                       |
| (t.b.d.)       | send actions to a MQTT broker                                                                |
| (t.b.d.)       | Detect movement                                                                              |
| (t.b.d.)       | Detect noise using a microphone                                                              |


## See also

* [Element](elementclass)