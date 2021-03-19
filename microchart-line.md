# Line Microchart

![LineChart Screenshot](/microchart-line.png)

SVG implementation
linechart.svg
linechart.js


https://atomizedobjects.com/blog/javascript/how-to-create-svg-bar-chart-javascript/


<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 144 48">

```
+-----------------------------------------------------------------------+
| (padding at top: height= 4)                                           |
+-----------+-------------------------------------------------------+---+
| (v-labels)|  (panel)                                              |(4)|
| width=12  |  width=128                                            |   |
| height=36 |  height=36                                            |   |
|           |                                                       |   |
|           |                                                       |   |
|           |                                                       |   |
|           |                                                       |   |
+-----------+-------------------------------------------------------+---+
|           | (h-labels)                                            |   |
|           | width=128, height=8                                   |   |
+-----------+-------------------------------------------------------+---+

All regions start 0/0 in the left lower edge, x-offset going right, y-offset going up 

TODO: Add another vertical axis.
 when adding another vertical axis the total width will be extended by another 12 units. 

TODO: horizontal axis as timeline
(up to 4 labels with line) first day + days/4, day, 12 hours, 6 hours  

delta > 4 days : days+ days/4
delta < 4 days : full days
delta < 2 days : full 12 h
delta < 1 days : full 6 h

TODO: horizontal axis numbers (milliseconds)
ranges analog vertical axis implementation.

```



## See also

* [Micro Charts](microcharts.md)
* [Pie Chart](microchart-pie.md)
* [Gauge Chart](microchart-gauge.md)


## Tags

#microchart

