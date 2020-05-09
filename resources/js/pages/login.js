import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav  from 'components/public/MainNav';
import SignIn  from 'components/public/SignIn';

class App extends React.Component {

  static getInitialProps({store}) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <MainNav />
        <SignIn />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(App);
