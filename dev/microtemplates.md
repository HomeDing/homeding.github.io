---
title: Micro Templates
layout: "page.njk"
tags: ["Implementation"]
excerpt: >
  The Template mechanism in the micro framework
  is used for dynamically assembling the UI as specified in the device configuration by using templates.
---

The [Micro JavaScript Framework](microjavascript.md) has a built-in template mechanism that allows creating multiple visible components from a single template object that is existing in the page inside a hidden container or hidden by itself.

The approach is very similar to the templating features that can be find in javascript frameworks but this implementation is working client-side only.

Creating a new html fragment that will be used as a template is easy as implementing any HTML fragment.

The individual fragments are either declared

* inside a **template** object that can be any object with the `id='u-templates'` or
* in a separate file that will be loaded into the template area after loading the page by using the `loadfile()` function .

The later allows reusing templates in multiple pages. For the HomeDing device website the file `/ding-templates.htm` is used.

<!--
When a template is used and included in the page it can be populated with data 
by using a control
-->

When using a template element a clone of the complete template object is copied into the right place in the document


## Template Container

The Template Container contains invisible html elements that can be copied to the visible area of the page.
It must have the `id='u-templates'`as it is identified by the used micro framework.

``` html
<div id="u-templates" style="display:none">
...
</div>
```

The Template Container can contain pre-defined static elements
but also can be populated from an additional file with template objects
by using the function `micro.loadFile('...')`.


## Implementation of a template 

Template Elements are implemented using a declarative approach in HTML that can include placeholders for values.

The `u-control` attribute is used to identify the root HTML element that will be cloned with all nested HTML objects.

The `u-is` attribute is used to identify the behavior / mixin that implements the functionality.

The special notations of placeholders can be seen in the example like `${id}`.
For the HomeDing device website the `id` like `button/left` and the `type` like `button` is available as placeholders. This is used to create meaningful names for icons and to set the `microID` attribute. The `microID` attribute is used to bind a HTML control to the element with the same id.

Template elements can be used by adding them to an already existing html element in the page by calling the
`micro.insertTemplate` function.

``` javascript
const newControl = insertTemplate(root, controlName, initialProperties)
```

**root** -- This parameter is used to specify the root object. The template will be appended inside this object.

**controlName** -- This parameter is used to identify the right template element using the `u-control` attribute.

**props** -- This Object can contain attributes with values for the placeholders in the template.


### Data binding

The templates can include placeholder for values by using a syntax like: `${id}`. When loading a template
these placeholders are replaced by the values in the corresponding attributes of the `props` parameter of the 
`insertTemplate` function.

The implementation can only replace placeholders with simple attribute names.


### Lazy Loading of images

Images and other tags that refer to other ressources by the src attribute must not be loaded
before the template elements are used.

When a template is loaded in all elements an existing value from a `data-src` attribute is copied into the `src` attribute
so images are loaded only after the template is used.

This avoids loading a lot of images for invisible templates.


### Example

``` html
<div class="col card" u-control="pwmout" u-is="pwmout" microID="${id}">
  <div class="block header">
    <img data-src="/i/pwmout.svg" class="icon" />
    <h3>${id}</h3>
    <h4 u-text="description"></h4>
    <span class="activeState" u-active="active"></span>
    <span class="setconfig"></span>
  </div>
</div>
```


## Templates for Elements in the dashboards 

The main purpose templates are used for are the individual cards for every configured element on the [dashboard](/dev/dashboard.md).

Every time a new element is found in the configuration the corresponding template is cloned. If no specific template for the element can be found the general usable template `generic` is used instead. 

The templates are cloned into the visible document by using the function ???

The placeholders will be replaced by the given values in the props parameter of the `insertTemplate` function.


## Using Micro Behaviours

To use templates beyond static HTML they can have the attributes that will attach a micro behaviour.

e.g `u-is='general'` will add the functionality implemented in the GenericBehavior class from GenericBehavior.ts.


micro.insertTemplate(root: HTMLElement, controlName: string, props: Object): HTMLElement | null {



## See also

* [Micro Implementations](/dev/micro.md)
* [microbehaviors](/dev/microbehaviors.md)
* https://www.webcomponents.org/
* https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
* https://johnresig.com/blog/javascript-micro-templating/