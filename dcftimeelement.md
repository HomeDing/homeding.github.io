# DCFTime Element ???

This time element implements listening to a digital input where a DCF signal is available. 



The DCFtimeElement allows receiving the DCF77 signal that is available in central Europe broadcasting the official central European time as a signal.

The frequency is 77.5 kHz and it takes a full minute to receive the full information.

The configuration for this element is only the pin with the digital input signal. 
pin* | GPIO pin with the decoded DCF77 signal
When a valid time had been decoded the board time will be adjusted.

This element is not sending out actions. When time based actions are required the [time element](elements/time) can be used.

# Element Configuration

Property  Pin for input

## See also

* [Time Elements](timeelements)
