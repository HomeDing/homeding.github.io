# OTA Element ???


The OTAElement allows uploading new sketches to the board over the network.

By configuration this element for a device the   device shows up in the list of ports in the Arduino programming environment.

The WebServer must be enabled on the device to use this protocol.

The OTAElement is a system element to configure this functionality and cannot send or receive actions.

Since the OTA Element initializes  the mDNS protocol as well no mDNS library needs to be used and initiated explicitly.

## Upload batch:

:: python script with parameters

:: 



## Example Configuration

```JSON
"ota": {
  "0": {
    "port": 8266,
    "passwd": "123",
    "description": "Listen for 'over the air' OTA Updates"
  }
}
```

See also

* Hardening the IoT device.