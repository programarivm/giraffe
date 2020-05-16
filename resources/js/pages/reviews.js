import React from 'react';
import { connect } from 'react-redux';
import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav  from '@/components/public/MainNav';
import Reviews from '@/components/common/Reviews';

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
        <Reviews />
        <CookieConsent>
          Cookies? Mmm, they are delicious! However this website does not collect personal data through third-party cookies.
        </CookieConsent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(App);