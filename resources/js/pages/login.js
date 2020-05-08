import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav  from 'components/public/MainNav';
import SignIn  from 'components/public/SignIn';
import { Provider } from "react-redux";
import Store from 'Store.js';

export default () => (
  <Provider store={Store}>
    <CssBaseline />
    <MainNav />
    <SignIn />
  </Provider>
);
