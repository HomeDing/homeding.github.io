# TTGO Gallery (T14)

This is **Work in progress**

## SoC

The `ESP32 Wroover-B` SoC is used on this board.


## Pin usages overview

| ESP32 | Function     |  TFT  |  DAC  | SDMMC |  MIC  |
| ----- | ------------ | :---: | :---: | :---: | :---: |
| IO02  | SD-D0        |       |       |   X   |       |
| IO04  | SD-D1        |       |       |   X   |       |
| IO05  | TFT CS       |   X   |       |       |       |
| IO12  | SD-D2        |       |       |   X   |       |
| IO13  | SD-D3        |       |       |   X   |       |
| IO14  | SD-CLK       |       |       |   X   |       |
| IO15  | SD-CMD       |       |       |   X   |       |
| IO18  | SCLK for TFT |   X   |       |       |       |
| IO19  | MOSI for TFT |   X   |       |       |       |
| n/a   | MISO for TFT |   X   |       |       |       |
| IO21  | MUTE         |       |   X   |       |       |
| IO22  | IIS_DOUT     |       |   x   |       |       |
| IO23  | DC           |   x   |       |       |       |
| IO25  | IIS_LRCK     |       |   x   |       |       |
| IO26  | IIS_BCK      |       |   x   |       |       |
| IO27  |              |       |       |       |   X   |
| IO32  |              |       |       |       |   X   |
| IO33  |              |       |       |       |   X   |


```
#ifndef _TTGO_T14_BOARD_H_
#define _TTGO_T14_BOARD_H_

#ifdef __cplusplus
extern "C" {
#endif
#include "tftspi.h"

#define PCM5102_MUTE                21
#define PCM5102_MUTE_ON             0
#define PCM5102_MUTE_OFF            1

/* I2S gpios */
#define IIS_DOUT                    22
#define IIS_LRCK                    25
#define IIS_BCK                     26
#define IIS_DSIN                    -1
#define IIS_SCLK                    -1

/* SPI gpios */
#define TFT_SPI_MISO                    -1
#define TFT_SPI_MOSI                    19
#define TFT_SPI_SCLK                    18
#define TFT_SPI_CS                      5
#define TFT_DC                          23
#define TFT_RESET                       -1
#define TFT_BACKLIGHT                   27
#define TFT_CHIP_TYPE                   DISP_TYPE_ST7789V   //DISP_TYPE_ILI9341

#define SDCARD_CMD                      15
#define SDCARD_D0                       2
#define SDCARD_D1                       4
#define SDCARD_D2                       12
#define SDCARD_D3                       13


#ifdef __cplusplus
}
#endif

#endif /*_TTGO_T14_BOARD_H_*/
```

T14 V1.3 Board

ESP32-WROVER-B

## TFT LCD display

2.4 inch LCD display of type JLX320-00202-BN. This display uses a ST7789V chip and offers the SPI interface.

| TFT Pin | TFT Name | ESP32 | Function                             |
| ------- | -------- | ----- | ------------------------------------ |
| 1       | GND      | GND   |                                      |
| 2       | VCC      | 3.3V  |                                      |
| 3       | SCK      | IO18  | SCLK                                 |
|         |          |       | MISO                                 |
| 4       | RST      | RST   |                                      |
| 5       | CS       | IO5   |                                      |
| 6       | SDA      | IO19  | MOSI, usually MISO on Arduino Setups |
| 7       | RS       | IO23  | DC                                   |
| 8       | LED+     |       | +3.3 V                               |
| 9       | LED-     |       | GND via 4.7 Ohm                      |

* Fixed brightness of background LED  


It can be used with the Adafruit_ST7789 library
by using the initialization of SPI and the Library:

``` cpp
#define TFT_CS 5
#define TFT_RST -1
#define TFT_DC 23
#define TFT_MISO 32
#define TFT_MOSI 19 // Data out
#define TFT_SCLK 18 // Clock out

Adafruit_ST7789 tft = Adafruit_ST7789(TFT_CS, TFT_DC, TFT_RST);

// in setup()...
  SPI.begin(TFT_SCLK, TFT_MISO, TFT_MOSI);
  tft.init(240, 320); // Init ST7789 320x240
```

**Display config**

``` json
  "DisplayST7789": {
    "0": {
      "description": "TTGO-Gallery",
      "loglevel": 2,
      "width": "240",
      "height": "320",
      "spimosi": 19,
      "spimiso": 32,
      "spiclk": 18,
      "spics": 5,
      "spidc": 23,
      "xlightpin": 4,
      "rotation": 90,
      "xresetpin": 23
    }
  }
```

The documentation of the TTGO-Time-Music-Box mentions a Backlight switch, but this seems to be a wrong hint.


## SD Card

SD Cards are supported in 2 different implementations by the ESP32:

1. the 1-bit SD implementation using the SPI interface
2. the 4-bit SDMMC implementation using the hardware implemented SD/MMC host controller of the ESP32 chip HS2_*

The SD card on this board is actually an SDMMC Card implementation using the 4-bit of data transfer.

The connection used is "Slot 1" / "HS2_* in the docs (standard wiring):

| ESP32 PIN | SD Name | SD Pin |      |
| --------- | ------- | ------ | ---- |
| IO12      | Data 2  | 1      |      |
| IO13      | Data 3  | 2      |      |
| IO15      | CMD     | 3      |      |
|           | VDD     | 4      | 3.3V |
| IO14      | CLK     | 5      |      |
|           | VSS     | 6      | GND  |
| IO2       | Data 0  | 7      |      |
| IO4       | Data 1  | 8      |      |
|           |         | 9      |      |

You can use the SDMMC_Test.ino example for the ESP32 Wroover module that works out of the box to verify the hardware configuration and SD card.  

The SDMMC interface is implemented in the ESP-IDF and you can find details at
<https://espressif-docs.readthedocs-hosted.com/projects/esp-idf/en/latest/api-reference/peripherals/sdmmc_host.html>


## Audio Output Path

### I2C

The boards allows using the I2S interface from the ESP32 chip to create digital audio signals.

### DAC

The audio feature of this board include a Digital-Analog Converter (DAC) converting the I2C signal from the ESP32 wroover into an analog signal.
Here the PCM5102A chip is used.

The PCM5102A has an mute function that can be controlled via IO21. The level has to set to HIGH to disable the MUTE function sou cou can hear something.
Mute applies to the Line Out and Speaker Output.

# define PCM5102_MUTE                21
# define PCM5102_MUTE_ON             0
# define PCM5102_MUTE_OFF            1

The following pins are used:

| ESP32 PIN | Name           | PCM5102A Pin | Headphone |
| --------- | -------------- | ------------ | --------- |
| IO21      | Mute Control   | XSMT         |
| IO22      | Serial Data    | DIN          |           |
| IO25      | WordClock LRCK | LRCK         |           |
| IO26      | BitClock BCK   | BCK          |           |
|           |                | L            | L         |
|           |                | R            | R         |

The analog signal from the DAC is directly available at the headphone connector.
When there are no headphones plugged in the signal is forwarded to the volume regulator and amplifier on board.

### Volume control Potentiometer

Between the analog signal from the DAC to the Amplifier a 50k potentiometer levels the signal volume.
By moving beyond lowest volume tThe integrated switch cuts the power from the amplifier chip.

### Amplifier

There is a Amplifier chip on the board that allows directly attaching stereo speakers.

Here the PAM8403 chip is used. It operates at 5V and can create 2*3W output on 4 Ohm speakers. It ha s also a mute function but this is disabled.  


## Microphone

Type ICS-43434

(434 QJ29Y)
(4j434 ICS-43434)

    GPIO Pins --- Mic 
    27        --- data  
    32        --- BCK
    33        --- LRCK 
    +3v3      --- VCC
    GND       --- GND

Example:

<https://github.com/LilyGO/TTGO-T5S-Epaper/blob/master/ESP32_MEMSMic/ESP32_MEMSMic.ino>

<https://github.com/elshnkhll/ICS43434>


## more

https://github.com/Xinyuan-LilyGO/Ka-Radio32?spm=a2g0o.detail.1000023.2.41542f1andLoEs


<https://learn.sparkfun.com/tutorials/i2s-audio-breakout-hookup-guide/all>

<https://github.com/earlephilhower/ESP8266Audio>

<https://github.com/Gianbacchio/ESP8266_Spiram>

<https://forum.arduino.cc/index.php?topic=522465.0>

### Diverse chips

CP2104: USB-to-UART Bridge Controller
ME6211: 3.3 regulator


### LiPo Battery

TP4054: Battery charger

Blue LED when charging
TP4054: Battery charger, Blue LED when charging


### Switch

has no function and is shortcut by 0 Ohm resistor.
between 5V and +5V ???


## Other infos on ESP32 in general

<https://docs.espressif.com/projects/esp-idf/en/latest/get-started/>

<https://randomnerdtutorials.com/esp32-pinout-reference-gpios/>


## Fitting Projects

<https://www.instructables.com/id/ESP32-Photo-Clock/>


## See also

* https://github.com/azatvaleev/Ka-Radio32
  
* https://github.com/MrBuddyCasino/ESP32_MP3_Decoder

https://github.com/lewisxhe/TTGO-Time-Music-Box


* **Source Code**: <https://github.com/lewisxhe/TTGO-Time-Music-Box>
* Official Product Page: <http://www.lilygo.cn/prod_view.aspx?TypeId=50033&Id=1168>
* Latest Application: <https://github.com/Xinyuan-LilyGO/Ka-Radio32>
* Active GitHub: <https://github.com/Xinyuan-LilyGo>
* (older GitHub: <https://github.com/LilyGO>)
* video: <https://www.youtube.com/watch?v=yfz6r5khsMk>
* Incomplete Hardware Documentation (only pictures) <https://github.com/LilyGO/TTGO_T_Gallery>
* TTGO-Time-Music-Box <https://github.com/LilyGO/TTGO-Time-Music-Box>
* PCM5102a DAC datasheet <http://www.ti.com/lit/ds/symlink/pcm5102a.pdf>
* PAM8403 datatsheet <https://www.diodes.com/assets/Datasheets/PAM8403.pdf>

http://arduino.ru/forum/proekty/wi-fi-internet-radio?page=149