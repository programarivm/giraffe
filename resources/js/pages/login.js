import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav  from '@/components/public/MainNav';
import SignIn  from '@/components/public/SignIn';

const LoginPage = () => (
  <div>
    <CssBaseline />
    <MainNav />
    <SignIn />
  </div>
);

class App extends React.Component {

  static getInitialProps({store}) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.session.role ? window.location.href = '/admin/reviews' : <LoginPage /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(App);
