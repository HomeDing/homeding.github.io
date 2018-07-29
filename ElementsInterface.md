# The Element implementation

Implementing Elements is very easy because only some functions are required to be implemented.
The basic Element class also helps for some of the required features.

## Minimal Element implementations
The minimal useful implementation requires only a few functions to be implemented:

* set()
* start()
* loop()
* pushState()

### set() - setting properties and receiving actions

When the Element is crated and even later when a action is send to the Element a key and value is passed in the ```set``` function. This is the the only function that needs to process incoming data. It checks the passed key and then takes the data or executes the action.

Some Element implementations will only require to implement the setting parameters given from the configuration and others also may react to actions to trigger a functionality or to modify a dynamic property of the Element.

Samples can be found in the provided Element implementations.

* The ButtonElement only needs to process the properties for the setup of the implementation like the hardware pin and the triggered actions.
* The TimerElement also implements the „next“ and „start“ action that need no parameter but can be used when the timer is active to manipulate the actual state.

When the key parameter is not known to the element itself the ```set``` function of the base Element class should be called.

### start() - initialize

This function is called after all config properties have been set on all elements.
Here the initialization of the hardware or the used library should be implemented.

This is also the place to check that the given configuration is meaningful and valid.

When everything is good so far the start function of the base Element class must be called. The member variable ```active``` of the Element will be set to true.

### PushState() – return the actual dynamic values

Sometimes it is required to get the inner actual properties of an Element because they need to be displayed somewhere or are fetched from another Element for some reasons.

The ```pushState``` function is handling this by sending all properties to a provided callback function.

The ```pushState``` function only needs to pass those properties that will change while the element
while the properties coming from the configuration that will never change are not reported this way.

This is not a limitation because the configuration values are available anyhow by reading the config.json file.

[The buildin WebServer](WebServer) offers a resfull endpoint to retrieve these values from the browser or from remote.

Samples can be found in the provided Element implementations.

* The ButtonElement only needs to push the current level of the Button.
* The TimerElement is reporting the current state and level of the timer and the current (relative) time from the start.

There are even Elements like the RemoteElement that do not ned to implement this function because they have no inner dynamic variables.

The ```pushState``` function of the base Element class should also be called

### loop() – so something meaningful

As you know from Arduino sketches the ```loop``` function is the place where all the activity of a sketch is implemented.
The same with the elements. Here is the place to have some useful implementation. Examples are:

* Check some input and create a event eventually (like the ButtonElement does)
* Check timing conditions (like the TimerElement does)
* Read a sensor from time to time (like the DHTElement does)

The ```loop``` function is only called for elements in the active state. These are the Elements that did not initialize properly (likely because of a wrong configuration or missing hardware).

## Advanced Element implementation

Some Elements will have some more advanced features and therefore some more virtual functions can be implemented in the Elements:

### init() - basic initialization

The ```init``` function is called immediately after a Element is created and before the first configuration property is passed to the Element implementation.

It is preferred to initialize component or class not in the creation function of the class because:

* some initialization routines will start after the creattion of static classes
* some initialization of libraries require parameters that are likely to be available after the configuration is passed.

In the HomeDing Library therefore the creation is primarialy done in the ```init``` function and not in the class creator functions. (e.g. see <https://stackoverflow.com/questions/18806141/move-object-creation-to-setup-function-of-arduino>).

This function is implemented in the base Element class and stores the passed board class reference to the common ```_board``` member variable.



### term() – deactivate this Element

The ```term``` function is the logical counterpart to the ```init``` function and terminates all functionality from the Element.

The allocated ressources should be freed (e.g. disabling attached modules or releasing used I/O lines).

## Common Element member variables and helper functions

The basic Element class also provides some useful variables and helper functions.

### id

The ```id``` of the Element. Visible to anyone.

### active – marking the Element to be actively used

The Member variable ```active``` is used to mark any Element as properly initialized and ready to be used. This is done during the ```start``` function and can be revoked using the ```term``` function

### _board

A reference to the board the Element is on.

### _atob()

Return a boolean value from a string.

### _atotime()

Return a time value from a string.

### _stricmp

Replacement of the CPP stricmp used to compare identifiers and ids as the function not available on Arduino.
