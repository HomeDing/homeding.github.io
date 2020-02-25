# OTA Element

::: excerpt ota
  The OTA Element allows to upload new firmware using the wireless network - Over The Air (OTA).
:::

> draft ??? incomplete docu

The OTAElement enables the upload of new sketch versions to the device over the network.
 


The OTAElement is a system element to enable this functionality only.
It cannot send or receive actions.

When this element is configured the device shows up in the list of ports in the Arduino programming environment.

Since the OTA Element initializes the mDNS protocol to register on the network no mDNS library needs to be used and initiated explicitly.

> ---
> Over The Air (OTA) updates require that a sketch is already uploaded to the device that supports receiving updates. 
> Also the memory layout and especially the size of the SPIFFS space cannot be changed using this method.
> 
> The first upload must be done using the USB cable.
> 
> ---


## Uploading tools

If you use the Arduino IDE the device will show up in the list of ports.

The underlying thing is a python script that can be used directly as well.




## Upload batch

There is a python 3 based tool available within the tools folder of the Arduino package. to use this tool you need to install Python 3 on your computer as well.

```CMD
python.exe %LOCALAPPDATA%\Arduino15\packages\esp8266\hardware\esp8266\2.5.2\tools\espota.py -i %devicename% -p 8266 --auth=123 -f ..\temp\DevDing.ino.bin 
```

This script will push an OTA update to the ESP

# use it like: python3 espota.py -i <ESP_IP_address> -I <Host_IP_address> -p <ESP_port> -P <Host_port> [-a password] -f <sketch.bin>

# Or to upload SPIFFS image:

# python3 espota.py -i <ESP_IP_address> -I <Host_IP_address> -p <ESP_port> -P <HOST_port> [-a password] -s -f <spiffs.bin>

#

:: python script with parameters

::



## Example Configuration

```JSON
{
  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' OTA Updates"
    }
  }
}
```

See also

* Hardening the IoT device.

https://arduino-esp8266.readthedocs.io/en/latest/ota_updates/readme.html