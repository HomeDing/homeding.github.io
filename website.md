# Embedded Web Site for HomeDing Devices

## Web site structure -> another file

* A home page providing a static welcome screen and some further navigation links.
* A dashboard that presents all active elements and their actual data.
* A minimal web-based IDE page that allows changing the text based files of the web server including the configuration files.
* A generic diagram that displays all existing elements and the configured actions in between.


## Implementation Details

The development source for this web site can be found on github in the repository <https://github.com/HomeDing/WebFiles>.
In the examples you can find the `data` folders that include the files as they need to be stored on the device. 

There is a compilation from typescript into javascript and some packing of files required.

A standard nodejs based project helps creating these files and also give you a useful nodejs-express baserd server to make development easier.

The embedded web site itself 
is implemented using the modern Single Page Applications (SPA) approach for web applications. To make this fit into the limited space a `mirco` implementation is used that provides minimal HTML, JavaScript and CSS. They run smoothly even on mobile devices because they also need not much network bandwidth.

* `/index.htm` => A static page with some internal links and showing some system information.
* `/ding-info.htm` => Configuration overview, Visualize all elements
* `/ding-ide.htm` => web based IDE to list and edit files.
* `/ding-log.htm` => show current system log information
* `/setup.htm` => Network setup dialog
* `/panel.htm` => A graphical overview of the defined actions between elements 

* `/ft/*.svg` icons for filetypes, used in the ide.
* `/i/*.svg` icons for elements.
* `/src/*.ts` Typescript sources for micro ???.