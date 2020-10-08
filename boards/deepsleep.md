# Using the deep sleep mode

In some use case there is not enough power available to run a device with a full web server functionality enabled all the day.

Examples:

* A button for a door bell should run for months / years but only needs to be active when a visitor come to the door.
* A temperature sensor on the outside is placed where no constant power is available
* Control that your plats have enough water.
* Windows must be monitored to be closed and you don't want to have wires all across the walls.

All of these use case not only must work they also must be reliable.

Handling low power situations successfully is a hard engineering job and some microprocessors are especially made for this purpose.
The capabilities of the device and sensors also significantly impact on the demands placed on the power supply.

The ESP8266 chips are **not** made for these extremely low power use cases as the minimal current is about 20 to 40 µA. Other processors use 20 nA, 1000 times less.

Using WiFi network for data transport has a lot of advantages but is not energy efficient. E.g. registering a device on a WiFi network requires some significant time and sending WiFi signals also require a minimum of power.

Other network technologies allow sending data without registration so there is less startup time.

<!-- How to implement an outdoor sensor with a solar panel and rechargeable battery is shown in the [Outdoor sensor story](/stories/story-outdoor.md). -->


## Hardware requirements

To make the deep sleep mode in the ESP8266 work 2 pins must be connected:

Pin RST and Pin GPIO16/D0.

to wake up after a deep sleep the sleep timer that is implemented in low-power hardware will pull GPIO16/D0 to GND fos some time and this will trigger a reset of the processor.

This connection is not available on nodeMCU and many other boards and must be connected externally.


## Deep Sleep

The deep sleep mode is the answer of the ESP8266 SoC to get a minimum power consumption. In this mode most of the functionality is switched off and only some memory and a simple hardware based count-down timer are kept active.

To activate the deep sleep the deep sleep duration must be set in the [device element](/elements/device.md) using the `sleeptime` configuration.

```json
{
  "device": {
    "0": {
      "sleeptime": 60,
      ...
    }
  }
}
```

There is a maximum time the sleep mode can be activated about 71 min.


To start the sleep mode the `sleep` action must be sent to the device element e.g. after reading a sensor value:

    device/0?sleep=1

The actual sleep mode is delayed to give enough time to dispatch and process any pending actions. The board will give any existing element some `loop()` time to execute and when all elements are through the sleep mode will be started.

The delay will happen on the following conditions:

* An action is passed to the board to be dispatched.
* When there was no wakeup from an previous sleep but any other reset reason.
* When an element actively delays the sleep mode by calling `board->deferSleepMode()`.

The sleep mode can also be disabled completely by sending a `sleep` action with value 0 to the device element:

    device/0?sleep=0

This allows configuring a device with the web ui when using the following sequence:

1. reset the device using the RST button or by a power off on cycle. This will cause that the sleep mode will wait at least 60 seconds before getting started.  

2. Open a browser to trigger the action to disable the sleep mode using the url
    * <http://homeding/$board/device/0?sleep=0>

3. Start the board or ide url of the device for working.
    * <http://homeding/board.htm>
    * <http://homeding/microide.htm>


## See also

* <https://randomnerdtutorials.com/esp8266-deep-sleep-with-arduino-ide/>
* <https://diyprojects.io/esp8266-deep-sleep-mode-test-wake-pir-motion-detector/#.XkmIu0eSkuU>
* Some chips cannot use the deep sleep more, see <https://github.com/esp8266/Arduino/issues/6007>
* [Watchdog timers](/boards/watchdog.md)


## Tags
#power #system #device
