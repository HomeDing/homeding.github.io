<style>
img[title=w200] { width:200px;}
img[title=w600] { width:600px;}
</style>
# Bulb Devices

:::excerpt
Bulb devices build on base of the ESP8266 chip are supported by the minimal sketch.
:::

There are many different bulb devices that use RGB and white LED variants. The bulbs that use GPIOs with PWM or the chips
MY9231, MY9291.


## Tuya Bulb

The Manufacturer Tuya has created several WiFi Bulbs that are available from different sources.

This sample is using a ESP8266 processor with a MY9291 driver chip for the LEDs that is used in some bulb formats.

## Flashing Tuya bulbs the first time using tuya-convert

It is easy to flash the minimal sketch using **tuya-convert** that can be used to flash firmware on brand new devices with the ESP8266 SoC chip as long as the firmware allows it.
tuya-convert is using a weakness in the official firmware so when tuya updates the firmware there is the risk that this procedure will not work any more. 

There is a good documentation and walkthrough in <https://tasmota.github.io/docs/Tuya-Convert/>. The project is open-source available at <https://github.com/ct-Open-Source/tuya-convert>.

Place a Minima.ino.bin file n the firmware folder to directly upload the minimal Homeding firmware.


## Uploading a firmware using a USB-2-Serial converter

I cannot recommend his procedure because you probably will need to open the device by damaging some of the housing. I did it with a broken device.

:::warning
* This warning is serious.
* Never handle projects that are connected to the mains voltage. 
* Stay away from devices with contact to mains voltage.
* Uploading firmware to devices that have contact to mains voltage is dangerous. 
* DO NOT connect the any device to the mains during flashing or while using the serial interface.
* You may kill your computer and yourself.
* The USB-Serial adapters offer enough power to flash the device.
* When you are making these kind of projects you really need to know what you are doing.
* I have warned you, do not blame on me.
:::


## Photos from disassembling and flashing bulb

![bulb](/boards/bulb.jpg "w200")
![bulb](/boards/bulbparts.jpg "w200")
![bulb](/boards/bulb01.jpg "w200")
![bulb](/boards/bulb02.jpg "w200")
![bulb](/boards/bulb03.jpg "w200")
![bulb](/boards/bulb04.jpg "w200")

I used a programming setup for ESP-01 boards with some wires that can be soldered easily to the connectors of the module with the ESP8266. 

On the bottom side the signals VCC(3.3V), GND, RX and TX are available. 
The RESET and FLASH signals are available on 2 connectors on the bottom side.

Other bulbs use different board layout and some investigation is required to find out.
A good source of helping information is the repository of device specific templates for the TASMOTA firmware at
<https://templates.blakadder.com/bulb.html>.


https://esphome.io/components/output/my9231.html


## Configuration

The following configuration can be used to control the bulb above using the MY9291 Element. It can easily be adopted to use the RGB Light element when the bulb is using PWM directly.


**env.json**

```JSON
{
  "device": {
    "0": {
      "loglevel": 0,
      "savemode": "false",
      "name": "bulb02",
      "description": "RGBW Bulb",
      "homepage": "/ding.htm",
      "led": "D4"
    }
  },
  "ota": {
    "0": {
      "port": 8266,
      "passwd": "123",
      "description": "Listen for 'over the air' OTA Updates"
    }
  }
}
```


      ```JSON
{
```



## See also

* <https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html>
* <https://github.com/arendst/Sonoff-Tasmota/wiki/Tuya-OTA>
* <https://templates.blakadder.com/bulb.html>.
