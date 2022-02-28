---
title: Gauge Microchart
---

# {{title}}

The Gauge Microchart displays a single value with a needle on a background scale like with analog meters.

![GaugeChart Screenshot](/microchart-gauge.png)


## Options

The Gauge Chart requires to set the options to create the scale of the chart
including the colors of the arc in the background.

``` json
{
  title: "Room Temperature",
  units: "°C",
  minimum: 5,
  maximum: 45,
  segments: [
    {
      value: 18,
      color: 'white'
    }, {
      value: 22,
      color: '#44ff44'
    }, {
      color: '#ff4444'
    }

  ]
}
```

* **title** - This text will be displayed on top of the gauge. 
* **units** - This text will be displayed below the actual value. 
* **minimum** - This text will be displayed at the start point of the gauge.
* **maximum** - This text will be displayed at the end point of the gauge.
* **segments** - This array contains upper value and color of gauge segments. The last segment requires on value as the maximum value is used.


### Add additional elements

The Gauge Chart has no additional elements to be added. The **add()** method is available but without any effect.


### Draw the data

The data passed to the **draw()** method is a single value only:

``` javascript
chartAPI.draw(12.8);
```

Based on this value the needle of the gauge will be adjusted to the corresponding position of the value.

When no value or a value less than the minimum is given the needle will be below the start point.
When a value more than the maximum is given the needle will be below the end  point.


### Clear the data

The **clear()** method will set the needle below minimum and clears the displayed value.


## See also

* [Micro Charts](/microcharts.md)
* [Line Chart](/microchart-line.md)
* [Pie Chart](/microchart-pie.md)


## Tags

#microchart

