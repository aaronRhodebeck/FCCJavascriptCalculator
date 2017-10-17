// #region imports
// React imports
import React from 'react';
import { render } from 'react-dom';

// Redux imports
import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from './store';

// Calculator imports
import App from './containers/App';
// #endregion
const app = (
  <Provider store={store}>
    <App />
=======
import { store } from './store';

// Calculator imports
import { Calculator } from './layout/DisplayComponents';
// #endregion

const app = (
  <Provider store={store}>
    <Calculator />
>>>>>>> WIP Switch context
  </Provider>
);

render(app, document.getElementById('app'));
