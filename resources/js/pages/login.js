import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav  from '@/components/public/MainNav';
import SignIn  from '@/components/public/SignIn';

const Page = () => (
  <div>
    <CssBaseline />
    <MainNav />
    <SignIn />
  </div>
);

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        { this.props.session.role ? window.location.href = '/admin/#/reviews' : <Page /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(LoginPage);
