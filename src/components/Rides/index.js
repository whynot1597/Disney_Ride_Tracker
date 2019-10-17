import React from 'react';
import MenuAppBar from '../MenuBar'
import { AuthUserContext, withAuthorization } from '../Session';

const RidesPage = () => (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <MenuAppBar />
          <h1>Rides Page</h1>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
  
  const condition = authUser => !!authUser;
  
  export default withAuthorization(condition)(RidesPage);