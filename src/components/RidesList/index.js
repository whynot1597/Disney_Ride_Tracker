import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function logRide(ride) {
  return
}

const DisneyRides = [
  createData('Space Mountain', 'Like', 'Dislike', 'Ride'),
  createData('Indiana Jones', 'Like', 'Dislike', 'Ride'),
  createData('Matterhorn', 'Like', 'Dislike', 'Ride'),
];

export default function RidesList() {
  const classes = useStyles();

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
      <button onClick={logRide('Indi')}>Test</button>
    </Paper>
  );
}