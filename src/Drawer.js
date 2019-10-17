import React from 'react';
import { Redirect } from 'react-router-dom'
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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const handleRedirect = (route) => {
    return <Redirect to='/target' />
}


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
      onClick={handleRedirect('test')}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Map', 'Rides', 'Weather'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <MapIcon /> : index === 1 ? <RidesIcon /> : <WeatherIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
