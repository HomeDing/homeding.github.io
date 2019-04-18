### SSD1306 OLED Displays

The DisplaySSD1306Element and the DisplayAdapterSSD1306 class work together to enable using OLED displays based on the SSD1306 chips as a local display.

The DisplayAdapter class implements the communication with the chip that is integrated into the OLED display and connected through the I2C  bus.

The DisplayElement implements the configuration that specifies the hardware related parameters by using a configuration in the env.json file.

The features supported by this adapter are:

* 128\*64 or 128\*32 display resolutions
* Text output in the font sizes 10,16 and 24 px.
* Binary output shown as a filled or empty circle


## Element Configuration

The following properties are available for configuration of the element:

| Property  | Description                                             |
| --------- | ------------------------------------------------------- |
| `address`    | Specifies the i2c address of the display.         |
| `SDA` |  |
| `SCL` |  |
| `height`   | The height of the display. 32 or 64|


## Example for Configuration

The configuration of a display is given by the privided hardware and should be configured in the env.json file:

```JSON
"DisplaySSD1306": {
  "0": {
    "address": "60",
    "SDA": 5,
    "SCL": 4,
    "height": 64
  }
}
```

+ 24 kByte 