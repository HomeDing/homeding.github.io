## micro JavaScript Library


t.b.c



* Task Queue => Promises

## HTML Templates

Templates for the web framework are combinations of standard HTML elements to create layout and details of the controls for the specific use case. These template objects are placed inside a template area or can be loaded from a HTML file when required.

A template object is identified by the `u-control` property that must have a unique name.

When using the template to create a new control a clone of the complete template object is copied into the right place in the document:

``` javascript
var newControl = insertTemplate(container, controlName, initialProperties)
```

The placeholders ${type} and ${id} will be replaced by the corresponding values of the initial properties.

For adding functionality to the new object the value of the `u-behavior` property specifies what behavior will be added to the created component.

Here is an example of a simple control that displays a card with some specific information for a button control.

``` html
<div class='card' microID="${id}" u-control='button' u-behavior='button'>
  <div class="block header">
    <h2>${id}</h2>
      <h4 property='description'></h4>
      <span class="activeState" u-active='active'></span>
      <span class="config"></span>
    </div>
  <div class="block">
    <img src="/i/button.svg" class="u-button" style="border-radius:3rem;float:left;height:5rem;margin-right:1rem" >
  </div>
</div>
```

How templates for elements are implemented and how to use the functionalities of the landing page and config page
is explained in [Builtin Web server](/concepts/paper04.md)   and [Templates for Elements](/elementcards.md).


In this example the outer element and the block structure of this control is given by the design of cards similar to the one you can find in the bootstrap framework.

There are several behaviors already implemented to visualize and configure elements that can be found in the `ding.js` file.


## Micro-Behavior implementations for Elements

The `generic` behavior implementation includes already the basic functionality that is required by almost every control.

More advanced controls like the one for the timer displaying the current status as a bar can be implemented by enhancing this generic implementation.

The control implementations can register to new data arriving and can implement handlers that are attached to the classic JavaScript events.

The generic behavior implementation uses the following properties on HTML elements to bind data to the elements:

**u-value='<propertyname>'** Using this attribute on a HTML element causes that the data from the specified property will be put into the `value` of the HTML element.

**u-bool** as classname
This attribute on a HTML element can be used to visualize boolean (0/1) values.
A HTML element with this classname and a value 1 will get a green color assigned where a value 0 will assign a red value.

**u-active='<propertyname>'** Using this property the class name of the HTML element will be set to `active` when the specified property has a true value.

**u-text='<propertyname>'** Using this attribute on a HTML element causes that the data from the specified property will be put into the `text` of the HTML element.

<!-- * once buttons -->

<!-- * function binding -->

<!-- * data binding -->
