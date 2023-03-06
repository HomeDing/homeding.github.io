---
title: Command Line CLI commands
tags: ["Implementation"]
layout: "page.njk"
description: Update and config of devices using the command line
excerpt: >
  Hints and details on how to control many devices using a command line approach.
---

If you have more that a handful devices running in your local network you may need some automating
in controlling and updating. The commandline interface can help you.

This version is available on Windows only.

Installing the bonjour package for Windows from Apple is a current pre-requisite.
Please install the Bonjour Print Services for Windows from <https://support.apple.com/kb/DL999>

The following folders are used in the HomeDing Library folder.

**.\configs** -- This folder contains configuration files for the devices.

**.\configs\hd-devices** -- This file contains the list of network names of known devices.

**.\bin** -- This folder contains combined firmware files.


### In Short

> ``` txt
> hd-discover -list
> hd-discover -save
> hd-backup <devicename>
> hd-backup --all
> hd-restore <devicename> <target-ip-address|target-hostname>
> hd-upload [options] <devicename> [firmware]
> hd-webupload [options] <devicename> [example]
> ```


## hd-discover

The `discover` command allows finding current active devices on the local network.
Be aware that you may have multiple local networks when you use WLAN repeaters.

The discovery is using mDNS also known as Bonjour that allows querying for devices with
special protocol.

The command line tool `dns-sd` is used internally.

Starting the command with no parameters will give you a brief help:

``` txt
...\libraries\HomeDing>hd-discover

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
...\libraries\HomeDing>hd-discover --list

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
...\libraries\HomeDing>hd-discover --save

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


## hd-backup

The `backup` command allows downloading configurations to a local folder as a backup.

Starting the command with no parameters will give you a brief help:

``` txt
...\libraries\HomeDing>hd-backup

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
...\libraries\HomeDing>hd-backup plug08

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


## hd-restore

The `restore` command allows uploading a configuration from the local folder to a device.

Starting the command with no parameters will give you a brief help:

``` txt
...\libraries\HomeDing>hd-restore.bat

HomeDing Configuration Restore Utility.

This is a utility to restore a configuration backup to a device.

Usage: hd-restore <devicename> <target-ip-address|target-hostname>
  -h, --help     Get a brief help on using this tool
  -l, --list     list existing backups only
```

Starting the command with a devicename and current target-ip-address or target-hostname
the configuration files in the .\configs folder will be uploaded to the target device.

``` txt
...\libraries\HomeDing>hd-restore.bat plug08 192.168.2.22

HomeDing Configuration Restore Utility.

restoring configuration plug08 to 192.168.2.22
restore env.json...
restore config.json...
done.
```


## hd-upload

The `upload` command allows uploading a firmware from the local .\bin folder to a device.

Starting the command with no parameters will give you a brief help:

``` txt
...\libraries\HomeDing>hd-upload

HomeDing Firmware OTA upload utility.

This is a helpful wrapper on Windows for the standard upload tool "espota.py" that
searches for the latest build to upload to the specified device.
Usage: hd-upload.bat [options] <devicename> [firmware]
  -h, --help     Get a brief help on using this tool
  -p pass        use `pass` as upload password

The bin file is searched in the build subdirectory
When specifying a firmware name the file is taken from the bin directory.
```

For direct **uploading** of the firmware in the .\build folder to a device you can use the following batch file:

``` txt
hd-upload plug08
```

Using a named firmware the firmware files must be placed in the `bin` folder
e.g. using the Arduino command `Export compiled binary`.

In this folder you can collect multiple binaries to be uploaded to different devices.

The device must have a [OTA Element](/elements/ota.md) configured to allow uploading of new firmware.

A device without configuration files will automatically create a device and ota element
so can can find and upload firmware from the start.


## hd-api

The `api` command allows calling a REST service on a device.

Starting the command with no parameters will give you a brief help:

``` txt
...\libraries\HomeDing>hd-api

HomeDing api utility to call services on a device on CLI.

This utility enables calling a api on the CLI.

Usage: hd-api <devicename> <command>
  -h, --help     Get a brief help on using this tool

Commands are: sysinfo, elements, list, state, state, reboot, reset, resetall, cleanweb, scan, connect
```

Using a command will invoke the corresponding api method on the device. The used URL is displayed and
the result is shown.

``` txt
...\libraries\HomeDing>hd-api.cmd plug05 sysinfo

HomeDing api utility to call services on a device on CLI.

http://plug05/api/sysinfo

{"devicename":"plug05","build":"Aug 15 2022","freeHeap":"35976","flashSize":"1048576","coreVersion":"0.90",
"coreBuild":"minimal","mac":"24:A1:60:17:8F:C5","fsTotalBytes":"131072","fsUsedBytes":"90112",
"safemode":"false","upTime":"261068","ssid":"KHMH"}
```

## hd-build

not yet done.

The HomeDing project that is used to create the firmware today has no support
for building a firmware using a command line .

It is on the list for future extensions when the Arduino CLI is finally available as a stable release.


## hd-webupload

The `webupload` command allows uploading the web files from an example a device.
This is an alternate solution to the /$update tool in the firmware that downloads files from github.
The webupload command is also available in the WebFiles project that compiles these files.

The minimal and the standard example have a data folder with a complete set of the web implementation for 1MByte Flash / 4MByte Flash devices.

Starting the command with no parameters will give you a brief help:

``` txt
...\libraries\HomeDing>hd-webupload

HomeDing upload utility uploading web files to device.

This utility enables uploading files from a folder into the filesystem of a device
using http uploads.

To create the distribution files use npm run build and npm run pack

Usage: hd-webupload.bat [options] <devicename> [example]
  -h, --help     Get a brief help on using this tool
  -c, --clean    Clean existing files on device before upload
```

When no `example` parameter is given the files from the standard data folder are used.

``` txt
...\libraries\HomeDing>hd-webupload.cmd plug08 minimal

HomeDing upload utility uploading web files to device.

Uploading...
  Device name = plug08
  Folder      = .\examples\minimal\data

.\examples\minimal\data\browserconfig.xml
.\examples\minimal\data\ding.htm
.\examples\minimal\data\favicon.svg
.\examples\minimal\data\icons.svg
.\examples\minimal\data\iotstyle.css
.\examples\minimal\data\list.txt
.\examples\minimal\data\micro.js
.\examples\minimal\data\microide.htm
.\examples\minimal\data\site.webmanifest
.\examples\minimal\data\updateicons.htm

http://plug08/ updated.
```


## Building WebFiles

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
cmd-uploadMini.bat <devicename>
```

