---
title: Micro Charts
---

# {{title}}

??? WIP

Some visuals on the board and index implementation are not based on HTML but on SVG technology to visualize data.

SVG is not a pure graphic format that can be used for icons, it also offers a DOM and APIs on the elements that can be used almost like HTML objects.

The micro-charts in the HomeDing UI are a set for SVG and JavaScript files that can be embedded into a HTML page and offer a High Level API that is implemented in  javascript.

![LineChart Screenshot](/dev/microchart-line.png "w200")
![PieChart Screenshot](/dev/microchart-pie.png "w200")
![GaugeChart Screenshot](/dev/microchart-gauge.png "w200")


## Embed a Micro Chart

To embed a micro-chart the `object` HTML element is used that not just displays
the given initial SVG but also enables access to the implementation:

``` html
<object id="myChart" data="lineChart.svg" type="image/svg+xml" style="width:100%"></object>
```

Inside the `linechart.svg` file the required additional javascript files are references and loaded automatically.

* microsvg.js - This file contains some useful functions for working with SVG elements.
* linechart.js - This file implements the API for the chart


## Using a Micro Chart by API

The functionality for the chart is available when all files have been loaded by the API property of the document of the svg element.

As best practice the API should be extracted once and then stored in a variable that will be permanent available for direct access
in a window onload handler.

``` javascript
var chartObj;
var chartAPI;

window.addEventListener('load', function () {
  chartObj = document.getElementById('myChart');
  chartAPI = chartObj.getSVGDocument().api;
});
```

All interactivity with the chart is then done using the API. The chart itself also implements autonomous functionality like handling clicking and hover events.


## Using the API

All charts offer a similar pattern for usage in the API:

Before adding any data to the chart the chart needs to be configured by adding the parts like rulers, fix lines, legends or data bound elements.

This is done by passing the overall configuration structure to the **setOptions** method like:

``` javascript
chartAPI.setOptions({
  title: "Room Humidity",
  units: "%",
  minimum: 0,
  maximum: 100,
  segments: [
    {
      value: 40, color: '#ff4444'
    }, {
      value: 60, color: '#44ff44'
    }, {
      color: '#ff4444'
    }
  ]
});
```

With some chart types additional elements can be added by using the **add** method:

``` javascript
chartAPI.add(...)
```

The Data is added by using the **draw** method: 

``` javascript
chartAPI.draw(...)
```

The **clear** method removes the actual data and deletes all elements representing data.

## See also

* [Line Chart](/dev/microchart-line.md)
* [Pie Chart](/dev/microchart-pie.md)
* [Gauge Chart](/dev/microchart-gauge.md)


## Tags

#microchart

