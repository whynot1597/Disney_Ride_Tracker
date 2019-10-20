import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

import SearchWeather from '../WeatherAPI'

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