# RFSend Element

::: excerpt rfsend
The RFSendElement is used send RF signals triggered by actions sent to the element.
This can e.g. be used control rf based power switch sockets.
:::


This element is built upon the tabRF library that allows specifying rf codes and their timing by using a declarative table.
Multiple codes can be specified if you do have switchable plugs with different codes.

## Web UI for the RFSend Element

There is a dedicated card for this element available that will be used on the web server config and landing pages:

<!-- ![DigitalOut Web UI](/elements/rfsendui.png) -->

## Element Configuration

![RFSend API](/elements/rfsendapi.png)

Switchable plugs and dimmers are typically controlled by a ON/OFF code pain that also can used for UP/DOWN of dim level or moving of shades.
Therefore every element supports up to 2 codes that can be send over the RF transmitter.

The following properties are available for configuration of the element:

**pin** - This property defines the pin that is connected to the RF transmitter.

**codeon** - This property specifies the code that is sent when a action with a value > 0 is received.

**codeoff** - This property specifies the code that is sent when a action with a value == 0 is received.

## Read more at

https://www.sweetpi.de/blog/329/ein-ueberblick-ueber-433mhz-funksteckdosen-und-deren-protokolle


chip: HS1527
 1:31
 1:3
 3:1

 https://www.youtube.com/watch?v=9JBkpcDb5wI

rc-switch


## See also

* <https://www.mikrocontroller.net/articles/IRMP>
* 