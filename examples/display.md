Display


Some ESP32 boards are available that combine display, touch screen and processor for
implementing panels.

The Display example shows how to implement devices that take advantage of the
touch screens and has some additional elements implemented especially for this scenario.

As the final sketch file will exceed the memory available in ESP8266 and ESP32C3 processors they
should be avoided. The size of the sketch can be reduced by disabling elements that are not used
for a specific board.


### System and Core Elements

The full set of the core Elements are included in the firmware created by the Display Example
and can be activated by configuration.

* [NTPTIME](/elements/ntptime.md)
* [Time](/elements/time.md)
* [Value](/elements/value.md)
* [Button](/elements/button.md)
* [Switch](/elements/switch.md)
* [Analog](/elements/analog.md)
* [DigitalIn](/elements/digitalin.md)
* [DigitalSignal](/elements/digitalsignal.md)
* [DigitalOut](/elements/digitalout.md)
* [PWMOut](/elements/pwmout.md)
* [AND](/elements/and.md)
* [OR](/elements/or.md)
* [ADD](/elements/add.md)
* [SCENE](/elements/scene.md)
* [SELECT](/elements/select.md)
* [REFERENCE](/elements/reference.md)
* [Timer](/elements/timer.md)
* [Schedule](/elements/schedule.md)
* [Alarm](/elements/alarm.md)
* [MAP](/elements/map.md)
* [LOG](/elements/log.md)
* [REMOTE](/elements/remote.md)

### Display and Touch Elements

* [Touch](/elements/)

* DISPLAYGC9A01
* DISPLAYST7796
* DISPLAYESP32PANEL
* DISPLAYST7789

// #define HOMEDING_INCLUDE_DISPLAYTOUCHGT911

# define HOMEDING_INCLUDE_DISPLAYTOUCHFT6336

// #define HOMEDING_INCLUDE_DISPLAYTOUCHCST816

// Enable Elements for LIGHT control
# define HOMEDING_INCLUDE_COLOR
# define HOMEDING_INCLUDE_LIGHT
# define HOMEDING_INCLUDE_NEOPIXEL
# define HOMEDING_INCLUDE_APA102
# define HOMEDING_INCLUDE_MY9291

// Network Services
# define HOMEDING_INCLUDE_MQTT
# define HOMEDING_INCLUDE_WEATHERFEED
# define HOMEDING_INCLUDE_SDMMC
# define HOMEDING_INCLUDE_SD

### Sensors

Panels may be used to control the room temperature so some sensors from the HmeDing library
included in the firmware created by the Display Example and can be activated by configuration.

* DHT
* AM2320
* SHT20
* AHT20
* DALLAS

## Display Output Elements


### Analog Clock

The Analog Clock Element implementation can be found in the src sub-folder of the sketch. When
configured it will draw an analog clock at the specified location on the screen in the specified colors.

For more information on the supported configuration properties see
[AnalogClock Element].

### 
