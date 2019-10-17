import React from 'react';
import './Home.css'

import { withAuthorization } from '../Session';

import SearchForm from '../SearchForm'
import MenuAppBar from '../MenuBar'

const HomePage = () => (
  <div>
    <MenuAppBar />
    <SearchForm />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);