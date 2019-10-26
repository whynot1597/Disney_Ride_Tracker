import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkUI from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { SignInLink } from '../SignIn';
import { Snackbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <LinkUI color="inherit" href="https://material-ui.com/">
        Your Website
      </LinkUI>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignUpPage = () => (
  <div>
    <SignUpFormBase />
  </div>
);

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpFormBase = props => {
  const [state, setState] = useState({...INITIAL_STATE})
  const [isInvalid, setIsInvalid] = useState(true)

  const onSubmit = event => {
    const { firstName, lastName, email, passwordOne } = state
    props.firebase
      .doCreateUserWithEmailAndPassword(state.email, state.passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        const logs = { 'created': true }
        return props.firebase
          .user(authUser.user.uid)
          .set({
            firstName,
            lastName,
            email,
            logs,
          });
      })
      .then(authUser => {
        props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        setState({ ...state, 'error': error });
      });

    event.preventDefault();
  };

  const handleChange = event => {
    setIsInvalid(state.passwordOne !== state.passwordTwo ||
      state.passwordOne === '' ||
      state.email === '' ||
      state.firstName === '' ||
      state.lastName === ''
    )

    setState({ ...state, [event.target.name]: event.target.value })
  };

  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={state.firstName}
                onChange={handleChange}
                type="text"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={state.lastName}
                onChange={handleChange}
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={state.email}
                onChange={handleChange}
                type="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordOne"
                label="Password"
                type="password"
                id="passwordOne"
                autoComplete="current-password"
                value={state.passwordOne}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordTwo"
                label="Repeat Password"
                type="password"
                id="passwordTwo"
                autoComplete="current-password"
                value={state.passwordTwo}
                onChange={handleChange}
                error={state.passwordOne !== state.passwordTwo}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isInvalid}
          >
            Sign Up
          </Button>
          <Snackbar
            open={state.error}
            message={state.error ? state.error.message : null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            autoHideDuration={6000}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <SignInLink />
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

/* const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);
 */
export default SignUpPage;

export { SignUpLink };