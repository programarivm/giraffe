import React from 'react';
import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '@/components/public/Footer';
import Head from 'next/head';
import MainNav  from '@/components/public/MainNav';
import PrivacyPolicy  from '@/components/public/PrivacyPolicy';

class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Head>
          <title>Giraffe — Privacy Policy</title>
          <meta property="og:title" content="Giraffe — Privacy Policy" key="title" />
          <meta name="description" content="Quisque id diam vel quam. Pulvinar sapien et ligula ullamcorper. Dolor sed viverra ipsum nunc." />
        </Head>
        <nav>
          <MainNav />
        </nav>
        <main>
          <PrivacyPolicy />
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

export default PrivacyPolicyPage;
