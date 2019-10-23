import React, { useState } from 'react'

//import SearchResults from './SearchResults'

import { searchWeather } from '../WeatherAPI'
import WeatherGraphic from '../WeatherGraphic'

const WeatherForm = () => {
    const [error, setError] = useState(null)
    const [currentWeather, setCurrentWeather] = useState({})

    const handleUpdate = async event => {
        event.preventDefault()

        setError(null)

        try {
            const result = await searchWeather()
            setCurrentWeather(result)
        } catch (error) {
            setError('Sorry, but something went wrong.')
        }
    }

    return (
        <div onLoad={handleUpdate}>
            <WeatherGraphic results={currentWeather}/>
            <button onClick={handleUpdate}>Refresh</button>
        </div>
    )
}

export default WeatherForm