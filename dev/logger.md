---
title: Logging
tags: ["Implementation", "Board", "WIP"]
layout: "page.njk"
---

The Arduino programming environment today is not offering a debugger. Therefore logging information from the executed code to the Serial interface is often the approach to find out what is actually going on inside the device.

The HomeDing library offers an easy way to create logging output for information or debugging purpose
as well as a web UI that allows viewing some of the latest logging information from remote.

This is implemented by the Logger class.

> There is also a value logging feature available that keeps e.g. values from sensors.
> This is implemented by the [Log Element](/elements/log.md).

The Logger class implementation solves the major logging topics when implementing things:

* Information for debugging and problem analysis
* In the field logging of major problems.

The Logger class supports 3 levels of logging and a unconditional logging is also supported:

**Error(0)** - Functionality are not working, or not working correctly.

**Info(1)**	- Something informative has happened but can be ignored during normal operations.

**Trace(2)**	- Output to see step how code is executed. This can be ignored during the standard operation, but may be useful during extended debugging sessions.

**Raw**	- Something informative has happened but can be ignored during normal operations.

The default level of logging is `Info(1)`

Messages from Error(0) and Info(1) are captured into the Log files when enabled. Trace(2) and Raw messages are only reported on the Serial output when Serial debugging is enabled for the firmware.


## Logging for problem analysis

When implementing new functionality the internal activity needs to be observed to understand what is going right and wrong.

In this situation the devices are likely attached to the local USB / Serial interface of your computer where you have a Serial monitor available.

It is a common approach to add Serial.print statements to your source code to send the most important information to the line.

When everything is finished and working properly these lines should be removed because writing to a Serial port is consuming time and resources and not of interest when the device is installed somewhere in the home or somewhere else.

But most likely you will need these lines again, because often it will be necessary to analyze more specific problems later.

The Logger implementation therefore gives you some marcos into your toolbox that you can leave in the code with low or without any overhead at runtime. Some of them are especially made for debugging code of elements.

There is a configurable debug port when using ESP8266 or ESP32 boards in the board settings. All the macros introduced here will use this port for serial output and will not produce any output when this option is not set.

Changing the port or disabling serial output can only be applied at compile time.


## Logging for remote analysis

To make logging information available a Web UI page `/ding-log.htm`  is available that gets the logging text from the device displayed in the browser.

Because logging information on the trace level is producing much text and the log output storage is limited only the info and error loggings are saved to the log files.

There are 2 files being used:

* `/log.txt` is the file where new log output gets appended. This file will grow until about 4kBytes of text is stored.
* `/log_old.txt` is the previous file with log output.

Every time the active log file `/log.txt` has reached almost 4kByte of text the files will be rotated. The log_old.txt file is deleted and the current log.txt is renamed to log_old.txt. Then all new log output will be written to the log.txt file.

## Logging Functions

The following C Macros and functions are available to create log entries.

### Raw level logging LOGGER_RAW(...)

This macro is intended to be used for very detailed debug output during the development without looking for a logging level that will be removed later.
The output is sent to the Serial output port only. The macro is completely disabled when specifying no debug port in the settings.

This macro will directly push all information to the serial port specified by the debug port option.
The formatting from printf is used and lines will have a `>` prefix.

**Example:**

``` cpp
LOGGER_RAW("init: path=%s cache_header=%s", path, cache_header);
```

**Output:**
``` text
  >init: path=/ cache_header=NO-CACHE
```


### Trace level logging LOGGER\_TRACE(...) and LOGGER\_ETRACE(...)

This macro is intended to be used for function level tracing e.g. to log the called function and the parameters.

Like the LOGGER_RAW macro the output is sent to the Serial output port only.

The functionality of this macro is completely disabled when specifying no debug port in the settings.
Disabling the debug port in the board settings will reduce the program size because these logging lines will produce no code and will consume no cpu time.

The `LOGGER_TRACE` macro can be used everywhere for logging with the trace level.
The formatting from printf is used and lines will have a `HH:MM:SS sys:t:` prefix with type and id coming from the element definition.

The `LOGGER_ETRACE` macro is especially made for logging the trace level in element implementations.
The formatting from printf is used and lines will have a `HH:MM:SS [type]/[id]:t:` prefix with type and id coming from the element definition.

**Example:**

``` cpp
LOGGER_ETRACE("set(%s:%s)", name, value);
```

**Output:**
```
19:01:03 displaydot/b:t:set(show:1)
```


### Trace level logging LOGGER\_ERR(...) and LOGGER\_EERR(...)

This macro is intended to be used for error level tracing e.g. to log the error conditions that cause aborting some functionality.

The output is send to the Serial debug port when configured but is also written to a file in the filesystem for remote analysis.

The macro is never completely disabled because logging to the file system is working even when no serial output port is available.

The `LOGGER_ERR` macro can be used everywhere for logging while the
`LOGGER_EERR` macro is especially made for logging in element implementations.

The formatting from printf is used and lines will have a `HH:MM:SS [type]/[id]:e:` or `HH:MM:SS sys:e:` prefix with type and id coming from the element definition.

**Example:**

``` cpp
LOGGER_ETRACE("set(%s:%s)", name, value);
```

**Output:**
```
19:08:36 displaydot/b:t:set(show:1)
```

### Trace level logging LOGGER\_INFO(...) and LOGGER\_EINFO(...)

This macro is intended to be used for explicit tracing information e.g. events like starting a service or specific system information.

The output is send to the Serial debug port when configured but is also written to a file in the filesystem for remote analysis.

The macro is never completely disabled because logging to the file system is working even when no serial output port is available.

The `LOGGER_INFO` macro can be used everywhere for logging while the
`LOGGER_EINFO` macro is especially made for logging in element implementations.

The formatting from printf is used and lines will have a `HH:MM:SS sys:i:` or `HH:MM:SS [type]/[id]:i:` prefix with type and id coming from the element definition.

**Example:**

``` cpp
LOGGER_INFO("device restart initiated.");
```

**Output:**
```
19:12:05 sys:i:device restart initiated.
```

## Set loglevel for the device

By using the configuration of the [Device Element](/elements/device.md) the device wide log level can be specified.

``` json
{
  "device": {
    "0": {
      "loglevel": 2,
      ...
    }
  }
}
```


## Set loglevel for individual Elements

It is possible to set the logging level for a specific element in the config.json file so trace information can be produced of a specific element but not for all elements.
The default is to have an overall error level for logging and trace level logging should be enabled on the element level.

**Example:**

``` json
{
  "button": {
    "in": {
      "loglevel": 2,
      ...
    }
  }
}
```

## See also

* [Log Element](/elements/log.md)
* [Device Element](/elements/device.md)