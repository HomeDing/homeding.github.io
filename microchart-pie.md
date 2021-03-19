# Pie Microchart

![PieChart Screenshot](/microchart-pie.png)

Draft ???

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




## See also

* [Micro Charts](microcharts.md)
* [Line Chart](microchart-line.md)
* [Gauge Chart](microchart-gauge.md)


## Tags

#microchart

