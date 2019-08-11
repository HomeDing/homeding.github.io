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

**clicktime** - time to wait for another click before sending out the onclick action

**presstime** - time to wait before sending out the onpress action                  

**onclick** - These actions are emited when a single press gesture was detected.                                

**ondoubleclick** - These actions are emited when a double click gesture was detected.     

**onpress** - These actions are emited when a long press gesture was detected.                      

**action** - when receiving this event the specified actions are emitted ??? 

**onaction** - These actions are emited any time a click double-click or press gesture was detected. The given value is `click`, `doubleclick` or `press`. This allows button actions to be send to other buttons even remote buttons.

## Control the Element

It is typical to use the Button Element together with a [Digital Input Element](/elements/digitalin)
that provides the input value to the Button Element.

## Example Configuration

```JSON
{
  "digitalin": {
    "0": {
      "onvalue": "button/c?input=$v"
    }
  },

  "button": {
    "c": {
      "onclick": "device/main?log=click.",
      "ondoubleclick": " device/main?log=dclick.",
      "onpress": " device/main?log=press."
    }
  }
}
```


## Element State

The `active` property Is set to true when the Element is active.

The `value` property correspons to the current output of the element.

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