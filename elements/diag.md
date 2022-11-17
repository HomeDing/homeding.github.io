---
title: Diag Element
tags: ["Implementation", "Element"]
layout: "page.njk"
description: Make some diagnose information available.
excerpt: >
  The DiagElement is part of the DevDing Example 
  and offers some additional diagnose information.
---

## Serial output

On the Serial output some information about the Chips and memory is shown by using ESP32 SDK functions:

``` txt
14:50:58 diag/0:t Chip-Info:
14:50:58 diag/0:t   model: 5
14:50:58 diag/0:t     ESP32-C3
14:50:58 diag/0:t   features: 00000012
14:50:58 diag/0:t     2.4GHz WiFi
14:50:58 diag/0:t     Bluetooth LE
14:50:58 diag/0:t   cores: 1
14:50:58 diag/0:t   revision: 3
14:50:58 diag/0:t ChipModel: ESP32-C3
14:50:58 diag/0:t Flash:
14:50:58 diag/0:t   ChipSize: 4194304
14:50:58 diag/0:t   ChipMode: 2
14:50:58 diag/0:t   ChipSpeed: 80000000
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


### Configuration Example

This element requires no parameters.

``` json
{
  "diag": {
    "0": {
    }
  }
}
```

## See also

* [DevDing Example](/examples/devding.md)
