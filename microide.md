---
title: Miro IDE
---

# {{data.title}}

The Web UI implementation from the HomeDing library supports a minimal **Integrated Development Environment** (IDE)
that allows modifying text based files using any browser.

Using this functionality no physical access is required.

![Micro IDE screenshot](/microide.png)

After loading the page the micro IDE automatically loads the list of files that can be found in the SPIFFS file system of the device in the left panel.

By clicking on the filename the file content is displayed inside the right panel. The current filename is displayed above

By clicking the `[X]` the file can be deleted after a confirmation. 


## Menu

The menu can be used to navigate to the
* The configured home page (see [device element](/elements/device.md) )
* The board showing all elements using their specific widgets
* (The Micro IDE, Here you are)
* The system log when enabled in the [device element](/elements/device.md)


## Reload

This button reloads the list of files.


## Drop area

Files can be dragged from the local file explorer can be dropped here to be uploaded into the filesystem of the device.

The drop area supports dropping single files as well as dropping multiple files.

After upload the list of files is refreshed.


## Reboot

Using this button the device can be rebooted.

After changing a configuration the new configuration will be active after rebooting the device.


## Save

After changing a file the file can be saved using this button. There is no semantic check done and the current text is taken as it is.

There is a prompt before actually saving the file that allows entering a new or different file name.
Filenames must start with a slash character ( `/a.txt` is ok where `a.txt` is not). 

To create a new file you can reload the IDE to get a blank file content to start.


## JSON checker and formatter

Editing the `/env.json` and `/config.json` files are the most common use cases.

When editing files with the filetype `*.json` there is a check if the text is in proper JSON format. This will show up a green `ok`.

When a red `no` is shown the text is not good JSON format.

This is especially critical for the `env.json` file.

JSON files can be re-formatted by using the `format` button.

