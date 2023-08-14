---
title: Persisting Current State of Elements
tags: ["Element"]
layout: "page.njk"
excerpt: >
  Enable devices to restart with the values and the current state after a reboot or deep sleep.
---

Usually elements start with the settings given by the configuration files.
But in some situations and with some elements the last used working mode or value should be used
after a planned (or unplanned) restart of the device.

Example: When a light device like a bulb is starting up it can use the color and brightness
values that where used before the restart. These values will be used to overwrite the values
from the configuration.

Typically Elements know whether they should support this feature like a power switching device.
Other Elements like sensors have no obvious use case for this.

As the value element is also supporting saving the current value as a state it can be used to
even save a last known sensor value.

All Elements can save any values by calling the function `saveState(key, value)` implemented by
the Element base class. in the element configuration the property `persist`

This information will be used to create an action `type/id?{key}={value}` on the next element
restart before starting the element. This action will then overwrite the configuration or value
from the element configuration.

To avoid too much and too frequent storing these key+values the the state mechanism
must be configured on the global and the element level.


## Elements persisting their state

Elements have to implement saving their current values using the `saveState(key, value)`
function. To enable the values from an element get part of the device state the property
`useState` must be set to `true`.

```JSON
{
  "value": {
    "sw": {
      "title": "Stateful Value",
      "min": "0",
      "max": "100",
      "useState": "true"
    }
  }
}
```

Elements may persist a single value or even multiple values in the state.

Elements that change their state very frequently should not persist their values
as this will result in much IO on the filesystem that may burn down Flash memory.


## Persisting the state of the device

The values from the elements configured with `useState` flag to true will be collected
inside the `DeviceState` storage.

The global configuration that enables saving it to a permanent media the `StateElement` can be
configured:

> **savedelay** -- This value must be given with a duration > 0. After this duration the state
> will be saved. This should be a value that is high enough to save the current state not too
> often.
>
> **clear** -- This action will clear out any state values from elements.

In the Element the configuration of the persist property 

To avoid too much and too frequent storing these key+values the the state mechanism
must be configured on the global and the element level.

``` JSON
{
  "state": {
    "0": { "savedelay": "8s"}
  }
}
```

The values will be persisted using the local file system in a hidden file.


## Elements with State

There are multiple Elements that support saving and loading state:

* [Value Element](/elements/value.md)
* [Switch Element](/elements/switch.md)


<!-- 
[](https://www.dweet.io/play/)


https://www.balena.io/

https://temboo.com/
https://temboo.com/arduino
https://temboo.com/arduino/others/update-google-spreadsheet


https://alternativeto.net/software/dweet-io/?license=free -->


## See also

* RTC Memory functions: <https://arduino-esp8266.readthedocs.io/en/latest/libraries.html#esp-specific-apis>

