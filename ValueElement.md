# ValueElement

The ValueElement is used to implement a property or parameter independent from a specific Element
that can send actions to multiple dependent elements.
The Values defined using a ValueElement can be modified by other Elements using several actions
even through elements in a web UI.

Example:

* Two Buttons should be used to increment and decrement the brightness of an attached LED.

Solution:

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

