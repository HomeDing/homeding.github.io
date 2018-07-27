# The HomeDing built-in Web-Server

The web-server inside the IoT Board System is supporting multiple features and is part of the connectivity of things among each other:
•	A standard web-server for load the files from the file-system into the browser.
•	Build thing specific UIs to show current information or changing settings.
•	List exiting files in the file-system
•	Update and delete a file in the file-system
•	A minimal UI for changing text based files like HTML, CSS and JavaScript and the config.json file.
•	Upload new files using drag&drop
Todo: use the file open dialog
•	Allow other things to send action to the thing.
A web-server however is not strictly required. When a thing is relying on a battery with limited capacity is is possible to run a thing without a web-server and to put the thing into a deep sleep mode to save the battery.
e.g. outdoor sensors will only send actions every some minutes but are not directly addressable.
See samples ???

# The UI of the Web Server

## Display Adapter

There are many solutions for small displays available that can be used togther with a ESP8266 board. Some boards like this??? Aready come with an onboard display.
To make it possible to use different display types together with the ding implementation DisplayAdapter Classes therefore enacspulate all the required and supported features, normally a subset of the capabilities of the display driver.

The following driver chips are supported as of  now along  with the display library
Display Chip and Class	Features	Library
Display???	Positioned text, dot	???
2004 Display	Positioned text, dot	
8*8 dot	text	

## Display Element

•	Central Display implementation that can display multiple information types


## Web Services

$config
$board
GET  /Type/id
SET / type/ id?property=value. 

Also PUT ???

