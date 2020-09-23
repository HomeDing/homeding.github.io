# Micro Charts

??? WIP

You may have seen that some UI Elements are not plain HTML based but use the SVG technology to visualize data.

SVG is not a pure graphic format that can be used for icons, it also offers a DOM and APIs on the elements that can be used almost like HTML objects.

The micro-charts in the HomeDing UI are a set for SVG and JavaScript files that can be embedded into a HTML page and offer a High Level API that is implemented in  javascript.


## Embed a Micro Chart

To embed a micro-chart the `object` HTML element is used:

```HTML
<object id="myChart" data="lineChart.svg" type="image/svg+xml" style="width:100%"></object>
```

Inside the `linechart.svg` file the required additional javascript files are references and loaded automatically.

## Using a Micro Chart API

The functionality fo the chart is available when all files have been loaded.
The code for getting access to the API of the micro chart therefore should be placed in the window onload handler.
It is available on the inner svg document object:

Instead of getting the API reference every time a method is called a global variable can be used as a cache.

```JavaScript
var chartObj;
var chartAPI;

window.addEventListener('load', function () {
  chartObj = document.getElementById('myChart');
  chartAPI = chartObj.getSVGDocument().api;
});
```

## Using the API for Pie-Chart

The pie chart needs a list of values, one for each segment and the colors for the segment.
The total is calculated by adding all segment values.

**setRange** - The `setRange` method available on the API gets passed a list of the segments:

**clear** - The `clear` method removes the actual pie chart completely.

```JavaScript
chartAPI.setRange([
  { 
    part: 30,
    color: "#008000",
    title: "positive"
  },
  { 
    part: 20,
    color: '#808000',
    title: "neutral"
  },
  { 
    part: 10,
    color: '#FF0000',
    title: "negative"
  },
  { 0
    part: 40,
    color: '#EEEEEE',
    title: "unknown"
  }]);
```

document.api = {
  clear: clear,
  setRange: setRange
};


## Using the API for Line-Chart


see [Line Chart](_linechart.md)
see [Pie Chart](_piechart.md)