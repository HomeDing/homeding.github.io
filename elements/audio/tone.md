---
title: Tone Element
icon: tone
tags: ["Element"]
layout: "page.njk"
excerpt: >
  The Tone Element allows creating sound using the Arduino tone function.
---

The tones to be played can be defined by a list of notes and lengths. The format of the
sequences of tones can be given in a format named "Ring Tones Text Transfer Language (RTTTL)"
that was used by Nokia mobile phones in the early days. It is quiet simple, providing a text
based definition of sequences and low in memory consumption.

The format in short is having 3 parts separated by ':'

* The first part is a optional name
* The second part is used to set bpm and default octave and tone duration.
* The third part is a list of tones with frequency and length using a "musical" notation.

More on the RTTTL format can be found in the references.

## Examples

Here are some examples for illustration.
More examples can be found on the internet by searching for `RTTTL` and in the references.

``` txt
Fifth:d=4,o=4,b=20:8p,8g,8g,8g,2d#,8p,8f,8f,8f,1d
```

``` txt
Muppets:d=4,o=5,b=250:c6,c6,a,b,8a,b,g,p,c6,c6,a,8b,8a,8p,g.,p,e,e,g,f,8e,f,8c6,8c,8d,e,8e,8e,8p,8e,g,2p,c6,c6,a,b,8a,b,g,p,c6,c6,a,8b,a,g.,p,e,e,g,f,8e,f,8c6,8c,8d,e,8e,d,8d,c;
```

``` txt
on:b=240,d=8:c,16g
```

``` txt
off:b=240,d=8:g,16c
```

As this format contains equal signs it cannot easily used in action definitions because the
comma is used as separating char when using multiple actions in one event parameter.
The Element also accepts spaces instead of comma to allow playing a song in an event definition when the actions
are passed to the tone element like:

```json
{
  "button": {
    "on": {
      "title": "online",
      "onclick": "tone/on?tones=on:b=240 d=8:c 16g"
    }
  }
}
```

## Element Configuration

<object data="/element.svg?tone" type="image/svg+xml"></object>

The following properties are available for configuration of the element:

The properties correspond to the api given by the radio library. However not all chips will support all features.

> **pin** -- The pin that is used to create the tone signals for the external speaker or piezo.
>
> **tones** -- The tones to be played using the rtttl definition format. When assigned after initialization the tones will be played immediately.
>
> **play** -- re-start playing the existing tones.

{% include "../elementproperties.md" %}


### Configuration Example

This example shows how to configure this element:

``` json
{
  "tone": {
    "on": {
      "pin": "D5",
      "tones": "fifth:d=4,o=4,b=80:8p,8g,8g,8g,2d#,8p,8f,8f,8f,1d"
    }
  }
}
```

## State

The following properties are available with the current values at runtime

> **active** - Is set to true when the element is active.


### Example State

``` json
{
  "tone/on": {
    "active":"true"
  }
}
```

## Tone Test Utility

You can add this following htm file (as tonetest.htm) in your device to test songs interactively
by opening <http://homeding/tonetest.htm>

``` html
<html>
  <head>
    <title>ToneTest</title>
  </head>
  <body>
    <h1>Tone Test</h1>
    <form action="/api/state/tone/on">
      <input
        name="tones"
        value="Sos:d=16,o=6,b=160:g,p,g,p,g,4p,8g.,p,8g.,p,8g.,4p,g,p,g,p,g"
      />
    </form>
  </body>
</html>
```

Just enter the rtttl in the field and hit return.

The browser navigates to URL by automatically encoding the character ':', ',' and '=' and '.' according to the URL standard:

<http://homeding/api/state/tone/on?tones=Sos%3Ad%3D16%2Co%3D6%2Cb%3D160%3Ag%2Cp%2Cg%2Cp%2Cg%2C4p%2C8g%2Cp%2C8g%2Cp%2C8g%2C4p%2Cg%2Cp%2Cg%2Cp%2Cg>

As the http server in the devices doesn't strictly enforce using these encodings the following URL also works:

<http://homeding/api/state/tone/on?tones=Sos:d=16,o=6,b=160:g,p,g,p,g,4p,8g.,p,8g.,p,8g.,4p,g,p,g,p,g>


## See also

* good article on RTTTL: <https://www.informit.com/articles/article.aspx?p=169460>
* <https://forum.arduino.cc/t/giving-back-to-the-community-rtttl-rttl-tones-over-11-000-tunes/490177>

