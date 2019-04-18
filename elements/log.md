# Logging Element

The LogElement enables storing timestamp based values e.g. from a sensor into a local file to be analyzed or displayed later by the Web UI.

![Log Properties and Actions](logapi.png)


For this element a visualization of the values in the log files is available that shows up as a line chart:

![Log linechart](logchart.png)

By reading the files directly they are available as sources for other purpose like analysis in excel as well.


## Properties

The following properties are available for config, actions and state of a timer element:

| Properties   | Type   | Description                                              |
| ------------ | ------ | -------------------------------------------------------- |
| Filename | Config | name of the main logfile.   |
| Filesize | config | maximum size of the logfile 
| interval     | Config |             |
| 
| Value | action | new actual values to be logged |
| realtime | coNfig | true only logs when a valid real time is available.

## Passing values

The Elements retrieves new values through the value action e.g.

```text
/$board/log/temp?value=140
/$board/log/temp?value=21.80;42.3
/$board/log/temp?value[1]=42.3
```

It is possible to pass multiple values that are separated by a `;` character in one action. Single values can be passed by using the the array syntax like `value[1]`. This is especially useful in combination with the interval parameter to log values from multiple sources in one log record.

The notation `value[0]=` is equal to using `value=` with a single value.

## Using the Interval parameter

When no `interval` parameter is specified the values will be recorded to the file immediately.

By specifying an `interval` parameter the values are kept as the current values.
The last retrieved value during the interval will be recorded when the interval has ended.

The interval is calculated from the local system time.

## File Format

The log file will contain text lines with the current time and the given values.

```text
155273739;21.80;42.3
```

/$board/log/temp?value[1]=21.80
/$board/log/temp?value[2]=42.3

## parameters

interval: 00:05:00 5 minutes
filename: "templog.txt"


## Aggregation of values

* Max or average
* New interval typically n times of the logging interval 