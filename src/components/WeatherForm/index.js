import React, { useState } from 'react'

//import SearchResults from './SearchResults'

import { searchWeather } from '../WeatherAPI'

const WeatherForm = () => {
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('')
    const [images, setImages] = useState([])

    const handleQueryChange = event => setQuery(event.target.value)

    const performQuery = async event => {
        console.log("TRYING")
        event.preventDefault()

        setError(null)

        try {
            const result = await searchWeather()

            setImages(result.data)
        } catch (error) {
            console.log(error)
            setError('Sorry, but something went wrong.')
        }
    }

    return (
        <div><button onClick={performQuery}>Test</button></div>
    )
}

export default WeatherForm