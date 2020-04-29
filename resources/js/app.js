import React from 'react';
import ReactDOM from 'react-dom';
import Giraffe from './Giraffe.js';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from './Store.js';

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter>
      <Giraffe />
    </HashRouter>
  </Provider>,
  document.getElementById('giraffe')
);
