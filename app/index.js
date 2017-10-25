// #region imports
// React imports
import React from 'react';
import { render } from 'react-dom';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';

// Calculator imports
import App from './containers/App';
// #endregion
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('app'));
