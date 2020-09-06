# Using the deep sleep mode

In some use case there is not enough power available to run a device with full web server functionality all the day.

Examples:

* A button for a door bell should run for months / years but only needs to be active when a visitor come to the door.
* A temperature sensor on the outside is placed where no constant power is available
* Control that your plats have enough water.
* Windows must be monitored to be closed and you don't want to have wires all across the walls.

All of these use case not only must work they also must be reliable.

Handling low power situations successfully is a hard engineering job and some microprocessors are especially made for this purpose.
The capabilities of the device and sensors also significantly impact on the demands placed on the power supply.

The ESP8266 chips are not made for these extremely low power use cases as the minimal current is about 20 to 40 µA. Other processors use 20 nA, 1000 times less.

Using WiFi network for data transport has a lot of advantages but is not energy efficient. E.g. registering a device on a WiFi network requires some significant time and sending WiFi signals also require a minimum of power.

Other network technologies allow sending data without registration so there is less startup time.

<!-- How to implement an outdoor sensor with a solar panel and rechargeable battery is shown in the [Outdoor sensor story](/stories/story-outdoor.md). -->


## Deep Sleep

The deep sleep mode is the answer of the ESP8266 SoC to get a minimum power consumption. In this mode most of the functionality is switched off and only some memory and a simple hardware based count-down timer are kept active.

To activate the deep sleep the deep sleep duration must be specified in the [device element](/elements/device.md) configuration

> draft ??? 

max 71 min ?


- <https://diyprojects.io/esp8266-deep-sleep-mode-test-wake-pir-motion-detector/#.XkmIu0eSkuU>

- <https://randomnerdtutorials.com/esp8266-deep-sleep-with-arduino-ide/>
- Voltage Regulator MCP1700-3302E
- <https://www.esp8266.com/viewtopic.php?t=10987>
- <https://www.esp8266.com/viewtopic.php?f=6&t=17975>

- Some chips cannot use the deep sleep more, see https://github.com/esp8266/Arduino/issues/6007


https://www.hackster.io/dante/wifi-air-quality-station-4a2407

https://www.instructables.com/id/How-to-Build-a-Dashbutton-for-the-Internet-of-Thin/


### Save power by using rtc memory

https://www.bakke.online/index.php/2017/06/24/esp8266-wifi-power-reduction-avoiding-network-scan/


### Auto power off

- <https://randomnerdtutorials.com/latching-power-switch-circuit-auto-power-off-circuit-esp32-esp8266-arduino/>

- <https://hackaday.io/project/12866-esp8266-power-latch>
- schematic: <https://cdn.hackaday.io/files/12866550458944/ESP_AutoPwr.png>


See also [Remote Button](../recipes/remotebutton.md)

* https://www.itead.cc/sonoff-dw2.html
* https://www.microchip.com/design-centers/lowpower
* http://iot-bits.com/reducing-esp8266-deep-sleep-wakeup-time-current/


## See also

* [Watchdog](watchdog.md)