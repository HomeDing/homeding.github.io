---
title: Micro Dialogs and Forms
tags: ["Implementation"]
layout: "page.njk"
excerpt: >
  Simple User interactions using small forms.
---

The Web UI implementation of the homeding library supports a simple and small but powerful implementation
to ask for user input to interactively define and modify elements.

This can be found on the `board.htm` when new elements are added or existing elements are modified.

This can also be found on the `panel.htm` where connections between elements can be created by drag & drop.

The dialogs that pop up are implementation using the &lt;dialog&gt; html element.
Inside these dialogs html forms are used that have been extended to work with JSON formatted form data.

## Dialogs

Dialogs can be opened by JavaScript using the static `DialogClass.openModalForm(...)` function.
The following parameters can be used:

* `id` -- id of the dialog element
* `data` -- optional data object with keys+values to populate the dialog.
* `fCallBack` -- optional Dialog CallBack function. The form data is passed as parameter.

The dialogs will be shown as modal dialogs. The background will be covered by a semi transparent cover
to focus on the dialog itself.

Mandatory layout is a dialog title and a ren close icon in the upper right corner.

A dialog can be closed without taking further actions by pressing the &lt;esc&gt; key or by clicking the close button.

A &lt;form&gt; element can be part of the dialog.

## Dialog buttons

The dialog mechanism supports the following functionality on buttons:

``` html
<button u-action="close">...</button>
```

This button closes the dialog without any further action.


``` html
<button type="submit" u-action="done">OK</button>
```

This button is automatically enabled when the form validates completely on all input fields.

When clicked the button closes the dialog by returning 'ok' as return value.


``` html
<button type="submit" u-action="return">OK</button>
```

This button is automatically enabled when the form validates completely on all input fields.

When clicked the button closes the dialog by returning the current form data to the callback function.

``` html
<button type="submit" u-action="next:configElement">Next</button>
```

This button is automatically enabled when the form validates completely on all input fields.

By using a `next:${id}` action th data from the form will be passed to the next dialog with the given id.
This is useful for chaining dialogs to request for input in multiple seqential opened forms.

It can be used to open a form based on the input from the first form.


## Dialog template

```html
<dialog id="action" u-is="dialog">
  <h2>Config ...</h2>
  <div class="u-close" u-action="close"></div>

  <form method="dialog" ...>
    ...
    <button type="submit" u-action="return">OK</button>
  </form>
</dialog>
```

## Dialog opening example

``` js
DialogClass.openModalForm('action', {
  target: "switch/0",
  sound: "bell",
  extra: "notused"
}, function (data) {
  // result of action dialog 
  alert("Dialog result=\n"
  + JSON.stringify(data, undefined, 2));
});
```

## Nesting Dialogs

Dialogs can be nested when another DialogClass.openModalForm is called e.g. from a click event.

The dialogs get "stacked" and must be closed in reverse order.


## Chaining Dialogs

Dialogs can be chained by the "next:${id}" action as shown above or by calling 
another DialogClass.openModalForm in the callback function.


## Forms

Modern HTML forms support a rich interactivity using many input and output elements and features
like field level validation. However the data interface to form elements doesn't strictly support
JSON as expected.

To use forms inside dialogs the form-json Web Control is available.

This is a standard HTML Web Component implementation extending the form element using the FormJson class.

``` html
<form method="dialog" is="form-json">
  ...
</form>
```

The method should be set to "dialog" to prevent POST requests by the standard dialog submit functionality.

By this extended html the form element now supports the methods:

* `setJsonData(data)` -- sets the form data but leaves unmentione fields untouched.
* `data = getJsonData()` -- returns the current form data.

The standard form methods `reset()` and `checkValidity()` can be used to reset the form or check if all
input is valid according the defined rules on the input elements.

