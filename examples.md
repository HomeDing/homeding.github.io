# Examples for the HomeDing library ???

There are some example projects coming with the Homeding library that can be loaded by using the Arduino examples menu. Some of them also require other libraries to be installed using the library manager.

In the very generic examples you can of course configure different combinations of elements for different purposes. You can find these as recipes that show how combinations of elements can be used to solve a specific problem.

**Important Notice:** Examples will not only require to upload the sketch. It is as also required to upload the files from the `data` folder to the filesystem.

This is explained step by step in the [Blink Example](examples/blink.md).

## Examples

These examples that come with the library need the nodeMCU board and no specific external hardware:

* [Standard](/examples/standard.md) This is the sketch and the web site for a NodeMCU or similar board. Many of the recipes work with this example.

* [Blink](examples/blink.md) This is a sketch that ...

* [minimal](examples/minimal.md) This example shows how to reduce the number of available elements and the embedded web site to fit into a ESP8266 board with only 1 MByte Flash memory.

* Dash ... This example shows how to implement a device that ...

* [Radio](examples/radio.md) this...

* Clock ...

* Water ... irrigation system for garden or balcony plants.


---

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



## See also

* [Boards](/boards.md)
* [Recipes](/recipes.md)


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

Example-Dev