import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import MapPage from '../Map';
import RidesPage from '../Rides';
import WeatherPage from '../Weather';


import { apiHost } from '../api'

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import MenuAppBar from '../MenuBar';

const App = () => {

  useEffect(() => apiHost('http://api.giphy.com/v1/'))

  return (
    <Router>
      <div>
        <MenuAppBar />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.MAP} component={MapPage} />
        <Route path={ROUTES.RIDES} component={RidesPage} />
        <Route path={ROUTES.WEATHER} component={WeatherPage} />
      </div>
    </Router>
  )
}

export default withAuthentication(App);