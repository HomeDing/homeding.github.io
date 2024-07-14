# Notifications Web Component

WIP ???

The Notification Web Component can be used to display short time messages that disappear after some reasonable time without stopping the interaction between the user and web page.


## API

From client side JavaScript it is possible to use the api of the web component. It is implemented using the console api partially:

``` JavaScript 
const nwc = document.query('u-notify');
if (nwc) {
  nwc.log(...);
  nwc.error(...);
  nwc.alert(...)
}

### log

Display a simple text versions of the parameters 

### error

Display an important error message.


### alert

Display an important error message that must be confirmed by the user.

In contrast to window.alert the notify.alert will not stop execution but the notification will stay on top of the page until closed.


Css
Methods
Ui

```
<u-notify>
```
