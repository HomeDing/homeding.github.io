# Logger

The Logger implementation solves the major logging topics when implementing things:

* Information for debugging and problem analysis
* In the field logging of major problems.

The logger supports 3 levels of logging and a direct logging is also supported:

| Level | Description                     |
| ----- | ------------------------------- |
| Info  | Explicit information            |
| Error | + Error conditions              |
| Trace | + Tracing details               |
| Raw   | Direct logging to Serial output |

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

To make logging information available a `/ding-log.htm` page is available that gets the logging text from the device displayed in the browser.


## Raw level logging LOGGER_RAW(...)

This macro is intended to be used for very detailed debug output during the development that will be removed later.
The output is sent to the Serial output port only. The macro is completely disabled when specifying no debug port in the settings.

This macro will directly push all information to the serial port specified by the debug port option.
The formatting from printf is used and lines will have a `__>` prefix.

**Example:**

```CPP
LOGGER_RAW("init: path=%s cache_header=%s", path, cache_header);
```

**Output:**
```
__>init: path=/ cache_header=NO-CACHE
```


## Trace level logging LOGGER\_TRACE(...) and LOGGER\_ETRACE(...)

This macro is intended to be used for function level tracing e.g. to log the called function and the parameters
Like the LOGGER_RAW macro the output is sent to the Serial output port only.
The macro is completely disabled when specifying no debug port in the settings.

It is completely disabled when specifying no debug port in the settings.

>sys:e:sketch setup done.

The `LOGGER_TRACE` macro can be used everywhere for logging with the trace level.
The formatting from printf is used and lines will have a `>sys:t:` prefix with type and id coming from the element definition.

The `LOGGER_ETRACE` macro is especially made for logging the trace level in element implementations.
The formatting from printf is used and lines will have a `>[type]/[id]:t:` prefix with type and id coming from the element definition.

**Example:**

```CPP
LOGGER_ETRACE("set(%s:%s)", name, value); 
```

**Output:**
```
>displaydot/b:t:set(show:1)
```


## Trace level logging LOGGER\_ERR(...) and LOGGER\_EERR(...)

This macro is intended to be used for error level tracing e.g. to log the error conditions that cause aborting some functionality.

The output is send to the Serial debug port when configured but is also written to a file in the filesystem for remote analysis.

The macro is never completely disabled because logging to the file system is working even when no serial output port is available.

The `LOGGER_ERR` macro can be used everywhere for logging while the 
`LOGGER_EERR` macro is especially made for logging in element implementations.

The formatting from printf is used and lines will have a `>[type]/[id]:e:` or `>sys:e:` prefix with type and id coming from the element definition.

**Example:**

```CPP
LOGGER_ETRACE("set(%s:%s)", name, value); 
```

**Output:**
```
>displaydot/b:t:set(show:1)
```

## Trace level logging LOGGER\_INFO(...) and LOGGER\_EINFO(...)

This macro is intended to be used for explicit tracing information e.g. events like starting a service or specific system information.

The output is send to the Serial debug port when configured but is also written to a file in the filesystem for remote analysis.

The macro is never completely disabled because logging to the file system is working even when no serial output port is available.

The `LOGGER_INFO` macro can be used everywhere for logging while the 
`LOGGER_EINFO` macro is especially made for logging in element implementations.

The formatting from printf is used and lines will have a `>sys:i:` or `>[type]/[id]:i:` prefix with type and id coming from the element definition.

**Example:**

```CPP
LOGGER_INFO("device restart initiated.");
```

**Output:**
```
>sys:i:device restart initiated.
```

## Remote logging 

Sometimes the internal activity of the elements needs observation after the development phase is over and the device in installed somewhere.

Especially when your devices are enrolled to your home they very likely will not be attached to the serial interface so any error happening will not be visible.

For this purpose the info and error information is also written to the file system into the files /log.txt and /log_old.txt.

To avoid too long files and to get rid of old information in the log files they are limited to a size of 2k of text each.

An logging will eb appended to the /log.txt file.

When this files reaches the maximum size an existing `/log_old.txt` file will be deleted, the `/log.txt` file will be renamed to `/log_old.txt` and a new `/log.txt` file will be written.

Using this procedure the actual existing log is always minimum the last 2k of up to 4k of the last log texts.