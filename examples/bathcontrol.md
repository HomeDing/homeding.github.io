# Bathroom Climate control

--

This example demonstrates how to implement an IoT device for controlling a bathroom or cellar fan with the help of the HomeDing library.

## Situation

In many residential buildings, there are rooms where water usage leads to increased air humidity.
Also after using the toilet you may want some fresh air in the room.

High humidity levels can cause various problems, including mold growth, unpleasant odors, and damage to walls or
furniture.  Extended exposure to high humidity can also adversely affect health and comfort.

To reduce humidity, you can either open a window (if available) or use a fan to exhaust the moist air.  This example
focuses on controlling such a fan using an IoT device with built-in rules that apply to this situation.

## Rules for the fan

In conventional installations, bathroom fans are typically controlled by the light switch, continuing to run for a
preset time after the light is turned off.  This approach can be inefficient when using the room without generating
excess humidity.

Some more modern devices also have sensors for humidity and adjust their activity when humidity reaches a threshold.

This IoT device offers a smarter solution by combining two sensors and a pushbutton and can implement some more smart rules that can be adjusted
using the remote web interface. This example uses this approach and provides the following features:

* A light sensor is capturing the light situation. The light switch is not used.
  Instead a simple light sensor is used to trigger fan activity. No need to capture a signal from a high voltage line.
* A Humidity sensor is capturing the light situation.
*
* The fan doesn't start when the light is switched on for a few seconds only.
* The fan will be started for a few minutes after the light has been switched off.
* When the humidity sensor signals a humidity higher than 80 % the fan will start.
* When the humidity has fallen under 60 % the fan will be switched off.
* When pressing the push button the fan will be activated for 60 seconds per push.
* When long pressing the push button the device will go into off mode.
* When long pressing the push button again the device will start again in normal mode.

You can change all the threshold and time values in the configuration of the device
and adapt or extend the configuration to your special needs.

There are some rules implemented that cover the above ideas that can be switched on/off using the web user interface.
They are running independently and the fan will be activated whenever one of the triggers wants it.

Analog in with LDR -> [Reference Element] onHigh -> Start Light [Timer Element]
Analog in with LDR -> [Reference Element] onLow -> Stop Light [Timer Element]

When the light is detected only for a short time this timer will not reach the end before stopped and onEnd Event
will not be triggered.

Light Timer onEnd -> Start Fan [Timer Element]


The Light Trigger part of the configuration


[Reference Element]: /elements/reference.md
[Timer Element]: /elements/timer.md


``` json
{
  "digitalout": {
    "relay": {
      "title": "relay",
      "pin": "3"
    },
    "led": {
      "title": "led",
      "pin": "8",
      "invert": "1"
    }
  },
  "timer": {
    "led": {
      "mode": "timer",
      "restart": "1",
      "waittime": "8s",
      "pulsetime": "20s",
      "cycletime": "80s",
      "onHigh": "device/0?log=onHigh",
      "onLow": "device/0?log=onLow",
      "onValue": "digitalout/relay?value=$v",
      "onEnd": "device/0?log=onEnd",
      "title": "timer/led"
    }
  },
  "bh1750": {
    "lux": {
      "title": "light",
      "readtime": "2s"
    }
  }
}
```

