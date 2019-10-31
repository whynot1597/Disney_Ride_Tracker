import React, { useState } from 'react'

//import SearchResults from './SearchResults'

import { searchWeather } from '../WeatherAPI'
import { searchForecast } from '../ForecastAPI'
import WeatherGraphic from '../WeatherGraphic'
import ForecastGraphic from '../ForecastGraphic'

const WeatherForm = () => {
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('')
    const [currentWeather, setCurrentWeather] = useState({})
    const [forecastWeather, setForecastWeather] = useState([])

    const handleQueryChange = event => setQuery(event.target.value)

    const handleUpdate = async event => {
        event.preventDefault()

        setError(null)

        try {
            const current = await searchWeather()
            const forecast = await searchForecast()
            setCurrentWeather(current)
            setForecastWeather(forecast)
            //console.log(temperature)
        } catch (error) {
            setError('Sorry, but something went wrong.')
        }
    }

    return (
        <div>
            <WeatherGraphic results={currentWeather}/>
            <ForecastGraphic results={forecastWeather} />
            <button onClick={handleUpdate}>Refresh</button>
        </div>
    )
}

export default WeatherForm