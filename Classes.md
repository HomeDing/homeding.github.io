# Class implementation documentation

The following classes have been implemented:

### Board

> The Board class helps organizing the instanciated Elements and dispatching Actions.

### BoardServer

> Implementation of a web server request hander to handle the IoT board REST services.

### DisplayAdapter

> Abstract class, defining the functionlaity the HomeDing requires to be implemented for a local attached display.

### DisplayAdapterLCD

> DisplayAdapter implementation for the HomeDing library adapting LCD displays using the HD44780 chip.

### DisplayAdapterSSD1306

> DisplayAdapter implementation for the HomeDing library adapting OLED displays using the SSD1306 chip.
 
### Element

> The Element class acts as the base class for all kind of Elements and implements some generic functionality.
>
> See [Element Class Definition](ElementClass)

### FileServer

### HomeDing

### Logger

## Elements

Based on these classes many Elements have been implemented.

See [AvailabeElements](AvailabeElements)
