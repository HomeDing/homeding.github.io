---
title: Web Services for IoT Devices
---

# {{title}}

To interact with the elements and some device features the integrated web server exposes some services.

All services use a URL that starts with `/api/`.

With some exceptions, these services are using the http GET schema so they can also be called using the address bar of the browser.
This is handsome for test purpose.


### /api/sysinfo

GET <http://homeding/api/sysinfo> [^hostname]

This service returns some information from the system level like the flash memory available to the file system.

A link to this URL is also present on the default page index.htm.

#### Example with comments

```json
{
  "devicename": "displayding", // network name of the device
  "build": "Jan 2 2019",       // build-date of the uploaded sketch
  "freeHeap": "29224",         // actual free memory on the heap.
  "flashSize": "4194304",      // flash memory sized specified at compile time
  "coreVersion": "0.81",       // HomeDing Library version
  "coreBuild": "standard",     // HomeDing example name (may be changed in sketch)
  "fsTotalBytes": "2072576",   // size of the file system
  "fsUsedBytes": "224645",     // used size of the file system
  "safemode": "false",         // see [safemode](/dev/safemode.md)
  "upTime": "268680",          // time since last restart
  "ssid": "devnet"             // actual connected network by SSID
}
```

This information is read only.


### /api/reboot

GET <http://homeding/api/reboot> [^hostname]

This service reboots the device.


### /api/reset[^safemode]

GET <http://homeding/api/reset> [^hostname]

This service wipes out the network configuration and then restarts the device.


### /api/resetall[^safemode]

GET <http://homeding/api/resetall> [^hostname]

This service wipes out the filesystem, the network configuration and then restarts the device.


### /api/elements

GET <http://homeding/api/elements> [^hostname]

This REST service returns an array with all elements that are implemented in the firmware of the device.

Example:

```json
[
  "ssdp", "ota", "device", "time", "remote", "ntptime", "dstime", "serialcmd", "value", "button",
  "analog", "timer", "schedule", "digitalout", "pwmout", "displaytext", "displaydot", "displayLCD",
  "displaySSD1306", "displaySH1106", "dht", "rfcodes", "rotary", "alarm"
]
```


### /api/scan

This service is required for the network configuration page (/$setup) and returns an array with all available networks.

This service has to be called multiple times. The first time starts scanning and results will be available some seconds later.

```json
[
  { "id": "VVBLHH09092", "rssi": "-83", "open": "0" },
  { "id": "devnet", "rssi": "-67", "open": "0" },
  { "id": "DIRECT-D9-HP OfficeJet 4650", "rssi": "-75", "open": "0" }
]
```

### /api/connect=...&p=...\*\* &wps=... [^safemode]

This service is required for the network configuration page (/setup.htm) and allows changing the network configuration.

### /api/list [^safemode]

This service is required for the IDE page implementation (/microide.htm) and returns a list of all files on the filesystem.

### /api/state

This service returns the state of all existing elements running in the device.

Example:

```json
{
  "device/0": {
    "active": "true",
    "name": "DHTdevice",
    "description": "IoT Dev-Device with a DHT Sensor",
    "nextboot": "90"
  },
  "ota/0": { "active": "true" },
  "ssdp/0": { "active": "true" },
  "remote/display-t": { "active": "true" },
  "remote/display-h": { "active": "true" },
  "dht/on": { "active": "true", "temperature": "21.60", "humidity": "46.00" }
}
```

### /api/state/dht/on\*\*

This service returns the state of the element addressed by the more specific url. It is an excerpt of the full state above.

```json
{
  "dht/on": {
    "active": "true",
    "temperature": "21.60",
    "humidity": "46.00"
  }
}
```

### /api/state/displaytext/t?value=21.60\*\*

This service sends an action to the element specified by the URL to set the value.

This is how the remote element will send actions across the network to other devices.


### Implementation

As an implementation principle the UI presented in the browser only acts as a visual interface but doesn't execute any functionality related to actions.
The actions will only be processed inside the device using the implemented elements completely independent from a possible open browser.

Restfull services using the URL for addressing and JSON for data and results have been chosen to have an acceptable size of JSON parser
and compising functions in the device while making implementation in the browser relatively easy.

As of now there are no advances web services features like websockets implemented.


## See also

- [Embedded Web Site for IoT Devices](/dev/website.md)

[^hostname]: replace `homeding` with the network name of your device to use this link.
[^safemode]: this service is not available when the device runs in the save mode. See [Save Mode](/dev/safemode.md) for details.

