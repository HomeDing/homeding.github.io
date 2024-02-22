
From the base element implementation the following properties are available for configuration:

> **title** -- Caption text for the element. Used by the element specific cards on the dash boards.
>
> **description** -- A line of text that gives a short description of the device used in the web UI.
>
> **room** -- The location of the device.
>
> **loglevel** -- This property holds the element specific log level. The default value is LOGGER_LEVEL_ERR == 1.
>
> **startup** -- This property can be used to start the element using a different initialization phase.
>   Possible values are "sys", "net", "time". See [The Startup sequence](/dev/startup.md).
