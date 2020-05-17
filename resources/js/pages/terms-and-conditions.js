import React from 'react';
import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '@/components/public/Footer';
import MainNav  from '@/components/public/MainNav';
import TermsAndConditions  from '@/components/public/TermsAndConditions';

class TermsAndConditionsPage extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MainNav />
        <TermsAndConditions />
        <Footer />
        <CookieConsent>
          Cookies? Mmm, they are delicious! However this website does not collect personal data through third-party cookies.
        </CookieConsent>
      </div>
    );
  }
}

export default TermsAndConditionsPage;
