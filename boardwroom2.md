# Board Review of Esp-Wroom-02 Modul ESP8266 with OLED and 18650

![boardwroom2.png](boardwroom2.png)

This board is offered on eBay by some local and Chinese vendors and combines a ESP8266, a OLED display a „joystick“ type of button and the hardware to charge and use an LI-ION standard 18650 battery.

A battery holder is on the back.

## Overview table

| Connector | Feature             | pin          |
| --------- | ------------------- | ------------ |
| AD        | connector           | Analog input |
| D4        | connector           | digital GPIO |
| D8        | connector           | digital GPIO |
| D9        | connector           | digital GPIO |
| D10       | connector           | digital GPIO |
| ---       | I2C bus for display | 60 (=0x3c)   |
| ---       | SDA                 | GPIO5        |
| ---       | SCL                 | GPIO4        |
| ---       | Display size        | 128 * 64     |
| D3        | Button Left         | GPIO0(D3)    |
|           | Button Right        | Reset        |
|           | Button UP           | GPIO12(D6)   |
|           | Button Down         | GPIO13(D7)   |
|           | Button Press        | GPIO14(D5)   |
|           | green LED           | GPIO16(D0)   |

## Features

It is a board that combines some of the standard components available with libraries for the ESP8266 chip
in a robust and reliable way.

Because it comes with a LI-ION standard 18650 battery holder and a power management for Li-ION charging it is portable for the time the battery offers power (> 8h).

The display is using the OLED technology and the SSD1306 chip is attached using the I2C bus. A library for driving this chip is available "ESP8266 and ESP32 Oled Driver for SSD1306 display". It Supports 128x64 and 182x32 displays.

There is a green LED at GPIO16 (D0).
The blue LED on the ESP-12 can also be used GPIO2(D4).

## Critics

### joystick

The joystick button is bound to 4 input pins and to the reset pin as well this makes this button almost useless for games and menu selection functionality because it will happen by accident that the reset direction (move to the right) is activated.

### No real Low Power

The OLED display is good quality, but it is taking some power even when not used.
That makes this combination almost useless for pure battery appliances when a long lifetime is required.

### I2C / WIRE Bus

The internally used I2C Bus for the connection with the OLED is not available at a connector. Therefore it is difficult to add more I2C bus devices to this bus.

# Board configuration

The display configuration is the only specific entry in env.json:

```JSON
{
  "device": {
    "0": {
      "name": "wroomding",
      "reboottime": "1h",
      "description": "Esp-Wroom-02 Modul ESP8266 with OLED and 18650"
    }
  },

  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' OTA Updates"
    }
  },

  "ssdp": {
    "0": {
      "ModelUrl": "https://www.mathertel.de/Arduino"
    }
  },

 "DisplaySSD1306": {
    "0": {
      "address": "60",
      "SDA": "D1",
      "SCL": "D2",
      "height": 64
    }
  }
}
```
