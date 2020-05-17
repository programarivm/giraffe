import { Grid } from '@material-ui/core'
import React from 'react';
import Typography from '@material-ui/core/Typography'

export default function PrivacyPolicy() {
  return (
    <Grid container style={{ marginTop: 45 }}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Typography variant="h5" paragraph={true}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" color="secondary" paragraph={true}>
          Quisque id diam vel quam. Pulvinar sapien et ligula ullamcorper. Dolor sed viverra ipsum nunc. Porttitor eget dolor morbi non.
          Pharetra convallis posuere morbi leo. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.
          Tempus iaculis urna id volutpat. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.
          Dui nunc mattis enim ut tellus elementum sagittis vitae et. Libero justo laoreet sit amet cursus sit amet dictum.
          Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Curabitur vitae nunc sed velit dignissim sodales ut eu.
        </Typography>
        <Typography variant="body1" color="secondary" paragraph={true}>
          Massa sed elementum tempus egestas sed sed risus pretium. Cursus euismod quis viverra nibh cras pulvinar mattis nunc.
          Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Nisl nisi scelerisque eu ultrices. Donec adipiscing tristique risus nec feugiat.
          Orci dapibus ultrices in iaculis. Volutpat consequat mauris nunc congue nisi. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.
          Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Vulputate dignissim suspendisse in est.
          Sit amet consectetur adipiscing elit ut aliquam purus sit. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.
          Nec feugiat nisl pretium fusce id. Nunc congue nisi vitae suscipit tellus mauris. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.
          Nisl suscipit adipiscing bibendum est ultricies integer. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
        </Typography>
        <Typography variant="body1" color="secondary" paragraph={true}>
          Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Consectetur lorem donec massa sapien faucibus et. Sed blandit libero volutpat sed.
          Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Neque egestas congue quisque egestas diam in. Sit amet purus gravida quis.
          Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Aliquet nibh praesent tristique magna sit amet purus gravida. Egestas egestas fringilla phasellus faucibus.
          Id cursus metus aliquam eleifend mi. Neque convallis a cras semper auctor. Purus faucibus ornare suspendisse sed nisi lacus sed.
          Pharetra vel turpis nunc eget lorem dolor. Tellus elementum sagittis vitae et leo.
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
