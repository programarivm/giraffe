import React from 'react';
import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import Home  from '@/components/public/Home';
import MainNav  from '@/components/public/MainNav';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MainNav />
        <Home />
        <CookieConsent>
          Cookies? Mmm, they are delicious! However this website does not collect personal data through third-party cookies.
        </CookieConsent>
      </div>
    );
  }
}

export default IndexPage;
