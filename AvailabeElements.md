# Availabe Elements

The following Element implementations are available in the current  version of the HomeDing Library:

| Type                           | Functionality | Library used |
| -----------------              | ------ | :------: |
| [Element](ElementInterface)    | Base Element class implementing the default functionality. <br /> All Elements must derive from this class.	| -
| DeviceElement                  | Core Element to manage device level settings. | -
| SSDPElement                    |                   | -
| OTAElement                     |                   | -
| ButtonElement                  | Input Element typically used with momentary buttons or switches. | -
| TimerElement                   | Element for creating timer based actions. | -
| DigitalOutElement              | Output Element to output an digital signals based on actions. | -
| [PWMOutElement](PWMOutElement) | Output Element to output an pwm signals based on actions. Typically for driving LEDs. | -
| [ValueElement](ValueElement)   | Control a value by actions | -
| DHTElement                     | Input Element of the HomeDong Board Library to read DHT11 and DHT22 sensors and create actions. | [DHTesp](https://github.com/beegee-tokyo/DHTesp)
 | RFSend | send RF signals e.g. on 433 MHz for controlling switch boxes | [TabRF](https://github.com/mathertel/tabrf)
| NTPTimeElement                 |                   | -
| RemoteElement                  |                   | -

## planed Elements

| Type                           | Functionality |
| -----------------              | ------ |
| WeatherElement | call a service on the internet like OpenWeatherMap to get the forecast of the local weather. |
| | Meassure Distance using a sonar sensor |
| | send actions to a MQTT broker |
| | Detect movement
| | Detect noise using a microphone |
| Rotary | Imput element that creates actions based on a rotary encoder.

## Supported Displays

| chip / type   | description  | Library      |
| ------------  | ------------ | ------------ |
| displayless   | of course Homeding works without a local display |   |
| SDD1306       | Monochrome OLED display with 128\*32 or 128\*64 | ESP8266 and ESP32 Oled Driver for SSD1306 display by Daniel Eichhorn, Fabrice Weinberg  |
| LiquidCrystal | HD44780 compatible LCDs with 2 or 4 lines of 20 characters using I2C adapter | LiquidCrystal_PCF8574 |


