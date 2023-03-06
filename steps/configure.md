---
title: "Step by Step configuring a device using the builtin IDE"
tags: ["Steps"]
layout: "page.njk"
date: "2020-03-03"
excerpt: >
  The configuration of HomeDing based devices is based on 2 files located in the filesystem: 
  env.json, config.json.
  They can be changed by using the built-in editor.
---

The built-in micro IDE that assists in modifying the "env.json", "config.json" and other text based files.

For JSON files there is a special support for syntax validating.

## Starting the IDE

The IDE can be found on all the HomeDing based devices using the url <http://homeding/microide.htm> [^hostname].

![Micro IDE screenshot](/dev/microide.png "w400")

On the left side all existing files can be seen.

On new devices the `env.json` and `config.json` files will not exist as they are not loaded and updated when using the Web based update.

## Create the **env.json** file

The minimal file of env.json should contain a device element configuration to define the name of the device on the network.

``` json
{
  "device": {
    "0": {
      "name": "newdevice"
    }
  }
}
```
To create this file 
* copy the given JSON definition and paste it into the right field. 
* The click the **\[save\]** button.
* In the following confirmation box enter the name of the file like: "/env.json".

You can find specific env.json files for the [boards](/boards/index.md) that have been tested.

Elements that are defined in the env.json files are those that are specific for the hardware and do not specify the behavior, like:

device, ota, ssdp, ntptime, displays.


## Create the **config.json** file

The config.json file is created the same way as the env.json file. The minimal content of this file can be empty or a JSON without element definitions.

``` json
{}
```

A good starting for a config.json can be found in the [stories](/stories/index.md) or the [recipes](/recipes/index.md).


## See also

You can find more details about the microide features in the [Micro IDE documentation](/dev/microide.md).

- [Stories](/stories/index.md)
- [Recipes](/recipes/index.md)
- [Elements](/elements/index.md)


[^hostname]: replace `homeding` with the network name of your device to use this link.
