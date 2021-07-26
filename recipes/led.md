# LED On/OFF Recipe

This recipe uses a single button as an input to switch a LED on and off.

This recipe can run this on a board like the [NodeMCU development boards](/boards/nodemcu)
with a button and a LED.

![NodeMCU with LED and Button](/recipes/led.jpg)

Here the FLASH button (D3) is used to switch on and off one of the LEDs (D4).

This is can be achieved by using 3 elements:

* The [digital input element](/elements/digitalin.md) captures the signal from the momentary button
* The [switch element](/elements/switch.md) handles the on/off logic
* The [digital output element](/elements/digitalout.md) controls the voltage level of the output pin with the LED.

![Elements used in led recipe](/recipes/ledflow.png)

The [digital input elements](/elements/digitalin.md) transfers the physical signal (LOW when the button in pressed) to a logical level (1 when the button is pressed) using the "inverse" property with 1.
The internal pullup is enabled to keep the input on HIGH when no button is pressed. On nodemcu boards there is also an external resistor doing this but on other pins this is required.

When the input signal goes low an action is sent to the switch for toggling.

The [switch element](/elements/switch.md) exactly was built to get the wanted on/off toggling. 
The onValue action will be send every time the output value is changing and the action with the actual value is sent to the digital output.

The [digital output element](/elements/digitalout.md) is configured to create a LOW level when the LED should light up.


## env.json Configuration

The `env.json` can be taken from the board description because it has no special logic for this recipe:

```JSON
{
  "device": {
    "main": {
      "name": "nodeding",
      "description": "nodeMCU board config",
      "reboottime": "24h",
      "button": "D3",
      "led": "D4",
      "I2C-SDA": "D2",
      "I2C-SCL": "D1"
    }
  },

  "ota": {
    "main": {
      "port": 8266,
      "passwd": "123",
      "description": "allow Over the Air Updates"
    }
  },

  "ssdp": {
    "0": {
      "manufacturer": "Matthias Hertel"
    }
  }
}
```


## config.json Configuration

```JSON
{
  "digitalin": {
    "in": {
      "description": "Input momentary button",
      "pin": "D3",
      "inverse": 1,
      "pullup": 1,
      "onLow": "switch/light?toggle=1"
    }
  },

  "switch": {
    "light": {
      "description": "Control light level",
      "value": 0,
      "onValue": "digitalout/led?value=$v"
    }
  },

  "digitalout": {
    "led": {
      "pin": "D4",
      "inverse": "true",
      "description": "Builtin LED on Port D4"
    }
  }
}
```

## See also

* [digital input element](/elements/digitalin.md)
* [switch element](/elements/switch.md)
* [digital output element](/elements/digitalout.md)
* [Dimmable LED recipe](/recipes/leddim.md)
