import React from 'react';
import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '@/components/public/Footer';
import Head from 'next/head';
import Home  from '@/components/public/Home';
import MainNav  from '@/components/public/MainNav';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Head>
          <title>Giraffe</title>
          <meta property="og:title" content="Giraffe" key="title" />
          <meta name="description" content="This is a React app with Redux and Next.js interacting with a Laravel API in a LEMP stack, a real-world full-stack example SPA." />
        </Head>
        <nav>
          <MainNav />
        </nav>
        <main>
          <Home />
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

export default IndexPage;
