---
title: The Log Element
id: log
tags: ["Element"]
description: Support logging of values into a file in the filesystem.
excerpt: >
  The LogElement enables storing timestamp based values e.g. from a sensor
  into a local file to be analyzed or displayed later by the Web UI.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::

This enables using sensor values to be displayed in graphs in the Web UI for this element.

The LogElement also supports calculating average values based on the values given for a time period.

For this element a visualization of the values in the log files is available that shows up as a line chart:

![Log linechart](/microchart-line.png)

By reading the files directly they are available as sources for other purpose like analysis in excel as well.


## Element Configuration

The following properties are available for configuration and operating of the element:

<object data="/element.svg?log" type="image/svg+xml"></object>

**value** - To record numeric values the value action can be sent to this element e.g. with the current sensor value.

**filename** - Name of the main logfile.

**filesize** - Maximum size of the logfile. The default is about 4 kBytes.

**averagetime** - This is the duration of an interval where all incoming values are used to calculate the average value.
When not set every value is recorded individually.


The UI Widget of the Log Element you find on the dashboard can be configured by using the following properties:

**xFormat** - datatype used to the first log value on the linechart, typically a timestamp.
The default is `datetime`.

**yFormat** - datatype used to the second log value on the linechart, typically a meassured value.
The default is `num`.

See [Line Microchart](/microchart-line.md) for supported data types.


From the base element implementation the following properties are available for configuration:

**title** - Caption text for the element. Used in the boards.

**description** - A line of text that gives a short description of the device used in the web UI.

**loglevel** - This property holds the element specific log level. The default value is LOGGER_LEVEL_ERR == 1. 


### Configuration Example

``` json
{
  "log": {
    "temp": {
      "title": "outside temperature",
      "description": "collecting temperature values on a 10 min. interval.",
      "averagetime": "00:10:00",
      "filesize": "10000",
      "filename": "/templog.txt",
      "yFormat": "num:2"
    }
  }
}
```

## Element State

The following properties are available with the current values at runtime:

**active** - Is set to true when the element is active.

**value** - The last recorded value.


### Example State

``` json
{
  "log/t": {
    "active":"true",
    "value":"15.91"
  }
}
```


## Implementation Details

When the configured file size is reached the current file is renamed from \<filename\>.txt to \<filename\>_old.txt and a new 
\<filename\>.txt is started. 

The files format is a list of CSV values where the current javascript time (seconds since 01.01.1970) is used in the first column. 

Example: 

``` json
1558409166,15
1558409466,16
1558409766,18
1558410066,22
1558410366,19
1558410666,12
1558410966,9
1558411266,7
1558411566,7
1558411866,6
```

When using the `averagetime` parameter a new interval is started with a first value.
The interval terminates automatically when the `averagetime` is over.
This results in no recordings when a sensor is not giving values.


<!-- 
## Logging multiple sensor values

**TO BE IMPLEMENTED**

Most sensors can detect the actual value e.g. from the environment from a range of values.
These values are of interest even when the moment of the value detection is in the past and therefore can be saved to a permanent storage using the log element.

When the log element retrieves an actions that contain the current values of a sensor this will be saved to disk together with the current timestamp using a file with a format CSV.

The timestamp in the logfile is expressed using time_t values as integers as defined in the C++/CPP SDKs in seconds.
To make this a JavaScript Date to factor 1000 must be applied because Javascript has Date values in milliseconds.


It is possible to collect multiple values at once and they are added to the logfile as additional columns.

It is possible to pass multiple values that are separated by a `;` character in one action. Single values can be passed by using the the array syntax like `value[1]`. This is especially useful in combination with the interval parameter to log values from multiple sources in one log record.

The notation `value[0]=` is equal to using `value=` with a single value.

-->

## Tags

#element #sensor #data
