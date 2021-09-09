# Web Services

To interact with the elements and some device features the integrated web server exposes some services.

All services use a URL that starts using a `$` character.

With some exceptions, these services are using the http GET schema so they can also be called using the address bar of the browser.
This is handsome for test purpose.

### /$sysinfo

GET <http://homeding/$sysinfo> <sup>*1</sup>

This service returns some information from the system level like the flash memory available to the file system.

A link to this URL is also present on the default page index.htm.

Example with comments

```JSON
{
  "devicename": "displayding",  // network name of the device
  "build": "Jan  2 2019",       // build-date of the uploaded sketch
  "free heap": "29224",         // actual free memory on the heap.
  "flash-size": "4194304",      // flash memory sized specified at compile time
  "flash-real-size": "4194304", // size of the available flash memory of the board
  "fs-totalBytes": "957314",    // size of the SPIFFs file system
  "fs-usedBytes": "224645",     // used size of the SPIFFs file system
  "ssid": "devnet"              // actual connected network by SSID
}
```

This information is read only.


### Example

```JSON
{
  "build": "Oct 10 2018"
  "free heap": 32456,
  "flash-size": 4194304,
  "flash-real-size": 4194304,
  "fs-totalBytes": 957314,
  "fs-usedBytes": 80822,
  "ssid": "KHMH",
  "bssid": "74:DA:38:2C:70:B8"
}
```



### /$reboot

GET <http://homeding/$reboot> <sup>*1</sup>

This service reboots the device.


### /$reset

GET <http://homeding/$reset> <sup>*1</sup>

This service wipes out the network configuration and then restarts the device.

This service is disabled in [safemode](/safemode.md).


### /$resetall

GET <http://homeding/$resetall> <sup>*1</sup>

This service wipes out the filesystem, the network configuration and then restarts the device.

This service is disabled in [safemode](/safemode.md).


### /$elements

GET <http://homeding/$elements> <sup>*1</sup>

This REST service returns an array with all elements that are implemented in the firmware of the device.

Example:
```JSON
[ "ssdp", "ota", "device", "time", "remote", "ntptime", "dstime", "serialcmd", "my", "value", "button", "analog",
  "timer", "schedule", "digitalout", "pwmout", "displaytext", "displaydot", "displayLCD" ,"displaySSD1306", "displaySH1106",
  "dht", "rfcodes", "rotary", "alarm"
]
```

### /$upload

GET <http://homeding/$upload> <sup>*1</sup>

This is not strictly a service but builtin the web server to allow initial uploads.
This GET request returns a minimal HTML page that can be used to upload files to the server using drag & drop.

This URL returns a minimal HTML page that can be used to upload files to the server using drag & drop.

It is described in detail in [Web Sitemap](/websitemap.md).Q


### /$boot

GET <http://homeding/$boot> <sup>*1</sup>

It is described in detail in [Web Sitemap](/websitemap.md).Q


### /$scan

This service is required for the network configuration page (/setup.htm) and returns an array with all available networks.

This service has to be called multiple times. The first time starts scanning and results will be available some seconds later.

```JSON
[
  {"id":"VVBLHH0909 2", "rssi":"-83", "open":"0"},
  {"id":"devnet", "rssi":"-67", "open":"0"},
  {"id":"DIRECT-D9-HP OfficeJet 4650", "rssi":"-75" ,"open":"0"}
]
```

### /$connect=...&p=...** &wps=... <span style="color:red">\*</span>

This service is required for the network configuration page (/setup.htm) and allows changing the network configuration.


### /$list

This service is required for the IDE page implementation (/ding-ide.htm) and returns a list of all files on the filesystem.

### /$board

This service returns the state of all existing elements running in the device.

Example:

```JSON
{
  "device/0":  {"active":"true", "name":"DHTdevice", "description":"IoT Dev-Device with a DHT Sensor", "nextboot":"90"},
  "ota/0": {"active":"true"},
  "ssdp/0": {"active":"true"},
  "remote/display-t": {"active":"true"},
  "remote/display-h": {"active":"true"},
  "dht/on": {"active":"true", "temperature":"21.60", "humidity":"46.00"}}
```

### /$board/dht/on**

This service returns the state of the element addressed by the more specific url. It is an excerpt of the full state above.

```JSON
{
  "dht/on": {
    "active":"true",
    "temperature":"21.60",
    "humidity":"46.00"
  }
}
```

### /$board/displaytext/t?value=21.60**

This service sends an action to the element specified by the URL to set the value.

This is how the remote element will send actions across the network to other devices.

### Implementation

As an implementation principle the UI presented in the browser only acts as a visual interface but doesn't execute any functionality related to actions.
The actions will only be processed inside the device using the implemented elements completely independent from a possible open browser.

Restfull services using the URL for addressing and JSON for data and results have been chosen to have an acceptable size of JSON parser
and compising functions in the device while making implementation in the browser relatively easy.

As of now there are no advances web services features like websockets implemented.

---

**1**: replace `homeding` with the network name of your device to use this link.

**2**: this service is not available when the device runs in the save mode.
See [Save Mode](/safemode.md) for details.


