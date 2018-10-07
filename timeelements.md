# Time services

* retrieving the local time
* actions based on local time 
* using the local time in implementations

Other methods are using an local time clock chip or a radio receiver for a local available signal.



## accessing and adjusting the local time

Because timing is required by many Elements the time and real-time feature is directly supported by the board class.

Board->getSeconds ()
 Because most of the timings are based on seconds the getSeconds() function in the board Returns the seconds since starting the board. This can be used as the timing reference for emitting events when real time is not required.

Board->getTimeOfDay() returns the seconds since starting the day.

Board getTime () returns the milliseconds since 1.1.1970 a usual binary format for  times.
To set the real time to an actual value this function must be called and the milliseconds since 1970 must be passed. The offset to the current millis is recorded order adjusted.
The board internally uses the millis function from the Arduino Library to calculate the current real-time. 
Be aware that when using the  deep sleep mode that the millis can …


# NTPTime Element

The NTPTimeElement is one of the element implementations to get a local time from an external source and to adjust the ***real local*** time on the board. This element gets the local time from an external server using the Network Time Protocol.

![NTPTime Properties and Actions](ntptime-api.png)

In the SDK of some platforms like the ESP8266 the functionality to get a NTP based time sync is already available but it must be configured and activated. This is what the NTPTimeElement does for the ESP8266 (and ESP32 later).

Because retrieving the right local time can be done using different methods the NTPTime Element an extension to the building functionality of the board that keeps the current time available as accurate as the internal quartz oscillator can do.

## Network Time Protocol

The Network Time Protocol (NTP) 

???
* Where to find good ntp servers ?

Because it takes some time to get a package from the server and of course sometimes the server doesn't answer at all or network packages are lost you cannot rely on getting a correct time immediately after starting the board or coming back from a deep sleep mode. If you have a device with these requirements a chip based real-time may be better.

Using actions dispatched over the network to exchange a current time has a latency that may be too much to be accurate for a specific use case. Local actions are better to be used for this so you may consider using a local Time Element on the devices that have real-time requirements.

Some interesting use cases are using the real time like clock displays and Things that need to know it is day or night or just log sensor data that must be analyzed later.

## Element Configuration

The following properties are available for configuration of the element:

| Property      | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `Ntpserver`   | The hostname of the ntp server to be used like `"pool.ntp.org"`    |
| `readtime`    | Config Time between 2                                              |
| `zone`        | Config                                                             |
| `onTime`      | Actions.<br/>These actions are emitted when ...                    |
| `onMinute`    | Actions.<br/>These actions are emitted by the Element when the ... |
| `ondate`      |
| `ontimestamp` |
|               |

## Element State


****Time****	State	


### Example for Configuration

"ntptime": \{
  "main": \{
    "readtime": "2m",
    "zone": 2,
    "ontime": "device/main?log=time:$v"
  }
}


### Implementation Details


More documentation can be found at:

* [https://desire.giesecke.tk/index.php/2018/01/30/esp32-dht11/](https://desire.giesecke.tk/index.php/2018/01/30/esp32-dht11/)


# DCFTimeElement

This time element implements listening to a digital input where a DCF signal is available. 


# ChipTimeElement

This time element implements using a local high precision time chip to get a local time. 
