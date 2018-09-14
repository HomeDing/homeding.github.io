# Availabe Elements

The following Element implementations are available in the current version of the HomeDing Library:

| Type                | Functionality | Library used |
| -----------------   | ------------- | :----------: |
| [Element]           | Base Element class implementing the default functionality. <br /> All Elements must derive from this class.	| -
| [Button Element]    | Core Input Element typicaly used with momentary buttons or switches. | -
| Device Element      | Core Element to manage device level settings. | -
| [DHT Element]       | Input Element to read DHT11 and DHT22 sensors with temperature and humidity and create actions. | [DHTesp]
| DigitalOut Element  | Output Element to output an digital signals based on actions. | -
| DisplayDot Element  |       | -
| DisplayText Element |       | -
| NTPTime Element     |       | -
| OTA Element         |       | -
| Remote Element      |       | -
| RFSend Element      | send RF signals e.g. on 433 MHz for controlling switch boxes | [TabRF]
| SSDP Element        |       | -
| Timer Element       | Element for creating timer based actions. | -
| [PWMOut Element]    | Output Element to output an pwm signals based on actions. Typically for driving LEDs. | -
| [Value Element]     | The ValueElement combines receiving modifying actions for an internal state value and sending actions on changing the value.
 | -

## planed Elements

| Type                | Functionality | Library used |
| -----------------   | ------------- | :----------: |
| WeatherElement      | call a service on the internet like OpenWeatherMap to get the forecast of the local weather. |
| (t.b.d.)            | Meassure Distance using a sonar sensor |
| (t.b.d.)            | send actions to a MQTT broker |
| (t.b.d.)            | Detect movement
| (t.b.d.)            | Detect noise using a microphone |
| Rotary              | Imput element that creates actions based on a rotary encoder.
| BME680              | Input Element to read DBME680 sensor data with temperature, humidity and preassure and create actions.

## Supported Displays

| chip / type   | description  | Library      |
| ------------  | ------------ | ------------ |
| displayless   | of course Homeding works without a local display |   |
| SDD1306       | Monochrome OLED display with 128\*32 or 128\*64 | ESP8266 and ESP32 Oled Driver for SSD1306 display by Daniel Eichhorn, Fabrice Weinberg  |
| LiquidCrystal | HD44780 compatible LCDs with 2 or 4 lines of 20 characters using I2C adapter | LiquidCrystal_PCF8574 |

[DHTesp]: https://github.com/beegee-tokyo/DHTesp "DHT library for ESP boards."
[TabRF]: https://github.com/mathertel/tabrf "Table driven RF library"

[Element]: ElementClass "Base Element implementation"
[Button Element]: ButtonElement "digital input for a momentary button"
[DHT Element]: DHTElement "DHT Temperature and Humidity Sensor"
[PWMOut Element]: PWMOutElement
[Value Element]: ValueElement