
# Step by Step configuring a device using the builtin IDE

The configuration of HomeDing based devices is based on files located in the filesystem.
They can be changed by using the built-in micro IDE that assists in modifying the 
`env.json`, `config.json` and other text based files.
For JSON files there is a special support for syntax validating.

##  Starting the IDE

The IDE can be found on all the HOMEDING based devices using the url <http://homeding/ide.htm> <sup>*1</sup>.

![Micro IDE screenshot](/microide.png "w200")

On the left side all existing files can be seen.

On new devices the `env.json` and `config.json` files will not exist as they are not loaded and updated when using the Web based update.

## Create the **env.json** file

The minimal file of env.json should contain a device element configuration to define the name of the device on the network.

```JSON
{
  "device": {
    "0": {
      "name": "newdevice"
    }
  }
}
```

To create this file copy the given JSON definition and paste it into the right field. The click the **save** button.
In the following confirmation box enter the name of the file with a starting slash: `/env.json`.

You can find specific env.json files for the [boards](/boards.md) that have been tested.

Elements that are defined in the env.json files are those that are specific for the hardware and do not specify the behavior, like:

device, ota, ssdp, ntptime, displays.


## Create the **config.json** file

The config.json file is created the same way as the env.json file. The minimal content of this file can be empty or a JSON without element definitions.

```JSON
{
}
```

A good starting for a config.json can be found in the [stories](/stories.md) or the [recipes](/recipes.md). 


## See also

You can find more details about the microide features in the [Micro IDE documentation](/microide.md).

* [Stories](/stories.md)
* [Recipes](/recipes.md)
* [Elements](/elements.md)

---

**<sup>*1</sup>**: replace `homeding` with the network name of your device to use this link.
