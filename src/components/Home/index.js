import React from 'react';
import './Home.css'

import { withAuthorization } from '../Session';

import SearchForm from '../SearchForm'

const HomePage = () => (
  <div>
    <SearchForm />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);