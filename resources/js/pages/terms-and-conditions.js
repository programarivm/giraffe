import React from 'react';
import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '@/components/public/Footer';
import Head from 'next/head';
import MainNav  from '@/components/public/MainNav';
import TermsAndConditions  from '@/components/public/TermsAndConditions';

class TermsAndConditionsPage extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Head>
          <title>Giraffe — Terms and Conditions</title>
          <meta property="og:title" content="Giraffe — Terms and Conditions" key="title" />
          <meta name="description" content="Enim diam vulputate ut pharetra sit amet aliquam id diam. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget." />
        </Head>
        <nav>
          <MainNav />
        </nav>
        <main>
          <TermsAndConditions />
        </main>
        <footer>
          <Footer />
        </footer>
        <CookieConsent>
          Cookies? Mmm, they are delicious! However this website does not collect personal data through third-party cookies.
        </CookieConsent>
      </div>
    );
  }
}

export default TermsAndConditionsPage;
