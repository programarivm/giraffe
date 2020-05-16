import { AppBar, Button, ButtonGroup, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import React from 'react';
import logo from '../../../images/logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuOption: {
    textDecoration: 'none',
    marginRight: theme.spacing(5),
    color: '#fff',
    '&:hover': {
       color: '#fff',
    },
  },
  menuOptionActive: {
    fontWeight: 'bold',
  },
  buttonGroup: {
    backgroundColor: '#fff',
    marginLeft: 'auto',
  },
});

class MainNav extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/">
              <img src={logo} alt="Giraffe logo" />
            </Link>
            <Link href="/">
              <a className={classes.menuOption}>Home</a>
            </Link>
            <Link href="/reviews">
              <a className={classes.menuOption}>Reviews</a>
            </Link>
            <ButtonGroup
              size="small"
              aria-label="small outlined button group"
              className={classes.buttonGroup}
            >
              <Button>
                <Link href="/login">
                  <a style={{ textDecoration: 'none' }}>Sign in</a>
                </Link>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MainNav);
