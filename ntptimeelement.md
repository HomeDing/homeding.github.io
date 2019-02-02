# NTPTime Element

The NTPTimeElement is one of the element implementations to get a local time from an external source
and to adjust the `real local time`w on the board.
This element gets the local time from an external server using the Network Time Protocol.

<!-- ![NTPTime Properties and Actions](ntptime-api.png) -->

In the SDK of some platforms like the ESP8266 the functionality to get a NTP based time sync is already available but it must be configured and activated.
This is what the NTPTimeElement does for the ESP8266 (and ESP32 later).

Because retrieving the right local time can be done using different methods the NTPTime Element is an extension to the building clock functionality of the board that keeps the current time available as accurate as the internal quartz oscillator can do.

## Network Time Protocol

The Network Time Protocol (NTP) is supported by many operating systems and is the common protocol to sync the board clocks of computers and server.

You can find many NTP servers on the internet. The web site <https://www.pool.ntp.org/en/> has a repository of available servers. Inside companies usually a local server is available.

Because it takes some time to get a package from the server and of course sometimes the server doesn't answer at all or network packages are lost you cannot rely on getting a correct time immediately after starting the board or coming back from a deep sleep mode. If you have a device with these requirements a chip based real-time like the  [DSTime Element](dstimeelement) may be a better option.

<!-- Using actions dispatched over the network to exchange a current time has a latency that may be too much to be accurate for a specific use case. Local actions are better to be used for this so you may consider using a local Time Element on the devices that have real-time requirements.

Some interesting use cases are using the real time like clock displays and things that need to know it is day or night or just log sensor data that must be analyzed later. -->

## Element Configuration

The following properties are available for configuration of the element:

| Property    | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `ntpserver` | The hostname of the ntp server to be used like `"pool.ntp.org"`   |
| `readtime`  | Time span between synchronizations.                               |
| `retrytime` | Time span between synchronizations when no valid time is present. |
| `zone`      | Timezone of the device                                            |



```JSON
"ntptime": {
  "0": {
    "readtime": "08:00:00",
    "retrytime": "00:05:00",p
    "zone": 2
  }
}
```

## Element State

The following properties are available with the current values at runtime

| Property | Description                                |
| -------- | ------------------------------------------ |
| `active` | Is set to true when the element is active. |
| `now`    | the current time of the board.             |

## Element State Example

```JSON
"ntptime/0": {
   "active": "true",
   "now": "2018-11-22 20:43:08"
}```