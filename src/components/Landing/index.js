import React from 'react';
import './Landing.css'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'

import * as ROUTES from '../../constants/routes';
import { Typography } from '@material-ui/core';

const Landing = () => (
  <div id="Landing">
    <Typography variant="h1" align='center' color='Secondary'>
      Disney Ride Tracker
    </Typography>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <Button type="submit" href={ROUTES.SIGN_IN} startIcon={<SearchIcon />} variant="contained" color="secondary">Sign In!</Button>
      </Grid>  

    </Grid> 
  </div>
);

export default Landing;