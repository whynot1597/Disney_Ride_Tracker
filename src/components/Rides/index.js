import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

import { withRouter, } from 'react-router-dom'
import { compose } from 'recompose'

import RidesListBase from '../RidesList'

import { withFirebase } from '../Firebase'

const RidesPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Rides Page</h1>
        <RidesList />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
const RidesList = compose(
  withRouter,
  withFirebase,
)(RidesListBase)

export default withAuthorization(condition)(RidesPage);