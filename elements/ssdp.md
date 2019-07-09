# SSDP Element

> draft ???

<div class="excerpt">
  <img src="/i/ssdp.svg">
  <p>The SSDPElement allows specifying the properties to send SSPD messages to the local network so the device can be discovered by Plug & Play Services.</p>
</div>

The SSDP element is a system element to configure this functionality and cannot send or receive actions.

On Windows you can find these devices in your network view in the explorer.

If you like your device to show up with some hints about the configured functionality the configuration of this element can be used.

## Element Configuration

???

## Example Configuration

```JSON
"ssdp": {
  "0": {
    "ModelUrl": "https://www.mathertel.de/Arduino"
  }
}
```