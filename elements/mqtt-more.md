# More on MQTT

## Setup a private mqtt server

<https://mosquitto.org/man/mosquitto-conf-5.html>

* <http://www.steves-internet-guide.com/>
* <http://www.steves-internet-guide.com/mossquitto-conf-file/>


<https://medium.com/jungletronics/mosquitto-user-access-configurations-setups-2f95dc593adf>


## MQTT Servers on the Internet

* some available without cost for low number of messages
* can integrate external services like google assistant


## io.adafruit.com

* Secure server: mqtts://io.adafruit.com:8883
* InSecure server: mqtt://io.adafruit.com:1883
* Username: as registered at adafruit.io
* passwd: The MQTT connections use a separate key, not your account password. Optain a key from adafruit.io and click on Active Key.
* Client ID: empty or random
* MQTT 3.1.1
* Limit: 20 connections per minute, 30/60 requests per minute, temporarily ban for the account
* QoS 0 and 1
* Supports secure transfer buffer size of 512

The convention on topic name is using the username as the root in the topic name like

`mathertel/feeds/counter`.

`mathertel/feeds/counter/csv`.
`mathertel/feeds/counter/json`.

<https://io.adafruit.com/api/docs/mqtt.htm>


### Configuration Example

This example shows how to configure this element:

``` json
"mqtt": {
  "ada": {
    "server": "mqtts://mathertel:1234-1234-1234-1234@io.adafruit.com:8883",
    "topic": "mathertel/feeds/counter",
    "fingerprint": "59 3C 48 0A B1 8B 39 4E 0D 58 50 47 9A 13 55 60 CC A0 1D AF",
  }
}
```

{your Adafruit IO username}/feeds/{feed key}
{your Adafruit IO username}/feeds/{feed key}/csv
{your Adafruit IO username}/feeds/{feed key}/json


## arduino.io

The ArduinoIoTCloud library adds an additional leyer upon the mqtt protocol
implemented in the ArduinoMqttClient library.

I got the simple examples up and running and extracted some details about the MQTT implementation.

However the server is not supporting small packages and package size probing
so the esp8266 memory limitation is breaking the implementation.

Here are some details that you can find using the debug feature in the library (see source code):

MQTT Broker: <https://mqtts-up.iot.arduino.cc:8884> (used for id+key)
Device ID: adce94ef-1111-2222-3333-b1b9366b4444 (mentioned as `BOARD_ID` in the created example code)
Password: "3DES.............PK4" (mentioned as `SECRET_DEVICE_KEY` in the created example code)

The topics / feeds are named using the pattern

"/a/d/" + <device-id> + "/e/o" for subscribing.
"/a/d/" + <device-id> + "/e/i" for publishing.


### Configuration Example

This example shows how to configure this element:

``` json
"mqtt": {
  "xx": {
    "loglevel": "2",
    "server": "https://mqtts-up.iot.arduino.cc:8884",
    "user": "adce94ef-73ed-4386-a7ff-b1b9366b7232",
    "key": "3DEWS9BVSYTH0HGAHPK4",
    "feed": "/a/d/adce94ef-73ed-4386-a7ff-b1b9366b7232/e/i/temp"
  }
}

```

## public.mqtthq.com

This is one of the unsecured MQTT brokers on the internet driven by <controlbits.com>
where you can publish and subscribe to values.

MQTTHQ.com works without any account and all data you publish will be visible to anyone who knows the topic name.

Data is not stored on the server so only connected clients will get an update.

More information can be found on <https://mqtthq.com>.


### Configuration Example

This example shows how to configure this element:

``` json
"mqtt": {
  "xx": {
    "loglevel": "2",
    "server": "http://public.mqtthq.com:1883",
    "feed": "mathertel/f/temp",
    "user": "",
    "key": ""
  }
},
```


## raspberryPi with mosquitto

``` json
"mqtt": {
  "dispi": {
    "loglevel": "2",
    "server": "http://dispi:1883",
    "feed": "outdoor/temp",
    "user": "homesa",
    "key": "Home4mqtt"
  }
}
```

## Node-RED installation

<https://nodered.org/docs/getting-started/raspberrypi#running-locally>

phrase: "HomeRed"

Running Node-RED install for user pi at /home/pi on raspbian


This can take 20-30 minutes on the slower Pi versions - please wait.

  Stop Node-RED                       ✔
  Remove old version of Node-RED      ✔
  Node option not specified           :   --node12, --node14, or --node16
  Leave existing Node.js              :   v14.19.1   Npm 6.14.16
  Clean npm cache                     -
  Install Node-RED core               ✔   2.2.2
  Move global nodes to local          -
  Leave existing nodes                -
  Install extra Pi nodes              ✔
  Add shortcut commands               ✔
  Update systemd script               ✔

You can now start Node-RED with the command node-red-start
  or using the icon under   Menu / Programming / Node-RED
Then point your browser to localhost:1880 or <http://{your_pi_ip-address}:1880>

Started :  Wed 13 Apr 2022 07:33:23 PM CEST
Finished:  Wed 13 Apr 2022 07:36:39 PM CEST

You may want to run   node-red admin init
to configure your initial options and settings.

Once Node-RED has started, point a browser at <http://192.168.2.198:1880>
On Pi Node-RED works better with the Firefox or Chrome browser

Use   node-red-stop                          to stop Node-RED
Use   node-red-start                         to start Node-RED again
Use   node-red-log                           to view the recent log output
Use   sudo systemctl enable nodered.service to autostart Node-RED at every boot
Use   sudo systemctl disable nodered.service to disable autostart on boot

To find more nodes and example flows - go to <http://flows.nodered.org>


## <https://test.mosquitto.org/>


## <https://www.hivemq.com/>

create account
get MQTT cluster of a BASIC size good for development hosted on AWS.
Data is stored for 3 days.

HiveMQ is providing a command line utility to check / update current values
available at <https://github.com/hivemq/mqtt-cli>.

The HiveMQ company advises to use the pubsub library and there are some hints about using it on the web site.


## MQTT Explorer

A Windows application available in the Microsoft Store.


## See also

* <https://mntolia.com/10-free-public-private-mqtt-brokers-for-testing-prototyping/>
* <https://iot4beginners.com/top-15-open-source-public-free-brokers-of-mqtt/>
* <https://github.com/eclipse/mosquitto>
*


---

``` txt
ip:192.168.2.200,mask:255.255.255.0,gw:192.168.2.1
Connected to "KHMH"
TX[110]: 10 6C 00 04 (connect)
  4D 51 54 54
  "MQTT"
  04 C2 00 1E 00 

  24 61 64 63 65 39 34 65 66 2D 37 33 65 64 2D 34 33 38 36 2D 61 37 66 66 2D 62 31 62 39 33 36 36 62 37 32 33 32 00
  [36] "adce94ef-73ed-4386-a7ff-b1b9366b7232" \0
  24 61 64 63 65 39 34 65 66 2D 37 33 65 64 2D 34 33 38 36 2D 61 37 66 66 2D 62 31 62 39 33 36 36 62 37 32 33 32 00
  [36] "adce94ef-73ed-4386-a7ff-b1b9366b7232" \0
  14 33 44 45 57 53 39 42 56 53 59 54 48 30 48 47 41 48 50 4B 34 
  [20] "3DEWS9BVSYTH0HGAHPK4"
RX: 20 02 00 00 (CONNACK)

TX[49]: 30 46 00 2D (PUBLISH)
  2F 61 2F 64 2F 61 64 63 65 39 34 65 66 2D 37 33 65 64 2D 34 33 38 36 2D 61 37 66 66 2D 62 31 62 39 33 36 36 62 37 32 33 32 2F 65 2F 6F
  ".../o"
TX[23]: 9F A2 00 6B 4C 49 42 5F 56 45 52 53 49 4F 4E 03 65 31 2E 36 2E 30 FF 

TX[52]: 82 32 00 01 (subscribe)
  00 2D 2F 61 2F 64 2F 61 64 63 65 39 34 65 66 2D 37 33 65 64 2D 34 33 38 36 2D 61 37 66 66 2D 62 31 62 39 33 36 36 62 37 32 33 32 2F 65 2F 69 00 
  [45] "/a/d/adce94ef-73ed-4386-a7ff-b1b9366b7232/e/i" (0)

RX: 90 03 00 01 (subAck)
  00 30 9C 01 00 2D 2F 61 2F 64 2F 61 64 63 65 39 34 65 66 2D 37 33 65 64 2D 34 33 38 36 2D 61 37 66 66 2D 62 31 62 39 33 36 36 62 37 32 33 32 2F 65 2F 69 81 A4 21 78 2D 75 72 6E 3A 75 75 69 64 3A 61 64 63 65 39 34 65 66 2D 37 33 65 64 2D 34 33 38 36 2D 61 37 66 66 2D 62 31 62 39 33 36 36 62 37 32 33 32 22 FB 41 D8 95 1F 71 40 00 00 00 68 74 68 69 6E 67 5F 69 64 03 78 24 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36

TX[52]: 82 32 00 02 (subscribe)
  00 2D 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 65 2F 69 00 
  [45]
RX: 90 03 00 02 00
TX[57]: 82 37 00 03 00 32 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 73 68 61 64 6F 77 2F 69 00 
RX: 90 03 00 03 00

Connected to Arduino IoT Cloud

Thing ID: 224b84c9-7b57-46db-b6f7-9a34b88743b6

TX[54]: 30 4A 00 32 
  2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 73 68 61 64 6F 77 2F 6F
  "/a/t/224b84c9-7b57-46db-b6f7-9a34b88743b6/shadow/o"
TX[22]: 81 A2 00 63 72 3A 6D 03 6D 67 65 74 4C 61 73 74 56 61 6C 75 65 73 

RX: 30 B1 01 00 32 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 73 68 61 64 6F 77 2F 69 84 A4 22 FB 41 D8 95 1B ED 80 00 00 00 67 63 6F 75 6E 74 65 72 06 FB 40 50 C0 00 00 00 00 00 02 FB 40 25 FA E1 40 00 00 00 A2 00 64 74 65 6D 70 02 FB 00 00 00 00 00 00 00 00 A3 00 69 74 7A 5F 6F 66 66 73 65 74 06 FB 40 AC 24 00 00 00 00 00 02 FB 40 BC 20 00 00 00 00 00 A3 00 6C 74 7A 5F 64 73 74 5F 75 6E 74 69 6C 06 FB 40 AC 24 00 00 00 00 00 02 FB 41 D8 D7 73 24 00 00 00
counter set to 10.99
temp set to 0.00
TX[49]: 30 73 00 2D 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 65 2F 6F 
TX[68]: 9F A2 00 67 63 6F 75 6E 74 65 72 02 FA 41 2F D7 0A A2 00 64 74 65 6D 70 02 FA 00 00 00 00 A2 00 69 74 7A 5F 6F 66 66 73 65 74 02 19 1C 20 A2 00 6C 74 7A 5F 64 73 74 5F 75 6E 74 69 6C 02 1A 63 5D CC 90 FF 
```

67 63 6F 75 6E 74 65 72 "counter"
74 65 6d 70 "temp"

TX[2]: C0 00 (Ping Request)
RX: D0 00 (Ping Response)


Connected to Arduino IoT Cloud
Thing ID: 224b84c9-7b57-46db-b6f7-9a34b88743b6
TX[54]: 30 4A 00 32 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 73 68 61 64 6F 77 2F 6F
TX[22]: 81 A2 00 63 72 3A 6D 03 6D 67 65 74 4C 61 73 74 56 61 6C 75 65 73
RX[115]: 84 A3 22 FB 41 D8 95 60 A1 00 00 00 00 67 63 6F 75 6E 74 65 72 02 FB 40 25 FA E1 40 00 00 00 A2 00 64 74 65 6D 70 02 FB 00 00 00 00 00 00 00 00 A3 00 69 74 7A 5F 6F 66 66 73 65 74 06 FB 40 88 F0 00 00 00 00 00 02 FB 40 BC 20 00 00 00 00 00 A3 00 6C 74 7A 5F 64 73 74 5F 75 6E 74 69 6C 06 FB 40 88 F0 00 00 00 00 00 02 FB 41 D8 D7 73 24 00 00 00
counter set to 10.99
temp set to 0.00
TX[49]: 30 73 00 2D 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 65 2F 6F
TX[68]: 9F A2 00 67 63 6F 75 6E 74 65 72 02 FA 41 2F D7 0A A2 00 64 74 65 6D 70 02 FA 00 00 00 00 A2 00 69 74 7A 5F 6F 66 66 73 65 74 02 19 1C 20 A2 00 6C 74 7A 5F 64 73 74 5F 75 6E 74 69 6C 02 1A 63 5D CC 90 FF
pm open,type:2 0
temp=17.10
TX[49]: 30 3E 00 2D 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 65 2F 6F
TX[15]: 9F A2 00 64 74 65 6D 70 02 FA 41 88 CC CD FF
TX[2]: C0 00
TX[2]: C0 00
TX[2]: C0 00
TX[2]: C0 00


temp=20.31
TX[49]: 30 3E 00 2D 2F 61 2F 74 2F 32 32 34 62 38 34 63 39 2D 37 62 35 37 2D 34 36 64 62 2D 62 36 66 37 2D 39 61 33 34 62 38 38 37 34 33 62 36 2F 65 2F 6F
   "0>.-/a/t/224b84c9-7b57-46db-b6f7-9a34b88743b6/e/o"
TX[15]: 9F A2 00 64 74 65 6D 70 02 FA 41 A2 7A E1 FF
   "...dtemp..A.z.."


<https://dzone.com/articles/setting-up-your-own-arduino-iot-cloud-server>


## Sources

<https://github.com/arduino-libraries/ArduinoMqttClient/tree/master/examples>

<https://makoserver.net/tutorials/>

npm install node-red-contrib-chartjs

