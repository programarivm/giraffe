import { AppBar, Button, ButtonGroup, Toolbar } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import logo from '../../../images/logo.png';

const MainNav = () => {
  const styles = {
    a: {
      textDecoration: 'none',
      marginLeft: 40,
      color: '#fff'
    },
    button: {
      marginLeft: 'auto'
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <img src={logo} alt="Giraffe logo" />
        </Link>
        <Link href="/">
          <a style={styles.a}>Home</a>
        </Link>
        <Link href="/reviews">
          <a style={styles.a}>Reviews</a>
        </Link>
        <Link href="/login" passHref>
          <Button component="a" size="small" variant="contained" style={styles.button}>Sign in</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default MainNav;
