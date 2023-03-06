---
title: The Web of Things (WoT)
tags: ["Implementation", "WIP"]
layout: "page.njk"
description: Insights into the design of an IoT device,
---

Today there are many proprietary approaches how "Things" are built. Many of them cannot be integrated or connected and standardization is required to create flexibility in combining devices to create solutions.

The HomeDing library in contrast
uses standard Web based communication like REST services and is Open Source to be extendable to include new protocols.

## Using Standards

The W3C consortium that is standardizing many web technologies has published papers and recommendations regarding the Web of Things (WoT).

The interaction model described by this standard is covering the way how the devices and the Elements in HomeDing based devices interact using actions.



<!--
To enable the standard interfaces in the HomeDing library the
[WoT Element](/elements/wot.md) needs to be configured.


the following changes are implemented starting with version ??? :

 - The Web of Things Thing Description (TD) describes the capabilities of a device. This definition now can be generated and saved as a file on the device.

-->

- The term "Action" and "Event" in the documentation and in the implementation is used exactly as described and used in the standard.



## See also

* Web of Things standard: <https://www.w3.org/WoT/>

* Web of Things Thing Description : <https://www.w3.org/TR/wot-thing-description11/>

* WoTify <https://arxiv.org/pdf/1909.03296.pdf>

* An introduction to the Web of Things Framework, May 2015
<https://www.w3.org/2015/05/wot-framework.pdf>
