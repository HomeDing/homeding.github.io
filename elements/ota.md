# OTA Element

> draft ???
<div class="excerpt">
  <img src="/i/ota.svg">
  <p><strong><a href="#page=elements/ota.md">OTA Element</a></strong><br/>
  This element allows to upload new firmware and files Over The Air.</p>
</div>

The OTAElement is a system element to enable this functionality only.
It cannot send or receive actions.

When this element is configued the device shows up in the list of ports in the Arduino programming environment.

Since the OTA Element initializes the mDNS protocol as well no mDNS library needs to be used and initiated explicitly.

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