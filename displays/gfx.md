# Displays using GFX Library by Adafruit

The display drivers for pixel based displays in the HomeDing Library
are using drivers based on the GFX library from AdaFruit,
providing common functionality to output graphic primitives and text.

This was optimized in version 0.8.1 of the library to enable using the same resources like fonts
for many different displays and saving overall program space.

## GFX Library

The functionality of the GFX library is used to "draw" all kind of things to the displays.

On top of this library the display driver chip specific libraries are implemented and provide
(not so much unified) functionalities that are display specific.

The Display Item Elements like text, dots, bars, lines are used to specify **what** is drawn.
They also call the "flush" function at the end of any drawing to enable shifting out the drawn pixels to the display
for all displays that use a buffred approach.

The documentation of this library can be found at <https://learn.adafruit.com/adafruit-gfx-graphics-library>.


## GFX Canvas Usage

Some displays use no original AdaFruit library but are using the Canvas support of the library.
A buffer is allocated in main memory representing the pixels and the flush function
will send all of them to the display.

See DisplayAdapterMAX7219.



All drawings are made in main memory


<https://github.com/adafruit/Adafruit_EPD/blob/master/src/Adafruit_EPD.cpp>


## See also

* [Fonts](fonts.md)
* <https://cdn-learn.adafruit.com/downloads/pdf/adafruit-gfx-graphics-library.pdf>
