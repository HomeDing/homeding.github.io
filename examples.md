# Examples for the HomeDing library ???

There are some example projects coming with the Homeding library that can be loaded by using the Arduino examples menu. Some of them also require other libraries to be installed using the library manager.

In the very generic examples you can of course configure different combinations of elements for different purposes. You can find these as recipes that show how combinations of elements can be used to solve a specific problem.

**Important Notice:** Examples will not only require to upload the sketch. It is as also required to upload the files from the `data` folder to the filesystem.

This is explained step by step in the [Blink Example](examples/blink.md).

## Examples

These examples that come with the library need the nodeMCU board and no specific external hardware:

* **[Standard](/examples/standard.md)**
This example has a sketch and the web site for a NodeMCU or similar board. Many of the recipes work with this sketch.

* **[Minimal](examples/minimal.md)** 
This example shows how to reduce the number of available elements and use only a bare minimum part of the embedded web site so the whole solution fits into a ESP8266 board with only 1 MByte Flash memory.

* **[Radio](examples/radio.md)** This example is built as an extension of the standard example but shows how a special element that is only used for this sketch can be included.
There is also a special WebUI page for the remote control of the radio.

<!-- * [DevDing](examples/devding.md) 
This sketch...

* [Blink](examples/blink.md) This is a sketch that ...

* Dash ... This example shows how to implement a device that ...

* Clock ...

* Water ... irrigation system for garden or balcony plants.
-->


## Customizing the sketch.

Under normal conditions the [Standard Example](/examples/standard.md) offers a solution where all required elements are compiled and ready to be configured.

In some cases there will not be enough memory to upload or there is the need
to add some specific elements for a specific solution. This can be done using the following mechanisms.

### HOMEDING_INCLUDE_xxx Definitions.

The HOMEDING_INCLUDE_xxx definitions control what elements will be registered in the [Element Registry](ElementRegistry).

In the *.ino file of every example you can find a list of HOMEDING_INCLUDE_xxx definitions that can be commented out or activated to specify what elements are later available for configuration. By disabling the definitions you can remove individual elements when they are not required to save program space.

The [Minimal Example](examples/minimal.md) is derived from the standard example by just disabling elements this way.

Some elements that require a specific external library that are disables in the [Standard Example](/examples/standard.md) can be included this way.



### Implement local elements.

In the folder of the script you can add  some elements that are not part of the library but will also be compiled together with the sketch and therefore are also available for configuration.

The [Radio Example](examples/radio.md) shows how to include a very specific element for using FM radio chips.

The [DevDing Example](examples/devding.md) is used to implement some additional elements for problem analysis. It is instrumented for using the (limited, software based) remote debugger. New elements can be implemented by using the provided empty MyElement implementation as a boilerplate. 


 <!-- ??? ---

OLD


These examples require a specific hardware setup like sensors or displays to solve the use case.

* ... With oled display
* ntpclock
* ... With dht
* with DSTimeElement
* Dash button wake-up

These examples are for a minimal board like ESP-01 or Sonoff basic devices with 1 MByte Flash only

Old:

**[Blink](examples/blink)** This very simple example needs just a ESP8266 board and can be used to check the correct setup of the environment.

**[Standard](examples/standard)**

* [PWM](examples/pwm)
* [Radio](examples/radio)
* [minimal](examples/minimal)
* [full](examples/full)


- [The HomeDing - HomeBlink Example](examples/blink)

- [The build-in WebServer](webserver)
- [The build-in Web-Services](webservices)




## Recipes




# NTPClock with display Example

Example-NTPClock

In addition to the Base Example this configuration requires a display where the current time is shown.

+ Display Elements
+ Display Adapter


[HomeBlink](Example-HomeBlink.md)

[Example-PWMLED](Example-PWMLED.md)

Example-DHT22

Example-Display

Example-RFSend

Example-Sonoff

Example-LOG

Example-Dev -->

## See also

* [Boards](/boards.md)
* [Recipes](/recipes.md)

