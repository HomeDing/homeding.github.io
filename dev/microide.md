---
title: Micro IDE
layout: "page.njk"
---
The Web UI implementation from the HomeDing library supports a minimal **Integrated Development Environment** (IDE)
that allows modifying text based files using any browser.

For using this functionality no physical access to the device is required.
It is mainly used for inspecting and changing the configuration fies but also can be used for uploading any files to the filesystem.
 
Changing the configuration files allows much flexibility at runtime so no new firmware must be uploaded to extend the functionality. 

## The UI of the IDE

![Micro IDE screenshot](/dev/microide.png)

After loading the page the micro IDE automatically loads the list of files that can be found in the file system of the device in the left panel.


## The Menu

The menu can be used to navigate to the
* The configured home page (see [device element](/elements/device.md) )
* The board showing all elements using their specific widgets
* (The Micro IDE, Here you are)
* The system log when enabled in the [device element](/elements/device.md)


### List of current files

By clicking on the filename the content is retrieved from the device and is displayed inside the right panel. This works for all text based files. Other formats will not be shown correctly. 

The current filename is displayed above.

By clicking the `[X]` the file can be deleted after a confirmation. 

Folders are shown by their name and can be opened to display all files inside the folder.

When there is a SD card configured there will be a folder `sd` that contains the files in the file system of the SDcard.


## Reload button

This button reloads the list of files.


## Drop area

Files can be dragged from the local file explorer and dropped here to be uploaded into the current folder in the filesystem of the device or SD card.

The drop area supports dropping single files as well as dropping multiple files.

After upload the list of files is refreshed.


## Reboot

Using this button the device can be rebooted.

After changing a configuration the new configuration will be active after rebooting the device.


## Save

After changing a file the file can be saved using this button. There is no semantic check done and the current text is taken as it is.

There is a prompt before actually saving the file that allows entering a new or different file name.

To create a new file you can reload the IDE to get a blank file content to start.


## JSON checker and formatter

Editing the `env.json` and `config.json` files are the most common use cases.

When editing files with the filetype `*.json` there is a check if the text is in proper JSON format. This will show up a green `ok`.

When a red `no` is shown the text is not good JSON format.

This is especially critical for the `env.json` file.

JSON files can be re-formatted by using the `format` button.

