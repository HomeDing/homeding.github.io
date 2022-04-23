
From the base [Sensor Element](/elements/sensors.md) implementation the following properties are available for configuration:

**readTime** - Time between 2 probes being fetched from the sensor. Default value is 1m.

**resendTime** - The current values of the probe are resent after this specified time even when not changing.

**warmupTime** - This time is waited after powering the sensor on the first start or after a reset before the first data is fetched.
The default time is set to 3 seconds.

**restart** - This property can be set to true to enable an automated restart when the sensor was not responding data.

