## micro JavaScript Library

t.b.c 

* Task Queue => Promises

## HTML Templates

Templates for the web framework are combinations of standard HTML elements to create layout and details of the controls for the specific use case. These template objects are placed inside a template or can be included into a HTML file that is loaded when required.

Here's an example of a simple control that displays a card with some specific information for a button control.

```HTML
<div class='col card' microControl='button' id='${id}' microID="${id}" microBehavior='button'>
  <div class="block header">
    <h2><img src="/i/button.svg" class='Icon'/>${id}</h2>
      <h4 property='description'></h4>
      <span class="activeState" boolproperty='active'></span>
      <span class="config"></span>
    </div>
  <div class="block">
    <img src="/i/button.svg" class="u-button" style="border-radius:3rem;float:left;height:5rem;margin-right:1rem" >
  </div>
</div>
```

The outer element and the block structure of this control is given by the design of cards like the one you can find in the bootstrap framework.

When the template object is used it is copied into the right place in the document.   
The functionality of the button microbehavior will be added and the placeholders
${type} and ${id} will be replaced by the values. 


The generic microbehavior implementation includes already the basic functionality that is required by almost every control.

More advanced controls like the one for the timer displaying the current status as a bar can be implemented by enhancing this generic implementation.

The control implementations can register to new data arriving and can implement handless that are attached to the classic JavaScript events.
The attributes `property` and `boolproperty` are used to bind data to the elements.


* once buttons

* function binding

* data binding
