# Witty-Board

The Witty board is a cheap ESP8266 board that has a RGB LED, a LDR sensor and an input button. It can eb used on a breadboard.

![witty board 1](/boards/witty1.jpg)
![witty board 2](/boards/witty2.jpg)

## 2 Boards

The witty board uses 2 separate boards that are connected through some connectors. This allows using the board 
with or without the lower programming board.

For programming mode both boards need to be connected (the right way) and the USB cable must be connected to the lower board.
After programming it is possible to used the upper board only by using the USB connector for power supply only.

The upper board hosts a momentary switch at GPIO4(D2), the LED and a LDR sensor. The 
ESP8266-12F used offers 4 MB of flash memory.

The lower board hosts the CH340 USB to Serial bridge chip, the RST momentary switch and the GPIO0(D3) FLASH momentary switch.

Here are the signals on the connectors:

![witty pins](/boards/wittypins.png )


## System configuration

The device settings in env.json may look like this:

```JSON
{
  "device": {
    "0": {
      "name": "witty",
      "reboottime": "24h",
      "logfile": 1,
      "led": "D0",
      "button": "D5",
      "description": "Witty board with RGB LED and LCD"
    }
  }
}
```


## RGB LED on board

There is a RGB LED on the board that is directly driven by the following GPIO pins:

| Color | Pin        |
| ----- | ---------- |
| red   | GPIO15(D8) |
| green | GPIO12(D6) |
| blue  | GPIO13(D7) |

To reduce the power consumption the LEDs are not consuming the possible full ??? 20 mA per channel but the regulators reduce the current to about ??? mA when maximum level is given by the GPIO pins. This allows using the RGB Led directly attached to the GPIO pins.

This is a good solution for using the LED as an indicator but not as a source of light.

It can be driven by the LightElement using the following configuration:

```JSON
{
  "light": {
    "l": {
      "loglevel": 2,
      "pin": "D8,D6,D7",
      "value": "x203050"
    }
  },
  "analog": {
    "0": {
      "reference" : 300,
      "onvalue": "device/0?log=analogvalue=$v",
      "onreference": "device/0?log=analogref=$v"
    }
  }
}
```

## LDR

const int LDR = A0;


Platine ein LM1117 3,3 V Spannungsregler, welche die eingehende 5 V USB-Spannung runterregelt. Zu guter letzt ist auf der Platine noch ein Taster drauf.



Taster: GPIO4(D2)
Rote LED: GPIO15(D8)
Grüne LED: GPIO12(D6)
Blaue LED: GPIO13(D7)
LDR: Analoger Eingang A0

Freie GPIOs:
GPIO0(D3)
GPIO2(D4)
GPIO5(D1)
GPIO14(D5)




## See also

* https://blog.moneybag.de/fhem-witty-board-einfache-iot-funktionen-schnell-gebaut/
* https://www.faranux.com/product/witty-cloud-board/

