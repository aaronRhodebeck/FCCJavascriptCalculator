import React from 'react';
import DisplayContainer from './DisplayContainer';
import {
  CalcButton,
  Calculator,
  ButtonArea,
  ClearAllButton,
  ClearRow,
  OperatorsColumn,
  DigitsArea,
  ZeroButton,
} from '../layout/DisplayComponents';

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

  handleKeyDown(e) {
    const keyPressed = e.key;
    const {
      operatorWasPressed,
      digitWasPressed,
      periodWasPressed,
      equalsWasPressed,
      clearAll,
      backspace,
    } = this.props;

    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/'];

    if (keyPressed === '.') {
      periodWasPressed();
    } else if (keyPressed === 'Escape') {
      clearAll();
    } else if (keyPressed === 'Backspace') {
      backspace();
    } else if (keyPressed === '=' || keyPressed === 'Enter') {
      equalsWasPressed();
    } else if (digits.includes(keyPressed)) {
      digitWasPressed(keyPressed);
    } else if (operators.includes(keyPressed)) {
      operatorWasPressed(keyPressed);
    }
  }

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
          <ClearRow>
            <ClearAllButton onClick={clearAll}>Clear All</ClearAllButton>
            <CalcButton onClick={backspace}>&#x21CD;</CalcButton>
          </ClearRow>
          <OperatorsColumn>
            <CalcButton onClick={() => operatorWasPressed('+')}>+</CalcButton>
            <CalcButton onClick={() => operatorWasPressed('-')}>-</CalcButton>
            <CalcButton onClick={() => operatorWasPressed('*')}>*</CalcButton>
            <CalcButton onClick={() => operatorWasPressed('/')}>/</CalcButton>
            <CalcButton onClick={equalsWasPressed}>=</CalcButton>
          </OperatorsColumn>
          <DigitsArea>
            <CalcButton onClick={() => digitWasPressed('1')}>1</CalcButton>
            <CalcButton onClick={() => digitWasPressed('2')}>2</CalcButton>
            <CalcButton onClick={() => digitWasPressed('3')}>3</CalcButton>
            <CalcButton onClick={() => digitWasPressed('4')}>4</CalcButton>
            <CalcButton onClick={() => digitWasPressed('5')}>5</CalcButton>
            <CalcButton onClick={() => digitWasPressed('6')}>6</CalcButton>
            <CalcButton onClick={() => digitWasPressed('7')}>7</CalcButton>
            <CalcButton onClick={() => digitWasPressed('8')}>8</CalcButton>
            <CalcButton onClick={() => digitWasPressed('9')}>9</CalcButton>
            <ZeroButton onClick={() => digitWasPressed('0')}>0</ZeroButton>
            <CalcButton onClick={periodWasPressed}>.</CalcButton>
          </DigitsArea>
        </ButtonArea>
      </Calculator>
    );
  }
}
export default Main;
