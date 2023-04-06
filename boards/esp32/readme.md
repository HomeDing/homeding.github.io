# ESP32 with HomeDing

The HomeDing library is compatible to the ESP32 Arduino environment.

Specific to ESP32 are the following features:

* In contrast to the ESP8266 there are no other names for the GPIO pins like the one from NodeMCU.
The numbers in the processor datasheet are used.

* The [Touch Element](/elements/touch.md) allows using the ESP32 built-in touch features on the GPIO pins.
* The [MY9291 Element](/elements/light/my9291.md) only works with ESP8266 by the used library.

TODO:

* [ ] Wakeup / low power consumption in board.cpp 
* [ ] reset / restart in board.cpp
* [ ] RTCVariables
* [ ] PMSElement

## See also

* <https://lastminuteengineers.com/esp32-arduino-ide-tutorial/>

Boards Overview from espressif:

<https://www.espressif.com/en/products/devkits>

<https://www.studiopieters.nl/esp32-pinout/>


## ESP32 specific

* ESP32 Arduino Core documentation:
  * <https://docs.espressif.com/projects/arduino-esp32/en/latest/index.html>
  * <https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/installing.html>

* The ESP32 uses partitions to structure the flash memory. The Arduino environment supports a fixed layout that cannot be changed easily.
  * <https://blog.espressif.com/how-to-use-custom-partition-tables-on-esp32-69c0f3fa89c8>

* Setup the development with Arduino:
  * <https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html>
  * <https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/>

* A ESP32 specific troubleshooting guide with so me helpful tips on how to setup the dev environment.
  * <https://randomnerdtutorials.com/esp32-troubleshooting-guide/>

* Setup Espressif IDF
  * <https://docs.espressif.com/projects/esp-idf/en/latest/get-started/windows-setup.html>

* <https://www.esp32.com/viewtopic.php?t=6383>
* <https://github.com/Deous/VSC-Guide-for-esp32>
* <https://github.com/botofancalin/Esp32_debug_template>


## Projects

* <https://github.com/schreibfaul1/ESP32-audioI2S>


## Blogs and Infos

* <http://esp32.net/>


<!--
## JTAG debugging

* <https://www.xjtag.com/>
* <https://www.xjtag.com/about-jtag/what-is-jtag/>

* https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html

* <https://www.youtube.com/watch?v=uq93H7T7cOQ>

* <https://github.com/makercrew/esp_prog_vscode_debug>

* <https://code.visualstudio.com/docs/cpp/cpp-debug>
-->


## Modules

* [esp32 DevKits](esp32_devkit.md) 30, 36 and 38 pin versions with WROOM module
* [ESP32 Camera Module](esp32_cam.md)
* [esp32 azure iot kit](esp32_azure_iot_kit.md)

