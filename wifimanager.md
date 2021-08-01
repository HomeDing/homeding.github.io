# WiFi Manager Details

:::excerpt
The WiFi-Manager is a module of every device that helps to register a device in the local network. It is implemented in every device in the board class.

When the device has not been connected to the local home network the Wifi-Manager is active exposes a unprotected Wifi Network with a name like ??? using the 192.168.4.xxx ip range.

Any other device can join this network for configuration.
:::

There is a walk-through description on how to use the WiFi Manager in [Step by Step Bring your device to work](/stepsnewdevice.md). 


## Wifi Setup Dialog

The dialog that enables selecting an available network and entering the corresponding network passphrase
is available on every device by using the **/\$setup.htm** URL.

* When the device has no local network credentials the device opens a new open WiFi network
  named `HomeDingNNNNNN` where NNNNNN is a hex value derived from the mac address so somehow unique.
  
  On this WiFi the device is reachable on the fixed IP address 192.168.4.1 and the dialog is available
  using the <http://192.168.4.1/$setup.htm> URL.

* The setup dialog is also available when the device has a network registration
  and is available on the local network using <http://homeding/$setup.htm>

![WiFiManager dialog](/wifimanager.png)

In this dialog is coded into the firmware to make it available even when the UI files have not been uploaded yet.

It can also be used in case the device is connected to re-configure the device.


## Start the Wifi-Manager

The board starts into the WiFiManager mode
* when no network configuration is available
* when started manually by pressing the system or flash button during startup.
* when 8 attempts to connect have not been successful
* when using the reset button ??? two times in a row in-between ??? seconds.

When a LED is configured on the device element there are different pulse patterns:
* 1 second pulse length having a short LED-ON phase when trying to connect the network in save mode 
* 1 second pulse length having a longer LED-ON phase when trying to connect the network in non-save mode
* 3 second pulse length with a short LED-ON phase when the Wifi-Manager is active. 


After 5 minutes the WiFiManager will stop itself and the device will be rebooted. This will bring the device back into the regular operating mode in the case the local network had an outage and WiFiManager was started caused by the missing network.

Under normal operating conditions when the device was added to the network the startup sequence automatically connects the device to the last known network. This typically needs a few seconds only.


## Using the WiFi Manager

After flashing a brand new device or when pressing the system button while shortly AFTER the device was rebooted
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

The WiFi manager UI can also be accessed during normal operation using the link <http://homeding/$setup.htm>. The UI is part of the uploaded sketch to allow configuring new devices that have been flashed with the sketch but not yet uploaded the WebUI files to the SPIFFS file system.

How to bring a device from an empty board into full operating can be found in [Setup a new device Step by Step](/stepsnewdevice.md)


## WiFi Manager Configuration

The WiFi Manager can be configured by some properties of the [Device Element](/elements/device.md).

**led** - The device uses this GPIO pin to drive a LED that is blinking while the Board waits for a network connection to be established after booting. During this time the WiFi Manager can be started using the button.
Defaults is `no LED`.

**button** - The board uses this GPIO pin to start WiFi Manager after booting when the level is pulled down while the LED is blinking.
Defaults is `GPIO0(D3)`

**connecttime** - The available time after a reboot of the device to start network configuration. Default: "6s".


## Reset the network configuration

The network configuration includes the network name and the network password. This is not configured in a configuration file but stored in a special non volatile memory together with some network parameters that allows fast rejoining the existing network that was connected successfully before.

The device can be reset and forgets the network configuration when calling the url <http://homeding/$reset>.


## Information in the Serial Monitor

A device starting without a nework configuration will go into WiFi Manager mode.

The information you can find in the Log on the Serial Monitor includes:

    00:00:03 sys:i Device starting...
    00:00:03 >HomeDing                    // Startup Welcome Message
    00:00:03 >config.. HomeDing5D26A5     // Config mode and Name of Setup-Network
    00:00:03 sys:i  AP-IP: 192.168.4.1    // IP Address of the device

After choosing the network and entering the passPhrase in the setup dialog using <http://192.168.4.1/$setup>:

    00:01:07 >setup network DEVNET        // chosen Network name
    00:01:15 >ok.                         // access could be established
    00:01:15 sys:i reboot...              // reboot for new configuration

A regular startup will follow:

    00:00:03 sys:i Device starting...
    00:00:03 >HomeDing                    // Startup Welcome Message
    00:00:13 >ESP-5D26A5 192.168.2.229    // Device name and IP address on the new network
    00:00:13 sys:i ESP-5D26A5 (192.168.2.229) connected to DEVNET (unsafe mode)

The device is now reachable using <http://ESP-5D26A5> or <http://192.168.2.229>


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
