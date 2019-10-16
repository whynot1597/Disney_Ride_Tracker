import React, { useEffect } from 'react'

import './App.css'

import AppHeader from './AppHeader'
import SearchForm from './SearchForm'

import { apiHost } from './api'
import MenuAppBar from './MenuBar'
import Drawer from './Drawer'

const App = () => {
  // Because App is the "uppermost" component (see index.js), code in the useEffect function
  // is equivalent to an overall initialization routine. Note however that every component
  // can have its own useEffect, and so initialization can be separated on a per-component
  // basis.
  useEffect(() => apiHost('http://api.giphy.com/v1/'))

  // When React components are implemented as functions, their return value is the component’s
  // content (i.e., what the render() method returns for class-based components).
  return (
    <div className="App">
      <Drawer />
      <MenuAppBar />
      <AppHeader />
      <SearchForm />
    </div>
  )
}

export default App
