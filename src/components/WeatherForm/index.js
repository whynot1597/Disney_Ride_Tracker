import React, { useState } from 'react'

//import SearchResults from './SearchResults'

import { searchWeather } from '../WeatherAPI'
import WeatherGraphic from '../WeatherGraphic'

const WeatherForm = () => {
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('')
    const [currentWeather, setCurrentWeather] = useState({})

    const handleQueryChange = event => setQuery(event.target.value)

    const handleUpdate = async event => {
        event.preventDefault()

        setError(null)

        try {
            const result = await searchWeather()
            setCurrentWeather(result)
            //console.log(temperature)
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