import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
//import GoogleMap from '../GoogleMap';

const MapPage = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>Map Page</h1>
          {//<GoogleMap />
          }
        </div>
      )}
    </AuthUserContext.Consumer>
  );
  
  const condition = authUser => !!authUser;
  
  export default withAuthorization(condition)(MapPage);