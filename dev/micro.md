---
title: Micro Implementations Details
layout: "page.njk"
---

There are many frameworks for building a Web UI but when implementing on a memory restricted device the size of basis functionality and components becomes the most limiting factor and therefore the HomeDing UI implementation has to be as small as possible and provides only the required functionality to visualize the internal available elements, the actions and their state.

## Using the Single Page Application (SPA) implementation pattern

By using the SPA pattern the server needs to implement

* the delivery of static files for loading the web application into the browser
* acting on Ajax calls to the web server to get data and trigger functionality.

This is a good architecture for the web browsers available on desktops and phones. Modern frameworks like Angular, react or Vue give you a good set of tools to efficiently implement applications. However, the size of these applications tends to get huge.

In contrast to these full-blown frameworks the micro frameworks offer only the essential required functionality. They support better the current available boards for IoT things that will not have enough space nor enough power to host server web applications like those built in Angular, react or Vue.

The HomeDing library is also using this approach by using "micro" implementations to minimize the footprint of the downloaded files.


## The Micro Implementations

By using the following micro implementations a small component framework is available that fits in to web servers with the space restrictions we can find in the boards and chips.

**The micro IDE** is a simple text editing utility primary use case is to modify the env.json and config.json configuration files.
More in: [Micro IDE](/dev/microide.md)

**The micro templates** are used to build HTML components that can be used at different places to visualize elements, data and other UI components like dialogs.
More in: [Micro Templates](/dev/microtemplates.md)

**The micro behaviors** are modules covering the functionality required to work with a component itself.
More in: [Micro Behaviors](/dev/microbehaviors.md)

**The micro databinding** is the functionality to transfer data from the device or other JSON formatted data into the HTML components.

**The micro stylesheet** contains a collection of CSS rules that are available in a central file. By using the SCSS technology the resulting CSS file can be compressed to save memory and bandwidth while offering a well structured input.

**Icons** are available for all elements and general purpose. They are implemented in SVG format that results in minimal size while supporting a good scalability.
<br />More in: [Micro Icons](/dev/microicons.md)

**Charts** There are some charting elements available for the HTML UI that are implemented using SVG and JavaScript.
They are implemented in SVG format that results in minimal size while supporting a good scalability.
<br />More in: [Micro Charts](/dev/microcharts.md)


## Web Site on board

The HomeDing library comes with a web server implementation and a small web site that can be stored in the file system of a ESP8266 base device that offers the following pages:

* A home page providing a static welcome screen and some further navigation links.
* A [dashboard](/dev/dashboard.md) that presents all active elements and their actual data.
* A minimal web-based IDE page that allows changing the text based files of the web server including the configuration files.
* A generic diagram that displays all existing elements and the configured actions in between.

This functionality or at least a part of it is required even for even small HomeDing based devices and needs to be hosted in the available memory of the available boards.

The way how the web server is implemented is based on avoiding consuming server resources as much as possible and using the browser resources where possible.

> Implementing minimal javascript and CSS libraries is also part of the strategy of many web interfaces that must run smoothly on mobile devices because the network bandwidth is the most restricted resource for these use-cases as well.
> Some ***"micro"*** implementations are available on the internet that just offer basic features with the focus on size.
> More on this can be found in links provided below.

### Implementing the web files

There is a special project available to develop these UI components.

This project is using a node.js / express server to mock some of the features of the webserver of a HomeDing device and offers building a minified version of the resulting files.

<https://github.com/HomeDing/WebFiles>


## Micro IDE

The Web UI implementation from the HomeDing library supports a minimal **Integrated Development Environment** (IDE)
that allows modifying text based files using any browser.

For Details see [Micro-IDE](/dev/microide.md).

## micro JavaScript Library

The minimalist JavaScript implementation that implements templates, function and data binding and is available to the HomeDing devices.

The functionality offers

* to create new controls from given templates into the web page
* load data given in a JSON format
* fill data into placeholders
* visualize data by using bars and charts
* capture user input that create actions on the internal elements
* apply changes to the data model
* send data back to the year device to update the configuration.

For Details see [Micro-JavaScript](/dev/microjavascript.md)

## micro JSON Parser

Parsing JSON formats in the browser is supported natively and was chosen for the payload of the services and the configuration. This is not a strictly requirement for the UI to use JSON in the devices and the service but it is a common approach that works well.

To handle JSON based files in a C++ programming environment a parser for this file format was used. The standard library ArduinoJson was used in the beginning but after some first implementation I found out that a streaming parser fits better to the problem of the HomeDing library.

The micro JSON Parser is implemented in the `MicroJsonParser` class.

For Details see [Micro-JSON](/dev/microjson.md)

## micro Hub and Store

The problem the Micro Hub and Store solves is passing data from various sources over to the UI components that implement the visualization.

When visualizing data structures in Web Applications the Flux pattern is known to be a good approach. A full featured implementation is maintained by facebook and was adopted to many reactive web applications.

For the UI of the HomeDing devices the most important features of the FLUX pattern are implemented within the miro hub implementation.
It was created by extending the original OpenAjax Hub idea and implementation that the OpenAjax Alliance published around 2007 as a minimal implementation of a publish and subscribe mechanism to exchange messages between libraries.

At these days a dedicated store was not part of the specification and is now added into the micro hub implementation.
This allows replaying data messages to the components based on the actual data in the store.


``` txt
actions -(publish)- > [data store] -> [filter] -> [library/component]
                          |                               |
                          +  <----- (subscribe) --------- +
```

The data store here is a native javascript structured data object representing a tree of nodes and key-values.

All data changes are serialized and passed through a filter that only forwards relevant changes to the component.
It is focusing on a one way data flow but updates initiated by the components can be processed as well.

A component that wants to participate in the data flows needs to register a callback function to the

The filter gets all data changes


## More reading material

* <https://css-tricks.com/a-minimal-javascript-setup/>
* <https://www.jotform.com/blog/11-minimal-javascript-frameworks-96416/>
* <https://github.com/fizker/minifier/blob/master/readme.md>
