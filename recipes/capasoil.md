---
title: Capacitive Soil Moisture Sensor Recipe
---

# {{data.title}}

:::excerpt water
This recipe shows how to combine a Capacitive Soil Moisture Sensor with the [Analog Input Element](/elements/analog.md) and a LED. 
:::

The Capacitive Soil Moisture Sensor is one of the sensors that creates a analog voltage level based on the surrounding moisture of the sensor.

To capture this value the analog output pin of the sensor just needs to be connected to the **Vin** or **A0**
that is giving the input for the [Analog Element](/elements/analog.md).

You will find out that without any surrounding moisture the raw analog level is high in my case about the value of 700
and gets lower to about 300 when some moisture is around.

The mapping feature of the [Analog Input Element](/elements/analog.md) allows deriving a value between 0 and 100 from that range in the reverse direction
meaning percentage of existing water.

When the percentage drops below the given reference value in the configuration
an onReference action with a value of 0 is triggered that will switch the LED on GPIO D0.

```json
{
  "analog": {
    "0": {
      "reference": "20",
      "onvalue": "device/0?log=value=$v",
      "onlow": "device/0?log=Need Water",
      "readtimems": 5000,
      "mapInMin": "750",
      "mapInMax": "200",
      "mapOutMin": "0",
      "mapOutMax": "100",
      "onreference": "digitalout/red?value=$v"
    }
  },
  "digitalout": {
    "red": {
      "description": "Led showing low water situation.",
      "pin": "D0",
      "inverse": "false"
    }
  }
}
```

## See also

* <https://diyi0t.com/soil-moisture-sensor-tutorial-for-arduino-and-esp8266/>