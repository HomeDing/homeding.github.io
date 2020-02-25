# The WebButton Element

::: excerpt button
The WebButton Element allows sending actions directly from the web UI without a corresponding active element in the device.
:::

The element is displayed as a single button by using the caption given by the description property.
As this element is never created and active in the device
there is no element state reported by the board.

<!-- ![Button Properties and Actions](elements/buttonapi.png) -->

## Web UI for the Web Button Element

There is a dedicated card for this element available that will be used for the web server config and landing pages:

![WebButton UI](elements/webbuttonui.png)

In the HTML element the gestures `click`, `doubleclick` and `press` are detected and send to the element.
These will trigger the events defined in the configuration.


## Element Configuration

The following properties are available for configuration of the element:

**description** - The caption of the button is taken from this property.

**onclick** - These actions are emitted when a single press gesture was detected.                                


## Example Configuration

```JSON
{
  "webbutton": {
    "start": {
      "description": "Start fan",
      "onClick": "timer/fan?start=1"
    }
  }
}
```


## See also

* [Light timer recipe](???)
* [Remotebutton recipe](???)