# 2 channel relay

:::excerpt
This board can switch 2 relay outputs using a ESP-01 board.
:::

![2 channel relay board](/boards/2-channel-relay.jpg)

2-channel relay is required for some use cases where devices like fans offer multiple speed modes or curtain / shade control.


This board itself offers some options that may be found at other boards too:

* The DC input can be 5V or 12V. The option must be selected using a jumper.

  When using 12V an additional regulator is reducing to 5 V as each relay is driven by 5V.

* The first relay is controlled by the GPIO0.

* The second relay is controlled by the GPIO2.

* The GND and +5V is available on pins.
  
* There are pins that give access to more of the ESP-01 pins.

  In this case the TX and RX signals are available via an 1k resistor.

As there are many boards like these even with 4 relay output this may vary from board to board.


## Flashing

Enable the ESP-01 component to be used with the HomeDing environment by flashing the minimal sketch.

Details on this can be found in the [ESP-01 board](/boards/esp01.md) description.

As the minimal sketch includes many elements for implementing switches this can be used for relay very well.


## System Configuration

In the **env.json** file the device specific settings must be configured.

* The `led` configuration in the device should not be used to avoid switching the relay while booting.
* A `button` is not available.
* To enable timers a ntp time source is used here as well. This can be let out when no real-time is required for a specific use case.
* enable savemode after full configuration.
 
```JSON
{
  "device": {
    "0": {
      "name": "relay02",
      "title": "Fan control",
      "description": "board with 2 relay that can be switched independently.",
      "loglevel": 0,
      "savemode": "false",
      "homepage": "/ding.htm"
    }
  },
  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' OTA Updates"
    }
  },
  "ntptime": {
    "0": {
      "zone": "CET-1CEST,M3.5.0,M10.5.0/3"    }
  }
}
```

## Relay Configuration

This is a very simple configuration for **config.json** that enables switching each relay on its own with HIGH as the default level.

```JSON
{
  "switch": {
    "gpio0": {
      "description": "Switch to control GPIO0",
      "value": 1,
      "onValue": "digitalout/gpio0?value=$v"
    },
    "gpio2": {
      "description": "Switch to control GPIO2",
      "value": 1,
      "onValue": "digitalout/gpio2?value=$v"
    }
  },
  "digitalout": {
    "gpio0": {
      "pin": "0",
      "inverse": "false"
    },
    "gpio2": {
      "pin": "2",
      "inverse": "false"
    }
  }
}
```


## Shade or Blinds Control

Many shades or blinds can be controlled with a motor.
To control the direction there is usually a motor that has 2 power connections, one for each direction of rotation.
It must be ensured, that only one of them is actually connected.

This  board with 2 relays can be used with the following wiring where the first relay controls the first power line and the second relay only can forward power to the second power line when the first relay is in off state.

Picture ???

<!-- https://www.clauss-markisen.de/uploads/media/2014-01-CM-Anschlusshinweise.pdf -->
<!-- There is a special Element that controls 2 relays for this purpose that also controls and tracks the time the motor requires to open or close completely or partly. -->
<!-- ShadeControlElement ??? -->

The shade control element allows controlling 2 outputs for motors to open or close a shade, curtain, window or shutter. For this purpose the element
knows roughly how many seconds are required to fully open or close and can automatically find the direction and time needed to open to a specific percentage. This is not exact control but allows e.g. to close a shutter for half the way.

For manual control the Shade Control Element implements some actions that support different number or kind of buttons.

"duration" : "8"

One Button

down->stop->up->stop->

A click on the button can create a "next" action to advance. When the max-duration or 0 is reached in up or down direction the shade control element automatically advances to the next stop state. 


## Fan Control

A cooling fan that has 4 levels of speed (0,1,2,3)  air fans

## See also

* [ESP-01 board](/boards/esp01.md)
* [DigitalOut Element](/elements/digitalout.md)


## Tags

#board
