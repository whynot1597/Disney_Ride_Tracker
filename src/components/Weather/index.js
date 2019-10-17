import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

import WeatherInfo from '../WeatherInfo'

const WeatherPage = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Weather Page</h1>
          <WeatherInfo />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
  
  const condition = authUser => !!authUser;
  
  export default withAuthorization(condition)(WeatherPage);