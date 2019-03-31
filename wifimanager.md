# WiFiManager ???

The board has a implementation that enables registration of the device in a local protected network called WiFiManager.

Under regular conditions after adding the device to the network the startup sequence after a reboot automatically connects the device to the last known network. This typically needs a few seconds.

The board starts automatically into the WiFiManager mode when no network configuration is available. The WiFiManager mode can also be started manually by pressing the system button during startup while the system led is blinking.

After 30 minutes the WiFiManager will stop and the device will be rebooted. This will bring the device back into the regular operating mode in the case the local network had a outage and WiFiManager was started automatically caused by the missing network.

![WiFiManager dialog.png](wifimanager.png)


## private wifi

To allow accessing the WiFiManager a local unsecured network is created by the device with the name `HomeDing`.

The last 4 digits are taken from the MAC address of the device to make the network unique when multiple devices open their private WiFiManager network.

After connecting your mobile phone or computer to this network the WiFiManager UI opens automatically or can be opened using the URL

<http://192.168.4.1>


## WiFiManager UI

The WiFiManager presents a minimal UI that shows some minimal information about the device and a form to configure the secured network access.

* In the drop-down all local available WiFi networks are enlisted and the right network needs to be selected.
* The passphrase for this network needs to be entered.
* Using the `re-scan` the available networks are scanned again.
* Using the `Connect` button the device tries to connect the selected network and then return into the normal operation mode.

When the WiFiManager is active only the system elements are started.  

The WiFi manager UI can also be accessed during normal operation using the link <http://devicename/setup.htm>

<!-- 
# WiFiManager Configuration if the  ???

The device configuration has some properties to control some of the WiFi Manager behavior in detail.

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
-->

## WPS

NOT IMPLEMENTED YET

<!-- 

```CPP
bool ESPSerialWiFiManager::_connect_wps(){
  _disconnect();
  OFL("Push the WPS button on your access point now.");
  String opt = _prompt("Press Enter when complete (q to abort)");
  if(CHAROPT(opt[0], 'q')) return false;
  OFL("Attempting WPS connection. May take some time...");
  if (WiFi.beginWPSConfig()){
    String ssid = WiFi.SSID();
    if(ssid.length() > 0){
        OL("\nSuccess! Connected to network " + ssid);
        NL();
        _disp_network_details();
        NL();
        _save_config(ssid, WiFi.psk(), true);
        return true;
    }
    else{
        return false;
    }
  }
}
```
-->

## More

<!--
* <https://esp-forum.de/index.php/forum/codebesprechung/35-wifi-mode-fuer-ap-und-sta-richtig-anwenden> 
* <https://www.hackster.io/kosme/esp8266-sniffer-9e4770?utm_campaign=new_projects&utm_content=0&utm_medium=email&utm_source=hackster&utm_term=project_name>
-->

* WPS <https://bbs.espressif.com/viewtopic.php?t=1096>
* <https://github.com/rudi48/WiFiTelnetToSerialWPS/blob/master/WiFiTelnetToSerialWPS.ino>
* tips: <http://bienonline.magix.net/public/arduino-wifi.html>
* <https://maniacallabs.com/2016/08/09/new-library-esp-serial-wifi-manager/>
* <https://github.com/r-downing/PersWiFiManager>