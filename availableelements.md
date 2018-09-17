# Availabe Elements

## Core Elements

The following Core Element implementations are available in the current version of the HomeDing Library as core Elements.
Because they do not depend on other libraries they are available by default:

| Type                                    | Functionality                                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Element](ElementClass)                 | Base Element class implementing the default functionality. <br /> All Elements must derive from this class.                  |
| [Button Element](ButtonElement)         | Input Element typicaly used with momentary buttons or switches.                                                              |
| Device Element                          | Element to manage device level settings.                                                                                     |
| [DigitalOut Element](DigitalOutElement) | Output element to create digital output signals based on actions.                                                            |
| DisplayDot Element                      |
| DisplayText Element                     |
| NTPTime Element                         |
| OTA Element                             |
| Remote Element                          |
| SSDP Element                            |
| Schedule Element                        | Element for creating real time based on and off actions.                                                                     |
| Timer Element                           | Element for creating timer based actions.                                                                                    |
| [PWMOut Element](PWMOutElement)         | Output Element to output an pwm signals based on actions. Typically for driving LEDs.                                        |
| [Value Element](ValueElement)           | The ValueElement combines receiving modifying actions for an internal state value and sending actions on changing the value. |
|  |

## Elements based on Arduino Libraries

| Type                      | Functionality                                                                                   | Library used    |
| ------------------------- | ----------------------------------------------------------------------------------------------- | :-------------: |
| [DHT Element](DHTElement) | Input Element to read DHT11 and DHT22 sensors with temperature and humidity and create actions. | [DHTesp]        |
| RFSend Element            | send RF signals e.g. on 433 MHz for controlling switch boxes.                                   | [TabRF]         |
| Rotary                    | Input element that creates actions based on a rotary encoder.                                   | [RotaryEncoder] |
|  |

[DHTesp]: https://github.com/beegee-tokyo/DHTesp "DHT library for ESP boards."
[TabRF]: https://github.com/mathertel/tabrf "Table driven RF library"
[RotaryEncoder]: http://www.mathertel.de/Arduino/RotaryEncoderLibrary.aspx "A library for using a rotary encoder as an input."


## planed Elements

| Type           | Functionality                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| WeatherElement | call a service on the internet like OpenWeatherMap to get the forecast of the local weather.           |
| (t.b.d.)       | Meassure Distance using a sonar sensor                                                                 |
| (t.b.d.)       | send actions to a MQTT broker                                                                          |
| (t.b.d.)       | Detect movement                                                                                        |
| (t.b.d.)       | Detect noise using a microphone                                                                        |
| BME680         | Input Element to read DBME680 sensor data with temperature, humidity and preassure and create actions. |
| DisplayBar     | Display a progress bar.                                                                                |
|  |

## Supported Displays

| chip / type   | description                                                                  | Library                                             |
| ------------- | ---------------------------------------------------------------------------- | --------------------------------------------------- |
| displayless   | of course HomeDing devices work without a local display attached.            |                                                     |
| SDD1306       | Monochrome OLED display with 128\*32 or 128\*64                              | [ESP8266 and ESP32 Oled Driver for SSD1306 display] |
| LiquidCrystal | HD44780 compatible LCDs with 2 or 4 lines of 20 characters using I2C adapter | [LiquidCrystal_PCF8574]                             |
|  |
[ESP8266 and ESP32 Oled Driver for SSD1306 display]: ()
[LiquidCrystal_PCF8574]: (https://www.mathertel.de/arduino/LiquidCrystal_PCF8574.aspx)