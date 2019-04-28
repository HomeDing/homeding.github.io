# Building your own connected Things made easy

It is fascinating to see the power of microprocessors growing while costs go down.

As we have seen in the Arduino movement it is possible to get all you need to build your own gadgets and appliances without investing much into the equipment you need.

For the simplest Things a board and USB cable is all you need beside the free Arduino program.

With the classic Arduino UNO board, it is possible to build wonderful gadgets that run on their own supported by many libraries to handle sensors, sound, light, motors, displays...

Today also more powerful processors and boards are available for even less money offering much more processing power and adding wifi networking. Here the ESP8266 on the NodeMCU board is the most famous solution available and is perfectly integrated into the Arduino environment. More chips and boards are coming even more powerful adding also Bluetooth and High-Quality Sound solutions.

The HomeDing project is exactly starting from this situation and offers an out of the box solution building these types of Things that retain their power when connected to the internet at home.

## Requirements and Design Rules

To make building your own connected things easy the following Design was chosen:

* Things implemented using the Homeding library are designed to be used in a home network.
* No central hub system is required to make it easy to start building a Thing on its own.
* Things are self-contained and need no support or connectivity to a cloud solution. Using cloud services is a option only.
* Every Thing directly supports WLAN for the home network access.
* It is using the simple protocol REST over http that can directly be used by every browser.
* For many simple solutions it is possible to start without actively programming, just configure the functionality.
* Open and extendable.
* Optimized for a small footprint not for maximal performance.
* Build by using the Arduino programming experience.
* It is easy to build your own Functionality wrapped in an Element implementation and to contribute new Elements to the library.

As a welcome side effect, the HomeDing library will be documented to make it easy for beginners to understand the basics of the various technologies used and for advanced programmers to understand the architecture and how to contribute to the community around it.

ESP8266 and especially the NodeMCU board was chosen for the first chip and system to be used because it is available in the Arduino programming environment as well as being available on a good price/power ratio.

While the core library is portable to other processors there will be some ESP8266 specific Elements to support the specific features of the chip.

## The Ding

"Ding" not only sounds friendly, it is the German word for "Thing". As this library targets building small devices for a typical home environment "HomeDing" chosen for the project name.

## POC

This concept paper was written together with a “Proof of concept” implementation to ensure not only having a paper concept.

This POC implementation is available on GitHub at [https://github.com/HomeDing/HomeDing](https://github.com/HomeDing/HomeDing).

Once it is in a valid beta state it will be continued here.

### Next: [Software Architecture](/concepts/paper02)