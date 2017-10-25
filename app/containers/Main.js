import React from 'react';
import DisplayContainer from './DisplayContainer';
import { CalcButton, Calculator, ButtonArea } from '../layout/DisplayComponents';

class Main extends React.Component {
  render() {
    return (
      <Calculator>
        <DisplayContainer formula={this.props.formula} />
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
    );
  }
}
export default Main;
