# Embedded Web Site for HomeDing Devices

Every device can be directly reached by  using a standard browser thanks to the embedded web site and the built-in web server.

Implementing a web site that fits into the very limited space of the flash memory is a challenge on its own but can be solved by using the power of the current browsers.

To make development of this web site less painful a nodejs based web site project is available that also simulates configured elements to a certain degree.

The structure of the provided web site with details on the individual pages can be found in [websitemap](websitemap.md)


## Web site structure -> another file

* A home page providing a static welcome screen and some further navigation links.
* A dashboard that presents all active elements and their actual data.
* A minimal web-based IDE page that allows changing the text based files of the web server including the configuration files.
* A generic diagram that displays all existing elements and the configured actions in between.


## Technology selection

Some reasonable decisions have to be made today (2019) so that all current browsers can be used to run the embedded web site.

**Images** are implemented using SVG format wherever possible. It is nicely supported by all browsers today so no fallback needs to be implemented. As a welcome effect the SVG files for icons are smaller than bitmap based images.

See
<https://caniuse.com/#feat=svg>

**Scripts** are implemented in JavaScript using the ES5 version or by using Typescript that is compiled and minified to ES5 version.

See
<https://caniuse.com/#feat=es5>

**CSS Style sheets** are implemented by using SCSS files beeing compiled to stndard CSS. This allows structuring and commending the source code as well as  minimizing the output.

**Promises** are really helpful when building SPA web applications using REST services. They are supported by most browsers and can be emulated for IE11 with a reasonable space.

A polyfill for IE11 is provided.
 
See
<https://caniuse.com/#feat=promises>


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