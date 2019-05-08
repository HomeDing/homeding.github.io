## Save Mode ???

The reason to enable the `save-mode` is about making the implementation of the device inmutable against configuration and firmware changes after bringing the device into a stable operating mode.

While you change the configuration or firmware of the device to improve the functionality anything that prevents you from doing this easily is not welcome.

But after the device is running good and should do this for a longer time the `save-mode` disables changes that may harm the device like

* uploading new firmware using over the air uploads
* modifying any configuration files
* resetting or changing the network configuration

## Enabling Save Mode

To enable or disable the `save-mode` you use the /savemode.htm page and enter a password.

A hash value of this password will be stored in the file $savemode.json, a file that cannot be retrieved or changed by using the build-in server and the IDE.

With an existing password the `save-mode` is enabled and the builtin webserver will disable the critical modifications.
Only by knowing and sending the password the save-modecan be disabled.

This mechanism is not completely save and when you have physical access to the chip and can use a USB cable / Serial interface you can upload new firmware anyhow but it is a reasonable measurement against external attempts to change and misuse the device over the network.

For any improvements you may find necessary please create an issue or a pull request on the project on github.

## Effects of save mode

When when using the `save mode` the following functions are deactivated:

* [ ] Any upload or file change operations are rejected.
* [ ] OTA Element
*

## Programming for the Save-Mode

The board class has a Boolean member `savemode` that is set to true when the save mode has been set. This variable is validated when the board class is initiated before any of the elements are created.

To implement functions that only work when save mode is not set use

```cpp
if (! board->savemode) {
   ...
}
```

The board class checks if this variable has been changed (by accident or intension) and then reboots the device.

