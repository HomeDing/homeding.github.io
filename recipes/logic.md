

---
title: Logical operations
---

# {{title}}

This recipe uses
* 2 [Switch Elements](/elements/switch.md) to control 2 boolean input values.
* 1 [AND Element](/elements/and.md) to calculate a logical AND result
* 1 [OR Element](/elements/or.md) to calculate a logical OR result

This example can be operated the best on the web ui as there are no pins assigned.

![Logic Elements UI](/recipes/logic.png)

By using 2 [Switch Elements](/elements/switch.md) to control 2 boolean input values.

These values are sent to 2 logical elements the [AND Element](/elements/and.md) and the [OR Element](/elements/or.md)
where the calculated outputs are displayed.

```json
{
  "switch": {
    "in1": {
      "onvalue": "and/a?value[0]=$v,or/o?value[0]=$v"
    },
    "in2": {
      "onvalue": "and/a?value[1]=$v,or/o?value[1]=$v"
    }
  },
  "and": {
    "a": {
      "description": "Logical AND",
      "invert": "false",
      "value": [
        "true",
        "false"
      ],
      "onvalue": "device/0?log=AND:$v",
      "title": "and/a"
    }
  },
  "or": {
    "o": {
      "description": "Logical OR",
      "invert": "false",
      "value": [
        "true",
        "false"
      ],
      "onvalue": "device/0?log=OR:$v",
      "title": "or/o"
    }
  }
}
```

## See also

* [Switch Element](/elements/switch.md)
* [AND Element](/elements/and.md)
* [OR Element](/elements/or.md)
