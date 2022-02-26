---
title: Store State
id: nn
tags: ["Element"]
excerpt: >
  This element implements storing the current state in some other places as volatile variables.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::

The state is a collection of information and values of a device that cannot be found in configuration.

When a IoT device is starting up it can use the values from the configuration if the elements
like the current value of a switch that controls the light or power.

That is a situation that normally changes over time because e.g. a light may be switched or a
schedule may be adjusted.
When the device is switched off and on or was just restarted it is obvious that the latest
actual values of these elements should be present as these values are more accurate than the values
that can be found in the configuration files.

This set of information in application architecture is called the "state"
and starting with version 1.0 of the HomeDing library there is a mechanism
to implement the behavior described above.


## State Elements 

There are multiple **State Elements** that implement the actual storage mechanism.
When such an Element is configured it registers
itself in the board class and offer their functionality to all other elements.

All other Elements can then pass values to the registered State element to be saved by using the save() function. State Elements will collect these values in the format of actions and will update the current list of state actions in the storage.

When a device is re-starting the state element will create actions to update the given values in the elements.
This is done just after the initialization from the configuration files and before the elements get started. 

As of now there are 2 State Elements available that can be enabled by configuring them in the `env.json` configuration.
They actually do not participate in the actions but register a state storage mechanism for other elements.

### RTC State

The RTCStateElement registers itself for saving the state information in the RTC Memory that is available in the ESP8266 processor. Here state survives reboots and software updates as long as the power of the device is not switched off.

The following configuration enables this state mechanism:

```json
{
  "rtcstate": {"0":{}}
}
```

There is not much space in the RTC Memory and only 200 characters can be used to store the state information.

The state is formatted as a series of actions like:

```json
"switch/power?value=1,value/speed?value=12"
```

### EEPROM State

t.b.d.


## Elements with State

There are multiple Elements that support saving and loading state:

value, switch


To enabled saving and loading the state of an Element the `useState` property must be enabled.

Here is an example for a switch supporting 0 and 1 values. The default value is `0` == Off while the value after a reboot is taken from the state memory.

```json
{
  "switch": {
    "power": {
      "value":0,
      "useState":1
    }
  }
}
```

<!-- 
[](https://www.dweet.io/play/)


https://www.balena.io/

https://temboo.com/
https://temboo.com/arduino
https://temboo.com/arduino/others/update-google-spreadsheet


https://alternativeto.net/software/dweet-io/?license=free -->


## See also

* RTC Memory functions: <https://arduino-esp8266.readthedocs.io/en/latest/libraries.html#esp-specific-apis>

