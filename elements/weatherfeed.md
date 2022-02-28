---
title: WeatherFeed Element
id: nn
tags: ["Element"]
---

# {{title}}

The WeatherFeedElement pulls information on the weather forecasts for a specific location from the internet
and dispatches actions with specific data items.

The Element in general can load information from and URL that is using http protocol and a simple GET call.
As for now the weather service from <https://openweathermap.org> is tested and working.

openweather.org offers a free service subscription that can be used. Please see their price and conditions and how to get a API key.
The API key is required to use their service.

There are other free services that may be adapted and tested in the future.


## Using openweathermap.org

The openweathermap is providing some weather information on a free basis after registering by E-Mail.
It is easy to get this data because a standard GET request can be used to get JSON response.


### The API to openweathermap.org

The API specification can be found here: <https://openweathermap.org/api/one-call-api>

To build the request URL you need several parameters: 

* The **API key** identifies your registered account. You will get one after registration using the menu "API keys".

* You also need to specify the **location** using the latitude and longitude coordinates. You can use e.g. Google Maps to find these for a specific location. (see link below ir just search). 

* The **units** parameter you should specify to get temperatures in celsius.

* The **exclude** parameter can be used to shorten the result to the elements you are interested.

Using these parameters the URL will look like this (with a fake API key):
<https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=50.23&lon=8.65&exclude=current,hourly&appid=12345678901234567890123456789012>

### Weatherfeed element parameters

**host** -
The servername to be addressed with the request. e.g. `api.openweathermap.org`

**get** -
The url of the API. This can include the parameters ${loc} and ${key}. 

**key** -
The API key

**loc** -
The location of the weather forecast

**readtime** - The time between capturing input values.

**actions** - a list of path and actions that create actions based on values from the server

**actions** / **path** - A path in the JSON result from the server

**actions** / **actions** - The action to be dispatched.

### Example Configuration

/data/2.5/onecall?units=metric&${loc}&exclude=current,hourly&appid=${key}

``` json
{
  "weatherfeed": {
    "home": {
      "host": "api.openweathermap.org",
      "get": "/data/2.5/onecall?units=metric&${loc}&exclude=current,hourly&appid=${key}",
      "key": "12345678901234567890123456789012",
      "loc": "lat=50.23&lon=8.65",
      "actions": [
        {
          "path": "daily[1]/temp/day",
          "action": "device/0?log=temp:$v"
        },
        {
          "path": "daily[1]/humidity",
          "action": "device/0?log=hum:$v"
        },
        {
          "path": "daily[1]/weather/description",
          "action": "device/0?log=is:$v"
        }
      ]
    }
  }
} 
```

### Get Raw Result

The effective used URL is shown in the Serial logging when specifying loglevel=2.

To capture the raw result you ma just use your browser. The raw data is also added to the Serial logging when specifying loglevel=2. The data arrives in multiple chunks all starting with body:

Here is a shortened example with comments from the response:

``` json
{
  // effective input values
  "lat": 50.23,
  "lon": 8.65,
  "timezone": "Europe/Berlin",
  "timezone_offset": 7200,
  // daily forecast
  "daily": [
    // daily[0] is for today, not of interest 
    { ... },

    // daily [1] for tomorrow
    {
      "dt": 1593255600,
      "sunrise": 1593227824,
      "sunset": 1593286786,
      "temp": {
        // average temp of the day
        "day": 25.54,
        "min": 19.57,
        "max": 26.56,
        "night": 19.57,
        "eve": 25.13,
        "morn": 21.43
      },
      "feels_like": {
        "day": 24.34,
        "night": 19.28,
        "eve": 24.19,
        "morn": 21.43
      },
      "pressure": 1012,
      "humidity": 62,
      "dew_point": 17.82,
      "wind_speed": 5.53,
      "wind_deg": 223,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 60,
      "rain": 4.08,
      "uvi": 8.11
    },
    { ... },
    { ... },
    ...
  ]
}
```

## See also

* How to get the decimal degrees using Google Maps: <https://support.google.com/maps/answer/18539?co=GENIE.Platform%3DDesktop&hl=en>

* Anonymously accessible server is http://metaweather.com.

* https://circuits4you.com/2019/03/22/esp8266-weather-station-arduino/


## Tags
#element #input
