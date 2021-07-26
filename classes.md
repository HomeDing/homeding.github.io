# Class implementation documentation

Beside the Element implementations in the \<type\>Element classes there are some classes that implement common functionality or utilities:


### Board.cpp

The Board class helps creating and organizing the configured elements and dispatching actions. There are also some utility functions implemented in this class.

### BoardServer.cpp

Implementation of the web server request handler to handle the IoT board REST services and the built-in web pages.

### displays/DisplayAdapter.h

Abstract class, defining the functionality the HomeDing requires to be implemented for a local attached displays.
The display implementations derive from this class.


### Element.cpp

This is the base class for all Elements. It also implements some generic and utility functionality.

See [Element Class Definition](/elementclass.md)


### FileServer.h

Implementation of the web server request handler to handle access and upload of the files on the SPIFFS file sysem.


### HomeDing.h

This file organizes including the elements into the sketch. This is described in detail in the [Element Class Registration](/elementregistry.md).


### ElementRegistry.cpp

The Element Registry knows all the Element classes that can be configured.
This is described in detail in the [Element Class Registration](/elementregistry.md).


### Logger

The Information, Errors and Traces that are produced during runtime are routed through this class inElement Registry knows all the Element classes that can be configured.
In case the logging feature of the device is switched on the errors are also stored to the log files.

See: [Device Logging](/logger.md)


### MicroJsonComposer.cpp

This class helps producing a JSON formatted string used in the responses from server calls.  


### MicroJsonParser.cpp

This class helps parsing JSON formatted strings used to read config files and web requests.  


### WireUtil Class

This class implements some of the common procedures that help implementing I2C based communication to sensors and other chips.

Often I2C adaptions are using a (logical) register based access pattern.
Here a data centric access is implemented that separates reading / writing data to a buffer from interpretation of the data in the buffer.
That fits well to those processor implementations that support I2C data exchange through dma implementations.

See: [Using the I2C bus](/i2c.md)


