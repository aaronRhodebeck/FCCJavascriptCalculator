// #region imports
// React imports
import React from 'react';
import { render } from 'react-dom';

// Redux imports
import { Provider } from 'react-redux';
import { store } from './store';
// #endregion

const app = <Provider store={store} />;

render(app, document.getElementById('app'));
