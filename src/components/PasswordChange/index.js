import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    const classes = {}

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Password Change
      </Typography>
          <form className={classes.form} onSubmit={this.onSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
              id="passwordOne"
              label="New Password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="passwordTwo"
              label="Confirm New Password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
            >
              Reset Password
        </Button>
            <Snackbar
              open={error}
              message={error ? error.message : null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              autoHideDuration={6000}
            />
          </form>
        </div>
      </Container>
    );
  }
}

export default withFirebase(PasswordChangeForm);