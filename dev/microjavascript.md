---
title: Micro JavaScript Framework
layout: "page.njk"
tags: ["Implementation"]
excerpt: >
  The UI for HomeDing devices is 
  implementation by using a small and specialized clients side framework fousing on a small implementation footprint to make it usable in embedded devices.
---

## Using Templates

this is describe in the [Micro Templates](/dev/microtemplates.md) page.

<!-- * Task Queue => Promises -->


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


## Dialogs with Forms

Some functionality in the UI is using dialogs and sequences of dialogs by using html &gt;dialog&lt; and &gt;form&lt; elements.

A Dialog implemented by specifying the class `dialogform` on the element will include some useful functionality for using forms in dialogs:

``` html
<dialog id="action" u-is="dialogform">
  <h2>Config...</h2>
  <div class="u-close" u-action="close"></div>

  <form method="dialog">
    <div class="form-grid">
      <label>Target:</label><select name="target">
        <option disabled selected hidden>Select target...</option>
        <option value="switch/0">switch/0</option>
        <option value="timer/0">timer/0</option>
      </select>
      <label>Action:</label>
      <select name="event">
        <option value="in">in</option>
        <option value="out">out</option>
      </select>
      <label>Sound:</label><input name="sound"/>
      <label>Volume:</label><input name="volume" type="range" min="0" max="15" />
    </div>
    <div><button u-action="return" style="float:right">Save</button></div>
  </form>
</dialog>
```

## Open Dialogs

To open a dialog the DialogFormClass provides the method `openModalForm`.

The `name` 

The `data` 
A object with known input values
Extra attributes may given and they are returned unchanged in the result data object

The `fCallBack`
and a callback function for dialog results can be given as parameters:

``` javascript
DialogFormClass.openModalForm('action', {
  target: "switch/0",
  sound: "bell",
  extra: "notused"
}, function (data) {
  // result of action dialog 
  alert("Dialog result=\n"
  + JSON.stringify(data, undefined, 2));
});
```

## Chaining Dialogs
## Nesting Dialogs

next:llll



Using `DialogFormClass.openModalForm()`

see `DialogFormClass` implementation in `src\DialogForm.ts`.


