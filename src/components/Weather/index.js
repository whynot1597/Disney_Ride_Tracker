import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

import WeatherForm from '../WeatherForm'
import { Typography } from '@material-ui/core';

const WeatherPage = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <Typography variant="h3" component="h2" align='center'>
            Weather for Disneyland 
          </Typography>
          <WeatherForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
  
  const condition = authUser => !!authUser;
  
  export default withAuthorization(condition)(WeatherPage);