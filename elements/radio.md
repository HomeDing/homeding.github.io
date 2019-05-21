# Radio Element

The RadioElement is used to control a FM radio chip that is connected to the board.

It is not part of the  collection of core elements.

To make it available for configuration it needs to be included into the compilation by activating it using the macro

```CPP
#define ... ???
```

The RadioDing example uses this element to create a remote activateable and controllable radio. 

This element is using the Radio library that unifies theninterfaces to the dufferent chips. The following chips are supported by the library:

* sI
* ...



Look into the [Radio example](exampleradio) for details.

## Properties

Volume and frequency.


## See also

* Radio example
* radio library