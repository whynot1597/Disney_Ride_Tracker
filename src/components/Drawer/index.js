import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MapIcon from '@material-ui/icons/Map';
import RidesIcon from '@material-ui/icons/Apps';
import WeatherIcon from '@material-ui/icons/WbSunny';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ['left']: open });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to={ROUTES.MAP} key='Map'>
          <ListItemIcon> <MapIcon /> </ListItemIcon>
          <ListItemText primary='Map' />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.RIDES} key='Rides'>
          <ListItemIcon> <RidesIcon /> </ListItemIcon>
          <ListItemText primary='Rides' />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.WEATHER} key='Weather'>
          <ListItemIcon> <WeatherIcon /> </ListItemIcon>
          <ListItemText primary='Weather' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
          <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
          >
              <MenuIcon />
          </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
