# Radio Example

> #Draft

The radio example shows how to build a more complex internet connected device that has a dedicated
element for controlling a FM radio chip (and a I2C bus controllable amplifier)

![radio](examples/radio.jpg)
![radio](examples/radio2.jpg)
![radio](examples/radio3.jpg)

The hardware required for this example are:

* a NodeMCU board with ESP8266
* a radio chip like the RDA5807 that can receive FM and is controllable using the I2C bus
* a mobile phone headset (at minimum) or
* an amplifier and speakers.
* The TPA2016 amplifier chip is supported as well by this example
* some buttons or a rotary encoder
* a display like the LCD

The elements used in this example are from the standard element set:

* rotary encoder or digitalin element
* menu element
* value elements

The elements that come with the example are

* radio element
* TPA2016 element

## Using a Rotary encoder

Using a rotary encoder is a good option to combine a twist and push input using 3 digital inputs to achieve a good usability.


![rotary encoder](examples/rotary.jpg)
![rotary encoder side](examples/rotaryside.jpg)
![rotary encoder back](examples/rotaryback.jpg)

In the pictures you can see how the encoder is connected using a self-made PCB that provides a connector for later easy assembling. The connector has the push button and the 2 rotary signals all closing to a common ground signal.

When using the closing to ground approach the builtin pull up resistors of the chip can be used instead of a external resistor.

* push-button => D7
* rotary1 => D6
* ground => GND
* rotary2 => D5 

When the turn is in the wrong direction you just have to switch the two rotary signals.

## Using the LCD 

The LCD is one of the standard display types that is used in many Arduino solutions. Here a backpack is added to allow using the LCD display on the I2C bus.

The LCD uses 5V power but accepts 3.3 V signals in the I2C bus. 

![LCD](examples/lcd.jpg)
![LCD](examples/lcdback.jpg)

* GND => GND (black)
* VCC => VIN (red) (the 5V directly connected to the USB adapter) 
* SDA => D2 (blue)
* SCL => D1 (yellow)

## Base PCB

I do not need many radios so I decided to use a prototype PCB as the base. Just large enough to hold all mechanically together.

![board](examples/board.jpg)
![board view 2](examples/board2.jpg)

## Radio board

The RDA radio board is not following the typical 2.54 grid but has 2mm spacing connectors. By soldering some wires the way you can see on the pictures the bopard can be soldered to the base PCB.
The wires on top are still visible during assembly for robustness and are later cut away (before applying power).
I added a 100nF capacitor next to the radio.


![radio chip](examples/rda.jpg)
![radio chip](examples/rda2.jpg)
![100nF capacitor](examples/100nf.jpg)

```TEXT

// http://lcddevice/$board/radio/r?volume=1
// http://lcddevice/$board/radio/r?volume=12
// http://lcddevice/$board/board/0?loglevel=1
// http://lcddevice/$board/radio/r?softmute=0
// http://lcddevice/$board/radio/r?softmute=1

// http://lcddevice/$board/value/frequency?value=10390
// http://lcddevice/$board/value/frequency?value=8930
// http://lcddevice/$board/value/frequency?value=9560
// http://lcddevice/$board/value/frequency?value=9440
```

## Example configuration

```JSON
{
  "rotary": {
    "0": {
      "description": "Rotary Input",
      "pin1": "D5",
      "pin2": "D6",
      "step": 1,
      "onchange": "value/frequency?up=$v"
    }
  },
  "digitalin": {
    "0": {
      "description": "vol up",
      "pin": "D7",
      "inverse": "true",
      "pullup": "true",
      "onhigh": "value/volume?up=1",
      "onlow": "value/volume?up=1"
    }
  },
  "value": {
    "volume": {
      "min": 0,
      "max": 15,
      "value": 3,
      "onchange": "radio/r?volume=$v"
    },
    "frequency": {
      "min": 8700,
      "max": 10800,
      "step": 10,
      "value": 8930,
      "onchange": "radio/r?frequency=$v"
    }
  },
  "menu": {
    "0": {
      "loglevel": 2,
      "onValue": "device/0?log=menu-v:$v"
    }
  },
  "radio": {
    "r": {
      "description": "A Radio",
      "loglevel": 2,
      "volume": 0,
      "onVolume": "displaytext/v?value=$v",
      "onFrequency": "displaytext/f?value=$v",
      "onStationName": "displaytext/text?value=$v",
      "onRDSText": "device/0?log=text:$v",
      "onRSSI": "displaytext/rssi?value=$v"
    }
  },
  "displaytext": {
    "f": {
      "x": 0,
      "y": 0
    },
    "v": {
      "x": 8,
      "y": 0
    },
    "rssi": {
      "x": 12,
      "y": 0
    },
    "text": {
      "x": 0,
      "y": 1
    }
  }
}
```