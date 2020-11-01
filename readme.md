# HomeDing Library documentation project 

The HomeDing library is a low code to build small IoT devices
without the need for cloud services
connected to the local WiFi by using the Arduino development environment.

** This is the project containing documentation for the HomeDing library.**

## Install the library

To install the library use the Arduino library manager or clone the project <https://github.com/HomeDing/HomeDing> into your arduino library folder.

More on how to setup an IoT device can be found in
[Step by Step Bring your device to work](/stepsnewdevice.md)


## Development Server

This project is structured in the way that it can be used on the free 
Github documentation site at <https://homeding.github.io> where only static files can be hosted.

This project takes advantage on a client side Markdown to HTML conversion instead of using the builtin *.md to *.html conversion by Github.

So do not use links like ~~<https://homeding.github.io/elements.html>~~ but use <https://homeding.github.io/#page=elements.md>.


## Local Server

To run the website locally a nodejs + express version of a server is available implemented in `src/server.ts` file.

to use the server (in short):

* install nodejs
* checkout the project
* install dependencies using `npm i`
* compile typescript using `npm run build`
* start server using `npm start`

Start the browser using:

* <http://localhost:4001/index.htm> - start the web site
* <http://localhost:4001/search> -- search for `???` unfinished text marks 
* <http://localhost:4001/search?query=draft> -- search for anything
* <http://localhost:4001/search?query=%23input> -- search for tag `#input`

Any pull requests regarding this project is welcome.
