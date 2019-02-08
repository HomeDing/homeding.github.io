# Examples for the HomeDing library ???

There are some example projects coming with the Homeding library that can be loaded by using the Arduino examples menu. Some of them also require other libraries to be installed using the library manager.

In the very generic examples you can of course configure different combinations of elements for different purposes. You can find these as recipies that show how combinations of elements can be used to solve a specific problem.

**Important Notice:** Examples will not only require to upload the sketch. It is as also required to upload the files from the `data` folder to the filesystem.

This is explained step by step in the [Blink Example](exampleblink).

## Examples

These examples just need the nodeMCU board and no specific external hardware:

[The HomeDing - Blink Example](exampleblink)
[The HomeDing - PWM Example](examplepwm)
Dash button simple

These examples require a specific hardware setup like sensors or displays to solve the use case.

* ... With oled display
* ntpclock
* ... With dht
* with DSTimeElement
* Dash button wake-up

These examples are for a minimal board like ESP-01 or Sonoff basic devices with 1 MByte Flash only

##  Build a custom element

## Recipies



## See also 

* Boards

* [Recipies](recipies)


## Base Example

This example can be used on any board that has a 4MByte Flash memory. This includes all the nodemcu boards.
No additional hardware is required to start this example and the Serial interface is used to transfer some internal actions and infos.

After flashing the software and the web files the web interface is fully functional. The following elements are configured:

* NTP time receiver
* A timer element that switches output GPIO16(D0)
* Logging of actions to a local log history

This configuration can be used as a starting point to implement your own projects.


# NTPClock with display Example

Example-NTPClock

In addition to the Base Example this configuration requires a display where the current time is shown.

+ Display Elements
+ Display Adapter


[HomeBlink](Example-HomeBlink)

[Example-PWMLED](Example-PWMLED)

Example-DHT22

Example-Display

Example-RFSend

Example-Sonoff

Example-LOG

Example-Dev