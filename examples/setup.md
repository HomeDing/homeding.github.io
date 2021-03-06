# Setup the Arduino environment

> #Draft ???

To upload one of the examples or implementing your own devices using the Homeding library your environment must be prepared. 
The following steps are required to use ESP boards:

## Arduino development environment

There is a good tutorial about how to setup the Arduino environment at <https://???> that you should follow when not having setup any Arduino environment yet.

## ESP8266 programming support

To enable "verify" and "upload" programs to a ESP8266 based board you can follow the instructions at
 <https://arduino-esp8266.readthedocs.io/en/latest/installing.html> ???

It takes some time but runs smoothly from my experience. This enables you to verify and upload sketches to the ESP8266 boards.

Be sure that e.g. the Blink sketch can upload and runs. You can find it in the examples for the ESB8266 board.

Now you can use the board settings
...


## Install the data Upload Tool

...

## Install the HomeDing Library

Open the Library Manager in Arduino Environment and search for the HomeDing library and install it.

Now the library implementation and the examples are available to be used.


## Connect the Board

The NodeMCU boards all come with a USB port that just needs to be connected to any of the computer USB ports.

Please watch out for messages about a missing driver that you might need to instal. As these boards have different USB bridge chips you might need to find out yourself. Most of the USB bridge chips are detected and driver download starts automatically in most cases.

## Adjust the Configuration

When you use different boards or processor types in the Arduino Environment you have to check that the settings for the board are correct.

For a NodeMCU Board the settings should look like this:

![NodeMCU Configuration](/stories/arduino-boardoptions.png)

You may have to adjust the USB port as this varies on different computers.


## Next steps

After having setup your environment and having configured the board correctly you can start using one of the examples providing together with the HomeDing library.

## See also

* ESP8266 board adoption for Arduino: <https://arduino-esp8266.readthedocs.io/en/latest/index.html>
