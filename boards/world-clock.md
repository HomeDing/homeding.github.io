---
title: Word Clock Example 
tags: ["Board"]
---

<https://www.ebay.de/itm/274588288050>
<http://www.chinalctech.com/cpzx/Clock_module/477.html>
<https://de.aliexpress.com/item/1005001616885165.html>

SCL 4
SDA 5
SSD1306 0x3C

SCL 14
SDA 12
PCF8563T 0x51

ESP8266 ESP-12F 0,96 inch OLED Display WiFi Uhr Modul Wetter Prognose IIC I2C Interface Micro USB 5V Für Arduino DIY

Interface Beschreibung:
Onboard reife und stabile ESP-12F WIFI modul, große kapazität 4M BYTE FLASH;

Onboard I2C kommunikation interface 0,96 inch OLED display;
Onboard PCF8563T uhr schaltung, es kann in der regel auch wenn die power ist off;

Die ESP8266 UART interface ist vorbehalten zu unterstützung die zweite zeit und schreiben ihre eigenen firmware;

Power versorgung: MICRO USB 5V netzteil;

Doppel-schicht struktur design, kleine größe und gute aussehen, die beste wahl für DIY WIFI uhr

Spezifikation:
0,96 inch OLED display: die fahrer IC ist SSD1306;
ESP12FWF modul: FLASH kapazität ist 4 MBYTE;
MICRO USB5V netzteil interface;
PCF8563T uhr chip;
CR1220 taste batterie; versorgung power zu uhr schaltung nach dem ausschalten
UART programm download-schnittstelle: IO0 und GND sind kurzgeschlossen wenn das herunterladen, 3V3, TXD, RXD, GND sind jeweils Verbinden zu 3V3, RXD, TXD, GND von externe TTL serial port modul (wie FT232 modul), download


<https://ae01.alicdn.com/kf/H4dc0fe4f6201499ab7794701e6d76630T.png>


## PCF8563T clock chip

Interrupt out not connected.

via i2c bus
address : read A3h and write A2h

readTime = function (self)
       wkd = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }
       i2c.start(self.id)
       i2c.address(self.id, self.address, i2c.TRANSMITTER)
       i2c.write(self.id, 0x02)
       i2c.stop(self.id)
       i2c.start(self.id)
       i2c.address(self.id, self.address, i2c.RECEIVER)
       c=i2c.read(self.id, 7)
       i2c.stop(self.id)
       return  bcdToDec(bit.band(string.byte(c,1),0x7f)),
               bcdToDec(bit.band(string.byte(c,2),0x7f)),
               bcdToDec(bit.band(string.byte(c,3),0x3f)),
               bcdToDec(bit.band(string.byte(c,4),0x3f)),
               wkd[tonumber(bcdToDec(bit.band(string.byte(c,5),0x7)))],
               bcdToDec(bit.band(string.byte(c,6),0x1f)),
               bcdToDec(string.byte(c,7))
   end

   setTime = function (self, second, minute, hour, day, date, month, year)
       i2c.start(self.id)
       i2c.address(self.id, self.address, i2c.TRANSMITTER)
       i2c.write(self.id, 0x02)
       i2c.write(self.id, decToBcd(second))
       i2c.write(self.id, decToBcd(minute))
       i2c.write(self.id, decToBcd(hour))
       i2c.write(self.id, decToBcd(day))
       i2c.write(self.id, decToBcd(date))
       i2c.write(self.id, decToBcd(month))
       i2c.write(self.id, decToBcd(year))
       i2c.stop(self.id)
   end

### Libraries

* <https://github.com/elpaso/Rtc_Pcf8563>
* <https://github.com/junhuanchen/esp32-PCF8563>


* <http://www.esp8266learning.com/wemos-pcf8563-rtc-example.php>

* <https://makezine.com/2019/01/18/getting-started-with-real-time-clocks/>
