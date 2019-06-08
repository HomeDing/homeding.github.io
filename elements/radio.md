# Radio Element

The RadioElement is used to control a FM radio chip that is connected to the board.

It is not part of the  collection of core elements because it relies on the external radio library that offers a unified api for multiple radio chips.

See <https://www.arduinolibraries.info/libraries/radio>

The library is available in the Arduino library manager. 

To make it available for configuration it needs to be included into the sketch compilation by activating it using the macro

```CPP
#define ... ???
```

The RadioDing example uses this element to create a remote activateable and controllable radio that uses the 
RDA5807M radio chip from RDA Microelectronics.

Look into the [Radio example](exampleradio) for details.

## Properties

**frequency** This is the FM frequency in MHz multiplied by 100. Use 8930 to tune for 89.30 MHz.

**volume** The output volume of the chip can be controlled in the range from 0 to 15.

**mono** The property set to 1 forces the radio chip in receiving in mono mode. This results in less noise under bad conditions.

**softmute** 

**mute** 

**bassboost**



**onRSSI** this action is sent when the receiving signal strength is changing.

The element also supports RDS signals for the chips that decode these signals.

**onStationName**

**onText**



## See also

* Radio example
* radio library