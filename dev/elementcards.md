---
title: HTML Templates for Elements
tags: ["Implementation", "WIP"]
layout: "page.njk"
description: Element specific UI templates.
excerpt: >
  For displaying elements of a HomeDing device on the config and landing pages of the
  [Builtin Web server](/concepts/paper04.md) there are is collection of templates
  by using a card design available.
---

These templates are included manually or automatically into the pages when a corresponding element is configured.

There are 2 versions of these templates available:

* Inside the file `ding.htm` all implemented templates can be found that support visualization and configuration
  of the elements that are part of the minimal example
  and usually used in 1M flash devices.
* Inside the fie `board-templates.htm` all existing templates can be found that visualize all kind of elements.
  They support configuration of the elements using the configuration dialogs.


## Implementing a Template

t.b.d.

header
body

``` html
<div class="col card" u-control="log" u-is="log" microID="${id}">
  <div class="block header">
    <img src="/i/log.svg" class="icon" />
    <h3>${id}</h3>
    <h4 u-text="description"></h4>
    <span class="activeState" u-active="active"></span>
    <span class="setconfig"></span>
  </div>
  <div class="block">
    <object data="lineChart.svg" type="image/svg+xml" style="width:360px;height:136px"></object>
  </div>
</div>
```

## Min version

``` html
<div class="col card" u-control="schedule" u-is="generic" microID="/schedule/0">
  <div class="block">
    <h4 u-text="description"></h4>
    <span class="activeState" u-active="active"></span>
    <div class="form-group">
      <label>Start:</label>
      <span u-text="ontime"></span>
    </div>
    <div class="form-group">
      <label>End:</label>
      <span u-text="offtime">..</span>
    </div>
    <span class="u-bool ux-value" u-active="value"></span>
  </div>
  <div class="block config Element"></div>
</div>
```

## Full version

``` html
<div class="col card" u-control="schedule" id="${id}" u-is="generic" microID="${id}">
  <div class="block header">
    <img src="/i/${type}.svg" class="icon" />
    <h3>${id}</h3>
    <h4 u-text="description"></h4>
    <span class="activeState" u-active="active"></span>
    <span class="setconfig"></span>
  </div>
  <div class="block">
    <div class="form-group">
      <label>Start:</label>
      <span u-text="ontime" />
    </div>
    <div class="form-group">
      <label>End:</label>
      <span u-text="offtime" />
    </div>
    <span class="u-bool ux-value" u-active="value"></span>
  </div>

  <div class="block config Element">
    <div class="form-group">
      <label>Start:</label>
      <input u-value="ontime" type="time" step="60" class="text-right" style="width:6em;padding-right:0.2em" />
    </div>
    <div class="form-group">
      <label>End:</label>
      <input u-value="offtime" type="time" step="60" class="text-right" style="width:6em;padding-right:0.2em" />
    </div>
  </div>
</div>
```
