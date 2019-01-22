# Time Element

The time element enables to create actions with time and date values based on the local real time.

When using this element a real time retrieving element must be configured as well like the [NTPTime](NTPTime) or [DCFTime](DCFTime).

There are four section types supported the have different values and occur on different situations.

The purpose of this element this for example to show the local time on the display.


## Element Configuration

The following properties are available for configuration of the element:

| Property    | description                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ontime      | these actions are emitted when the time of day value has changed. The value contains the full time including the seconds.<br> `hh:mm:ss`                        |
| onminute    | these actions are emitted when the time of day value has changed. The value contains the time of the day including hour and minute but no seconds. <br> `hh:mm` |
| ondate      | these actions are emitted when the date value has changed. The value contains the full date without the time.<br>  `YYYYY-MM-DD`                                |
| ontimestamp | these actions are emitted every second with the full timestamp as value.<br> `YYYYY-MM-DD hh:mm:ss`                                                             |


## Element State

The following properties are available with the current values at runtime

| Property | Description                                  |
| -------- | -------------------------------------------- |
| `active` | Is set to true when the element is active.   |

## Example Configuration

```JSON
"time": {
  "clock": {
    "ontime": "displaytext/time?value=$v"
  }
}
```
