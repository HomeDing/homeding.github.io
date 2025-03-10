---
title: Sensors and Actors
layout: "page.njk"
description: List of supported sensors.
excerpt: >
  This is a list of sensors, simple input and output components up to interface chips for various purposes
  that show the wide range of possibilities supported by the HomeDing library.
---

Many of the sensors offer simple digital or analog signals to be used by the generalized input and output [elements](/elements/index.md).

Others others are using data transported over a bus like [I2C bus](/dev/i2c.md) or even specific protocols and need special elements.

There is a generalized [Sensor Element](/elements/sensors.md) that is used as a base class for sensors to simplify implementation
and support the timing of sensor reading cycles.


## Sensors giving digital signals

Many sensors offer direct usable digital signals that can be detected and used as an input to create actions.

### Mechanical sensors

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "/sensors/knocksensor.jpg" %}
This is a sensor known as **knock sensor** that creates short-time connections between the 2 pins when shaken or getting massive vibrations.

The [DigitalSignal Element](/elements/digitalsignal.md) can capture these spike impulses and creates a clean actions.
{% endcard %}

{% card "tiltsensor.jpg" %}
This is a **mercury tilt sensor** that creates connections between the 2 pins when the position of the switch is upwards.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the input signal.
{% endcard %}

{% card "ball.jpg" %}
This is a **ball on contacts sensor** that creates / breaks connections between the 2 pins when the position of the sensor changes or bumps.

The [DigitalSignal Element](/elements/digitalsignal.md) can capture these signals and spike impulses and creates a clean actions.
{% endcard %}


{% card "shock.jpg" %}
This is a **shock sensor** that creates connections between the 2 pins when a massive force is against the sensor.

The [DigitalSignal Element](/elements/digitalsignal.md) can capture these spike impulses and create a clean action on it.
{% endcard %}

</div>


### Magnetic sensors

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "reed.jpg" %}
This is a **reed sensor** that creates connections between the 2 pins when a high value magnetic field is given.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the input signal.
{% endcard %}


{% card "hall.jpg" %}
This is a **magnetic hall sensor** that creates an analog signal from the detector. The level is compared to a reference signal to also create a digital output signal.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the digital input signal.

The [Analog Element] can create actions based in the analog input signal.
{% endcard %}

<div>

### Light sensors

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "ldr.jpg" %}
This is a **light sensitive sensor** using a light defined resistor (LDR) component. This board already has a 10K resistor that creates a variable analog input signal.

The [Analog Element] can create actions based in the input signal.
{% endcard %}


<!-- 
{% card "SI1145.jpg" %}
This is an UV-index sensor.
{% endcard %}
 -->

{% card "bh1750.jpg" %}
This is a light sensor probing for the intensity of light in lumen.

The [BH1750 Element](/elements/bh1750.md) enables creating actions based of the values from the sensor.
{% endcard %}

{% card "linetrack.jpg" %}
This is a **light reflection sensor** using a identify reflecting (white) or non-reflecting (black) surfaces. There is a IR transmitting diode and a IR receiving diode producing a digital output signal.
The sensitivity can be adjusted.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the digital input signal.
{% endcard %}


{% card "dualldr.jpg" %}
This is a double **light sensitive sensor** using a light defined resistor (LDR) components.
This board has a circuit that compares the analog signal to a adjustable threshold value. The output therefore are 2 digital signals.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the input signals and the logic elements can create combinations of interest.
{% endcard %}


{% card "irtrans.jpg" %}
This is a **Light blocking sensor** built from a IR LED and a IR photo resistor. It can be used to detect that the light in the gap is blocked. It creates a digital output.

For simple on/off situations the [DigitalInput Element](/elements/digitalin.md) can create actions.

When used with high frequencies ans used tp detect rotating speed with a wheel the The [DigitalSignal Element](/elements/digitalsignal.md) can capture these impulses per timeframe to create a clean action with rotation values.
{% endcard %}


{% card "hcsr505.jpg" %}
This is a **Mini PIR Sensor** that creates a digital signal when detecting movements initiated by "warm" objects.
It produces a about 10 seconds HIGH level signal.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the input signal.
{% endcard %}


{% card "no.jpg" %}
hcsr501 - This is a **PIR Sensor** that creates a digital signal when detecting movements initiated by detecting "warm" objects. It produces a HIGH level signal. Signal length and sensitivity can be adjusted.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the input signal.
{% endcard %}


{% card "flame.jpg" %}
This is a **flame Sensor** or **IR level Sensor** that creates a digital and analog output signal detecting the amount of IR light.

The [DigitalInput Element](/elements/digitalin.md) can create actions based in the digital input signal.

The [Analog Element] can create actions based in the analog input signal.
{% endcard %}


{% card "irobstacle.jpg" %}
This is a **Infrared Obstacle sensor** that emits and detects IR light and creates a digital output when there is a reflecting obstacle nearby.

As the signals can be very short the [DigitalSignal Element](/elements/digitalsignal.md) can capture these short impulses and create a clean action on it.
{% endcard %}

<div>

### Analog Temperature Sensors

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "ntc.jpg" %}
This is a **temperature sensor** that uses a **temperature variable resistor** ntc to create an analog output value. There are many form factors for sensors of this kind. The do not have a linear behavior but can be very accurate and can have a wide range.

The Analog output signal can be used to calculate the actual temperature.
The [Analog Element] can create actions based in the analog input signal.

Some sensor boards also contain an adjustable reference the sensor value can be compared to to produce a digital output signal.
The [DigitalInput Element](/elements/digitalin.md) can create actions based on this digital input signal.
{% endcard %}

See also environmental sensors below.

</div>

### Sound sensors

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "microphone.jpg" %}
This is a **Analog microphone** combined with a circuit to compare the amplitude to an adjustable threshold.

The Analog output signal can be used for a recording input and the digital output produces LOW signals when the amplitude gets high enough.

On loud sounds many short signal spikes occur that can be catched by the [DigitalSignal Element](/elements/digitalsignal.md) to create a clean actions on it.
{% endcard %}


{% card "hcsr04.jpg" %}
The **Ultrasonic range** sensor using the hcsr04 board is using Ultrasonic sound impulses that will be reflected by objects and can be used to measure the distance.

<!-- The [HCSR04 Element](/elements/hcsr04.md) can be used to trigger this sensor and calculate the distance. -->
This sensor is not yet supported directly by the HomeDing library.
{% endcard %}

</div>

## Digital output

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "relay.jpg" %}
The **relay** can be switched using the [Digital Output Element](/elements/digitalout.md) when the board includes a transistor or mosfet to handle the high load demand of a relay.

A relay cannot be used directly with a GPIO pin. There is a example how to control a relay in [ESP-01 Board page](/boards/esp8266/esp01.md).
{% endcard %}

</div>

## Sensor Elements with impulse/frequency transfers

Instead of providing an analog level some sensors provide impulses with a timing or a impulse patterns.

To communicate with these sensors and actors special libraries and elements are used that implement the specific interface and interpretation of the given data.

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "irrecv.jpg" %}
These IR sensors (VS1838 / TSOP4838)
are equipped with an embedded chip that can detect signals using a 38kHz carrier frequency.
When a signal is detected the output is High otherwise low.

IR code detection now has to be implemented by analyzing the input level over time and derive the data from this. There are special libraries
available for this. (e.g. <https://github.com/crankyoldgit/IRremoteESP8266>).

Not yet supported directly by the HomeDing library. Experimental implementation in the DevDing example for RF is available. IR behaves very similar.
<!-- https://github.com/z3t0/Arduino-IRremote -->
 {% endcard %}


{% card "rf433recv.jpg" %}
Receiving **433 MHz radio signals** to create a digital signal.
Not yet fully supported by the HomeDing library. Experimental implementation in the DevDing example for RF 433 is available.
<!-- https://github.com/z3t0/Arduino-IRremote -->
{% endcard %}

{% card "rf433send.jpg" %}
Sending a **433 MHz radio signals** from a digital signal.
Not yet fully supported by the HomeDing library. Experimental implementation in the DevDing example for RF 433 is available.
{% endcard %}

{% card "no.jpg" %}
{% excerptOf collections.Element, "bl0937" %}
[BL0937 Element](/elements/bl0937.md)
{% endcard %}

</div>

## Sensor Elements with data exchange

These sensor deliver data sets instead of digital or analog values.

They communicate by their specific protocol and actions can be created based on the
retrieved values.
 . Often these sensors provide multiple values or implement more complex I/O needs.

### Environment sensing

There are many sensors for temperature and more environment / air parameters varying on interface and parameters:

| Model    | Element          | Temperature | Humidity | Pressure |  VOC  | Protocol |
| -------- | ---------------- | :---------: | :------: | :------: | :---: | -------- |
| AHT20    | [AHT20 Element]  |      X      |    X     |    -     |   -   | I2C      |
| AM2120   | [DHT Element]    |      X      |    X     |    -     |   -   | DHT      |
| AM2302   | [DHT Element]    |      X      |    X     |    -     |   -   | DHT      |
| AM2320   | [AM2320 Element] |      X      |    X     |    -     |   -   | I2C, DHT |
| AM2322   | [DHT Element]    |      X      |    X     |          |       | I2C, DHT |
| BMP280   | [BMP280 Element] |      X      |    -     |    X     |   -   | I2C      |
| BME680   | [BME680 Element] |      X      |    -     |    -     |   -   | I2C, SPI |
| Dallas   | [Dallas Element] |      X      |    -     |    -     |   -   | OneWire  |
| DS18B20  | [Dallas Element] |      X      |    -     |    -     |   -   | OneWire  |
| DHT11    | [DHT Element]    |      X      |    X     |    -     |   -   | DHT      |
| DHT20    | [AHT20 Element]  |      X      |    X     |    -     |   -   | I2C      |
| DHT22    | [DHT Element]    |      X      |    X     |    -     |   -   | DHT      |
| SHT20    | [SHT20 Element]  |      X      |    X     |    -     |   -   | I2C      |
| SHT30    |                  |      X      |    X     |    -     |   -   | I2C      |
| SHT71    |                  |      X      |    X     |    -     |   -   | I2C      |
| SHT85    |                  |      X      |    X     |    -     |   -   | I2C      |
| MICS5524 |                  |      -      |    -     |    -     |   X   | Analog   |

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "dht22.jpg" %}
The **DHT22** is a **air temperature and humidity** sensor also known as chip **AM2302** that supports a range of -40 to 80°C for temperature with a accuracy of ±0.5% and a full range (0..100%) for humidity.

A very special data transport protocol is used.

The [DHT Element] creates actions based on the values polled from the chip.
{% endcard %}


{% card "dht11.jpg" %}
The **DHT11** is a **air temperature and humidity** sensor that supports a range of -20 to 60°C for temperature with a accuracy of ±2% and a limited range (5..95%) for humidity.

A very special data transport protocol is used.

The [DHT Element] creates actions based on the values polled from the chip.
{% endcard %}


{% card "no.jpg" %}
The **AM2320** is a **air temperature and humidity** sensor with high precision for temperature humidity.

The sensor communicate using the i2c bus.

The [AM2320 Element] creates actions based on the values polled from the chip.
{% endcard %}

{% card "sht20.jpg" %}
The **SHT20** is a **air temperature and humidity** sensor with high precision for temperature humidity.

The sensor communicate using the i2c bus.

The [SHT20 Element] creates actions based on the values polled from the chip.
{% endcard %}


{% card "bme680.jpg" %}
The **BME680** is a sensor providing **air temperature, humidity, pressure and gas resistance**.

The special [BME680 Element] supports this sensor using the I2C protocol.
{% endcard %}

{% card "pms5003.jpg" %}
The **PMS5003** is a laser based **air particle** sensor measuring air pollution.

The special [PMS Element](/elements/pms.md) supports this sensor using a serial port.
{% endcard %}


{% card "dallas.jpg" %}
This **Dallas** sensor also known as **Dallas Temperature sensors** measures the surrounding air temperature. There are also sensors with the same chip for measuring liquid temperatures.

A very special `OneWire` protocol is used for data transmission and multiple sensors can share the same signal bus.

The special [Dallas Element] supports this sensor.
{% endcard %}

{% card "no.jpg" %}
The **BMP280** is a combination of a temperature and absolute barometric pressure sensor.

The [BMP280 Element] can read the sensor data and uses the temperature to calibrate the air pressure.
{% endcard %}

{% card "mics5524.jpg" %}
The MICS5524 is a sensor sensible to CO, Alcohol and other VOC Gas.
It creates an analog voltage level based on the actual mass of the detected gas.
The signal can be taken as an indicator but not as an absolute, correct value
without individual calibration of the sensor data.

The [Analog Element] can be used to gather the sensor value.
{% endcard %}


<!--
{% card "MCP9808.jpg" %}
High precision Temperature Sensor
{% endcard %}
-->


<!--
{% card "bme280.jpg" %}
The BME280 is a combination of a temperature, humidity and absolute barometric pressure sensor.
{% endcard %}
-->


<!--
{% card "ccs811.jpg" %}
**CJMCU-811** or **CCS811**
not yet supported.
{% endcard %}
-->

</div>

### Motion

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "no.jpg" %}
**MPU-9250** Nine-Axis (Gyro + Accelerometer + Compass) MEMS **MotionTracking**™ Device
{% endcard %}

</div>

### Measurements

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "ina219.jpg" %}
The **ina219** chip can measure voltage and current for power consumer in the low voltage and low power range.

This chip is supported by the [Probe example](/examples/probe.md) in the HomeDing library
where you can find the [INA219 Element](/elements/ina219.md).
{% endcard %}

{% card "no.jpg" %}
The **ina226** chip can measure voltage and current for power consumer in the low voltage and low power range.

This chip is supported by the [Probe example](/examples/probe.md) in the HomeDing library
where you can find the [INA226 Element](/elements/ina226.md).
{% endcard %}

{% card "soil.jpg" %}
The **Soil Moisture Sensor** is one of the sensors that creates an analog voltage level based on the surrounding moisture of the sensor.
{% endcard %}

{% card "capasoil.jpg" %}
The **Capacitive Soil Moisture Sensor** is one of the sensors that creates an analog voltage level based on the surrounding moisture of the sensor.

The [Analog Element] can create actions based in the analog input signal.

The [Capacitive Soil Moisture Sensor Recipe](/recipes/capasoil.md) shows more details on using such a sensor.
{% endcard %}

</div>

{#
<!-- ### Chips for Digital and Analog I/O

More Digital and Analog I/O can be handled when using special elements for specific chips.

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "pcf8574.jpg" %}
The **PCF8574** is a 8-Bit I/O Expander for I2C Bus to control 8 digital input or output signals.

Supported for using LCD displays on the I2C bus.

The special [PCF8574 Element](/elements/_pcf8574.md) supports this chip.
{% endcard %}

{% card "pcf8591.jpg" %}
The **PCF8591** is a 4 channel 8 bit ADC + 1 channel 8 bit DAC for the I2C bus.

The special [PCF8591 Element](/elements/_pcf8591.md) supports this chip.

{% endcard %}

{% card "ads1115.jpg" %}
The **ADS1115** is a 4 channel 16 bit analog to digital converter (ADC) using the I2C bus.

The special [ADS1115 Element](/elements/_ads1115.md) supports this chip.

{% endcard %} -->
#}

<!-- 
I2C PWM output
 -->

<!--
{% card ".jpg" %}
ADC in i2c
{% endcard %}
-->

<!-- 
{% card "no X9C104S.jpg" %}
100 step potentiometer 100k
{% endcard %}
-->

</div>

## Light control

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "no.jpg" %}
**LEDs** that are directly attached to a GPIO port can be driven by the
[Digital Output Element](/elements/digitalout.md) that supports switching the LED on or off.

The [PWM Output Element](/elements/pwmout.md) can dim a LED using PWM signals.
{% endcard %}


{% card "p9813.jpg" %}
The chip **p9813** als known as **Groove LED driver** is used to control 12V RGB stripes using a special protocol that can control many driver chips n a row.
{% endcard %}

{% card "neo.jpg" %}
**Neopixel** or **WS2811** are chips with a RGB led and an embedded driver chip that can directly be controlled by a GPIO pin. Multiple LEDs of this type can be chained on stripes or can build a LED grid.

The [Neo Element](/elements/light/neo.md) supports these LED chains for colors and patterns.
There is also a special [Neopixel board](/boards/esp8266/neo.md) available especially for controlling these LEDs.
{% endcard %}

</div>

[Light Element](/elements/light/light.md) : PWM values for single color or RGB Leds attached directly on GPIO pins.


## Input Components

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "button.jpg" %}
A simple momentary button can be use directly with a [DigitalInput Element](/elements/digitalin.md).
to create actions on the button signal.

The [Switch Element](/elements/switch.md) implements the behavior for using a button to start/stop or on/of a signal.
{% endcard %}


{% card "switch.jpg" %}
A switch that can give a binary signal and can be use directly with a [DigitalInput Element](/elements/digitalin.md).
{% endcard %}

{% card "rotary.jpg" %}
The [Rotary Element](/elements/rotary.md) enables decoding the 2 signals from a rotary encoder.
{% endcard %}

</div>

## Radio

There is a very specific example that shows how to use the HomeDing and the [Radio library](https://github.com/mathertel/Radio) to build a full functional radio that can be controlled by some local input but also from remote.

<div class="card-container text horizontal" style="--card-image-size:10rem;--card-radius:1em">

{% card "si4721.jpg" %}
The **si4721** is a FM Transceiver that can receive and send FM Audio.

The [Radio Element](/elements/audio/radio.md) is available as an experimental implementation in the DevDing example using the Arduino Radio library supporting only receiving mode.
{% endcard %}


{% card "si4730.jpg" %}
The **si4730** is a AM/FM Radio Receiver chip and module.  

The [Radio Element](/elements/audio/radio.md) is available as an experimental implementation in the DevDing example using the Arduino Radio library.
{% endcard %}

</div>

## See also

* <https://arduinomodules.info/> for a list of common sensor modules
* <https://draeger-it.blog/vergleich-der-sensoren-am2320-dht11-und-dht22/>
* <https://unsinnsbasis.de/sensoren-temperatur-luftfeuchtigkeit/>
* <https://wiki.liutyi.info/display/ARDUINO/Sensors>

[Analog Element]: /elements/analog.md
[AHT20 Element]: /elements/aht20.md
[BME680 Element]: /elements/bme680.md
[AM2320 Element]: /elements/am2320.md
[BMP280 Element]: /elements/bmp280.md
[Dallas Element]: /elements/dallas.md
[DHT Element]: /elements/dht.md
[SHT20 Element]: /elements/sht20.md
