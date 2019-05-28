# The Button Element

The ButtonElement allows detecting multiple button press gestures like
* single short click
* double click
* long press

The input can come from a digitalin[Digital Input Element](/elements/digitalin) or anynother element that generates boolean alike values.

It can also be used to define a Button Element in the Web UI of the device.

![Button Properties and Actions](elements/buttonapi.png)

## Web UI for the Button Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

<!-- ![Button UI](elements/buttonui.png) -->

Pressing the button will trigger the events defined in the configuration.

## Element Configuration

The following properties are available for configuration of the element:

**value** - This is the incoming logical value that is typically emitted by a igital input element.  

**clicktime** - time to wait for another click before sending out the onclick action

**presstime** - time to wait before sending out the onpress action                  

**onclick** - These Actions are emeited when a single press gesture was detected.                                

**ondoubleclick** - These Actions are emeited when a double click gesture was detected.                                                                         

**onpress** - These Actions are emeited when a long press gesture was detected.                      


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

The following properties are available with the current values at runtime

| Property | Description                                |
| -------- | ------------------------------------------ |
| `active` | Is set to true when the Element is active. |


## Example State

```JSON
"button/start": {
  "active": "true",
  "value": "1"
}
```