import styled from 'styled-components';
<<<<<<< HEAD
<<<<<<< HEAD

// Outer structure of the calculator
export const Calculator = styled.div`
  margin: auto;
  margin-top: 5vh;
  border-style: solid;
  border-radius: 20px;
  border-width: 15px;
  height: 80vh;
  width: 50vh;
  position: relative;
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const ButtonArea = styled.div`
  border-top: 2px solid black;
  height: 73%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export const CalcButton = styled.button`
  margin: 3px;
  min-width: 23%;
  border: 2px outset gray;
  outline: none;
  background: #888;

  &:active {
    border: 2px inset gray;
  }
`;

export const Display = styled.div`
  height: 25%;
  border: 3px inset darkgray;
  margin: 5px;
  background: radial-gradient(at top left, #ddd, #eee);
  position: relative;
  overflow: hidden;
`;

export const DisplayResult = styled.p`
  color: black;
  font-weight: bold;
  font-size: 10vmin;
  position: absolute;
  bottom: 5%;
  right: 10px;
  margin: 0;
`;

export const DisplayFormula = styled.p`
  color: black;
  font-size: 4vmin;
  position: absolute;
  top: 5%;
  right: 10px;
  margin: 0;
`;
=======
import theme from './theme';
=======
>>>>>>> Create grayscale layout of calculator

// Outer structure of the calculator
export const Calculator = styled.div`
  margin: auto;
  margin-top: 5vh;
  border-style: solid;
  border-radius: 20px;
  border-width: 15px;
  height: 80vh;
  width: 50vh;
  position: relative;
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const ButtonArea = styled.div`
  border-top: 2px solid black;
  height: 73%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

<<<<<<< HEAD
export const display = styled.div;
>>>>>>> WIP Switch context
=======
export const CalcButton = styled.button`
  margin: 3px;
  min-width: 23%;
  border: 2px outset gray;
  outline: none;
  background: #888;

  &:active {
    border: 2px inset gray;
  }
`;

export const Display = styled.div`
  height: 25%;
  border: 3px inset darkgray;
  margin: 5px;
  background: radial-gradient(at top left, #ddd, #eee);
`;
>>>>>>> Create grayscale layout of calculator
