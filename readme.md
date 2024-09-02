# HomeDing Library Documentation

[![Check Markdown links](https://github.com/HomeDing/homeding.github.io/actions/workflows/md-linkcheck.yml/badge.svg)](https://github.com/HomeDing/homeding.github.io/actions/workflows/md-linkcheck.yml)

The HomeDing library is a low code approach to build small IoT devices
without the need for cloud services to be used.

The devices connect to the local WiFi and offer a direct control using a standard web browser.

Implementation is done by using the Arduino development environment.

**This is the project containing documentation for the HomeDing library.**

[Start browsing the documentation](https://homeding.github.io/index.htm)
using index.htm.

## Install the library

To install the library use the Arduino library manager or clone the project <https://github.com/HomeDing/HomeDing> into your arduino library folder.

More on how to setup an IoT device can be found in
[Step by Step Bring your device to work](https://homeding.github.io/steps/newdevice.md)


## Development Server

This project is structured in the way that it can be used on the free
Github documentation site at <https://homeding.github.io> where only static files can be hosted.

This project takes advantage on a client side Markdown to HTML conversion instead of using the builtin \*.md to \*.html conversion by Github.

The file **/index.htm** provides the "shell" for the markdown files by loading and transforming them before beeing displayed. The
**/toc.md** is used for the navigation on the left side that can be opened by the menu icon in the menubar.

Use links like <https://homeding.github.io/elements/index.htm>.
