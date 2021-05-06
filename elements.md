# Elements

Elements are implementations of a specific input, output or compute functionality that corresponds to a specific functionality like [sensors](/sensors/sensors.md). 

The following element implementations are available in the current version of the HomeDing library.


## Input Elements

These elements are used to create an action based on a specific input signal like digital HIGH/LOW or analog signals or values from sensors like movement detectors .

:::element digitalin digitalin
The [DigitalIn Element](/elements/digitalin.md)
is used with momentary buttons or switches but also from sensors giving a HIGH/LOW value.
:::

:::element digitalsignal digitalin
Input Element used to handle digital input
with short time level changes using interrupts.
:::

:::element analog analog
Input Element to capture a analog voltage using the builtin ADC.
:::

:::element rotary rotary
Input Element for using a rotary encoder.
:::

<div style="clear:both"></div>

## Sensor Elements

The [sensor elements](elements/sensors.md) implement the adoption to a very specific sensor or sensor family. They share
some common implementation to allow gathering values on a regular basis and updating other elements or even other boards by sending actions with the current value.

:::element dht dht
Use DHT11, DHT22 and AM2302 sensors for temperature and humidity and create actions.</p>
:::

:::element ds18b20 ds18b20
The DS18B20Element retrieves temperature values from DS18B20 aka.
Dallas Temperature sensors and creates actions.
:::

:::element bme680 bme680
Read BME680 sensor data with temperature, humidity, pressure and gas resistance.</p>
:::

:::element pms pms
Read sensor values from a PMS5003 sensor by plantdata to count micro particles in the air.</p>
:::

:::element bmp280 bmp280
Read sensor values from a BMP280 sensor with temperature and absolute barometric pressure.
:::

<!-- BME280 -->
<!-- MPU9250 -->

<div style="clear:both"></div>

More detailed information on sensor implementation can be found in [sensor elements implementation](/elements/sensors.md).


## Output and Actor Elements

<div class="short">
  <a href="#page=elements/pwmout.md"><img src="/i/pwmout.svg"></a>
  <p><strong><a href="#page=elements/pwmout.md">PWMOut Element</a></strong><br/>
  Output Element to output an pwm signals based on actions. e.g. LEDs.</p>
</div>

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


## Light Elements

To control a light with only one channel the [Switch Element](elements/switch.md) and [Value Element](/elements/value.md) can be used
to control dimmable LEDs using [PWM Out Element](/elements/pwmout.md) or switching using [DigitalOut Element](/elements/digitalout.md).

:::element switch switch
The [Switch Element](/elements/switch.md) controls a boolean output value with 0 and 1 values.
It can use input from a [DigitalIn Element](/elements/digitalin.md) with a momentary button and the Web UI. 
:::

:::element value value
The [Value Element](/elements/value.md) controls a value in a given range. It can be controlled using several methods
like a [DigitalIn Element](/elements/digitalin.md) or a [Rotary Element](/elements/rotary.md) and the Web UI. 
:::

:::element pwmout pwmout
The [PwmOut Element](/elements/pwmout.md) enables creating a PWM digital output signal usually to dimmable LEDs and servos.
:::

:::element digitalout digitalout
The [DigitalOut Element](/elements/digitalout.md) enables creating a digital output on a GPIO pin.
:::

<div style="clear:both"></div>

For lights like [bulbs](boards/bulb.md) or LED stripes that have multiple color channels
the [Color Element](/elements/color.md) can be used to control the light color using a RGB or WRGB color value.

There are special elements to control specific chips or using the PWM capabilities.

:::element color color
The [Color Element](/elements/color.md) controls a RGB or WRGB value that can be used to control light Elements with color support.
:::

:::element light light
The [Light Element](/elements/light.md) can control up to 4 PWM output GPIOs for controlling RGB and WRGB LEDs by color values.
:::

:::element my9291 led
The [MY9291 Element](/elements/my9291.md) implements the protocol to control the Taiwan Mingyang MY9291 LED driver chip that can be found in some bulbs.
:::

:::element neo neo
The [Neo Element](/elements/neo.md) implements the protocol to control ws2812 based LEDs also called Neopixel.
:::

:::element p9813 led
The [P9813 Element](/elements/p9813.md) implements the protocol to control the P9813 LED driver chip also known as Groove chainable LED.
:::


## Service Elements

Service elements interact with services to get or publish data using actions. 

<div class="short">
  <a href="#page=elements/weatherfeed.md"><img src="/i/weatherfeed.svg"></a>
  <p><strong><a href="#page=elements/weatherfeed.md">Weatherfeed Element</a></strong><br/>
  Element that get the weather forecast from an internet service.</p>
</div>


## Logic Elements

Logic elements implement using on/off values expressed as 1/0 values. 

<div class="short">
  <a href="#page=elements/button.md"><img src="/i/button.svg"></a>
  <p><strong><a href="#page=elements/button.md">Button Element</a></strong><br/>
  Element that can differentiate clicks, double clicks and long press gestures to send out actions.</p>
</div>

:::element switch switch
The [Switch Element](/elements/switch.md) controls a boolean output value with 0 and 1 values.
It can use input from a [DigitalIn Element](/elements/digitalin.md) with a momentary button and the Web UI. 
:::

<div class="short">
  <a href="#page=elements/and.md"><img src="/i/and.svg"></a>
  <p><strong><a href="#page=elements/and.md">AND Element</a></strong><br/>
  combines multiple logic input values to a single output value.</p>
</div>

<div class="short">
  <a href="#page=elements/reference.md"><img src="/i/default.svg"></a>
  <p><strong><a href="#page=elements/reference.md">Reference Element</a></strong><br/>
  creates actions by comparing an incoming value with a reference value.</p>
</div>

:::element scene default
The [Scene Element](/elements/scene.md) sends a series of action triggered by a single incoming action.
:::

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

<!--
<div class="short">
  <a href="#page=elements/dcftime.md"><img src="/i/dcftime.svg"></a>
  <p><strong><a href="#page=elements/dcftime.md">DCFTime Element</a></strong><br/>
  Get the actual local time from a DCF 77kHz signal over the air.</p>
</div>
-->

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

<div style="clear:both"></div>

More detailed information on time element and time related implementation can be found in [time elements implementation](/timeelements.md).


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
  Menu Element for displaying and changing multiple values.</p>
</div>

<div class="short">
  <a href="#page=elements/log.md"><img src="/i/log.svg"></a>
  <p><strong><a href="#page=elements/log.md">Log Element</a></strong><br/>
  storing timestamp based sensor values.</p>
</div>


## Web UI Elements

These elements starting with **web** in their name are only known to the Web UI implementation but are not part of the firmware- The intention is to enrich and customize the Web UI dashboard with elements like presets and macros.

:::element webbutton button
  This element adds a button the Web UI of the board. The button can be used to trigger actions by clicking.
:::


## Other Elements

You can find some more elements in the DevDing example folder.
These implementations are still experimental cases but are published already maybe with some restricted functionality.

:::element ina219 default
INA219 sensor, voltage and current.
:::

:::element radio radio
This element is part of the [Radio Example](/examples/radio.md)
and uses the external [Radio Library](http://www.mathertel.de/Arduino/RadioLibrary.aspx)
to configure various FM radio boards.
:::

:::element rfsend rfsend
for sending rf 433 signals.
:::


## Required external libraries

| Library used                                        | Elements effected                                                                 |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Adafruit NeoPixel]                                 | [Neo](/elements/neo.md)                                                           |
| [LiquidCrystal_PCF8574]                             | [LCD display](/displays/lcd.md)                                                   |
| [ESP8266 and ESP32 Oled Driver for SSD1306 display] | [SDD1306 display](/displays/ssd1306.md) and [SH1106 display](/displays/sh1106.md) |
| [RotaryEncoder]                                     | [Rotary Element](elements/rotary.md)                                              |
| [DHT sensor library for ESPx]                       | [DHT Element](elements/DHT.md)                                                    |
| [OneWire]                                           | [DS18B20 Element](elements/ds18b20.md)                                            |

<!-- | [TabRF] | [RFSend Element](elements/rfsend.md) -->
<!-- + Wire + SoftwareSerial -->

[Adafruit NeoPixel]: https://github.com/adafruit/Adafruit_NeoPixel
[LiquidCrystal_PCF8574]: https://github.com/mathertel/LiquidCrystal_PCF8574
[ESP8266 and ESP32 Oled Driver for SSD1306 display]: https://github.com/ThingPulse/esp8266-oled-ssd1306
[RotaryEncoder]: https://github.com/mathertel/RotaryEncoder
[DHT sensor library for ESPx]: 
[OneWire]:

<!-- [TabRF]: https://github.com/mathertel/tabrf "Table driven RF library" -->


## See also

* [Element](elementclass.md)