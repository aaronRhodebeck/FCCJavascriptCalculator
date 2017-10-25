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
    const {
      formula,
      currentEntry,
      total,
      operatorWasPressed,
      digitWasPressed,
      periodWasPressed,
      equalsWasPressed,
      clearAll,
      backspaceWasPressed,
      showEntry,
    } = this.props;

    const mainNumber = showEntry ? currentEntry : total;
    return (
      <Calculator>
        <DisplayContainer formula={formula} mainNumber={mainNumber} />
        <ButtonArea>
          <CalcButton onClick={clearAll}>ClearAll</CalcButton>
          <CalcButton onClick={backspaceWasPressed}>&#x21CD;</CalcButton>
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
