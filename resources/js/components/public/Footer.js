import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverageTwoTone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LockIcon from '@material-ui/icons/LockTwoTone';
import SubjectIcon from '@material-ui/icons/SubjectTwoTone';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

export default function Footer() {
  return (
    <Grid container style={{
        marginTop: 90,
        paddingTop: 35,
        paddingBottom: 35,
        backgroundColor: '#e8e8e8'
      }}
    >
      <Grid container item xs={6} style={{ paddingTop: 35 }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography color="secondary" variant="subtitle2">
            Company Name Goes Here Limited,<br/>
            Registered in England and Wales,<br/>
            Company Number: 1234567890
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <Grid item xs={3}>
        <List component="nav" aria-label="legal">
          <ListItem button>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <Link href="/terms-and-conditions" passHref>
              <ListItemText secondary="Terms and Conditions" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <Link href="/privacy-policy" passHref>
              <ListItemText secondary="Privacy Policy" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmojiFoodBeverage />
            </ListItemIcon>
            <Link href="/cookies-policy" passHref>
              <ListItemText secondary="Cookies Policy" />
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={3}>
        <List component="nav" aria-label="social">
          <ListItem button>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText secondary="Twitter" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText secondary="Facebook" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText secondary="Instagram" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText secondary="YouTube" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
