# Element Registry

## Why we need a registry

The ElementRegistry is the central class that knows all included and available
Element classes to allow further creation of new Elements by name at runtime.

This allows specifying the `known elements` at compile time to optimize the programs size  to the available flash memory on the smaller boards but can include all elements for bigger boards.

At runtime the elements not in use will not consume dynamic memory leaving this rare space for the active elements.

In the Sketches using the HomeDing library it is not required to define the active Elements you need.
It is possible to activate new Elements just by specifying them in the env.json or config.json.

Therefore the Element classes are *known* and every Element class has a static function that can be called to create a new Element
so to make it life and working.

Element implementations should not automatically register themselfes in some cases.

* System level elements will register themselves any time (like device and ota).
* Core elements can be included all together or individually.
* Optional elements can be included individually.

## Using Elements for configuration

Some elements only exist to capture configuration properties. Most of them specific system related features like the devicename or the availabe hardware.

Examples are:

* [Device](deviceelement)
* [Display Adapter](display)
* [OTA](otaelement)
* [SSPD](ssdpelement)

Most of these elements don't use actions to communicate. 


### Complex Elements and Huge Elements

When an Element implementation needs very much program memory so even when no Element is configured this memory is occupied.


### Elements with compiletime dependencies

Some elements rely on a the functionality given by an external library. You may consider not including them by compile time.

E.g. it is sufficient to only include the display adapter and the according library that fits to the attached display.

In the [AvailableElements List](availableelements) you can find these Elements marked with the required library.

### System and Core Elements

Some Elements are almost always helpful, are registered always and can be used without the need for special libraries. These are the System Elements.

Other Elements are lightweight and also need no special libraries. As long as the Programm Memory fits into the flash of your board you can include these libraries at once using the HOMEDING_INCLUDE_CORE definition.

## The Registry Mechanism

Therefore the HomeDing library has a specific mechanism implemented to allow specifying what Elements are compiled and registered.
This can be seen in all Example Sketches just before the `#include <HomeDing.h>` statement:

```CPP
// Use all Core Elements of the HomeDing Library
#define HOMEDING_INCLUDE_CORE

// Use some more Elements that need additional libraries
#define HOMEDING_INCLUDE_DHT
#define HOMEDING_INCLUDE_DS18B20

#include <HomeDing.h>
```

This configuration will include all the core Elements and the individual Element for reading DHT and DS18B20 sensors.

## Build a new Element for your local usage

It is easy to build a new Element that is required for a specific thing to work. You can just copy one of the existings and modify the class Name
or use the "MyTemplate" example as a starting point.

The intension is that it is easy to add any Element to the Library later so anyone can add new functionality to the HomeDing Library.

When implementing an Element (here: MyElement) for a single project / sketch
the MyElement needs to be registered into the ElementRegistry too (and only once).

As long as the Element is inside the project folder beside the sketch file the registration is placed in the
MyElement.cpp file at the end and looks like this:

```CPP
// Register MyElement in the ElementRegistry.
bool MyElement::registered =
    ElementRegistry::registerElement("my", MyElement::create);
```

## Element registration for library Elements

When transferred to the HomeDing library a `#define HOMEDING_INCLUDE_My` should be used to allow the sketch to select the available Elements.

```CPP
#ifdef HOMEDING_REGISTER
// Register MyElement in the ElementRegistry.
bool MyElement::registered =
    ElementRegistry::registerElement("my", MyElement::create);
#endif
```

You can see the whole list of elements and how they are bundled to some groups in the `HomeDing.h`inckude file.

The mechanism to do this relies on a little "trick" by using the assignment of a static variables.

The compiler automatically generates the code to execute this assignment and registration before the sketch starts
and also automatically detects multiple implementations and throws an error.

## See also
 
*  allow registration of Element Types to avoid hard references.<br> <https://www.bfilipek.com/2018/02/factory-selfregister.html>

* http://www.drdobbs.com/cpp/self-registering-objects-in-c/184410633
* https://stackoverflow.com/questions/5120768/how-to-implement-the-factory-method-pattern-in-c-correctly
* https://www.codeproject.com/Articles/363338/Factory-Pattern-in-Cplusplus

