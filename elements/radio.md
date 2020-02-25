# Radio Element

> #Draft ??? incomplete doku

::: excerpt radio
The Radio Element allows to control FM radio chips that is connected to the board.
:::

This element is not part of the collection of core elements because it relies on the external radio library that offers a unified api for multiple radio chips.



See <https://www.arduinolibraries.info/libraries/radio>

The library is available in the Arduino library manager. 

To make it available for configuration it needs to be included into the sketch compilation by activating it using the macro

```CPP
#define ... ???
```

The RadioDing example uses this element to create a remote activateable and controllable radio that uses the 
RDA5807M radio chip from RDA Microelectronics.

Look into the [Radio example](/examples/radio) for details.

## Properties

The properties correspond to the api given by the radio library. Hiwever not all chips will support all features.

**frequency** This is the FM frequency in MHz multiplied by 100. Use 8930 to tune for 89.30 MHz.

**volume** The output volume of the chip can be controlled in the range from 0 to 15.

**mono** The property set to 1 forces the radio chip in receiving in mono mode. This results in less noise under bad conditions.

**mute** The property set to 1 will mute the output signal. The element will automatically mute the chip when the volume is set to 0.

**softmute** The property set to 1 enables the softmute procedure that lowers the volume when no there is no current signal availabe.

**bassboost** The property set to 1 enables the bassboost functionality of the radio chip.

**onRSSI** this action is sent when the receiving signal strength is changing. The element polls the status of the chip.

The element also supports RDS signals for the chips that decode these signals.

**onStationName** When a new stationname was received this action is sent with the value of the station name. Some stations use this to give additional info so there might be also other text around.

**onRDSText** When a new full text was received this action is sent with the value of the zext message.

**onFrequency** When the frequency has changed this action is sent.

**onVolume** When the volume has changed this action is sent.

**onRSSI** When the RSSI of the current signal has changed this action is sent.


## See also

* [Radio example](/examples/radio)
* [radio library](http://www.mathertel.de/Arduino/RadioLibrary.aspx)