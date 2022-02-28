---
title: Micro Templates
---

# {{title}}

The micro framework has a built-in template mechanism that allows creating multiple visible components from a single template object.

The approach is very similar to the **Web Components** features available already in some browsers. 

Creating a new html fragment that will be used as a template is easy as implementing any HTML fragment.

The individual fragments are either declared
* inside a **template** object that can be any object with the `id='u-templates'` or
* in a separate file that will be loaded into the template area after loading the page by using the `loadfile()` function .

The later allows reusing templates in multiple pages. For the HomeDing device website the file `/ding-templates.htm` is used.

## Implementation of a template 

Templates are implemented using a declarative approach in HTML that can include placeholders for values.

The `u-control` attribute is used to identify the root HTML element that will be cloned with all nested HTML objects.

The `u-is` attribute is used to identify the behavior / mixin that implements the functionality.

The special notations of placeholders can be seen in the example like `${id}`.
For the HomeDing device website the `id` like `button/left` and the `type` like `button` is available as placeholders. This is used to create meaningful names for icons and to set the `microID` attribute. The `microID` attribute is used to bind a HTML control to the element with the same id.

### Example

``` html
<div class="col card" u-control="pwmout" u-is="pwmout" microID="${id}">
  <div class="block header">
    <img src="/i/pwmout.svg" class="icon" />
    <h3>${id}</h3>
    <h4 u-text="description"></h4>
    <span class="activeState" u-active="active"></span>
    <span class="setconfig"></span>
  </div>
</div>
```



## Templates for Elements

The main purpose templates are used for are the individual cards for every configured element on the [dashboard](/dashboard.md).

Every time a new element is found in the configuration the corresponding template is cloned. If no specific template for the element can be found the general usable template `generic` is used instead. 

The templates are cloned into the visible document by using the function ???

The placeholders will be replaced by the given values in the props parameter of the `insertTemplate` function.


## Using Micro Behaviours

To use templates beyond static HTML they can have the attributes that will attach a micro behaviour.

e.g `u-is='general'` will add the functionality implemented in the GenericBehavior class from GenericBehavior.ts.


micro.insertTemplate(root: HTMLElement, controlName: string, props: Object): HTMLElement | null {



## See also

* [Micro Implementations](/micro.md)
* [microbehaviors](/microbehaviors.md)
* https://www.webcomponents.org/
* https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
* https://johnresig.com/blog/javascript-micro-templating/