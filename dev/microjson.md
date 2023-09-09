# Micro JSON Parser

The JavaScript Object Notation format is often used on the web wehn implementing services and providing data.

Parsing JSON data is therefore available in the HomeDing library in an integrated class. It is a
streaming parser that has a very low memory footprint and avoids loading the whole text into memory. It is used for:

* parsing the configuration files.
* loading and parsing the results from web services.

 The implementation is using a very low memory consumption and has only a few limitations:

* There is only one callback entry point for the streaming parser, not multiple events.
* All data elements are treated as strings.
* no comments.
