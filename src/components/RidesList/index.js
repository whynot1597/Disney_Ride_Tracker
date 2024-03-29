import React from 'react';
import { withRouter, } from 'react-router-dom'
import { compose } from 'recompose'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { withFirebase } from '../Firebase'

const today = new Date()
const todayLog = String(today.getMonth() + 1).padStart(2, '0') + '-' +
  String(today.getDate()).padStart(2, '0') + '-' +
  today.getFullYear()

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, like, dislike, ride) {
  return { name, like, dislike, ride };
}

const DisneyRides = [
  createData('Space Mountain', 'Like', 'Dislike', 'Ride'),
  createData('Indiana Jones', 'Like', 'Dislike', 'Ride'),
  createData('Matterhorn', 'Like', 'Dislike', 'Ride'),
];

const RidesListBase = (props) => {
  const classes = useStyles();
  const handleLogRide = (ride) => {
    console.log(props.firebase
      .user('zA8c4hMveWVZy4fS2CatSVlczzI3')
      .child('logs')
      .child('10-26-2019')
      //.set({[todayLog]: {[ride]: {'like': false, 'time': '00:11'}}})
    )
    /* if (props.firebase.auth.user.child('logs').todayLog === undefined) {
      props.firebase
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return props.firebase
          .user(authUser.user.uid.logs)
          .set({todayLog: {ride: {'like': false, 'time': '00:11'}}});
      })
    } */
  }
  console.log(props.firebase.auth.currentUser.email)

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Disneyland</TableCell>
            <TableCell align="right">Like</TableCell>
            <TableCell align="right">Dislike&nbsp;</TableCell>
            <TableCell align="right">Ride&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DisneyRides.map(ride => (
            <TableRow key={ride.name}>
              <TableCell component="th" scope="row">
                {ride.name}
              </TableCell>
              <TableCell align="right">{ride.like}</TableCell>
              <TableCell align="right">{ride.dislike}</TableCell>
              <TableCell align="right">{ride.ride}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={handleLogRide('Indi')}>Test</button>
    </Paper>
  );
}

export default RidesListBase