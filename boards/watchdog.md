## Watchdog Timers

The so-called watchdog timers help in handling software problems that make devices unusable by restarting a device with a reset.

Using the reset mechanism is something that is a usual approach on microprocessor based devices in situations like:

* loop() functions do not return for a long time
* after changing parameters start the device in a new or adjusted mode
* after uploading new software

There is a good article available on watchdog timers at:

https://sigmdel.ca/michel/program/esp8266/arduino/watchdogs_en.html


