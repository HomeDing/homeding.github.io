# WiFiManager ???

The builtin WiFiManager is responsible for establishing a network connectivity before the device can start normal operation.

Instead of doing this in the `setup()` function this is postponed into the `loop()` implementation 

TODO: implement and doku


<https://esp-forum.de/index.php/forum/codebesprechung/35-wifi-mode-fuer-ap-und-sta-richtig-anwenden>


In the board class implementation a WiFiManager was added.

It is usually a repeated implementation in the sketch files to enable WiFi and to connect to a given network
by providing the network ssid and a passphrase. However, in many examples you find on the internet the implementation is poor.

The WiFi Manager the board class implementation allows the following:
* reconnect to the last known network. The ssid and credentials are stored by the SDK of the ESP8266 in flash memory so they are available next time the device starts up.

* During the first 10 seconds the LED blinks 10 times and it is possible to press the FLASH button to configure some networking features.


The device configuration now includes some settings to control some of this behavior in detail.
* "ConnectTime": "10s" => wait 10 seconds after reset for flash / configuration button
* "ConnectMode": "LAST,AP" => A reconnect to the last known network is the first try. If not successful a local accessport is opened.
* "LED": "D4" => LED on port D4 is used as an indicator.

* "click": "AP" => a single click on the configuration button will start AP mode.
* "doubleclick": "WPS" => a double click on the configuration button will start WPS mode.

* All elements will be started only after the network connectivity is given in STA mode.
* element->startupMode = 
    - `STARTUP_ON_SYS`,  // The element is started immediately after loading the configurations.
    - `STARTUP_ON_NET`,  // The element is started after a network connectivity in AP Mode was established.
    - `STARTUP_ON_TIME`  // The element is started after a valid local time was set.



## More


* <https://bbs.espressif.com/viewtopic.php?t=1096>
* <https://github.com/rudi48/WiFiTelnetToSerialWPS/blob/master/WiFiTelnetToSerialWPS.ino>
* <http://bienonline.magix.net/public/arduino-wifi.html>

* <https://maniacallabs.com/2016/08/09/new-library-esp-serial-wifi-manager/>
* <https://github.com/r-downing/PersWiFiManager>
* <https://www.hackster.io/kosme/esp8266-sniffer-9e4770?utm_campaign=new_projects&utm_content=0&utm_medium=email&utm_source=hackster&utm_term=project_name>

