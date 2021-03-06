import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import BottomNavigation from './node_modules/@material-ui/core/BottomNavigation';
import BottomNavigationAction from './node_modules/@material-ui/core/BottomNavigationAction';
import RestoreIcon from './node_modules/@material-ui/icons/Restore';
import FavoriteIcon from './node_modules/@material-ui/icons/Favorite';
import LocationOnIcon from './node_modules/@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 500,
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
        style={{position: 'fixed',bottom: 0, left: 0}}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);