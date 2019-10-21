/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import './SearchForm.css'

import SearchResults from '../SearchResults/SearchResults'

import { searchGifs } from '../api'

import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input';

const SearchForm = () => {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])

  const handleQueryChange = event => setQuery(event.target.value)

  const performQuery = async event => {
    event.preventDefault()

    setError(null)

    try {
      const result = await searchGifs({
        rating: 'pg-13',
        q: query
      })
      
      setImages(result.data)
    } catch (error) {
      setError('Sorry, but something went wrong.')
    }
  }

  return (
    <form className="SearchForm" onSubmit={performQuery}>
      <p>Enter a search term:</p>

      <Input name="query" type="text" value={query} onChange={handleQueryChange} />

      <div className="ButtonBar">
        <Button type="submit" startIcon={<SearchIcon />} variant="contained" color="secondary" disabled={!query}>Search!</Button>
      </div>

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      <SearchResults results={images} />
    </form>
  )
}

export default SearchForm
