---
title: Embedded Web Site for IoT Devices
layout: "page.njk"
description: Dashboard and Configuration Editor for IoT devices.
excerpt: >
  The main interface to devices using the HomeDing library is hosted as a web application on the built-in web server.
  It can be directly reached by using a standard browser.
---

Every device using the HomeDing library has an embedded web site and a built-in web server
so it can be directly reached by using a standard browser.

The files available through the web server are available for devices with 4MByte flash
providing the full functionality.

A subset of the files fit into 128k file space to support even devices with small flash sizes.

Implementing a web site that fits into the very limited space of the flash memory is a challenge on its own but can be solved by using the power of the current browsers.

To make development of this web site less painful a nodejs based web site project is available
at <https://github.com/HomeDing/WebFiles> to build the target files and also simulating configured elements to a certain degree.


## Technology selection

Some reasonable decisions were made so that all current browsers can be used to run the embedded web site.

In general the standard features available in modern browsers are used in favour of using a standard framework.

**Images** are implemented using SVG format wherever possible. It is nicely supported by all browsers today so no fallback needs to be implemented. They are combined into a icon template file (icons.svg)
As a welcome effect the SVG files for icons are smaller than bitmap based images.

**Scripts** are implemented in JavaScript using the ES5 version or by using Typescript that is compiled and minified to ES5 version.

**CSS Style sheets** are implemented by using SCSS files beeing compiled to standard CSS. This allows structuring and commending the source code as well as minimizing the output.

The development source for this web site can be found on github in the repository <https://github.com/HomeDing/WebFiles>.

In the examples you can find the `data` folders that come with the library that include the files as they need to be stored on the device.
It is a standard nodejs based project helps creating these files and also give you a useful nodejs-express based server to make development easier.

The files are also available on github to be transferred directly to devices using the /$update utility.

The embedded web site itself is implemented using the modern Single Page Applications (SPA) approach for web applications:
* static files provided through the built-in file server
* REST services to exchange data from the device

To make this fit into the limited space a `micro` implementation approach is used that provides minimal HTML, JavaScript and CSS. They run smoothly even on mobile devices because they also need not much network bandwidth.


## Implemented features

This is an overview of the WebUI implementation that is uploaded and stored on the HomeDing device.

This main features of the web site implementation supports

- a device specific dashboard to interact with the device and a
- text-editor to configure the device directly using a standard web browser.

The reduced implementation is available to support [minimal devices] with a minimal flash memory.

The following files are part of the web UI implementation on devices:

| File             | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| /index.htm       | Static startup page[^2]                                     |
| /board.htm       | [Dashboard](/dev/dashboard.md) with configured elements[^2] |
| /microide.htm    | IDE for modifying configuration                             |
| /log.htm         | system log viewer[^2]                                       |
| /ding.htm        | reduced Dashboard implementation for [minimal devices]      |
| /panel.htm       | elements and actions as graph[^2]                           |
| /favicon*.*      | icons for the device support                                |
| /updateicons.htm | Dialog to configure and load a device icon                  |
| /\*.js           | supporting javascript implementation files                  |
| /\*.css          | supporting style implementation files                       |
| /\*.svg          | icons                                                       |
| /$setup          | setup a network connection                                  |
| /$update         | load a published set of WebUI files from github             |
| /$upload         | upload files to the root of the filesystem                  |

These UI pages are hosted on the device itself. They are implemented respecting the small
available memory but provide some powerful functions to even configure and customize the device.

### HomePage configuration

By default the integrated web server redirects to the `/index.htm` page.
By specifying a different homepage in the configuration of the [Device element](/elements/device.md)
using the **homeding** configuration another page e.g. the dashboard `/board.htm` can be configured
to be opened by default.

### Static startup page

This static homepage of a device is just showing the capabilities of the full size web UI
including a brief information about the runtime statistics.
It can be reached by using the direct link `/index.htm` on standard devices.

can vary because the web server will redirect the request without specifying the page name to the page specified in the configuration of the [Device element](/elements/device.md).

GET <http://homeding/>[^hostname]

With no configuration the System-Info page will be opened.

### System-Info

GET <http://homeding/index.htm>[^hostname]

This is a technical landing page with useful links to some information about the system.
It contains links to the available pages and offers insights to some technical runtime parameters.

This page is not very useful when a device is finally operating the implemented configuration and left the development phase.

### Board

GET <http://homeding/board.htm>[^hostname]

On this page every configured element is shown on a card and shows the actual runtime parameters like sensor values.

In the standard view the system related elements are not visualized. By using the [sys] button they can be shown as well.

On this page it is possible to create new elements based on the available elements in the collection that has been compiled.

For existing elements the config parameters can be modified.

- virtual display
- buttons for triggering actions
- Current Values
- modify values

### Device specific UI

GET <http://homeding/ding.htm>[^hostname]

For some typical use cases very special UI pages can be created or downloaded from the repository. This is especially useful when a device with a 1MByte flash memory chip is used to save the place from unused element templates.

Today only one of these pages exists, implementing the UI for a remote switch with some automation elements.

On the backlog <https://github.com/HomeDing/WebFiles/issues> you can find more device specific requests.

### Integrated Development Environment (IDE)

GET <http://homeding/microide.htm>[^hostname]

A minimal UI for changing text based files like HTML, CSS and JavaScript and the config.json file.

See also [Micro IDE](/dev/microide.md)

### Logging Output

GET <http://homeding/log.htm>[^hostname]

This pages shows the latest logging messages of the device. Problems and Information that occurs while the device is operating can be found here.

See also [Device Logging](/dev/logger.md).

### Panel

GET <http://homeding/panel.htm>[^hostname]

The panel offers a different view to the configured elements in the device by linking them using the configured actions.

### File Upload utility.

GET <http://homeding/$upload.htm>[^hostname]

![Minimal Upload Form](/steps/upload.png)

This very bare implemented file upload utility supports uploading using drag & drop of files from a local folder onto the device.

Dropping multiple files at the same time is supported.

In standard mode the files will be stored in the root folder. To upload icon files into the folders 2 links are provided to switch the current folder. This adds a parameter to the URL.

This page is available even when no files exist in the filesystem.



## See also

- [Micro Implementations Details](/dev/micro.md)
- [Web Services for IoT Devices](/dev/webservices.md)


[^hostname]: replace `homeding` with the network name of your device to use this link.
[^2]: This is not available on [minimal devices].

[minimal devices]: /examples/minimal.md
