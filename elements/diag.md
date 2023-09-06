---
title: Diag Element
tags: ["Implementation", "Element"]
layout: "page.njk"
description: Make some diagnose information available.
excerpt: >
  The DiagElement is part of the DevDing Example 
  and offers some additional diagnose information.
---


## Configuration

This element requires no parameters and can be activated using the configuration:

``` json
{
  "diag": {
    "0": {}
  }
}
```


## Configuration Example

This information can be retrieved using the endpoint `http://devicename/diag`.

```txt
**Info**
DeviceName: hdboard
Build Date & Time: Sep  6 2023T16:42:09
State: []
Mac-address: C4:DE:E2:13:3A:14

no i2c bus.
```

## I2C scan

by using the url <http://{devicename}/diag> ths I2C bus will be scanned for existing devices.
The result of the scan is shown as plain TXT output in the browser:

<!-- TODO: -->
``` txt
...
```

<!-- 
## rtcmem

TODO:
-->


## ChipInfo

This information can be retrieved using the endpoint `http://devicename/chipinfo`.

Some details on the used chip on the board is shown:

```txt
Chip Infos:
  model: ESP32(1)
  features: 00000032
    2.4GHz WiFi
    Bluetooth LE
    Bluetooth Classic
  cores: 2
  revision: 3

ChipModel: ESP32-D0WD-V3

Flash:  Size: 4096 kByte
  Mode: QIO(0)
  Speed: 80000000
```


## Profiling Results

This information can be retrieved using the endpoint `http://devicename/profile`.

Profiling the loop() times can be enabled by including the <hdProfile.h> in <homeding.h>
manually, recompile and upload the extended sketch.

This will result in recoding the time consumed by the loop() function of elements to identify
non-cooperative elements.

The [Diag Element](/elements/diag.htm) provides a simple web page showing the current recorded
times using `http://devicename/profile` :

```txt
Profile Loop-Times (usecs):
Element             | Average | Maximum | Count
device/0            |       1 |      15 |  67312
ota/0               |      10 |      72 |  67312
diag/0              |       0 |       8 |  67312
switch/led          |       0 |      11 |  67311
digitalout/led      |       0 |       9 |  67311
```

## See also

* [DevDing Example](/examples/devding.md)
