# HTML Templates for Elements

For displaying elements of a HomeDing device on the config and landing pages of the [WebServer UI](webserverui) there are is collection of templates using a card design available.

These templates are included manually or automatically into the pages when a corresponding element is configured.

There are 2 versions of these templates available:

* Inside the file `ding-templates.htm` all implemented templates can be found that support vizualization and configuration of the elements.
*  Inside the fie `min-templates.htm` some templates can be found that vizualize the elements that can typially be found in sensor and actor devices that us only 1MByte of flash ram. They do not all support configuration because of the limited space avaialble.

The following Elements have special templates implemented:

| Element | Configuration fetaures                                                |
| ------- | --------------------------------------------------------------------- |
| dstime  | Setting the on-chip time using the actual time of the browser. |
| [timer](elements/timer) |


## Implementing a Template

Using card design with 3 blocks

header
body
config

```HTML
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
  <div class="block config Element" style="position: relative;min-height: 5rem">
    <div class="form-group"><label>loglevel:</label><input u-value="loglevel" /></div>
  </div>
</div>
```

## Min version

```HTML
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

```HTML
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
