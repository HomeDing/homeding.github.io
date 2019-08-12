# Map of the embedded Web Site Pages

The web site allows accessing and configuring any device directly with a standard web browser.

```
/index.htm
/ding-info.htm
/ding-ide.htm
/ding-log.htm
/panel.htm
```

These UI pages are hosted on the device itself. They are implemented respecting the small available memory but provide some powerful functions to even configure and customise the device.

## Home Page

The actual homepage of a device can vary because the web server will redirect the request without specifying the page name to the page specified in the device configuration.

GET <http://homeding/> <sup>*1</sup>

With no configuration the System-Info page will be opened.

GET <http://homeding/index.htm> <sup>*1</sup>
With no configuration the System-Info page will be opened.

## System-Info

GET <http://homeding/index.htm> <sup>*1</sup>

This is a technical landing page not very useful when a device is finally operating the implemented configuration and left the development phase.

It contains links to the available pages and offers insights to some technical runtime parameters.



## Dashboard

On this page every element is shown on a card and shows the actual runtime parameters like sensor values.

In the standard view the system related elements are not visualized. By using the [sys] button they can be shown as well.

On this page it is possible to create new elements based on the available elements in the collection that has been compiled.

For existing elements the config parameters can be modified.

* virtual display
* buttons for triggering actions
* Current Values
* modify values

## Device specific UI

For some typical use cases very special UI pages can be created. They are ... ???

* the page in the web server that has an optimized UI for the specific thing.


## Integrated Development Environment (IDE)

???

A minimal UI for changing text based files like HTML, CSS and JavaScript and the config.json file.


This page implements a small integrated text editor. Because most of the files are text based they can be modified directly.

The drop box in The upper right corner of the page can be used to upload files into the root of the on-board file system. 

See also ## File Upload utility.

## Logging Output

This pages shows the latest logging messages of the device. Problems and Information that occurs while the device is operating can be found here.

## File Upload utility.

![Minimal Upload Form](upload.png)

This very bare implemented file upload utility supports uploading using drag & drop of files from a local folder onto the device.
Dropping multiple files at the same time is supported.

In standard mode the files will be stored in the root folder. To upload icon files into the folders 2 links are provided to switch the current folder. This adds a parameter to the URL.

This page is available even when no files exist in the filesystem.

## Panel

The panel offers a different view to the configured elements in the device by linking them using the configured actions.


## More ???

---

**1**: replace `homeding` with the network name of your device to use this link.