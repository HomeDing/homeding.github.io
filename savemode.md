# Save-Mode

The Safe Mode should be enabled on all HomeDing based devices in regular operating conditions. It is reasonable measurement against external attempts to change and misuse the device over the network.

The reason to enable the `savemode` is about making the implementation of the device immutable against configuration and firmware changes after bringing the device into a stable operating mode.

The `save-mode` cannot make everything save but closes some otherwise open doors that are not required during normal operation mode but especially it doesn't make the communication to and from the device encrypted.

You need to have physical access to the device to disable savemode or change firmware or configuration. 

While you work on the configuration or firmware of a device to improve the functionality anything that prevents you from doing this easily is not welcome.
But after the device is running good and should do this for a longer time the `savemode` disables changes and services that may harm the device.

> #### Important node:
> Savemode is `on` by default so you cannot configure it using the integrated IDE.<br/>
> While setting up a device it is recommended that the env.json configuration file should contain `"savemode": "false"`.<br/>
> In the case the device has no element configured the savemode is disabled by the system.

## How save is savemode

This mechanism is not completely `save` but is a valid measurement against remote attacks modifying the device.

It is possible to upload new sketches when you have physical access to the device and use the USB port for uploading even in savemode.

It is possible disable savemode by using the physical RESET button (see below).



## Enabling Save Mode

The save mode is enabled permanently by adding the `savemode` property with `true` to the device configuration.

```JSON
{
  "device": {
    "0": {
      "savemode": "true",
      // ...
    }
  }
}
```
This should be done by changing the `env.json` file using the IDE or by uploading a new env.json file with the setting enabled.
Starting with the next boot the device will run in this mode until the mode is disabled using one of the methods mentioned below.
It is best practice to configure the `device` element first in `env.json`


## Effects of save mode

After enabling the `savemode` the following functions are deactivated:

* Any upload or file change operations are rejected.
* The OTA Element will set a random password so firmware uploads are rejected.
* Many device parameters including `savemode` cannot be changed by using an URL action
* Resetting the filesystem.
* Listing the files in the SPIFFS filesystem.
* Resetting or changing the network configuration.
* Rendering the builtin UI $setup.htm, $boot.htm, $upload.htm.
* network scan.


## Save mode after uploading

Because uploading a new sketch over the USB interface somehow boots twice
the savemode will be disabled after the upload has finished and the device starts operating.


## Temporarily disabling the savemode by double reset

To disable the savemode you need to have physical access to the RESET button of the device.

When you reset the device using the reset button and reset it again in less than seconds the device starts in non-savemode even when configured for it.

Now you can use the built-in IDE or the file upload functionality to change configuration or any of the files. As long as the device is not rebooted the savemode stays disabled.


## Uploading new firmware

Even when savemode is enabled you can upload a new sketch using the USB port.
The OTA upload is disabled to avoid reconfiguration or reprogramming from a remote location.


## Programming for the Save-Mode

The board class has a public boolean member `savemode` that is set to true when the save mode has been set.
This variable is set to the configured value while reading the configuration and creating the elements.

To implement functions that only work when save mode is not set use

```cpp
if (! _board->savemode) {
  // execute unsave stuff
   ...
}
```

## See also

* secure parameters