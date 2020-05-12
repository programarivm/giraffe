import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav from '@/components/private/MainNav';
import React from 'react';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MainNav />
      </div>
    );
  }
}

export default withRouter(App);
