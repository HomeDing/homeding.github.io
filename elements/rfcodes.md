---
title: RFCodes Element
id: nn
tags: ["Element"]
excerpt: >
  The **RFCodes Element** is used send and receive RF signals to simple switching and dimming devices.
---

# {{data.title}}

::: excerpt {{data.id}}
{{data.excerpt}}
:::

This Element is part of the RFBridge Example and not available in the core library elements. To use this element you can use the RFBridge Example or have to copy it into your sketch folder.

This element is built upon the tabRF library that needs to be installed separately.
This library allows specifying multiple rf codes and their timing and can transmit and receive/decode these codes
by using RF433 transmitters and receivers.

## Web UI for the RFCodes Element

There is a dedicated card for this element available that allows sending 2 codes usually to switch a socket on and off.

<!-- ![DigitalOut Web UI](/elements/rfcodesui.png) -->

## Element Configuration

The following properties are available for configuration of the element.

<object data="/element.svg?rfcodes" type="image/svg+xml"></object>

Switchable plugs and dimmers are typically controlled by a ON/OFF code that also can used for UP/DOWN of dim level or moving of shades.
Therefore every element supports up to 2 codes that can be send over the RF transmitter.

The following properties are available for configuration of the element:

**pin** - This property defines the pin that is connected to the RF transmitter.

**codeon** - This property specifies the code that is sent when a action with a value > 0 is received.

**codeoff** - This property specifies the code that is sent when a action with a value == 0 is received.

## Read more about 433 MHz units

You should not use a transmitter or receiver without an antenna
as an wire antenna with the correct length makes a huge difference.

The easiest way is to attach a simple wire with lamda/4 length = 17.3 cm.

Or use a helix with a wire of about lamda/8. This is sold with many receivers and transmitters.

You can also build a dipol antenna as shown here: <https://crycode.de/diy-433-mhz-dipol-antenne>

https://wolles-elektronikkiste.de/433-mhz-funk-mit-dem-arduino

https://www.sweetpi.de/blog/329/ein-ueberblick-ueber-433mhz-funksteckdosen-und-deren-protokolle

chip: HS1527
1:31
1:3
3:1

https://www.youtube.com/watch?v=9JBkpcDb5wI

rc-switch

## ASK and OOK modulation

- <https://en.wikipedia.org/wiki/Amplitude-shift_keying>
- <https://en.wikipedia.org/wiki/On%E2%80%93off_keying>

## See also

- <https://www.mikrocontroller.net/articles/IRMP>

## RxB8 Receiver

t.b.d.

## RxB12 Receiver

A receiver based on the chip SYN470R.

It is using a crystal for getting a intermediate frequency so the receiving frequency is very accurate.

http://www.eeant.com/datasheet/et-rxb-12.pdf

+------------------------------------+
| |
+--+---+------------+---+----+----+--+
Ant GND VCC Data Data GND

## XY-MK-5V receiver

This receiver has a adjustable, resonant circuit that can detect 433 MHz frequencies. A precise crystal is missing
and also the receiving quality is poor under several conditions.

See also https://blog.thesen.eu/433mhz-empfaenger-fuer-arduino-co-rxb12-vs-xy-mk-5v/

My assumption: prefer any crystal based receiver.

## Receiver Modules

Common:

- Modulation Mode : ASK / OOK
- Operating Frequency : 433.92 Mhz

| Type            | VCC         | Remarks                                               |
| --------------- | ----------- | ----------------------------------------------------- |
| RxB6            |             |                                                       |
| RxB8            | 4.5 - 5.5 V | Current: 9.6 mA                                       |
| RxB12           | 3.3 - 5.5 V | Current: 3.8 - 4.1 mA, Best quality for me on ESP8266 |
| RFsrx882        | 2.4 - 5.5 V |
| RFsrx887        |
| RxB6            |
| RF-5V, XY-MK-5V |

## Transmitter Modules

| Type     | VCC       | Remarks |
| -------- | --------- | ------- |
| RFstx882 | 1.2 - 6 V |

433.92 Mhz
Key Feature
* Modulation Mode : ASK / OOK
* Operating Voltage : 4.5~5.5 V
* Operating Current : 9.6 mA
* Data Rate : 2.4 Kbps
* Sensitivity : -114 dbm
* Operating Temperature : -30~+85 ℃
* Working Distance : 300 m
* Dimension : 31.5*13.6*5 mm

## read also:

https://hoeser-medien.de/2020/05/hoerrmann-supramatic-mit-esp8266-tasmota-und-433-mhz-ansteuern/

## HC12

https://arduino-projekte.webnode.at/meine-projekte/parametrieren-des-hc-12/

## RFM69HW

```txt
"ia1": {
  "description": "All-I On",
  "onClick": "rfcodes/0?value=it2 s_#_###__#_#__#_##_#_###_#_#_____x"},
"ia0": {
  "description": "All-I Off",
  "onClick": "rfcodes/0?value=it2 s_#_###__#_#__#_##_#_###_#_#_____x"},


"i3": {
  "onClick": "it2 s_#_###__#_#__#_##_#_###_#__#__#_x",
  "codeOff": "it2 s_#_###__#_#__#_##_#_###_#_____#_x",
  "description": "Light Balcony"
},
"a1": {
  "onClick": "it2 s_##__##__#__####____##__#__#____x",
  "codeOff": "it2 s_##__##__#__####____##__#_______x",
  "description": "Light balcony 2"
},
"a2": {
  "onClick": "it2 s_##__##__#__####____##__#__#___#x",
  "codeOff": "it2 s_##__##__#__####____##__#______#x",
  "description": "fountaine"
},
"a3": {
  "onClick": "it2 s_##__##__#__####____##__#__#__#_x",
  "codeOff": "it2 s_##__##__#__####____##__#_____#_x",
  "description": "spare"
},
"aa": {
  "codeOff": "it2 s_##__##__#__####____##__#_____#_x",
  "codeOff": "it2 s_##__##__#__####____##__#_#_____x",
  "description": "All off outside"
},
"d1": {
  "onClick": "it1 B111101111000",
  "codeOff": "it1 B111101111001",
  "description": "spot"
}
```
