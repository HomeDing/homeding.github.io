# Micro Behavior

Javascript Behaviors are around for many years and are used to extend regular HTML elements with specific functionality. The new `Web Components` technology is following the approach to define templates and their behavior as well. However this doesn't work yet in all current used browsers.

Here a behavior implementation is used based on the AJAXEngine implementation from <https://www.mathertel.de/AJAXEngine> that works with all current browsers and modernized to use the HTML5 standard functionality.

This avoid using a huge polyfill like <https://github.com/webcomponents/webcomponentsjs> with all the dependencies.

## Defining properties, functions and event listeners

A Behavior is a regular JSON object that contains values and functions.

simplified Example with comments:

```JavaScript
// A Behavior is a JSON Object
var ExampleBehavior = {
  // Any property can be used for data.
  // When the HTML Element has an custom attribute with the same name
  // the value of the attribute will be copied into the property as an initial value. 
  microid: "",
  data: {},

  // The init() function is executed after the Behavior is attached to the Element 
  init: function () {
    // here some more initialization can be implemented.
    // The HTML element can be modified and extended.
  }, // init()

  // any function can later be called directly on th HTML element
  newData: function (path, key, value) {
    // THe HTML Element or nested elements can be modified
    // based on new data.
  }, // newData()

  // functions starting with 'on' will be used to handle events.
  onchange: function (evt) {
    var src = evt.srcElement; 
    // ...
  },

  onclick: function (evt) {
    var src = evt.srcElement; 
    // In event functions `this` is the attached HTML Element.
    // e.g. this.microid;
  }
}; // ExampleBehavior

// The Behavior needs to be registered:
jcl.registerBehavior("example", ExampleBehavior);
```

There are many example of implemented behaviors in the files `ding-templates.htm` that fit to the html templates and are used to display a generalized or specific card for the elements.


### See also

* <https://www.mathertel.de/AJAXEngine>
* <http://www.mathertel.de/AJAXEngine/S03_AJAXControls>
* <http://www.w3.org/TR/custom-elements/>
* <https://github.com/w3c/webcomponents/>
* <https://www.ccs.neu.edu/home/dherman/javascript/behavior/>
* <http://webreference.com/js/column64/2.html>

