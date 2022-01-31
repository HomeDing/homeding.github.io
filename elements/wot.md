---
title: The WoT Element
id: wot
tags: ["Element", "WIP"]
description: ...
excerpt: >
  The Element enables ...
---

# {{data.title}}

The HomeDing library includes the wot element that generates interfaces and JSON based descriptions that are compliant with the WoT standard by the W3C Consortium.

As of this writing this element is „work in progress“ (WiP)

The devices based on the HomeDing library and the Elements used in this library are sharing the concepts of Properties, Actions and Events and using http as the network protocol that is also supported using a binding template.
The description of the capabilities of the Thing that’ll is covered by the WoT Thing Description (TD) using the JSON format can be derived automatically from the configuration and the information in the elements.json file.

For adopting the WoT W3C standard this description information can be generated on the fly by assembling the information on the activated elements only.

The base Element class implements a new function „description“ to return a JSON fragment with the metadata describing the capabilities of an element that is compatible to the W3C standard.

The complete TD can be retrieved using the URL http://homeding/$td.
