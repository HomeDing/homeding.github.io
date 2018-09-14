# The Value Element

The ValueElement combines receiving modifying actions for an internal state value and sending actions on changing the value.

![Value Properties and Actions](ValueAPI.PNG)

It is used to implement a property or parameter independent from a specific Element that can send actions to multiple dependent elements.
The Values defined using a ValueElement can be modified by other Elements using several actions even through elements in a web UI.

### Example

Two Buttons should be used to increment and decrement the brightness of an attached LED.

### Solution

* Two ButtonElements are created to capture this input from digital input lines.
* Each button will trigger an up / down action for a ValueElement.
* The ValueElement defines the default value and valid range for the value.
* When the value changes the new value is sent to the PWMOutElement.

Here the ValueElement can help. It allows

* Setting a default value used at startup
* Get an up action to increment the value
* Get a down action to decrement the value
* Get a set action to set the value (e.g. to 0)
* Can limit the value to a lower and upper limit
* Send out an action when the value changes.

## Element Configuration

The following properties are available for configuration of the element:

| Property | Description |
| ---      | --- |
| id*      | Specifies the logical name of the value.
| min      | Defines the minimum of the value.
| max      | Defines the maximum of the value.
| value    | An initial/default value can be set using the configuration.
| onChange | Actions.<br/>These actions are emitted when the value has changed. 
|

\* This parameter must be specified.

## Element Actions

The following actions can be used with this element:

| Action   | Description |
| ---      | --- |
| up       | This action increments the value and eventually triggers an outgoing onChange Event.
| down     | This action decrements the value and eventually triggers an outgoing onChange Event.
| value    | This action sets the value.
| change   | The change actions are created when the actual value really changes. Trying to ncrementing an value that has already reached its maximum value will not create a chang action.
|

## Element State

## Example Configuration

## Example State
