---
title: Implementation Details
description: Hints for implementing and extending Elements and the Web UI
layout: "page.njk"
tags: ["Implementation"]
excerpt: >
  Hints and details on how to implement new and extend existing elements using an Arduino programming
  environment and how to implement new cards for the dashboards.
---

<!-- ## Customize a sketch file -->

## Implementing new Elements

> The HomeDing library is not a closed eco system but rather allows adding new functionality
> by adding new Elements to support a specific functionality, sensor, chip, network service and more.
>
> In the [Create and extend a new Element](/steps/newelement.md) step-by-step article you find
> how to start with a simple Element implementation that gets extended to support the specific benefits of the ecosystem.
>
> In the development example you can find a Element called **TemplateElement**
> that contains all function declarations and empty function implementation for an element
> that does nothing and some additional information as comments that help implementing new Elements.
>
> The 2 files (TemplateElement.*) can be copied and renamed and the class name should be adjusted as well to create a new element not doing anything yet.
>
> More details about the base implementation and available methods can be found in [Element Class](/dev/elementclass.md) description.
>
> The I2C bus is used by many components, sensors, displays and other chips to communicate commands and data.
> A central configuration is supported on the device level. Som implementation hits can be found in [Using the I2C bus](/dev/i2c.md).
>
> The [Element registry](/dev/elementregistry.md) is the central class that knows all included and available
> Element classes to allow further creation and customization of new Elements by name at runtime.


## Firmware implementation details

> There is a list of articles on how the HomeDing library works and is built and provides some
useful functionality:
>
> * [WiFi manager](/dev/wifimanager.md)
> * [Serial Logger](/dev/logger.md)
> * [The safemode](/dev/safemode.md)
> * [Network Startup](/dev/startupnet.md)
> * [Using JSON formatted data](/dev/microjson.md)


## About the Web UI

> Implementing the Web UI functionality is almost as important as implementing the Arduino code for the firmware.
>
> There is a list of articles on how the HomeDing library works and is built and provides some
useful functionality:
>
> * [Introduction](/dev/micro.md)
> * [Embedded Web Site for IoT Devices](/dev/website.md)
> * [micro behaviors](/dev/microbehaviors.md)
> * [micro charts](/dev/microcharts.md)
> * [micro icons](/dev/microicons.md)
> * [micro javascript utils](/dev/microjavascript.md)
> * [micro style](/dev/microstyle.md)
> * [micro templates](/dev/microtemplates.md)
> * [Portal](/dev/microportal.md)

<!-- * [monitor](/elements/_monitor.md) -->
<!-- * [_iconsforthings](/_iconsforthings.md) -->


## Element Meta data

> For new elements the list of properties, actions and events should be specified in the `elements.json` file that is saved on the device.
>
> This file is the basis for the `Add a new element` dialog in the board implementation.
>
> * **Properties** are implemented in the `set(name, value)` method to get the configuration values.
> * **Actions** are also implemented in the `set(name, value)` method but are expected to be used at runtime by incoming actions.
> * **Events** are outgoing actions to other elements.


## Command Line Builds and Uploads

The WebFiles projects that is used to create the Web UI and portal implementation
all build steps are implemented using the npm tasks defined in package.json.
Some of them use nodejs scripts under the hood that can also be started directly.
Best approach is to use the npm tasks. They are also used by the Github Actions.

For direct uploading the `dist` and `minimal` files to a device you can use the following batch files on windows:

The HomeDing project that is used to create the firmware today has no support for command line building.
It is on the list for future extensions when the Arduino CLI is finally available as a stable release.

For direct uploading of the firmware to a device you can use the following batch file on windows:

``` cmd
hd-upload.bat <devicename> [firmware]
```

use `hd-upload.bat --help` to get a brief command and options documentation.

The firmware files must be placed in the `bin` folder using the Arduino command `Export compiled binary`.
Here you can collect multiple binaries to be uploaded to different devices.

The device must have a [OTA Element](/elements/ota.md) configured to allow uploading of new firmware.


## See also

* [Device Logging](/dev/logger.md)
