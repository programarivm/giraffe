import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import Home  from 'components/public/Home';
import MainNav  from 'components/public/MainNav';

export default () => (
  <div>
    <CssBaseline />
    <MainNav />
    <Home />
    <CookieConsent>
      Cookies? Mmm, they are delicious! However this website does not collect personal data through third-party cookies.
    </CookieConsent>
  </div>
);
