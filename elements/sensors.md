# Sensor Elements


To simplify the implementation of sensors  there is a special Element with some common functionality available.
It that can be used as a base class for Elements that implement the data exchange with a special sensor chip.

Only 2 functions need to be implemented instead of the `loop()` function.


## Common Timing

Using a sensor often requires to get data probes on a regular basis e.g. every minute or every 5 minutes. Waiting for the next timeslot to take a probe is implemented by defining the `readtime` property on any element configuration.


## Get Sensor Data

> bool GetProbe(&values);

When deriving from the SensorElement class the `GetProbe(&values)` function will be called when time has come.

This function will be called similar to the `loop()` function as long as it returns `false` to indicate that retrieving the data has not been completed. This may be required when reading a sensor includes waiting for the sensor being available or data being transmitted to the board.

When returning `true` the data retrieval is assumed to be completed. The data has to be returned by using the passed string parameter.

When returning `true` and an empty string back it is assumed that the sensor cannot be reached and this will end the current data retrieval.


## Sending Actions With Sensor Data.

> void SendValues(&values);

The `SendValues()` function will be called with the latest retrieved data and when actions are defined the sensor specific element will send them out.

The state of the element also needs to be updated.


## Detect non changing values

The data returned by the `GetProbe()` function will be compared against the last retrieved values. If there is no difference no action will be sent immediately.


## Resend values after some time

When data from the sensor has not changed it may be necessary to trigger the actions from time to tome e.g. to inform remote elements about the actual values.

By specifying the `resendtime` property the resent values are sent even when not changed. 


## Elements using the sensor base implementation

* [DHT element](/elements/dht.md)
* [PMS element](/elements/pms.md)
* [BME680 element](/elements/bme680.md)
* [DS18B20 Element](/elements/ds18b20.md)

