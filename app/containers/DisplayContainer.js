import React from 'react';
import { Display, DisplayFormula, DisplayResult } from '../layout/DisplayComponents';

const DisplayContainer = props => (
  <Display>
    <DisplayFormula>{props.formula}</DisplayFormula>
    <DisplayResult>{props.mainNumber}</DisplayResult>
  </Display>
);
export default DisplayContainer;
