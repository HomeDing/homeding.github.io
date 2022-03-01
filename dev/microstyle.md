---
title: Micro StyleSheet
---

# {{title}}

The micro-css is a minimal collection of CSS rules for styling UI pages of the HomeDing devices. The CSS technology is required to give the different UI implementations of the HomeDing devices a unified look & feel and to share download files among these implementations.

The CSS rules can be found in the iotstyle.css file that is created using the scss technology from the base.scss and iotstyle.scss in the css folder.
The SCSS compiler is only used to allow easy development using nesting the css rules and to use variables to apply the colors in a consistent way. Macros, enumerations etc. are not used to allow easy reading for all who know about css.

The micro styleSheet file contains some of the basics required to build responsive UI:

* some basic normalization CSS rules
* mobile first approach to the Device UI screens and desktop design for the embedded IDE.
* a grid with a 6 column layout (not 12 or 24 to avoid too much CSS code).
* card style components
* .
* support of once buttons, ???
* header

The class names known from bootstrap has been used as much as possible.

The UI controls used to build the ui for elements are using `u-<type>` class names that are also used to attach the functionality.

Defining the CSS on a global level in a shared css file allows implementing small CSS rulesets.

> Remark
Using the BEM naming convention is very popular to style implementations but here another approach and notation was used to reduce text size. A concept to a similar approach can be found at <https://www.sitepoint.com/title-css-simple-approach-css-class-naming/>. While this implementation is more complete the micro css implementation for the HomeDing devices only supports some of the constructs.

## Cards

The cards layout element is used to wrap one context in a visual area. In the HomeDing UIs it is used to wrap one element or a summary of the complete device.

``` html
<div class="col">
  <div class="card">
    <div class="block">
      <p>some Text</p>
    </div>
    <img class="card-img-top" src="card-top.png" alt="Card image cap">
    <div class="block">
      <h3>Card title</h4>
        <h6>Card subtitle</h6>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <hr />
    <div class="block">
      <a href="#">Card link</a>
      <a href="#">Another link</a>
      <label>do</label><button>click</button>
    </div>
  </div>
</div>
```

## Header

The header in the micro-css is used to display the primary icon of the device, the name and links to important pages. It is (re-)used on almost all pages.

The header also acts as a navigation bar.

It is implemented as a special row that can contain text, links and icons nested in links. The items are center aligned.

The primary header (h1) should be included in the header.

Images with class `icon` are sized accordingly.

Links can be used trigger a navigation.


## Icons

see [microicons](/dev/microicons.md)


### u-valueindicator

This class is used to visualize binary values like true/false, high/low or 1/0.

The html element has also the property `value` to specify what data property is used.
When the value of this property is actually high, true or non-zero the class `active` is added to the element.

The default visualization of elements with an `active`class + u-valueIndicator is to set the background color to green.

Example:

``` html
<img >
```