---
title: Command Line CLI commands
description: Update and config of devices using the command line
layout: "page.njk"
tags: ["Implementation"]
excerpt: >
  Hints and details on how to control many devices using a command line approach.
---

If you have more that a handful devices running in your local network you may need some automating
in controlling and updating. The commandline interface can help you.

This version is available on Windows only.

Installing the bonjour package for Windows from Apple is a current pre-requisite.
Please install the Bonjour Print Services for Windows from <https://support.apple.com/kb/DL999>

In Short:

``` txt
hd-discover -list
hd-discover -save
hd-backup <devicename>
hd-backup --all
hd-restore <devicename> <target-ip-address|target-hostname>
```

## HD-Discover

The discover command allows finding current active devices on the local network.
Be aware that you may have multiple local networks when you use WLAN repeaters.

The discovery is using mDNS also known as Bonjour that allows querying for devices with
special protocol.

The command line tool `dns-sd` is used internally.

Starting the command with no parameters will give you a brief help:

``` txt
...>hd-discover

HomeDing Device discover utility.

This is a utility to discover devices using the homeding library.

Usage: hd-discover [parameters]
  -h, --help     Get a brief help on using this tool
  -l, --list     list found devices
  -s, --save     save found devices in file `hd-devices`
```

Starting the command with the `-list` parameter will list all Arduino devices based on the homeding library.

The output is formatted as URL you you can directly open the browser and see the device running.

``` txt
...>hd-discover --list

HomeDing Device discover utility.

Searching Arduino HomeDing devices on the local network...

found devices:
  http://airding/
  http://plug04/
  http://dispding/
  http://plug07/
  http://bulb04/
  http://rfbridge/
  http://plug09/
  http://switch1/
  ...

done.
```

Starting the command with the `-save` parameter will add the current found devices to the list
in the file `.\configs\hd-devices.txt`.

This file may grow over time when you add or rename devices. It is used by the `hd-backup` utility.

``` txt
...>hd-discover --save

HomeDing Device discover utility.

Searching Arduino HomeDing devices on the local network...

found devices:
  http://airding/
  http://plug04/
  ...

adding to .\configs\hd-devices.txt

done.
```

You can use the `dns-sd` utility also to find web servers (_http._tcp) and Arduino devices (_arduino._tcp)
by using:

``` txt
dns-sd -B _arduino._tcp
```

or

``` txt
dns-sd -B _http._tcp
```

You must stop this program by using <ctrl>-C.


## HD-BackUp

Starting the command with no parameters will give you a brief help:

``` txt
...>hd-backup

HomeDing Configuration Backup Utility.

This is a utility to download the configuration from a device to the local configs folder

Usage: hd-backup.bat [parameters] <devicename>
  -h, --help     Get a brief help on using this tool
  --all          download config from from all known devices

There will be 3 files saved to the folder:
  <devicename>-sysinfo.json  containing the result from /api/sysinfo
  <devicename>-env.json      containing the file /env.json
  <devicename>-config.json   containing the file /config.json
```

Starting the command with a devicename parameter creates backup of the /api/sysconf information,
the /env.json and /config.json files:

``` txt
...>hd-backup plug08

HomeDing Configuration Backup Utility.

Backup configuration...
  Device name = plug08

get sysinfo...
get env.json...
get config.json...

saved...
  .\configs\plug08-config.json
  .\configs\plug08-env.json
  .\configs\plug08-sysinfo.json
done.
```


## HD-Restore

Starting the command with no parameters will give you a brief help:

``` txt
...>hd-restore

HomeDing Configuration Restore Utility.

hd-restore <devicename> <target-ip-address|target-hostname>
```


## HD-upload

Starting the command with no parameters will give you a brief help:

``` txt
...>hd-upload

HomeDing Firmware OTA upload utility.

This is a helpful wrapper on Windows for the standard upload tool "espota.py" that
searches for the latest build to upload to the specified device.
Usage: hd-upload.bat [parameters] <devicename> [firmware]
  -h, --help     Get a brief help on using this tool
  -p pass        use `pass` as upload password

The bin file is searched in the build subdirectory
When specifying a firmware name the file is taken from the bin directory.

```

For direct **uploading** of the firmware to a device you can use the following batch file:

``` txt
hd-upload plug08
```

The firmware files must be placed in the `bin` folder using the Arduino command `Export compiled binary`.
In this folder you can collect multiple binaries to be uploaded to different devices.

The device must have a [OTA Element](/elements/ota.md) configured to allow uploading of new firmware.

A device without configuration files will automatically create a device and ota element
so can can find and upload firmware from the start.


## HD-build

not yet done.

The HomeDing project that is used to create the firmware today has no support
for building a firmware using a command line .

It is on the list for future extensions when the Arduino CLI is finally available as a stable release.


## Command Line Builds and Uploads for WebFiles

not yet done.

you find cli command in the WebFiles project.
These will be moved over to the Arduino Library Root folder.

The **WebFiles** projects that is used to create the Web UI and portal implementation
all build steps are implemented using the npm tasks defined in package.json.
Some of them use nodejs scripts under the hood that can also be started directly.
Best approach is to use the npm tasks. They are also used by the Github Actions.

The `build` and `pack` tasks create the output folders `dist` and `dist-mini` containing the files for the Web UI
that need to be uploaded into the filesystem of the device.

For direct uploading the files to a device you can use the following batch files on windows:

``` txt
rem upload files for a 4 MByte flash device 
md-uploadDist.bat <devicename>

rem upload files for a 1 MByte flash device 
md-uploadMini.bat <devicename>
```

