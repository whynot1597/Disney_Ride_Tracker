import React from 'react';
import MenuAppBar from '../MenuBar'
import { AuthUserContext, withAuthorization } from '../Session';

const WeatherPage = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <MenuAppBar />
          <h1>Weather Page</h1>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
  
  const condition = authUser => !!authUser;
  
  export default withAuthorization(condition)(WeatherPage);