# Development Example

> #Draft

This example is very like the standard example but has some add-ons that help during development.

Here these add-ons are described here:

## Sketch file

The sketch file contains some source code to initialize the remote debugging using the GDBStub implementation and setting the logging level to the TRACE level right at the start.

this will be modified by the logging level in the device configuration shortly after but enables  tracing in the configuration phase of the device.



## Template Element

This is an Element implementation that only contains the empty functions and some additional information as comments that help implementing new Elements.

The 2 files (TemplateElement.*) can be copied / renamed and the class name should be adjusted as well.

Then implement the inner part of the set, loop and other functions as required.


## Diag Element

This element was developed to inject some functionality when a device starts up.

It lists some interesting information about the system to the log and then scans the I2C bus for existing devices.


