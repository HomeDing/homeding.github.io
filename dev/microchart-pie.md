---
title: Pie Microchart
tags: ["Implementation", "System"]
layout: "page.njk"
---

The Pie Microchart displays a pie with segments corresponding to the fraction of the given values.

![PieChart Screenshot](/dev/microchart-pie.png)

## Options

The Pie Chart requires to set the options to create the scale of the chart
including the colors of the arc in the background.

``` json
chartAPI.setOptions({
  showTitle: false,
  showValue: false,
  showPercentage: true,
  colors: []
});
```

* **showTitle** - The title of the data will be displayed on top of every segment. 
* **showValue** - The value of the data will be displayed on top of every segment. 
* **showPercentage** - The percentage of the data will be displayed on top of every segment. 
* **colors** - Array of colors or comma separated string of colors. 

Any color can be used in the colors properties that is understood by SVG. It can either be passed in the options or in the data.

When there are more data items than colors, the colors will be used from the start again.


### Add additional elements

The Pie Chart has no additional elements to be added. The **add()** method is available but without any effect.


### Draw the data

The data passed to the **draw()** method is an array of objects with title, value and color. All but the value are optional.

``` javascript
chartAPI.draw(
  { title: 'used', value: 800000, color: 'rgb(0,0,128)' },
  { title: 'reserved', value: 200000, color: 'hsl(180,50%,50%)'},
  { title: 'available', value: 1200000, color: 'silver' });
```

Based on the values the total and percentage of the segment will be calculated.

When updating the value all values must be given at once.


### Clear the data

The **clear()** method will remove the pie completely.


## See also

* [Micro Charts](/dev/microcharts.md)
* [Line Chart](/dev/microchart-line.md)
* [Gauge Chart](/dev/microchart-gauge.md)

