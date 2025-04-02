---
title: gdrive elements 
tags:
  - "Element"
  - "Network"
  - "WIP"
layout: "page.njk"
description: ...
excerpt: ...
---

The gdrive elements enables communication with a Google Spreadsheets by using scripted services on the sheets...


|  Element  |   Description |
|----|----|
|  **GDriveLog**  | append data to a Google Spreadsheet    |
|  **GDriveState**  | save the latest data or status information in a Google Spreadsheet   |
|  **GDriveAction**  | read actions from a Google spreadsheet that will be executed on a device.   |

* Https Get or post command to retrieve the next action from the sheet for a specific device.


## Log data into spreadsheet

* [link](https://docs.google.com/spreadsheets)
* 
* [link](https://docs.google.com/spreadsheets/d/1PLf0unpU1SC8m-Hfpd4zvSkDhhy8CuEfPn38xoGPuOY/edit?gid=630293481#gid=630293481)
* [text](https://docs.google.com/spreadsheets/d/1PLf0unpU1SC8m-Hfpd4zvSkDhhy8CuEfPn38xoGPuOY/edit?gid=0#gid=0)

* Sheet name: "Log"
* Columns: "time", "device", "text"

* [text](https://script.google.com/macros/s/AKfycbzI3AAmB6XZNegXsS_EGSu_6-CbSGG3G6XR59A_wrbhtpcOfFIp4-udbalAjP5V1NZcwA/exec)
* [text](https://script.google.com/macros/s/AKfycbyDoNBtRA2M6Qz70eqLA4U0859FZu2nNIS1bXIezoN1/dev)
* [text](https://script.google.com/macros/s/AKfycbyDoNBtRA2M6Qz70eqLA4U0859FZu2nNIS1bXIezoN1/dev?time=1&device=devding&text=Hello)

``` cmd
curl -L https://script.google.com/macros/s/AKfycbwFzGN7xwsATEigwcxOts63uYJWLVvmWyBI8sm0nU1FhoneTOi_JEu8MedJ2Ze_GFCmRw/exec?time=24.09.2024+07:08:09&device=devding&log=HelloFromCurl
```


[text](https://script.google.com/macros/s/AKfycbymZ8-MO6uwv3TO-hMgMEK7jwHibLYl1QZXTYJ_iavFzksyTayD-6Wy0R34NzoWQx7YZA/exec)
AKfycbymZ8-MO6uwv3TO-hMgMEK7jwHibLYl1QZXTYJ_iavFzksyTayD-6Wy0R34NzoWQx7YZA

[guide](https://developers.google.com/apps-script/guides/web)

### Head Links

// Head version (only in browser, not in CURL)
https://script.google.com/macros/s/AKfycbyDoNBtRA2M6Qz70eqLA4U0859FZu2nNIS1bXIezoN1/dev

?device=devding&log=HelloCU

https://script.google.com/macros/s/AKfycbyDoNBtRA2M6Qz70eqLA4U0859FZu2nNIS1bXIezoN1/dev?device=devding/dht&data=12.5

### Deployed Links

// a deployed version (anonymous, in browser and CURL)
<https://script.google.com/macros/s/AKfycbwezP1pKBKnRtC44_4uLVKMZIB68WH0NrN8ZcUrE2MPx3345XOJrZYt9IOyVt2s0ey5MA/exec>

<https://script.google.com/macros/s/AKfycbwezP1pKBKnRtC44_4uLVKMZIB68WH0NrN8ZcUrE2MPx3345XOJrZYt9IOyVt2s0ey5MA/exec?device=devding&log=HelloCU>

<https://script.google.com/macros/s/AKfycbwezP1pKBKnRtC44_4uLVKMZIB68WH0NrN8ZcUrE2MPx3345XOJrZYt9IOyVt2s0ey5MA/exec?device=devding/dht&data=12.7>



To log any probe or status data values the gdrivelog element can be configured to send data over the network to a google spreadsheet.


On the device the gdrivelog element will receive values by actions from sensors or other elements.
The timestamp for the data is automatically provided and the sensor type and local id can be given an an option or inside the action.

## Element Configuration

* sourceName -- //devicename/sourcename
* url -- full qualified url including the ? for parameters
* Same as log
* retry

## Google Sheet implementation and configuration

With some help of a embedded script the data will be added to the end of a table in the sheet
by passing the given parameters and limitting the number of rows to avoid ever growing files.

These parameters can be canged in the script.

The sheet must be confirming to the following structure:

First line sets the names of the colums

* **ts** -- the timestamp of the data.
* **id** -- the full name of the device+sensor+localID using the format for addressing elements.
* **d** -- the captured data.

Example URL:

ID, ts, data1, data2,...4
?ts=20240201-12:54:30&id=//device/type/id&d=d1,d2,d3,d4

## See Also

[[log]]


See also:

* [esp32-data-logging-to-google-sheets-with-google-scripts](https://iotdesignpro.com/articles/esp32-data-logging-to-google-sheets-with-google-scripts)