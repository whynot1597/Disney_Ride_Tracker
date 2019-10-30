const apiHost = () => { } // No-op in our mock version.

const searchForecast = () => Promise.resolve([
    {
      "DateTime": "2019-10-29T11:00:00-07:00",
      "EpochDateTime": 1572372000,
      "WeatherIcon": 2,
      "IconPhrase": "Mostly sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 18.8,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=11&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=11&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T12:00:00-07:00",
      "EpochDateTime": 1572375600,
      "WeatherIcon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 20,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=12&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=12&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T13:00:00-07:00",
      "EpochDateTime": 1572379200,
      "WeatherIcon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 21.1,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=13&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=13&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T14:00:00-07:00",
      "EpochDateTime": 1572382800,
      "WeatherIcon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 22.1,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=14&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=14&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T15:00:00-07:00",
      "EpochDateTime": 1572386400,
      "WeatherIcon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 23,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=15&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=15&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T16:00:00-07:00",
      "EpochDateTime": 1572390000,
      "WeatherIcon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 22.2,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=16&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=16&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T17:00:00-07:00",
      "EpochDateTime": 1572393600,
      "WeatherIcon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 20.7,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=17&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=17&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T18:00:00-07:00",
      "EpochDateTime": 1572397200,
      "WeatherIcon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 19.2,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=18&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=18&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T19:00:00-07:00",
      "EpochDateTime": 1572400800,
      "WeatherIcon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false,
      "IsDaylight": false,
      "Temperature": {
        "Value": 17.8,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=19&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=19&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T20:00:00-07:00",
      "EpochDateTime": 1572404400,
      "WeatherIcon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false,
      "IsDaylight": false,
      "Temperature": {
        "Value": 16.4,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=20&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=20&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T21:00:00-07:00",
      "EpochDateTime": 1572408000,
      "WeatherIcon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false,
      "IsDaylight": false,
      "Temperature": {
        "Value": 15.7,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=21&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=21&unit=c&lang=en-us"
    },
    {
      "DateTime": "2019-10-29T22:00:00-07:00",
      "EpochDateTime": 1572411600,
      "WeatherIcon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false,
      "IsDaylight": false,
      "Temperature": {
        "Value": 15.7,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://m.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=22&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/anaheim-ca/92805/hourly-weather-forecast/327150?day=1&hbhhour=22&unit=c&lang=en-us"
    }
  ])

export {
    apiHost,
    searchForecast
}
