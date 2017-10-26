import React from 'react';
import DisplayContainer from './DisplayContainer';
import { CalcButton, Calculator, ButtonArea } from '../layout/DisplayComponents';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown');
  }

  handleKeyDown(e) {}

  render() {
    let {
      formula,
      currentEntry,
      total,
      operatorWasPressed,
      digitWasPressed,
      periodWasPressed,
      equalsWasPressed,
      clearAll,
      backspace,
      showEntry,
      showFormula,
    } = this.props;

    let mainNumber = showEntry ? currentEntry : total;
    formula = showFormula ? formula : '';
    if (mainNumber > 99999999 || (mainNumber < 0.00001 && mainNumber > 0)) {
      mainNumber = parseFloat(mainNumber);
      mainNumber = mainNumber.toExponential(4);
    } else {
      mainNumber = Math.round(mainNumber * 1000000) / 1000000;
    }
    return (
      <Calculator>
        <DisplayContainer formula={formula} mainNumber={mainNumber} />
        <ButtonArea>
          <CalcButton onClick={clearAll}>ClearAll</CalcButton>
          <CalcButton onClick={backspace}>&#x21CD;</CalcButton>
          <CalcButton onClick={() => operatorWasPressed('+')}>+</CalcButton>
          <CalcButton onClick={() => operatorWasPressed('-')}>-</CalcButton>
          <CalcButton onClick={() => operatorWasPressed('*')}>*</CalcButton>
          <CalcButton onClick={() => operatorWasPressed('/')}>/</CalcButton>
          <CalcButton onClick={() => digitWasPressed('1')}>1</CalcButton>
          <CalcButton onClick={() => digitWasPressed('2')}>2</CalcButton>
          <CalcButton onClick={() => digitWasPressed('3')}>3</CalcButton>
          <CalcButton onClick={() => digitWasPressed('4')}>4</CalcButton>
          <CalcButton onClick={() => digitWasPressed('5')}>5</CalcButton>
          <CalcButton onClick={() => digitWasPressed('6')}>6</CalcButton>
          <CalcButton onClick={equalsWasPressed}>=</CalcButton>
          <CalcButton onClick={() => digitWasPressed('7')}>7</CalcButton>
          <CalcButton onClick={() => digitWasPressed('8')}>8</CalcButton>
          <CalcButton onClick={() => digitWasPressed('9')}>9</CalcButton>
          <CalcButton onClick={periodWasPressed}>.</CalcButton>
          <CalcButton onClick={() => digitWasPressed('0')}>0</CalcButton>
        </ButtonArea>
      </Calculator>
    );
  }
}
export default Main;
