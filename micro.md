# Implementing a minimalistic UI for usage in Things

There are many use cases where a web-based UI to an internet connected device is needed to provide functionality and services.

Therefore, the HomeDing library has implemented a web server that offers the following pages:

* A home page providing a static welcome screen and some further navigation links.
* A device specific UI that shows the actual state of the elements inside the device and offers triggering actions and modifying settings.
* A minimal web-based IDE page that allows changing the text based files of the web server including the configuration files.
* A generic diagram that displays all existing elements and the configured actions in between.

This functionality or at least a part of it is required even for even small HomeDing based devices and needs to be hosted in the available memory of the available boards.

The way how the web server is implemented is based on avoiding consuming server resources as much as possible and using the browser resources where possible.

> Implementing minimal javascript and CSS libraries is also part of the strategy of many web interfaces that must run smoothly on mobile devices because the network bandwidth is the most restricted resource for these use-cases as well.
> Some ***"micro"*** implementations are available on the internet that just offer basic features with the focus on size.
> More on this can be found in links provided below. 

## Using the Single Page Application (SPA) implementation pattern

In general, the model of loading a static web application into the browser and using Ajax calls to the web server to get data and trigger functionality is a good architecture for the web browsers available on desktops and phones. Modern frameworks like Angular, react or Vue give you a good set of tools to efficiently implement applications. However, the size of these applications tends to get huge.

In contrast to these full-blown frameworks the micro frameworks offer only the essential required functionality. They support better the current available boards for IoT things that will not have enough space nor enough power to host server web applications like those built in Angular, react or Vue.

The HomeDing library is also using this approach by using "micro" implementations to minimize the footprint of the downloaded files.

### Implementing the web files

There is a special project available to develop these UI components.

This project is using a node.js / express server to mock some of the features of the webserver of a HomeDing device and offers building a minified version of the resulting files.

<https://github.com/HomeDing/WebFiles>

## micro StyleSheet

The minimalistic CSS of the UI implementation can be found in the iostyle.css file that is created using the scss technology from the iostyle.scss. The SCSS compiler is only used to allow easy development using nesting the css rules and to use variables to apply the colors in a consistent way. Macros, enumerations etc. are not used to allow easy reading for all who know about css.

For Details see [Micro-Style](microstyle.md)

## micro JavaScript Library

The minimalistic JavaScript implementation that implements templating, function and data binding and is available to the HomeDing devices.

For Details see [Micro-JavaScript](microjavascript.md)

## micro JSON Parser

Parsing JSON formats in the browser is supported natively and was chosen for the payload of the services and the configuration. This is not a strictly requirement for the UI to use JSON in the devices and the service but it is a common approach that works well.

To handle JSON based files in a C++ programming environment a parser for this file format was used. The standard library ArduinoJson was used in the beginning but after some first implementation I found out that a streaming parser fits better to the problem of the HomeDing library.

The micro JSON Parser is implemented in the `MicroJsonParser` class.

For Details see [Micro-JSON](microjson.md)

## More reading material

* <https://css-tricks.com/a-minimal-javascript-setup/>
* <https://www.jotform.com/blog/11-minimal-javascript-frameworks-96416/>
* <https://github.com/fizker/minifier/blob/master/readme.md>
