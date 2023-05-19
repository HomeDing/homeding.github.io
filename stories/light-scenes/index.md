---
title: Smart control for single and multiple lights
layout: "page.njk"
tags: ["Story"]
excerpt: >
  This story is about controlling and automating lights in a room like WiFi Bulbs or
  Floor Lamps switched on and off by a smart plug to light up for a specific need and create an
  **Ambience** that fits.
---

The control of all kind of lights is one of the most frequently implemented smart solution for
households and is also supported by the HomeDing library and systems.


## Ambience Light Scenes

Watching TV, siting at the dinner table or working and the same table -- all these require a
specific setup of the lights from a colorful relaying to a bright focusing ambience.

For now let's assume that we like 3 + 1 (OFF) scenes in a setup:

![Scene Element UI](/elements/sceneui.png)

* A **Dinner** Ambience is needed when meal is on the table but not in bright light, more
  focused light and the remaining living room is dimmed but still illuminated.
* A **TV** Ambience has a low light situation in the room with some colorful spots.
* A **Bright** Ambience is applicable when we need to clean the room.
* A **OFF** Ambience is turning all lights off.


In contrast to the light specific centrally managed eco-systems like Philips Hue and IKEA TRÅDFRI or the
MQTT based setups with a central server the HomeDing
library based IoT devices support a distributed setups as well.

Using one HomeDing device as a controller for others is the option you may consider when you have to control many lights in a room.


## Configure a Single Light

Each light (bulb or plug) can participate by using the [Scene Element] to define a specific
local configuration for each scene. This is configured inside every single device by local
scenes definitions.

This allows to configure good setting for each individual situation in the device itself and you can test
and control the scenes through the given Web UI.

For a colorful light like a smart bulb the following configuration can be used as a starting point
that changes the local switch (on/off), the color value and the brightness to fits for any given scene:

``` json
{
  "scene": {
    "Dinner": {
      "title": "Dinner",
      "steps": [ "switch/0?value=1",
        "color/0?value=x20200008",
        "color/0?brightness=60" ]
    },
    "TV": {
      "title": "TV",
      "steps": [ "switch/0?value=1",
        "color/0?value=x02400040",
        "color/0?brightness=20" ]
    },
    "Bright": {
      "title": "Bright",
      "steps": [ "switch/0?value=1",
        "color/0?value=white",
        "color/0?brightness=100" ]
    },
    "Off": {
      "title": "Off",
      "steps": [ "switch/0?value=0" ]
    }
  },

  "switch": {
    "0": {
      "title": "Corner",
      "description": "switch on/off",
      "onvalue": "my9291/0?enable=$v",
      "value": "1"
    }
  },
  "color": {
    "0": {
      "title": "Color settings",
      "description": "control color and brightness",
      "config": "WRGB",
      "mode": "fade",
      "duration": "8",
      "value": "x12f06c00",
      "connect": [ "my9291/0" ]
    }
  },
  "my9291": {
    "0": { "datapin": "4", "clockpin": "5" }
  }
}
```

When navigating with the browser to this device you will see that switching to a specific scene
by can be done directly through the Web UI. So even when you have a single RGB
Bulb you can start defining your required scenes and find the best settings.


## Configure the Plugs

Even for lights that are controlled by simple plug adapters it makes sense to include it at
least in the "Bright" and "OFF" scenes.

``` json
{
  "scene": {
    "Dinner": {
      "title": "Dinner",
      "steps": [ "switch/0?value=1" ]
    },
    "TV": {
      "title": "TV",
      "steps": [ "switch/0?value=0" ]
    },
    "Bright": {
      "title": "Bright",
      "steps": [ "switch/0?value=1" ]
    },
    "Off": {
      "title": "Off",
      "steps": [ "switch/0?value=0" ]
    }
  },
  ...
}
```


## One Control Point

When you have more that 1 or 2 lights it may be useful to have a central point to change all
relevant lights according to a specific scene by just a single action that can control all devices.

You can use a device with the standard set of elements to control the other devices (bulbs and
plugs are limited due to the 1 MByte flash). E.g. when you have a [RFBridge device] with a
[RFCodes Element] to receive rf 433 frequency signals you can add the following configuration into
this device.


The [Select Element] can be used to implement selecting one of the scenes by only one input
event from a button or a remote control.

In the following example a [Select Element] with options using the exact names of the scenes is
created. By sending a `next` action to the [Select Element] the scene will be activated. See the
`onKey` event using the key value to create the scene name to be activated.

``` json
{
  "select": {
    "scenes": {
      "loglevel": 2,
      "cycle": "true",
      "options": [
        { "key": "Dinner" },
        { "key": "TV" },
        { "key": "Bright" },
        { "key": "Off" }
      ],
      "onkey": "scene/$v?start=1"
    }
  },

  "button": {
    "next": {
      "title": "next",
      "onclick": "select/scenes?next=1"
    }
  }

}
```

The [Select Element] also simplifies sending the action to activate a new scene to multiple bulbs or plugs
by extending the actions in the `onKey` event to send the event to a remote device:

``` json
"onkey": "bulb01:scene/$v?start=1,bulb02:scene/$v?start=1"
```

By sending `select/scenes?key=off` it is possible to turn all lights off by a singe event or even by a timer.


## Remote Control

The [RFBridge Example](/examples/rfbridge.md) 
When using a web based UI
is not always available
a simple RF Remote and a RF receiver can be integrated
using the elements

* rfcodes -- receive and decode RF codes
* map -- to create an action when a specific code was received.
This can in addition control the select or the scene element.


[Scene Element]: /elements/scene.md
[Select Element]: /elements/select.md
[RFCodes Element]: /elements/rfcodes.md
