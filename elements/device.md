---
title: Device Element
id: device
tags: ["Element", "System"]
layout: "page.njk"
description: Support global device settings. 
excerpt: >
  The DeviceElement allows configuration of the behavior of the device and the features offered by the board class.
---

By specifying the configuration for the `device` element the general settings for the device can be controlled.


## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?device" type="image/svg+xml"></object>

### Basic settings

> **name** - The device name is specifying the hostname that is used to register the device on the network.
> The device can be accessed by any browser on the same network using the URL `http://<name>`.
>
> **rebootTime** (time) - Specifies the duration after the device is rebooted to fully clean up the memory.
>
> **logLevel** - By specifying a logLevel for the device **all** elements will use this loglevel
> to output debug messages over the Serial interface and into the system log file.
> See also [Device Logging](/dev/logger.md).
>
> **logFile** (boolean) - set to 1/true to enable storing lines from the system log to files. default: 0
>
> **onSysStart** (actions) - These actions are dispatched when the elements are activated. Element that require a > valid local time are not started at this point.  
>
> **onStart** (actions) - These actions are dispatched when all elements are active.
>
> **sd** - The mDNS based service discovery can be switched off by setting this property to `false`.
>
> **safemode** (boolean) - This value can be set to 0/false to not use the safemode. See [safemode description](/dev/> safemode.md).

{% include "./elementproperties.md" %}


### WiFi-Manager and Startup settings

> **led** - The GPIO pin of the system LED. Defaults is `no LED`.
>
> **button** - The GPIO pin of the system button. Defaults is 'GPIO0(D3)'
>
> **connectTime** - The available time after a reboot of the device to start network configuration. Default: "6s".

Detailed description for `ConnectTime`, `button` and `led` see [WiFiManager](/dev/wifimanager.md).


### I2C bus

Many connected sensors and displays are connected via the I2C bus. This bus must be initialized according to the onboard wiring by using the right SDA and SCL pins.

Because there is only 1 bus available in the Arduino boards the configuration is done centrally in the device.

> **I2C-SDA** - the data line of the i2c bus.
>
> **I2C-SCL** - the clock line of the i2c bus.

The device Element is only defining what pins are used for the I2C bus but does no further initialization.

More hints on the I2C bus implementation see [I2C](/dev/i2c.md)


### Web UI

> **homepage** - When the device starts in normal mode this page will be shown
> when opening the device web UI using the url without specifying the page.
> This defaults to `/index.htm`
>
> **cache** - This property can be used to replace the default http `cache-control` header
> for accessing the static files by a custom value.
> The default cache header is `"no-cache"` that is good while developing and configuring.
> But when have a stable configuration caching can be switched on using a value like `"max-age=120"`


### Deep Sleep mode

> **sleep** - To start a deep sleep a `sleep` action needs to be send to the device element.
> A `sleep=false` action will disable any sleep mode until next restart.
> See also [deep sleep mode](/dev/deepsleep.md).
>
> **nosleep** -  To block any deep sleep on the device
> until the next reboot a `nosleep` action can be send to the device element.
>
> **sleeptime** (time) -  The duration the device sleeps when a sleep action was sent.


## Control the Device

The following action is implemented:

> **reset** - This action wil immediately restart the device like using a reset button.
> No settings are changed or cleared.

<!-- reset , restart ??? -->

## Configuration Example

``` json
{
  "device": {
    "0": {
      "loglevel": 1,
      "name": "wmleaks",
      "title": "Water Leakage",
      "description": "Monitor water leaks at the washing machine",
      "room": "Cellar",
      "reboottime": "24h",
      "sleeptime": 600,
      "led": "D0",
      "button": "D3",
      "homepage": "ding-info.htm",
      "logfile": 1,
      "I2C-SDA" : "D4",
      "I2C-SCL" : "D5"
    }
  }
}
```

## See also

* [WiFiManager](/dev/wifimanager.md)
* [Device Logging](/dev/logger.md)
* [deep sleep mode](/dev/deepsleep.md)
* Cache-control http header : <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control>
