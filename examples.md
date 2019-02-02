# Examples for the HomeDing library ???

[The HomeDing - Blink Example](exampleblink)
[The HomeDing - PWM Example](examplepwmles)

* Build a custom element


## See also 

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