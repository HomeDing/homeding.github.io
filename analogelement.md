# The Analog Element

The AnalogElement is used to capture the voltage level from the Analog Input pin and to emit corresponding events.
It also handles some of the often occurring problems around capturing analog values.

<!-- ![Button Properties and Actions](ButtonAPI.png) -->

The analog input signals like such from analog sensors often have the characteristic that they constantly change around an average value.
In many cases these small changes are not relevant to start an action and can be ignored. 

To allow using the analog element in these situations a hysteresis can be defined. A new value is then only triggering an action when the current input value has more difference to the last reported value than specified. This eliminiates the actions caused by small changes. 
A hysteresis of 10 is the default value but you can specify any other value and especially 0 that eliminates this effect.

In other situations it is only relevant that a analog value is below or above a reference value. 
By defining a reference value the reference action will only be dispatched when the input value goes above or below.

On the ESP8266 chip the input value has a precision of 2^10 bits and the input value is represented as a value for 0 to 1024 measuring a voltage at the pin from 0 to 1 volts. The input measuing should not occur when the ESP8266 chip is transmitting data over the WLAN because the value will be inaccurate.

## Element Configuration

The following properties are available for configuration of the element:

| Property      | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `readtime`    | time between capturing input values.                                                                 |
| `hysteresis`  | The value action is emitted only when the value differs more than defined by hysteresis. Default=10. |
| `reference`   | The reference action is emitted when the value goes below / above the reference value.               |
| `onValue`     | Actions.<br/>These actions are emitted when the input level has changed.                             |
| `onReference` | Actions. <br/>These actions are emitted when the input level goes across the reference level.         |

<!-- \* This parameter must be specified. -->

The ESP8266 chip has only one analog input pit so specifying a pin is not required.

**Examples**

A water sensor that is used to detect water on the floor may have some small current leakages but when there is real water coming to the sensor the measured value rises significantly. A reference action can be the solution.

A analog measuring element for weight can produce many values around. When the weight changes sigificantly a value action can be used. Small changes that occur by movements of the weight can be filtered out by specifying a hysteresis value.  


## Element State

The following properties are available with the current values at runtime

| Property    | Description                                |
| ----------- | ------------------------------------------ |
| `active`    | Is set to true when the Element is active. |
| `value`     | Current analog value from the input.       |
| `reference` | Below or above the reference value.        |


## Example Configuration

```JSON
"analog": {
  "0": {
    "reference" : 500,
    "onvalue": "device/0?log=analogvalue=$v",
    "onreference": "device/0?log=analogref=$v"
  }
}
```

## Example State

```JSON
```

## See also

* <https://www.esp8266.com/wiki/doku.php?id=esp8266_gpio_pin_allocations  >