---
title: The Digital Sequence Element
id: digitalsequence
tags: ["Element", "WIP"]
description: Support digital input signals to create actions. 
excerpt: >
  The digital sequence Element is used internally for several elements
  that need to analyze timing sequences and digital signals.
---

# {{title}}

::: excerpt {{id}}
{{excerpt}}
:::

see also [DCF Time Element](/elements/dcftime.md)

For some elements it is required to listen to the digital input at the specific GPIO pin
for discovering the specific protocol and data.


## Recording

The digital sequence Element records the timings in a ring buffer to be picked up by the element
that can decode the protocol.

This is realized by using interrupts on the specific pin.
Because interrupts are using static functions there is the delimitation that only
one element of this kind is supported in a device.



The size of the ring buffer and some debouncing functionality can be configured.

**pin** - The input GPIO with the digital signal.

**buffersize** - the size of the recording buffer.

**minTime** - this time is the minimal time that is recorded in the ring Buffer.
When the signal bounces the short timings are added to the next recorded time.

**maxTime** - this time is the minimal time that is recorded in the ring Buffer.
When the signal bounces the short timings are added to the next recorded time.


**ideal timing diagram**

    ______/^^^^^^^\______

**timing with bounces**

    ______/^^^^^^^\/\____

**timing with multi bounces**

    ______/^^^^^^^\/\/\____


**spike bounces**

    ______/^^^\/^^^^^\____

**noise bounces**

    ______/^^^\/\/\/^^^^\____

**long time no signal**

    ______/^^^\___(max)______


* debounce list DL[2]
* len

```
on edge:

calc delta 
if (delta > max) delta = max;
start = now;

<!-- add to debounce list (DL). -->

if (len == 0)
  DL[0] = delta.
  len = 1

if (len == 1) and (DL[0] > minTime) and (delta > minTime)
  // shift out regular timing
  ring.add(DL[0]),
  DL[0] = delta.
  len = 1

if (len == 1) and (DL[0] > minTime) and (delta < minTime)
  // = spike bounce or noise starts.
  DL[1] = delta
  len = 2;

if (len == 2) and (DL[0] > minTime) and (DL[1] < minTime)
  // = spike bounce finished or noise 
  // add to the current[0] timing.
  DL[0] = DL[0] + DL[1] + delta
  set DL-Length = 1;

  if (DL[0] > maxTime)
    ring.add(max)
    len = 0


else
  the debounceTiming will set.


onLoop:

calc delta (interim)

if (delta > max) && (len > 1)
  // shift out all
  ring.add(DL[0]),
  ring.add(max)
  len = 0
  start = now;
```



## Using recorded data

There are elements that can decode the signal. These elements derive from the Digital Sequence Element
and can access the ring buffer with the raw input data.

static function hasData() -> (ring has data)
static function count()   -> (# items in ringbuffer)
static function peek()    -> get oldest timing
static function pop()     -> get oldest timing and remove
static function peek(1)   -> get oldest timing + 1


## See also

* NTPTimeElement

