import React from 'react';
import './Home.css'

import { withAuthorization } from '../Session';

import SearchForm from '../SearchForm'
import { Link } from '@material-ui/core';

const HomePage = () => (
  <div>
    <h1>Rides Today:</h1>
    <h2>Rides Per Hour:</h2>
    <h2>Park Ratio:</h2>
    <Link>Previous Logs</Link>
    <SearchForm />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);