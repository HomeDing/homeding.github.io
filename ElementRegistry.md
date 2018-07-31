# Element Registry

## Why we need a registry

The ElementRegistry is the central class that knows all included and available
Element classes to allow further creation of new Elements by name at runtime.

In the Sketches for the HomeDing library it is not required to define the Elements you need for the ting you like to build.
It is possible to add new Elements to your thing just by specifying them in the config.json.

Therefore the Element classes are *known* and every Element class has a static function that can be called to create a new Element
so to make it life and working.

Element implementations should not automatically register themselfes in some cases.

* System level Elements will register themselfes any time (like device and ota).
* Core Elements can be included all together or individually.
* Optional Elements can be included individually.

### Complex Elements and Huge Elements

When an Element implementation needs very much program memory so even when no Element is configured this memory is occupied.

### Elements with compiletime dependencies

When the Element implementation depends on another library that might not be installed on every users environment.
In this case, beside the HomeDing library another library is required to be installed using the Arduino Library Manager.

In the [AvailabeElements List](AvailabeElements) you can find these Elements because they are marked with the required library.

### System and Core Elements

Some Elements are almost always helpful, are registered always and can be used without the need for special libraries. These are the System Elements.

Other Elements are lightweight and also need no special libraries. As long as the Programm Memory fits into the flash of your board you can include these libraries at once using the HOMEDING_INCLUDE_CORE definition.

## The Registry Mechanism

Therefore the HomeDing library has a specific mechanism implemented to allow specifying what Elements are compiled and registered.
This can be seen in all Example Sketches just before the ```#include <HomeDing.h>``` statement:

```C++
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
// Register the DisplayTextElement onto the ElementRegistry.
bool MyElement::registered =
    ElementRegistry::registerElement("my", MyElement::create);
```

## Element registration for library Elements

When transferred to the HomeDing library a ```#define HOMEDING_INCLUDE_My``` should be used to allow the sketch to select the available Elements.

```CPP
#ifdef HOMEDING_REGISTER
// Register the DisplayTextElement onto the ElementRegistry.
bool MyElement::registered =
    ElementRegistry::registerElement("my", MyElement::create);
#endif
```

See ```<HomeDing.h```.

The mechanism to do this relies on a little "trick" by using the assignment of a static variable.

The compiler automatically generates the code to execute this assignment and registration before the sketch starts
and also automatically detects multiple implementations and throws an error.
