# T-Display-S3


## Using the display sleep mode on battery


<https://github.com/Xinyuan-LilyGO/T-Display-S3>

https://github.com/Xinyuan-LilyGO/T-Display-S3/blob/main/lib/TouchLib/README.md

https://github.com/mjdonders/CST816_TouchLib


http://en.hynitron.com/product/wearable/124


{
  "build": {
    "arduino": {
      "ldscript": "esp32s3_out.ld",
      "memory_type": "qio_opi",
      "partitions": "default_16MB.csv"
    },
    "core": "esp32",
    "extra_flags": [
      "-DBOARD_HAS_PSRAM"
    ],
    "f_cpu": "240000000L",
    "f_flash": "80000000L",
    "flash_mode": "qio",
    "hwids": [
      [
        "0X303A",
        "0x1001"
      ]
    ],
    "mcu": "esp32s3",
    "variant": "esp32s3"
  },
  "connectivity": [
    "wifi",
    "bluetooth"
  ],
  "debug": {
    "openocd_target": "esp32s3.cfg"
  },
  "frameworks": [
    "arduino",
    "espidf"
  ],
  "name": "T-DisplayS3",
  "upload": {
    "flash_size": "16MB",
    "maximum_ram_size": 327680,
    "maximum_size": 16777216,
    "require_upload_port": true,
    "speed": 921600
  },
  "url": "https://www.lilygo.cc/products/t-display-s3",
  "vendor": "LILYGO"
}

## See also

* [ESP32-S3 Boards](/boards/esp32s3/index.md)
