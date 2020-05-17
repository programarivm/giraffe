import React from 'react';
import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav  from '@/components/public/MainNav';
import Reviews from '@/components/common/Reviews';

class ReviewsPage extends React.Component {
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

export default ReviewsPage;
