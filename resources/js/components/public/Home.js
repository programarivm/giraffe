import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import React from 'react';
import Typography from '@material-ui/core/Typography'
import stickyNotes from '../../../images/sticky-notes.jpg';

export default function Home() {
  return (
    <Grid container style={{ marginTop: 40 }}>
      <Grid item xs={1}></Grid>
      <Grid item xs={6} style={{ marginTop: 50, marginBottom: 20 }}>
        <Typography variant="h3" paragraph={true}>
          What's being said about the restaurants in your area?
        </Typography>
        <Typography variant="h6" color="secondary" paragraph={true}>
          This is a real-world example SPA, a React GUI interacting with a Laravel API with the following features: ACL (access control list),
          JWT authentication, CRUD implementation, REST API, Redux, Next.js, Data-driven tests.
        </Typography>
        <Button
          variant="contained"
          color="primary"
        >
          Find out now!
        </Button>
      </Grid>
      <Grid item xs={4}>
        <img src={stickyNotes} alt="Giraffe logo" style={{ marginTop: 15, maxWidth: 400 }}/>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
