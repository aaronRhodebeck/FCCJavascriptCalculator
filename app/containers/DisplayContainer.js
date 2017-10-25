import React from 'react';
import { Display, DisplayFormula, DisplayResult } from '../layout/DisplayComponents';

class DisplayContainer extends React.Component {
  render() {
    return (
      <Display>
        <DisplayFormula>{this.props.formula}</DisplayFormula>
        <DisplayResult>{this.props.total}</DisplayResult>
      </Display>
    );
  }
}
export default DisplayContainer;
