---
title: Stripe Element
icon: stripe
tags:
  - "Element"
  - "Light"
  - "WIP"
layout: "page.njk"
description: Support LED stripes with individually addressable multiple colorful LEDs.
excerpt: >
  The StripeElement is used as a base class to control a series of lights, typically LEDs by WRGB Value and Brightness.
  It is used as a base class for other light elements using a specific chip or protocol.
---

## Specific Stripe implementations

The StripeElement is used as a base class for the following protocol implementations:

* [NEO Element](neo.md)
* [APA102 Element](apa102.md)

These implementations must override the `show()` method to implement the specific chip protocol.


## Element Configuration

The following properties are available for configuration of all elements that are decendants of the Stripe Element class:

{% include "./stripeproperties.md" %}


## Color Modes

> **mode** -- The effect to be used. See see [StripeElement](/elements/light/stripe.md)

* **show** -- display the pattern or color given by an external element through the `setColor(...)` function and will be displayed immediately.

* **fix** -- The value is given by a value configuration or action and will be displayed by fading with the given `duration` configuration.

* **flow** -- This mode will display a flowing rainbow color pattern on the available pixels.
