const apiHost = () => { } // No-op in our mock version.

const searchWeather = () => Promise.resolve({
            "LocalObservationDateTime": "2019-10-20T17:48:00-07:00",
            "EpochTime": 1571618880,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 18.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 16.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 62.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 16.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 62.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RelativeHumidity": 41,
            "DewPoint": {
                "Metric": {
                    "Value": 4.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 40.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 315,
                    "Localized": "NW",
                    "English": "NW"
                },
                "Speed": {
                    "Metric": {
                        "Value": 14.5,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 9.0,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 18.9,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 11.8,
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
                    "Value": 10272.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 33700.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1019.3,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 30.1,
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
                    "Value": 4.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 8.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 18.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 66.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 18.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 11.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 52.0,
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
                            "Value": 14.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 57.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 18.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 66.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 6.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 43.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 18.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 66.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 6.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 43.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 18.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 66.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://m.accuweather.com/en/us/red-dog-ca/95945/current-weather/2143156?lang=en-us",
            "Link": "http://www.accuweather.com/en/us/red-dog-ca/95945/current-weather/2143156?lang=en-us"
})

export {
    apiHost,
    searchWeather
}
