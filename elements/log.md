# Logging Element

The LogElement enables storing timestamp based values e.g. from a sensor into a local file to be analyzed or displayed later by the Web UI.

This enables using sensor values to be displayed in graphs in the Web UI for this element.

<!-- The LogElement also supports log file consolidation and aggregation. -->


![Log Properties and Actions](logapi.png)


For this element a visualization of the values in the log files is available that shows up as a line chart:

![Log linechart](logchart.png)

By reading the files directly they are available as sources for other purpose like analysis in excel as well.


## Properties

The following properties are available for config, actions and state of a timer element:

**Filename** - Name of the main logfile.

**Filesize** - Maximum size of the logfile.                          

**interval** -                                 

**realtime** - true only logs when a valid real time is available. 


* Aggregation method
* Where to send

Every 10 minutes a probe
Move to old file, create a new one.
No change in value generates no new entry
Average of all probes from 1 h into a single log entry.



* [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)
* [rfc3339](https://tools.ietf.org/html/rfc3339)




## Logging sensor values

Most sensors can detect the actual value e.g. from the environment from a range of values.
These values are of interest even when the moment of the value detection is in the past and therefore can be saved to a permanent storage using the log element.

When the log element retrieves an actions that contain the current values of a sensor this will be saved to disk together with the current timestamp using a file with a format CSV.

The timestamp in the logfile is expressed using time_t values as integers as defined in the C++/CPP SDKs in seconds.
To make this a JavaScript Date to factor 1000 must be applied because Javascript has Date values in milliseconds.

The Elements retrieves new values through the value action. Here are soime examples:

```plaintext
log/temp?value=140
log/temp?value=21.80;42.3
log/temp?value[1]=42.3
```

## logging multiple values

**TO BE IMPLEMENTED**

It is possible to collect multiple values at once and they are added to the logfile as additional columns.

It is possible to pass multiple values that are separated by a `;` character in one action. Single values can be passed by using the the array syntax like `value[1]`. This is especially useful in combination with the interval parameter to log values from multiple sources in one log record.

The notation `value[0]=` is equal to using `value=` with a single value.

## Using the Interval parameter

When no `interval` parameter is specified the values will be recorded to the file immediately.

By specifying an `interval` parameter the values are kept as the current values.
The last retrieved value during the interval will be recorded when the interval has ended.

The interval is calculated from the local system time.

## File Example

The log file will contain text lines with the current time and the given values:

```JSON
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


/$board/log/temp?value[1]=21.80
/$board/log/temp?value[2]=42.3

## parameters

interval: 00:05:00 5 minutes
filename: "templog.txt"


## Aggregation of values

* Max or average
* New interval typically n times of the logging interval


## Tags
#element #data
