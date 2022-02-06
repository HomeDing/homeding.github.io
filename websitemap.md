---
title: Map of the embedded Web Site Pages
---

# {{data.title}}

The web site allows accessing and configuring the device directly with a standard web browser.

The following files are part of the web UI implementation: 

| File          | description                                         |
| ------------- | --------------------------------------------------- |
| /index.htm    | Home Page                                           |
| /board.htm    | [Dashboard](/dashboard.md) with configured elements |
| /microide.htm | IDE for modifying configuration                     |
| /log.htm      | system log viewer                                   |
| /ding.htm     | reduced Dashboard                                   |
| /panel.htm    | elements and actions as graph                       |
| /favicon*.*   | icon support                                        |
| /i/*.svg      | icons for elements                                  |
| /*.js, *.css  | supporting files                                    |


These UI pages are hosted on the device itself. They are implemented respecting the small available memory but provide some powerful functions to even configure and customize the device.


## Home Page

The actual homepage of a device can vary because the web server will redirect the request without specifying the page name to the page specified in the configuration of the [Device element](/elements/device.md).

GET <http://homeding/> <sup>*1</sup>

With no configuration the System-Info page will be opened.


## System-Info

GET <http://homeding/index.htm> <sup>*1</sup>

This is a technical landing page with useful links to some information about the system.
It contains links to the available pages and offers insights to some technical runtime parameters.

This page is not very useful when a device is finally operating the implemented configuration and left the development phase.


## Board

GET <http://homeding/board.htm> <sup>*1</sup>

On this page every configured element is shown on a card and shows the actual runtime parameters like sensor values.

In the standard view the system related elements are not visualized. By using the [sys] button they can be shown as well.

On this page it is possible to create new elements based on the available elements in the collection that has been compiled.

For existing elements the config parameters can be modified.

* virtual display
* buttons for triggering actions
* Current Values
* modify values


## Device specific UI

GET <http://homeding/ding.htm> <sup>*1</sup>

For some typical use cases very special UI pages can be created or downloaded from the repository. This is especially useful when a device with a 1MByte flash memory chip is used to save the place from unused element templates.

Today only one of these pages exists, implementing the UI for a remote switch with some automation elements.

On the backlog <https://github.com/HomeDing/WebFiles/issues> you can find more device specific requests. 


## Integrated Development Environment (IDE)

GET <http://homeding/microide.htm> <sup>*1</sup>

A minimal UI for changing text based files like HTML, CSS and JavaScript and the config.json file.

See also [Micro IDE](/microide.md)


## Logging Output

GET <http://homeding/log.htm> <sup>*1</sup>

This pages shows the latest logging messages of the device. Problems and Information that occurs while the device is operating can be found here.

See also [Device Logging](/logger.md).


## Panel

GET <http://homeding/panel.htm> <sup>*1</sup>

The panel offers a different view to the configured elements in the device by linking them using the configured actions.


## File Upload utility.

GET <http://homeding/$upload.htm> <sup>*1</sup>

![Minimal Upload Form](/upload.png)

This very bare implemented file upload utility supports uploading using drag & drop of files from a local folder onto the device.

Dropping multiple files at the same time is supported.

In standard mode the files will be stored in the root folder. To upload icon files into the folders 2 links are provided to switch the current folder. This adds a parameter to the URL.

This page is available even when no files exist in the filesystem.


**1**: replace `homeding` with the network name of your device to use this link.
