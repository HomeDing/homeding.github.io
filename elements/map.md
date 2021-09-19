# Map Element

:::excerpt default
The MapElement uses incoming values to create a new value 
specified by a set of range rules.
:::

The values given by Sensors o other Input elements are often not directly usable for feeding them into actions. Often the value itself needs to be at justed and sometimes different actions need to be sent.

Examples are:
* Classifying sensor values into `low`, `regular` and `high`
* Creating different actions based on the incoming value

The map Element provides the list of rules that apply when the inbound value is in the specified range of the map rule.


## Finding the matching rule

Every map rule consists of a min and max range configuration that is compared against the incoming value. The list of rules is processed from the beginning to the end and when a range is found that contains the incoming value the rule is selected for processing.

Because the min attribute defaults to 0 it is possible to configure the max attribute only when the rules are given in ascending order.
See Example 1.

The input value can be either compared by a numeric or a string data type.


## Executing 

The attributes on the matching are used to create actions. When a `value` is specified the value is taken into the actual value. When no value is given the incoming value is used.

Then the `onValue` actions on the rule are sent.

Then the `onValue` actions on the map Element are sent.


### Example 1

This example works on an incoming temperature and creates a green color for good values:

```JSON
{
  "map": {
    "t": {
      "description": "light color based on temperature.",
      "onValue": "light/t?value=$v",
      "rules": [
        {
          "max": "16",
          "value": "blue"
        },
        {
          "max": "22",
          "value": "green"
        },
        {
          "value": "red"
        }
      ]
    }
  }
}

```

Same with actions on the rules level. In the status the original inbound value will be reported

```JSON
{
  "map": {
    "t": {
      "description": "light color based on temperature.",
      "rules": [
        {
          "max": "16",
          "onValue": "light/t?value=blau"
        },
        {
          "max": "22",
          "onValue": "light/t?value=green"
        },
        {
          "onValue": "light/t?value=red"
        }
      ]
    }
  }
}
```

This example also shows how to simplify the `min` and `max` attributes.
When not specified they default to the infinity min and max.
The ranges all overlap but the intended rule-set works because always the first matching rule will be selected. 


## Element Configuration

The following properties are available for configuration of the element:

<object data="/element.svg?map" type="image/svg+xml"></object>

**type** -  "string" or "numeric" value comparison. numeric is default.

**onvalue** - These actions will be emitted when ever a new resulting value is found.

**maps** - This property configures the list of mapping rules. It must be in the order from lowest to highest.

**maps[].min** - the lower bound of the range.

**maps[].max** - the upper bound of the range.

**maps[].value** - the new value applied

**maps[].onValue** - These actions will be emitted when the rule was selected.


### Example using mapped values

This example configuration enables using a numeric value (e.g. from a switch) into 2 color values used for a RGB LED.

```json
{
  "map": {
    "colors": {
      "description": "select a color based on a numeric value",
      "onValue": "light/l?value=$v",
      "maps": [
        {
          "max": "0",
          "value": "red"
        },
        {
          "max": "1",
          "value": "green"
        }
      ]
    }
  },
  "light": {
    "l": {
      "loglevel": 1,
      "pin": "D8,D6,D7",
      "value": "x203050"
    }
  }
}
```


### Example by mapping actions

- value coming in via action
- find relevant mapping entry from the maps list
- setting new value (optional).
- sending out the action specified in the mapping entry


```JSON
{
  "map": {
    "m": {
      "title": "map-action",
      "description": "send actions based on a value-action",
      "maps": [
        {
          "max": "0",
          "onmap": "digitalout/up?value=0,digitalout/down?value=0,switch/down?value=0,switch/up?value=0,timer/rst?stop"
        },
        {
          "max": "1",
          "onmap": "digitalout/down?value=1,digitalout/up?value=0,switch/down?value=1,switch/up?value=0,timer/rst?start"
        },
        {
          "max": "2",
          "onmap": "digitalout/down?value=0,digitalout/up?value=1,switch/down?value=0,switch/up?value=1,timer/rst?start"
        }
      ]
    }
  }
}
```


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.

**value** - Current output value of the element.


### Example State

```JSON
{
  "map/colors": {
    "active": "true",
    "value": "red"
  }
}
```


## Tags

#element