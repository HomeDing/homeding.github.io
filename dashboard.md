# Dashboard

![dashboard ui](/dashboard.png)

This is an example of a dashboard for a indor air quality sensor device like the one described in the [Airquality story](/stories/story-airquality.md). 

## Dashboard features

The dashboard implementation is a generic approach to visualize the configured elements with their current 
values and in some cases to interact with them.

The dashboard can be started using the menu or the direct link:

GET <http://homeding/board.htm>

It can also be used as the default Homepage by using the `homepage` configuration in the [device element](/elements/device.md).

On this page every configured element is shown on a card and shows the actual runtime parameters like sensor values.

In the standard view some elements are not visualized. By using the [sys] button they can be shown as well.

On this page by using the [+] button it is possible to create new elements based on the information in the file elements.json. 

For existing elements the config parameters can be modified.


## Special Cards

For [displays](/displays.md) and the display related elements like textElement, dotElement and lineElement
there is an implementation that visualizes the actual situation on the display. 

![displaycard](/elements/displaycard.png)

The WebButton is a element that only exists for displaying a button in the dashboard that can trigger actions. 

![webbuttoncard](/elements/webbuttoncard.png)
