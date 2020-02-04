# The Button Element

<div class="excerpt">
  <img src="/i/button.svg">
  <p>The ButtonElement allows detecting multiple button press gestures like
 single short click, double click and long press.</p>
</div>


The input can come from a [Digital Input Element](/elements/digitalin) or another element that generates boolean values.

It can also be used to define a Button Element in the Web UI of the device.

![Button Properties and Actions](elements/buttonapi.png)

## Web UI for the Button Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

> [Button UI](elements/buttonui.png) ???

In the HTML element the gestures `click`, `doubleclick` and `press` are detected and send to the element.
These will trigger the events defined in the configuration.


## Element Configuration

The following properties are available for configuration of the element:

**value** - This is the incoming logical value that is typically emitted by a digital input element.  

**clickTime** - time to wait for another click before sending out the onclick action

**pressTime** - time to wait before sending out the `onPress` action                  

**onClick** - These actions are emitted when a single press gesture was detected.                                

**onDoubleClick** - These actions are emitted when a double click gesture was detected.     

**onPress** - These actions are emitted when a long press gesture was detected.                      

**action** - when receiving this event the specified actions are emitted ??? 

**onAction** - These actions are emitted any time a click double-click or press gesture was detected.
The given value is `click`, `doubleclick` or `press`. This allows button actions to be send to other buttons even remote buttons.


## Control the Element

It is typical to use the Button Element together with a [Digital Input Element](/elements/digitalin)
that provides the input value to the Button Element.

## Example Configuration

```JSON
{
  "digitalin": {
    "up": {
      "pin": "D6",
      "description": "up button signal",
      "inverse": "true",
      "pullup": "true",
      "onvalue": "button/up?value=$v"
    }
  },

  "button": {
    "up": {
      "onClick": "device/main?log=click.",
      "onDoubleClick": " device/main?log=dclick.",
      "onPress": " device/main?log=press."
    }
  }
}
```


## Element State

The `active` property Is set to true when the Element is active.

The `value` property corresponds to the current output of the element.

## Example State

```JSON
"button/start": {
  "active": "true",
  "value": "1"
}
```

## See also

* [Light timer recipe](???)
* [Remotebutton recipe](???)