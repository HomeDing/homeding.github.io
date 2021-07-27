# Time Element

::: excerpt time
The time element creates actions with the current local time as value.
:::

When using this element a real time retrieving element must be configured as well like the [NTPTime](/elements/ntptime.md) , [DSTime](/elements/dstime.md) or [DCFTime](/elements/dcftime.md).

There are four different kind of actions supported that have different values and occur on different situations.

The purpose of this element this for example to show the local time on the display.


## Element Configuration

The following properties are available for configuration of the element:

| Property    | description                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ontime      | Actions<br>These actions are emitted when the time of day value has changed. The value contains the full time including the seconds.<br> `hh:mm:ss`                        |
| onminute    | Actions<br>These actions are emitted when the time of day value has changed. The value contains the time of the day including hour and minute but no seconds. <br> `hh:mm` |
| ondate      | Actions<br>These actions are emitted when the date value has changed. The value contains the full date without the time.<br>  `YYYYY-MM-DD`                                |
| ontimestamp | Actions<br>These actions are emitted every second with the full timestamp as value.<br> `YYYYY-MM-DD hh:mm:ss`                                                             |


## Element State

The following properties are available with the current values at runtime

**active** - Is set to true when the element is active.


## Example Configuration

```JSON
{
  "time": {
    "clock": {
      "ontime": "displaytext/time?value=$v"
    }
  }
}
```

## Example State

```JSON
{
  "time/0": {
    "active":"true"
  }
}
```

## See also

* [Time Elements](/timeelements.md)

