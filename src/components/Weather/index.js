import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

import WeatherData from '../WeatherAPI'

const response = WeatherData.searchWeather()
const TemperatureData = response.then((value) => value.data.Temperature)
console.log(TemperatureData)

const WeatherPage = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Weather Page</h1>
          <h2>Data</h2>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
  
  const condition = authUser => !!authUser;
  
  export default withAuthorization(condition)(WeatherPage);