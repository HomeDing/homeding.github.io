---
title: ESP32-C3 Boards
description: ESP32-C3 General purpose development boards
layout: "page.njk"
tags: ["Board"]
excerpt: >
  There are several ESP32-C3 DevKit Boards listed here.
  They are supported by the HomeDing library.
---

{% from 'macros.njk' import imgCard %}

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

{{ imgCard(collections.all, item = '/boards/esp32/core-esp32c3') }}


## See also

* <https://hackaday.com/2021/02/08/hands-on-the-risc-v-esp32-c3-will-be-your-new-esp8266/>
