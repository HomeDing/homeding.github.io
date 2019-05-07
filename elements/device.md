# The Device Element

<div class="excerpt">
  <img src="/i/device.svg">
  <p>The DeviceElement allows configuration of the behavior of the device and the features offered by the board class.</p>
</div>




![Device Properties and actions](deviceapi.png)

By specifying the configuration for the `device/0` element the general settings for the device can be controlled.

## Element Configuration

The following properties are available for configuration of the element.

### Basic settings

**name** - The device name is specifying zhe hostname that is used to register the device on the network. The device can be accessed by any browser on the same network using the URL `http://<name>`.

**reboottime** - Specifies the duration after the device is rebooted to fully clean up the memory.

**description** - A line of text that gives a short description of the device used in the web UI.

**room** - The location of the device.

### WiFi-Manager settings

**led** - The GPIO pin of the system LED. Defaults is `no LED`.

**button** - The GPIO pin of the system button. Defaults is 'GPIO0(D3)'


| Property      | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| `connecttime` | The available time after a reboot of the device to start network configuration. Default: "10s". |
| `connectmode` | The priorities of the network connection options. Default is "LAST,AP"                          |
| `title`       | short title to be displayed in the web UI                                                       |
| `homepage`    | starting web page of the web ui. default: `/index.htm`                                          |
| `logfile`     | set to 1 to enable storing lines from the system log to files. default: 0                       |

Detailed description for `ConnectTime`, `ConnectMode` and `LED` see [WiFiManager](wifimanager).

## Configuration Example

```JSON
"device": {
  "0": {
    "loglevel": 1,
    "name": "wmleaks",
    "title": "Water Leakage",
    "description": "Monitor water leaks at the washing machine",
    "room": "Celler",
    "reboottime": "24h",
    "led": "D0",
    "button": "D3",
    "homepage": "ding-info.htm",
    "logfile": 1
  }
}
```

## See also

* [WiFiManager](wifimanager)