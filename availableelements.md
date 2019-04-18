# Available Elements

The following element implementations are available in the current version of the HomeDing library.

Some of the elements depend on other libraries that must be installed to compile.
Some of the elements support multiple external sensors. See [Sensor Support](sensorsupport).    

| Type                                        | Functionality                                                                    |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| [Element](elementclass)                     | Base Element class implementing the functionality required by every Element.     |
| **System Elements**                         |
| [Device Element](elements/device)             | Element to manage device level settings.                                         |
| [OTA Element](elements/ota)                   | Enable and configure Over The Air Updates                                        |
| [SSDP Element](elements/ssdp)                 | Enable and configure discovering devices on the network.                         |
| [Value Element](elements/value)               | Receiving and sending actions to use and control an internal value.              |
| [Remote Element](elements/remote)             | sending actions to other devices over the local network.                         |
| [Menu Element](elements/menu)                 |                                                                                  |
| [Log Element](elements/log)                   | storing timestamp based sensor values.                                           |
| **Sensor and Input Elements**               |                                                                                  |
| [Digital In Element](elements/digitalin)    | Input Element typicaly used with momentary buttons or switches.                  |
| [Analog Element](elements/analog)           | Input Element to capture a analog voltage from the builtin ADC.                  |
| [Rotary Element](elements/rotary)             | Input Element for using a rotary encoder.                                        |
| [DHT Element](elements/DHT)*                  | Use DHT11 and DHT22 sensors for temperature and humidity and create actions.     |
| [BME680 Element](elements/bme680)             | Read BME680 sensor data with temperature, humidity, pressure and gas resistance. |
| **Logic Elements**                          |                                                                                  |
| [Button Element](elements/Button)             | Input Element typicaly used with momentary buttons or switches.                  |
| [Switch Element](elements/switch)             | Input Element typicaly used with momentary buttons or switches.                  |
| **Display Adapters**                        |                                                                                  |
| [DisplaySSD1306](displaySSD1306.md)         | Adapter for SSD1306 compatible OLED displays with 128\*32 or 128\*64 dots.       |
| DisplayAdapterSH1106*                       | Adapter for SH1106 compatible OLED displays with 128\*32 or 128\*64 dots.        |
| DisplayAdapterLCD*                          | Adapter for HD44780 compatible LCDs displays using I2C adapter.                  |
| **Display Elements**                        |                                                                                  |
| [DisplayText Element](elements/displaytext) | Show values as text on the display.                                              |
| [DisplayDot Element](elements/displaydot)   | Show binary values as dot on the display.                                        |
| DisplayBar Element                          | Display a progress bar.                                                          |
| **Time related Elements**                   |                                                                                  |
| [Time Element](elements/time)                 | Send actions with the actual local time.                                         |
| [NTPTime Element](elements/ntptime)           | Get the actual local time using the NTP protocol from a NTP server.              |
| [DSTime Element](elements/ntptime)            | Get the actual local time using the RTC DS3231 chip.                             |
| [DCFTime Element](elements/dcftime)*          | Get the actual local time from a DCF 77kHz signal over the air.                  |
| [Schedule Element](elements/schedule)         | Creating on and off actions based on the actual local time.                      |
| [Alarm Element](elements/alarm)               | Element for creating a action based on the time of day.                          |
| [Timer Element](elements/timer)               | Element for creating timer (duration) based actions.                             |
| **Actor and Output Elements**               |                                                                                  |
| [PWMOut Element](elements/pwmout)             | Output Element to output an pwm signals based on actions. e.g. LEDs.             |
| [DigitalOut Element](elements/digitalout)   | Output element to create digital output signals based on actions.                |
| [RFSend Element](elements/rfsend)*            | Send out RF codes on the 433 MHz band to control remote sockets.                 |

\* For these Elements a specific library is requires. See below.

## Elements based on external Arduino Libraries

| Type                            | Functionality                                                                |   Library used    |
| ------------------------------- | ---------------------------------------------------------------------------- | :---------------: |
| [DHT Element](elements/DHT)       | Use DHT11 and DHT22 sensors for temperature and humidity and create actions. |     [DHTesp]      |
| [RFSend Element](elements/rfsend) | send RF signals e.g. on 433 MHz for controlling switch boxes.                |      [TabRF]      |
| [Rotary Element](elements/rotary) | Input element that creates actions based on a rotary encoder.                |  [RotaryEncoder]  |  |
| [BME680 Element](elements/bme680) | The BME680 sensor requires the Adafruit BME680 library.                      | [Adafruit BME680] |

[DHTesp]: https://github.com/beegee-tokyo/DHTesp "DHT library for ESP boards."
[TabRF]: https://github.com/mathertel/tabrf "Table driven RF library"
[RotaryEncoder]: http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx "A library for using a rotary encoder as an input."
[Adafruit BME680]: (https://github.com/adafruit/Adafruit_BME680)

## Planed Elements

| Type           | Functionality                                                                                |
| -------------- | -------------------------------------------------------------------------------------------- |
| WeatherElement | call a service on the internet like OpenWeatherMap to get the forecast of the local weather. |
| (t.b.d.)       | Meassure Distance using a sonar sensor                                                       |
| (t.b.d.)       | send actions to a MQTT broker                                                                |
| (t.b.d.)       | Detect movement                                                                              |
| (t.b.d.)       | Detect noise using a microphone                                                              |
| DisplayBar     | Display a progress bar.                                                                      |
|                |

## Supported Displays

| chip / type   | description                                                                  | Library                                             |
| ------------- | ---------------------------------------------------------------------------- | --------------------------------------------------- |
| displayless   | of course HomeDing devices work without a local display attached.            |                                                     |
| SDD1306       | Monochrome OLED display with 128\*32 or 128\*64                              | [ESP8266 and ESP32 Oled Driver for SSD1306 display] |
| LiquidCrystal | HD44780 compatible LCDs with 2 or 4 lines of 20 characters using I2C adapter | [LiquidCrystal_PCF8574]                             |
|               |

[ESP8266 and ESP32 Oled Driver for SSD1306 display]: ()
[LiquidCrystal_PCF8574]: (https://www.mathertel.de/arduino/LiquidCrystal_PCF8574.aspx)