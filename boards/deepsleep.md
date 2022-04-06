---
title: Using the deep sleep mode
tags: ["Implementation", "System"]
layout: "page.njk"
excerpt: >
  The deep sleep mode allows saving energy consumption by also limits the availability of the web server of the de vice.
---

In some use case there is not enough power available to run a device with a full web server
functionality enabled all the day.

Examples:

* A button for a door bell should run for months / years but only needs to be active when a visitor come to the door.
* A temperature sensor on the outside is placed where no constant power is available
* Control that your plats have enough water.
* Windows must be monitored to be closed and you don't want to have wires all across the walls.

All of these use case not only must work they also must be reliable.

Handling low power situations successfully is a hard engineering job
and some microprocessors are especially made for this purpose.
The capabilities of the device and sensors also significantly impact on the demands placed on the power supply.

The ESP8266 chips are **not** made for these extremely low power use cases as the minimal current is about 20 to 40 µA. Other processors use 20 nA, 1000 times less.

Using WiFi network for data transport has a lot of advantages but is not energy efficient. E.g. registering a device on a WiFi network requires some significant time and sending WiFi signals also require a minimum of power.

Other network technologies allow sending data without registration so there is less startup time.

<!-- How to implement an outdoor sensor with a solar panel and rechargeable battery is shown in the [Outdoor sensor story](/stories/story-outdoor.md). -->


## Hardware requirements

To make the deep sleep mode in the ESP8266 work 2 pins must be connected:

Pin <span class="gpio black">RST</span> and Pin <span class="gpio blue">GPIO16/D0</span>.

This allows to recall the halted cpu by the builtin timer.
To wake up after a deep sleep the sleep timer that is implemented in low-power hardware will pull GPIO16/D0 to GND for some time and this will trigger a reset of the processor.

This connection is not available on nodeMCU and many other boards and must be connected externally.


## Deep Sleep

The deep sleep mode is the answer of the ESP8266 SoC to get a minimum power consumption. In this mode most of the functionality is switched off and only some memory and a simple hardware based count-down timer are kept active.

Using the deep sleep modus requires at least 2 configurations:

* The device must know how long it can be set as rest.
* The device must know when all work is done to start shutting down.

## Device configuration

To activate the deep sleep the deep sleep duration must be set in the [device element](/elements/device.md) using the `sleeptime` property.

``` json
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


## Start deep sleep phase

To start the sleep mode a `sleep` action must be sent to the device element e.g. after reading and logging a sensor value:

**Example:**

``` json
{
  "dht": {
    "0": {
      ...
      "ontemperature": "log/t?value=$v,device/0?sleep=true"
    }
  }
}
```

## Defer the start of the deep sleep phase

The actual start of the sleep mode is delayed to give enough time to dispatch and process any pending actions. The board will give any existing element some `loop()` time to execute and when all elements are through the sleep mode will be started.

A delay of starting the sleep mode will happen on the following conditions:

* An action is passed to the board to be dispatched.
* When there was no wake-up from an previous sleep but any other reset reason. Tn this case the deep sleep phase
  will not started before waiting for 60 seconds.
* When an element actively delays the sleep mode by calling `board->deferSleepMode()`.

The sleep mode can also be disabled completely by sending a `sleep` action with value 0 to the device element:

    http://homeding/api/device/0?nosleep


## Temporarily disable the deep sleep phase

The rules to defer the deep sleep mode allows configuring a device with the web ui when using the following sequence:

1. Reset the device using the RST button or by a power off on cycle.
   This will cause that the sleep mode will wait at least 60 seconds before getting started.
2. Open a browser to trigger the action to disable the sleep mode using the url
    <http://homeding/$board/device/0?nosleep>
3. Start the board or ide url of the device for working:
   * <http://homeding/board.htm>
   * <http://homeding/microide.htm>
4. To continue using the deep sleep reset the board again by the RST button or the reset function in the IDE.


## Logfile - first reboot

Here is a typical log output with some hints recorded after a hardware reset.

```txt
00:00:00 sys:i Device starting...
00:00:04 sys:t connected.
00:00:11 dht/on:t getProbe()
00:00:11 root:i T:24.90
00:00:11 root:i H:70.00
00:00:11 device/0:i start sleep(true)
00:00:41 sys:i sleep...
```

* The first regular reset by Hardware reset button or by using the reboot service is starting the device.
* After 4 seconds the device has a network connection.
* The device waits for end of 10 seconds to give the user the chance to start config mode.
* After 11 seconds the sensor gets a probe and starts going for the sleep mode.
* The time between the initiation of the sleep by the sensor having a measurement
  is delayed for 30 seconds before it is actually executed.
* After 41 seconds the sleep mode is entered.

During the 30 seconds delayed time the web server is active so it is possible to send a request to the device
like `http://homeding/api/device/0?nosleep` to block any sleep mode from execution and to use the web UI for configuration until another reboot is initiated.


## Logfile - reboot from sleep mode

Here is a typical log output with some hints recorded after a wake-up reset from deep sleep mode.

```txt
00:00:00 sys:i Device starting...
00:00:00 sys:i Reset from Deep Sleep mode.
00:00:02 sys:t connected.
00:00:03 dht/on:t getProbe()
00:00:03 root:i T:23.40
00:00:03 root:i H:72.10
00:00:03 device/0:i start sleep(true)
00:00:03 sys:t sleep...
```

In this case no waiting for config mode and no 30 seconds waiting before entering sleep mode is present.
Everything else woks exactly the same as before but the whole sequence is executed and faster.


> **Important node**
> 
> The implementation of the deep sleep mode uses a memory location in the RTC memory
> to remember that the next reboot is caused by a deep sleep.
> When a manual reset id given by pressing the RESET button the first reset is always interpreted as a return from deep sleep.
> To get into a full **hardware reset**
>   * a second reset following quick after the first must be used
>   * a power-down and power-up cycle must occur.


## See also

* <https://randomnerdtutorials.com/esp8266-deep-sleep-with-arduino-ide/>
* <https://diyprojects.io/esp8266-deep-sleep-mode-test-wake-pir-motion-detector/#.XkmIu0eSkuU>
* Some chips cannot use the deep sleep more, see <https://github.com/esp8266/Arduino/issues/6007>
* [Watchdog timers](/boards/watchdog.md)
* <https://randomnerdtutorials.com/latching-power-switch-circuit-auto-power-off-circuit-esp32-esp8266-arduino/>

