# SSDP Element ???

The SSDPElement allows specifying all the properties  to send SSPD messages to the network so the device can be discovered by Plug & Play Services.

On Windows you can find these devices in your network view in the explorer.

The WebServer must be enabled on the device to use this protocol.

If you like your device to show up with some hints about the configured functionality the configuration of this element can be used.

The SSDP element is a system element to configure this functionality and cannot send or receive actions.

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