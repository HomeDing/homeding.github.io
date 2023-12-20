---
title: Display Classes
tags: ["Implementation"]
layout: "page.njk"
excerpt: >
  The C++ Classes used for displays and their dependencies.
---

The C++ Classes used for display drivers for specific chips and the display item shown on the
display are illustrated in the following class diagram:

```mermaid
flowchart TD

  DisplayChipAdapter["Display#60;Chip#62;Adapter"]
  DisplayAGFXAdapter
  DisplayItemElement["Display#60;Item#62;Element"]
  DisplayOutputElement
  DisplayChipElement["Display#60;Chip#62;Element"]
  DisplayElement
  Element


  subgraph Implementation of displays
    DisplayChipElement -- implements--> DisplayElement
  end

  subgraph Implementation of display items
    DisplayItemElement --implements--> DisplayOutputElement
  end

  subgraph Implementation of draw operations
    DisplayChipAdapter -->|implements| DisplayAGFXAdapter
    DisplayAGFXAdapter -->|implements| DisplayAdapter
  end


    DisplayElement --implements--> Element

    DisplayOutputElement --implements--> Element

  DisplayItemElement -.draws with.-> DisplayChipAdapter
  DisplayChipElement -.creates.-> DisplayChipAdapter
```

The `Display<Chip>Adapter` implementations include using various display types. They are
created and initialized by the corresponding `Display<Chip>Element` class.

The `DisplayAGFXAdapter` is a base implementation for display drivers from the Arduino_GFX library. This library supports various chips and is very similar to the Adafruit GFX library.

The `DisplayOutputElement` is a base implementation for Elements shown on the display.

The full list of Elements for using displays can be found in the [Display Elements](/elements/display/index.md) documentation.

