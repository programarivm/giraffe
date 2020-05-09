import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from 'Store';

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps: pageProps};
  }

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
