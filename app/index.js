// #region imports
// React imports
import React from 'react';
import { render } from 'react-dom';

// Redux imports
import { Provider } from 'react-redux';
import { store } from './store';

// Calculator imports
import {
  Calculator,
  CalcButton,
  ButtonArea,
  Display,
  DisplayResult,
  DisplayFormula,
} from './layout/DisplayComponents';
// #endregion

const app = (
  <Provider store={store}>
    <Calculator>
      <Display>
        <DisplayFormula>10 + 20 - 4 * 27 / 5</DisplayFormula>
        <DisplayResult>10098</DisplayResult>
      </Display>
      <ButtonArea>
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
      </ButtonArea>
    </Calculator>
  </Provider>
);

render(app, document.getElementById('app'));
