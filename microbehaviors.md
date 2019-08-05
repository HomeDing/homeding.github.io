# Micro Behaviors

Javascript Behaviors are around for many years and are used to extend regular HTML elements with specific functionality. The new `Web Components` technologies is following this approach to define templates and their behavior as well. However this doesn't work yet in all current used browsers. (see <https://caniuse.com/#feat=custom-elementsv1>)

This implementation used in the HomeDing device website is following the approch to *customize built-in elements* like a `<div>` HTML element. The implementatzion is based on prior work form <https://www.mathertel.de/AJAXEngine> but uses Typescript instead of plain JavaScript and is adjusted to the current HTML5 Web Component Standard.

This avoid using a huge polyfill like <https://github.com/webcomponents/webcomponentsjs> with all the dependencies.

Naming conventions are adapted to the Web Component Standard and is using a `u-` prefix to avoid conflicts.

## Implementing a Behaviour

Behaviours provide a specific functionality for a web component specified in HTML. They are implemented by using a typescript class
that extends the `MicroControlClass` or the `GenericWidgetClass`. When extending `GenericWidgetClass` some functionalites for representing a HomeDing element are already available.

```Typescript
@MicroControl("switch")
class SwitchWidgetClass extends GenericWidgetClass {
  onclick(e: MouseEvent) {
    ...
  }
}
```

This Typescript Class is then specifying the methods, event handlers and local private variables of the template using `u-is='switch'`.

In short: 

* The `connectedCallback` function will be called once after a new element is created from a template.
* The functions using the `onXxx` naming convention are registered to events by using addEventListener()
* All other functions and class members are bound to the HTML element.
* By using attributes on the HTML temlate element class-members can be initialized.   

The implemenations can be found in the `src` folder of the web site implementation and are compiled to JavaScript into the `micro.js` file.

There are many example of implemented templates in the file `ding-templates.htm` that fit to the html templates and are used to display a generalized or specific card for the elements.


## Attaching a Behaviour

The central part of the implementation that attaches the functionality to the HTML tags is done by listening to changes in the displayed document. Every time a HTML element is created with a `u-is` attribute the corresponding behaviour implementation 
is used.

This works without invoking any JavaScript analog to the `is` attribute from the HTML standard. in `micro.ts` a MutationObserver is used to be notified every time a new object is added and to load the defined behavior. 

### See also

* <https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements>
* <https://html.spec.whatwg.org/multipage/custom-elements.htmlx>
* <https://developers.google.com/web/fundamentals/web-components/>
* <https://www.mathertel.de/AJAXEngine>
* <http://www.mathertel.de/AJAXEngine/S03_AJAXControls>
* <http://www.w3.org/TR/custom-elements/>
* <https://github.com/w3c/webcomponents/>
* <https://www.ccs.neu.edu/home/dherman/javascript/behavior/>
* <http://webreference.com/js/column64/2.html>
