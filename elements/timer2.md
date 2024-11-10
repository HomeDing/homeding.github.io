---
title: Timer2 Element 
tags: 
  - "Element"
  - "Time"
layout: "page.njk"
description: ...
excerpt: ...
---

daily, weekly, cycle, once

Sequence:
Time+weekdays
Action, value

``` json
"sequence": [
  { "days": "mo,di,do", "time": "00:00:02", "value": "1" },
  { "time": "00:08:02", "value": "0" },
  { "time": "00:28:02", "value": "0" }
]
```

