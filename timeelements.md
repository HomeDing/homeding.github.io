---
title: Time Elements
---

# {{data.title}}

Several elements are related to the current local time. These are bundled together as the time related elements.

For using a real local time on a device the HomeDing library supports

* elements that retrieve the local time from the internet, using radio receiver or from a local RTC chip.
* elements that create actions based on the local time like alarms and timers
* elements that use the local time to add the current timestamp to sensor data

The ESP boards to have a system timer that keeps and updates a local time with a accuracy that is acceptable for some hours. However this timer needs to be initialized every time the system reboots and must be adjusted every some hours to keep it accurate.


## accessing and adjusting the local time

The [NTPTime Element](/elements/ntptime.md) retrieves the current time from a NTP server and can translate it into the local time by using to local timezone setting.
Devices that can reach a NTP internet service can use this option.

After a reboot the elements that require a accurate local time will not start working when the NTP time request fails.
As this can happen it is not an option for devices that must operate even when the internet is not available like heating systems.

The [DSTime Element](/elements/dstime.md) retrieves the current local time from a local attached RTC Chip like the DS3231.
After a reboot the time will be restored from the chip. This is a good option for devices that must operate even when the internet is not available like heating systems.

<!-- The DCFTime Element will ... -->


## Using time in element implementations

Because timing is required by many Elements the time and real-time feature is directly supported by the board class.

The [Time Element](/elements/time.md) send actions with the actual local time as a value. This can be used e.g. to display the current time on a display.

The [Schedule Element](/elements/schedule.md) send on and off actions based on the actual local time. This can be used e.g. to switch a light.

The [Alarm Element](/elements/alarm.md) sends a single action when the configured alarm time passes.
This can be used e.g. to start a wakeup procedure.

The [Timer Element](/elements/timer.md) is not working based on a local time and creates timer (duration) based actions. This element can be used even when no current local time is known to the device.


**Board->getSeconds()**

The `getSeconds()` method in the `board` class returns the full seconds since starting the device.

Because most of the timings are based on seconds this method can be used as the timing reference for emitting events when real time is not required.

Using the getSeconds function is preferred over using (millis() / 1000).


**Board->getTimeOfDay()**

When a real time is available this method return the seconds since starting the day. It returns 0 when the real time is not available.

To use this functionality a [NTPTime Element](/elements/ntptime.md) or [DSTime Element](/elements/dstime.md) needs to be configured.


**Board->getTime()**

When a real time is available this method returns the milliseconds since 1.1.1970 a usual binary format for times in C++.

To use this functionality a [NTPTime Element](/elements/ntptime.md) or [DSTime Element](/elements/dstime.md) needs to be configured.


<!-- To set the real time to an actual value this function must be called and the milliseconds since 1970 must be passed. The offset to the current millis is recorded order adjusted.
The board internally uses the millis function from the Arduino Library to calculate the current real-time.
Be aware that when using the deep sleep mode that the millis can … -->

<!-- Using actions dispatched over the network to exchange a current time has a latency that may be too much to be accurate for a specific use case. Local actions are better to be used for this so you may consider using a local Time Element on the devices that have real-time requirements.

Some interesting use cases are using the real time like clock displays and Things that need to know it is day or night or just log sensor data that must be analyzed later. -->

## See also

* <https://makezine.com/2019/01/18/getting-started-with-real-time-clocks/>
