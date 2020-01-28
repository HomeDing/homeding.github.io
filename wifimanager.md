# WiFi Manager

The WiFi-Manager is a module of every device that helps to register a device in the local network. It is implemented in the board class.

It is available on every device by using the URL: <http://{name}/$setup.htm>

![WiFiManager dialog.png](wifimanager.png)

The board starts into the WiFiManager mode
* when no network configuration is available
* when started manually by pressing the system button during startup while the system led is blinking
* when rebooting ??? two times in a row in-between ??? seconds.


After 5 minutes the WiFiManager will stop itself and the device will be rebooted. This will bring the device back into the regular operating mode in the case the local network had an outage and WiFiManager was started caused by the missing network.

Under normal operting conditions when the device was added to the network the startup sequence automatically connects the device to the last known network. This typically needs a few seconds only.


## Using the WiFi Manager

After flashing a brand new device or whan pressing the system button while shortly AFTER the device was rebooted
the WiFi Manager mode will be started.

To allow accessing the WiFiManager a local and unsecured network is created by the device with the name `HomeDing`.

<!-- The last 4 digits are taken from the MAC address of the device to make the network unique when multiple devices open their private WiFiManager network. -->

After connecting your mobile phone or computer to this network the WiFiManager UI opens automatically or it can be opened using the URL <http://192.168.4.1>

When the WiFiManager is active only the system elements are started.

## WiFiManager UI

The WiFiManager presents a minimal UI that shows some minimal information about the device and a form to configure the secured network access.

* In the drop-down the found local available WiFi networks are enlisted and the right network needs to be selected.
* The passphrase for this network needs to be entered.
* Using the `re-scan` the available networks are scanned again.
* Using the `Connect` button the device tries to connect the selected network and then reboots into the normal operation mode.

The WiFi manager UI can also be accessed during normal operation using the link <http://devicename/$setup.htm>. The UI is part of the uploaded sketch to allow configuring new devices that have been flashed with the sketch but not yet uploaded the WebUI files to the SPIFFS file system.

How to bring a device from an empty board into full operating can be found in [Setup a new device Step by Step](stepsnewdevice.md)


## WiFi Manager Configuration

The WiFi Manager can be configured by some properties of the [Device Element](elements/device.md).

**led** - The device uses this GPIO pin to drive a LED that is blinking while the Board waits for a network connection to be established after booting. During this time the WiFi Manager can be started using the button.
Defaults is `no LED`.

**button** - The board uses this GPIO pin to start WiFi Manager after booting when the level is pulled down while the LED is blinking.
Defaults is `GPIO0(D3)`

**connecttime** - The available time after a reboot of the device to start network configuration. Default: "6s".


## Reset the network configuration

The network configuration includes the network name and the network password. This is not configured in a configuration file but stored in a special non volatile memory together with some network parameters that allows fast rejoining the existing network that was connected successfully before.

The device can be reset and forgets the network configuration when calling the url <http://{name}/$reset>.


<!-- ## WPS
NOT IMPLEMENTED YET

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





## WIFI Status

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.print("\n");

<https://github.com/esp8266/Arduino/issues/2735>

<https://internetofhomethings.com/homethings/?p=631>

