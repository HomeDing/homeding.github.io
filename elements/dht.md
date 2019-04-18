# The DHT Element

The DHTElement allows retrieving temperature and humidity values from the DHT family sensors and creates actions when new values are available.

The current values are also sent out using actions when they stay the same for some time to allow remote things to resume to the current values after reboot or network outages.

For the low level communication to the chips the DHTesp library is used and needs to be installed when you want to use this element using the Arduino library manager.

The ***HOMEDING_INCLUDE_DHT*** must be defined in the main sketch to compile and register the element.

```CPP
// Use some more Elements that need additional libraries
#define HOMEDING_INCLUDE_DHT
#include <HomeDing.h>
```

The following sensor chips from the DHT family are supported by the DHTesp library:

* DHT11
* DHT22
* AM2302
* RHT03

more details can be found at <https://github.com/beegee-tokyo/DHTesp>

## Connecting a Sensor

The sample configuration coming with the DHT22Ding example is configured to use a DHT22 type of sensor with the data line attached to D4 (GPIO2)

| ESP8266 | DHT22 | Description  |
| ------- | :---: | ------------ |
| 3.3v    | 1     | Power Supply |
| D4      | 2     | Data         |
| GND     | 4     | Ground       |

The configuration can be changed easily by modifying the env.json and config.json file.

## Element Configuration

The following properties are available for configuration of the element:

| Property        | Description                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pin`*          | Specifies the hardware number of the pin that is used to connect the DHT sensor for data.                                                                     |
| `readtime`      | Time between 2 probes for temperature and humidity being fetched from the sensor. Default value is 1m.                                                        |
| `type`          | The type of the sensor. Values are: "DHT11", "DHT22" and "AUTO"                                                                                               |
| `resendTime`    | The current values of the probe are resent after this specified time even when not changing.                                                                  |
| `onTemperature` | These actions are emitted by the element when the temperature gets a new value. The action will not be sent when reading ne sensor values that stay the same. |
| `onHumidity`    | These actions are emitted by the element when the humidity gets a new value. The action will not be sent when reading ne sensor values that stay the same.    |

\* This parameter must be specified.

## Element State

The following properties are available with the current values at runtime

| Property      | Description                                      |
| ------------- | ------------------------------------------------ |
| `temperature` | The last read temperature value from the sensor. |
| `humidity`    | The last read humidity value from the sensor.    |

## Example for Configuration

```JSON
"dht": {
  "on": {
    "pin": "D4",
    "type": "DHT22",
    "readtime": "30s",
    "resendtime": "2m",
    "onTemperature": "device/0?log=temp: $v\u00dfC",
    "onHumidity": "device/0?log=hum: $v%"
  }
},
```

## Example State

```JSON
"dht/on": {
  "active":"true",
  "temperature":"27.30",
  "humidity":"50.50"
},
```

## Implementation Details

The implementation uses the DHTesp / “DHT_sensor_library_for_ESPx” library from beegee_tokyo. You need to load this library using the library manager or get it directly from
<https://github.com/beegee-tokyo/DHTesp>

More documentation can be found at:
<https://desire.giesecke.tk/index.php/2018/01/30/esp32-dht11/>


## more

* 10K VCC - Data
* Enable Shut down of sensor by supplying power through an ouput pin.
