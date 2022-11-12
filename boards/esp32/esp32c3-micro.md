---
title: ESP32-C3 micro board with LCD
description: Very small ESP32-C3 Board with OLED display.
layout: "page.njk"
tags: ["Board"]
excerpt: >
  This is very small board based on EPS32-C3 with an 0.42" onboard OLED display
  and a single NeoPixel.
---

This board is not supported by Adafruit library.

See [ESP32-C3 Boards](/boards/esp32/esp32c3.md)

4MB Flash

Ceramic Antenna

QWIIC compatible socket for wiring I2c based sensors.

I2C Interface use by OLED display 

* SDA(GPIO5)
* SCL(GPIO6)

USB-C connector
directly connected to ESP32-C3 as this processor supports USB from the SoC.

5V to 3.3V regulator.

1xREset taste(CHIP_EN, große für neustart ihr programm oder eingabe die ROM bootloader)
1xBootTaste(GPIO9, in die ROM bootloader oder für benutzer eingang)

Board can be powered by USB, 5V, 3.3V

#define LED_PIN 2 : WS2812B


ESP32-C3- LCD
ESP32-C3 ist ein low-cost-mikrocontroller von Espressif, dass unterstützt 2,4 GHz Wi-Fi und Bluetooth®Niedrigen Energie (Bluetooth 5 (LE)). Verwenden RISC V als die core. Gibt es eine mindest anzahl von pins auf dieser chip, es ist speziell entwickelt, um niedrige kosten und für einfacher projekte als ESP32-Sx oder ESP32 classics mit ihren großen anzahl von GPIO. Denken von es mehr als einer beabsichtigten ersatz zu die ESP8266 als zu die ESP32!Es hat gebaut-inUSB-zu-Serielle, aber nicht nativen USB-es kann nicht handeln als eine tastatur oder disk drive. Die chip verwendet hier hat 4MB flash-speicher, 400 KB SRAM.

Die ESP32-C3 integriert eine reiche set von peripheriegeräte, von UART, I2C, I2S, fernbedienung peripheren, LED PWM controller, allgemeine DMA controller, TWAI controller, USB Serielle/JTAG controller, temperatur sensor, und ADC. Es enthält auch SPI, Dual SPI, und Quad SPI schnittstellen. Es ist keine DAC oder native kapazitive touch.

Mit seine state-of-the-art und RF leistung, diese SoC ist eine ideale wahl für eine breite vielzahl von anwendung szenarien in bezug auf die Internet der Dinge (ioT), wearable electronics, und smart häuser.

Merkmale
Basierend ESP32-C3FH4 WIFI & Bluetooth LE RISC-V Single-Core-CPU

<!--
U8G2_SSD1306_72X40_ER_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);
-->


## See also

* <https://github.com/01Space/ESP32-C3-0.42LCD>




## Debugging

Flashing ESP32-C3 using built-in usb serial/jtag controller 
<https://esp32.com/viewtopic.php?f=2&t=24419>

https://code.visualstudio.com/docs/cpp/launch-json-reference

https://docs.espressif.com/projects/esp-idf/en/v4.3/esp32c3/api-guides/jtag-debugging/index.html?highlight=debug

https://www.wemos.cc/en/latest/c3/c3_mini.html



{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
      {
    "name": "ESP-Prog Debug",
    "type": "gdb",
    "request": "launch",
    "target": "./build/HelloWorld.ino.elf",
    "cwd": "${workspaceFolder}",
    "gdbpath": "${config:esp_gdb}",
    "preLaunchTask": "OpenOCD",
    "autorun": [
      "target remote :3333",
      "mon reset halt",
      "flushregs",
      "thb app_main",
      "c"
    ],
  }
  ]
}



Display in separate shop <https://www.smart-prototyping.com/0_42-inch-OLED-Bare-Display-72-40-SSD1306>

DataSheet: <https://www.smart-prototyping.com/image/data/2020//12/102123%20%200.42%20inch%20OLED%20Bare%20Display%20(72x40,%20SSD1306)/0.42-ZJY042-7240TSWEG01.pdf>


``` txt
simple...
begin()
E (3416) =>: 0x3fc95a4f   00 
E (3416) =>: 0x3fc95a4f   ae   Display OFF
E (3419) =>: 0x3fc95a4f   00 
E (3426) =>: 0x3fc95a4f   d5 80 set clock
E (3440) =>: 0x3fc95a4f   00 
E (3447) =>: 0x3fc95a4f   a8 27 Set Multiplex Ration
E (3461) =>: 0x3fc95a4f   00 
E (3468) =>: 0x3fc95a4f   d3 00 Set Display Offset 
E (3482) =>: 0x3fc95a4f   00 
E (3489) =>: 0x3fc95a4f   ad 
E (3496) =>: 0x3fc95a4f   30 
E (3504) =>: 0x3fc95a4f   00 
E (3510) =>: 0x3fc95a4f   8d 
E (3517) =>: 0x3fc95a4f   14 
E (3525) =>: 0x3fc95a4f   00 
E (3531) =>: 0x3fc95a4f   40 
E (3539) =>: 0x3fc95a4f   00 
E (3546) =>: 0x3fc95a4f   a6 
E (3553) =>: 0x3fc95a4f   00 
E (3560) =>: 0x3fc95a4f   a4 Display ON/OFF
E (3567) =>: 0x3fc95a4f   00 
E (3574) =>: 0x3fc95a4f   20 
E (3581) =>: 0x3fc95a4f   00 
E (3588) =>: 0x3fc95a4f   00 
E (3595) =>: 0x3fc95a4f   a1 Set Segment Re-Map
E (3602) =>: 0x3fc95a4f   00 
E (3609) =>: 0x3fc95a4f   c8 Set output scan direction
E (3616) =>: 0x3fc95a4f   00 
E (3623) =>: 0x3fc95a4f   da 12 set COM Hardware Config
E (3637) =>: 0x3fc95a4f   00 
E (3644) =>: 0x3fc95a4f   81 
E (3651) =>: 0x3fc95a4f   af 
E (3658) =>: 0x3fc95a4f   00 
E (3665) =>: 0x3fc95a4f   d9 
E (3672) =>: 0x3fc95a4f   22                                                |"|
E (3679) =>: 0x3fc95a4f   00 
E (3686) =>: 0x3fc95a4f   db 20 Set VCOMH Deselect Level
E (3700) =>: 0x3fc95a4f   00 
E (3707) =>: 0x3fc95a4f   2e 
E (3714) =>: 0x3fc95a0f   00 
E (3721) =>: 0x3fc95a0f   11 
E (3728) =>: 0x3fc95a0f   00 
E (3735) =>: 0x3fc95a0f   0c 
E (3743) =>: 0x3fc95a0f   00 
E (3749) =>: 0x3fc95a0f   b0 
E (3757) =>: 0x3fc959ef   40                                                |@|
E (3764) =>: 0x3fc8db90   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (3772) =>: 0x3fc8dba0   00 00 00 00 00 00 00 00                           |........|
E (3780) =>: 0x3fc959ef   40                                                |@|
E (3787) =>: 0x3fc8dba8   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (3795) =>: 0x3fc8dbb8   00 00 00 00 00 00 00 00                           |........|
E (3803) =>: 0x3fc959ef   40                                                |@|
E (3810) =>: 0x3fc8dbc0   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (3818) =>: 0x3fc8dbd0   00 00 00 00 00 00 00 00                           |........|
E (3826) =>: 0x3fc95a0f   00 
E (3833) =>: 0x3fc95a0f   11 
E (3840) =>: 0x3fc95a0f   00 
E (3847) =>: 0x3fc95a0f   0c 
E (3854) =>: 0x3fc95a0f   00 
E (3861) =>: 0x3fc95a0f   b1 
E (3868) =>: 0x3fc959ef   40                                                |@|
E (3875) =>: 0x3fc8dbd8   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (3883) =>: 0x3fc8dbe8   00 00 00 00 00 00 00 00                           |........|
E (3891) =>: 0x3fc959ef   40                                                |@|
E (3898) =>: 0x3fc8dbf0   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (3906) =>: 0x3fc8dc00   00 00 00 00 00 00 00 00                           |........|
E (3914) =>: 0x3fc959ef   40                                                |@|
E (3921) =>: 0x3fc8dc08   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (3929) =>: 0x3fc8dc18   00 00 00 00 00 00 00 00                           |........|
E (3937) =>: 0x3fc95a0f   00 
E (3944) =>: 0x3fc95a0f   11 
E (3951) =>: 0x3fc95a0f   00 
E (3958) =>: 0x3fc95a0f   0c 
E (3965) =>: 0x3fc95a0f   00 
E (3972) =>: 0x3fc95a0f   b2 
E (3979) =>: 0x3fc959ef   40                                                |@|
E (3986) =>: 0x3fc8dc20   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (3994) =>: 0x3fc8dc30   00 00 00 00 00 00 00 00                           |........|
E (4003) =>: 0x3fc959ef   40                                                |@|
E (4009) =>: 0x3fc8dc38   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4017) =>: 0x3fc8dc48   00 00 00 00 00 00 00 00                           |........|
E (4026) =>: 0x3fc959ef   40                                                |@|
E (4032) =>: 0x3fc8dc50   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4040) =>: 0x3fc8dc60   00 00 00 00 00 00 00 00                           |........|
E (4049) =>: 0x3fc95a0f   00 
E (4055) =>: 0x3fc95a0f   11 
E (4062) =>: 0x3fc95a0f   00 
E (4069) =>: 0x3fc95a0f   0c 
E (4076) =>: 0x3fc95a0f   00 
E (4083) =>: 0x3fc95a0f   b3 
E (4090) =>: 0x3fc959ef   40                                                |@|
E (4097) =>: 0x3fc8dc68   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4105) =>: 0x3fc8dc78   00 00 00 00 00 00 00 00                           |........|
E (4114) =>: 0x3fc959ef   40                                                |@|
E (4120) =>: 0x3fc8dc80   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4128) =>: 0x3fc8dc90   00 00 00 00 00 00 00 00                           |........|
E (4137) =>: 0x3fc959ef   40                                                |@|
E (4143) =>: 0x3fc8dc98   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4151) =>: 0x3fc8dca8   00 00 00 00 00 00 00 00                           |........|
E (4160) =>: 0x3fc95a0f   00 
E (4166) =>: 0x3fc95a0f   11 
E (4173) =>: 0x3fc95a0f   00 
E (4180) =>: 0x3fc95a0f   0c 
E (4187) =>: 0x3fc95a0f   00 
E (4194) =>: 0x3fc95a0f   b4 
E (4201) =>: 0x3fc959ef   40                                                |@|
E (4208) =>: 0x3fc8dcb0   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4217) =>: 0x3fc8dcc0   00 00 00 00 00 00 00 00                           |........|
E (4225) =>: 0x3fc959ef   40                                                |@|
E (4231) =>: 0x3fc8dcc8   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4240) =>: 0x3fc8dcd8   00 00 00 00 00 00 00 00                           |........|
E (4248) =>: 0x3fc959ef   40                                                |@|
E (4254) =>: 0x3fc8dce0   00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
E (4263) =>: 0x3fc8dcf0   00 00 00 00 00 00 00 00                           |........|
E (4271) =>: 0x3fc95a4f   00 
E (4277) =>: 0x3fc95a4f   af 
clearBuffer()
```


## External setting

´´´ CPP
void SSD1306()
{
 RES=0; 
 delay(1000);
 RES=1; 
 delay(1000);
 
 write_i(0xAE); /*display off*/ 
 
 write_i(0xD5); /*set osc division*/ 
 write_i(0xF0); 
 write_i(0xA8); /*multiplex ratio*/ 
 write_i(0x27); /*duty = 1/40*/ 
 write_i(0xD3); /*set display offset*/ 

  write_i(0x00); 
 write_i(0x40); /*Set Display Start Line */ 
 write_i(0x8d); /*set charge pump enable*/ 
 write_i(0x10); 
 write_i(0x20); /*Set page address mode*/ 
 write_i(0x02); 
 write_i(0xA1); /*set segment remap*/ 
 write_i(0xC8); /*Com scan direction*/ 
 write_i(0xDA); /*set COM pins*/ 
 write_i(0x12); 
 write_i(0xAD); /*Internal IREF Setting*/ 
 write_i(0x30); 
 
 write_i(0x81); /*contract control*/ 
 write_i(0x2F); /*128*/ 
 write_i(0xD9); /*set pre-charge period*/ 
 write_i(0x22); 
 write_i(0xdb); /*set vcomh*/ 
 write_i(0x20); 
 write_i(0xA4); /*Set Entire Display On/Off*/ 
 write_i(0xA6); /*normal / reverse*/ 
 write_i(0x0C); /*set lower column address*/ 
 write_i(0x11); /*set higher column address*/ 
 
 write_i(0xAF); /*display ON*/ 
}
```
