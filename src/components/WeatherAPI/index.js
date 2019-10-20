const apiHost = () => { } // No-op in our mock version.

const searchWeather = () => Promise.resolve({
  data:
    {
        "LocalObservationDateTime": "2019-09-20T21:22:00-07:00",
        "EpochTime": 1569039720,
        "WeatherText": "Clear",
        "WeatherIcon": 33,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 12.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 55.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "RealFeelTemperature": {
            "Metric": {
                "Value": 12.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 54.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "RealFeelTemperatureShade": {
            "Metric": {
                "Value": 12.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 54.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "RelativeHumidity": 73,
        "DewPoint": {
            "Metric": {
                "Value": 8.0,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 46.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Wind": {
            "Direction": {
                "Degrees": 0,
                "Localized": "N",
                "English": "N"
            },
            "Speed": {
                "Metric": {
                    "Value": 8.2,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 5.1,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "WindGust": {
            "Speed": {
                "Metric": {
                    "Value": 11.1,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 6.9,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "UVIndex": 0,
        "UVIndexText": "Low",
        "Visibility": {
            "Metric": {
                "Value": 16.1,
                "Unit": "km",
                "UnitType": 6
            },
            "Imperial": {
                "Value": 10.0,
                "Unit": "mi",
                "UnitType": 2
            }
        },
        "ObstructionsToVisibility": "",
        "CloudCover": 10,
        "Ceiling": {
            "Metric": {
                "Value": 12192.0,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 40000.0,
                "Unit": "ft",
                "UnitType": 0
            }
        },
        "Pressure": {
            "Metric": {
                "Value": 1015.0,
                "Unit": "mb",
                "UnitType": 14
            },
            "Imperial": {
                "Value": 29.97,
                "Unit": "inHg",
                "UnitType": 12
            }
        },
        "PressureTendency": {
            "LocalizedText": "Steady",
            "Code": "S"
        },
        "Past24HourTemperatureDeparture": {
            "Metric": {
                "Value": 1.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 2.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "ApparentTemperature": {
            "Metric": {
                "Value": 16.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 61.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WindChillTemperature": {
            "Metric": {
                "Value": 12.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 55.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WetBulbTemperature": {
            "Metric": {
                "Value": 10.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 51.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Precip1hr": {
            "Metric": {
                "Value": 0.0,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.0,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "PrecipitationSummary": {
            "Precipitation": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PastHour": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past3Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past6Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past9Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past12Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past18Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past24Hours": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            }
        },
        "TemperatureSummary": {
            "Past6HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 12.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 55.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 21.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 71.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past12HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 12.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 55.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 21.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 71.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past24HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 10.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 50.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 21.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 71.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            }
        },
        "MobileLink": "http://m.accuweather.com/en/us/red-dog-ca/95945/current-weather/2143156?lang=en-us",
        "Link": "http://www.accuweather.com/en/us/red-dog-ca/95945/current-weather/2143156?lang=en-us"
    }
})

export default {
  apiHost,
  searchWeather,
}
 