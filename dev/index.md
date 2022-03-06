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

## Implement a new Element

The HomeDing library is not a closed eco system but rather allows adding new functionality
by adding new Elements to support a specific functionality, sensor, chip, network service and more.

**[Create and extend a new Element](/steps/newelement.md)**

> This step-by-step article shows how to start with a simple implementation that gets extended
> to support the specific benefits of the ecosystem.

**Template Element**

> In the development example you can find a Element called "TemplateElement" 
> that contains all function declarations and empty function implementation for an element
> that does nothing and some additional information as comments that help implementing new Elements.

> The 2 files (TemplateElement.*) can be copied and renamed and the class name should be adjusted as well to create a new element not doing anything yet.

**[Element Class](/dev/elementclass.md)**

> More details about the base Element Class implementation and available methods can be found in [Element Class](/dev/elementclass.md) description.

**[Using the I2C bus](/dev/i2c.md)**

> The I2C bus is used by many components, sensors, displays and other chips to communicate commands and data.
> A central configuration is supported on the device level.

**[Element registry](/dev/elementregistry.md)**

> The [Element registry](/dev/elementregistry.md) is the central class that knows all included and available
> Element classes to allow further creation and customization of new Elements by name at runtime.


## Firmware implementation details

Here is some information on how the HomeDing library works and provides some
useful functionality.

**[WiFi manager](/dev/wifimanager.md)**

**[Serial Logger](/dev/logger.md)**

**[The safemode](/dev/safemode.md)**

**[Network Startup](/dev/startupnet.md)**

<!-- * [_microjson](/_microjson.md) -->
<!-- * [_customelement](/_customelement.md) -->

### Extending the Web UI

* [Introduction](/dev/micro.md)

* [Embedded Web Site for IoT Devices](/dev/website.md)

* [micro behaviors](/dev/microbehaviors.md)

* [micro charts](/dev/microcharts.md)

* [micro icons](/dev/microicons.md)

* [micro javascript utils](/dev/microjavascript.md)

* [micro style](/dev/microstyle.md)

* [micro templates](/dev/microtemplates.md)

<!-- * [monitor](/elements/_monitor.md) -->

* [Portal](/dev/microportal.md)

<!-- * [_iconsforthings](/_iconsforthings.md) -->


## Element Card

Every time a element is displayed on the board a `card` template is used to display the element in a proper way.

There is a generic implementation that displays the `value` only.

For some elements very specific `cards` are implemented in the files `board.htm` and `board-templates.htm`.

Here you can add new templates for specific elements instead of using the `generic` template.


## Element Meta data

For new elements the list of properties, actions and events should be specified in the `elements.json` file that is saved on the device.

This file is the basis for the `Add a new element` dialog in the board implementation.

* **Properties** are implemented in the `set(name, value)` method to get the configuration values.
* **Actions** are also implemented in the `set(name, value)` method but are expected to be used at runtime by incoming actions.
* **Events** are outgoing actions to other elements.


## See also

- [Device Logging](/dev/logger.md)