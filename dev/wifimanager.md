---
title: WiFi Manager Details
tags: ["Implementation"]
layout: "page.njk"
excerpt: >
  The WiFi-Manager is a module in the HomeDing library to register a device in the local network.
  It is implemented in every device in the board class.

  When the device has not been connected to the local home network the Wifi-Manager exposes a temporary, unprotected
  Wifi Network named HomeDingNNNNNN using the 192.168.4.xxx ip range. The device is always available on the URL
  <http://192.168.4.1/>.

  Any device like mobile phone or laptop with WLAN can join this network for configuration.
---

There is a walk-through description on how to use the WiFi Manager in [Step by Step Bring your device to work](/steps/newdevice.md). 

## Start WiFi Manager

The WiFi Manager will automatically be started when no previous network and no configured network could be found.

The WiFi Manager can be started by pressing then sys button during the connect attempts or
by resetting the device without power loss 2 times in a row.

See [The Network Startup Sequence](/dev/startupnet.md) for details.


## Wifi Setup Dialog

The dialog that enables selecting an available network and entering the corresponding network passphrase
is available on every device by using the **/\$setup.htm** URL.

* The device opens a new open WiFi network
  named `HomeDingNNNNNN` where NNNNNN is a hex value derived from the mac address so somehow unique.
  
  On this WiFi the device is reachable on the fixed IP address 192.168.4.1 and the dialog is available
  using the <http://192.168.4.1/$setup.htm> URL.

* The setup dialog is also available when the device has a network registration
  and is available on the local network using <http://homeding/$setup.htm>

* The setup dialog will show the available networks after some seconds to choose one.

* The network passphrase must be entered in the form.

In this dialog will automatically be shown when starting the plain url of the device while beeing in WiFi Manager Mode.

The Wifi Setup Dialog can also be used while the device is connected and running
to re-configure the device to join another network.


## System LED

when a System LED is configured in the device configuration the following signals can be seen:

| state of the device                  | frequency      | signal form       |
| ------------------------------------ | -------------- | ----------------- |
| connecting to network in safe mode   | 1 per 700msec. | fast long pulse   |
| connecting to network in unsafe mode | 1 per 700msec. | fast short pulse  |
| WiFi Manager mode                    | 1 per 3 sec.   | slow short signal |


## Restart

After 5 minutes the WiFiManager will stop itself and the device will be rebooted. This will bring the device back into the regular operating mode in the case the local network had an outage and WiFiManager was started caused by power failures or a temporary missing network.

Under normal operating conditions when the device was previously added to a network
the startup sequence automatically connects the device to the last known network. This typically needs a few seconds only.


## WiFiManager UI

The WiFiManager presents a minimal UI that shows some minimal information about the device and a form to configure the secured network access.

![WiFiManager dialog](/dev/wifimanager.png)

* The current devicename is displayed.
* In the Network drop-down the local available WiFi networks are listed and the right network can be selected.
* The passphrase for this network needs to be entered.
* When reloading the page the available networks will be scanned again.
* Using the `Connect` button the device tries to connect the selected network and then reboots into the normal operation mode.

The WiFi manager UI can also be accessed during normal operation using the link <http://{devicename}/$setup.htm>.

How to bring a device from an empty board into full operating can be found in [Setup a new device Step by Step](/steps/newdevice.md)


## WiFi Manager Configuration

The WiFi Manager can be configured by some properties of the [Device Element](/elements/device.md).

**led** - The device uses this GPIO pin to drive a LED that is blinking while the Board waits for a network connection to be established after booting. During this time the WiFi Manager can be started using the button.
Defaults is `no LED`.

**button** - The board uses this GPIO pin to start WiFi Manager after booting when the level is pulled down while the LED is blinking.
Defaults is `GPIO0(D3)`

**connectTime** - The available time after a reboot of the device to start network configuration. Default: "6s".


## Reset the network configuration

The network configuration includes the network name and the network password. This is not configured in a configuration file but stored in a special non volatile memory together with some network parameters that allows fast rejoining the existing network that was connected successfully before.

The device can be reset and forgets the network configuration when calling the url <http://homeding/$reset>.


## Information in the Serial Monitor

A device starting without a network configuration will go into WiFi Manager mode.

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

``` cpp
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

* WPS Option: <https://bbs.espressif.com/viewtopic.php?t=1096>
* <https://github.com/rudi48/WiFiTelnetToSerialWPS/blob/master/WiFiTelnetToSerialWPS.ino>
* tips: <http://bienonline.magix.net/public/arduino-wifi.html>
* <https://maniacallabs.com/2016/08/09/new-library-esp-serial-wifi-manager/>
* <https://github.com/r-downing/PersWiFiManager>


<!--
* <https://github.com/esp8266/Arduino/issues/2735>
* <https://internetofhomethings.com/homethings/?p=631>
-->
