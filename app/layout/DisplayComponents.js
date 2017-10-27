import styled from 'styled-components';

const colors = {
  black: 'rgb(30, 30, 30)',
};

// Outer structure of the calculator
export const Calculator = styled.div`
  margin: auto;
  margin-top: 5vh;
  border-style: ridge;
  border-radius: 20px;
  border-width: 15px;
  border-color: ${colors.black};
  height: 80vh;
  width: 50vh;
  position: relative;
  min-height: 500px;
  min-width: 312px;
  background: hsl(200, 15%, 80%);
  box-shadow: 2px 4px 10px 6px rgba(50, 50, 70, 0.3);

  /* Set all children to have their size set to 
    the outside of borders and margins */
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const Display = styled.div`
  height: 25%;
  border: 3px inset darkgray;
  margin: 5px;
  background: radial-gradient(at top left, rgb(190, 190, 200), rgb(230, 230, 230));
  position: relative;
  overflow: hidden;
  font-size: 5vh;
  color: black;
  @media (max-height: 640px) {
    font-size: 29px;
  }
`;

export const DisplayResult = styled.p.attrs({
  id: 'display',
})`
  font-weight: bold;
  font-size: 2.5em;
  position: absolute;
  bottom: 4%;
  right: 8px;
  margin: 0;
  line-height: 70%;
`;

export const DisplayFormula = styled.p`
  font-size: 1em;
  position: absolute;
  top: 5%;
  right: 10px;
  margin: 0;
`;
export const ButtonArea = styled.div`
  border-top: 2px solid ${colors.black};
  height: 73%;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  padding: 10px;
`;

export const ClearRow = styled.div`
  display: flex;
  width: 75%;
  height: 19%;
  justify-content: center;
  position: absolute;
  top: 2%;
  left: 2%;
`;

export const OperatorsColumn = styled.div`
  top: 10%;
  right: 1.2%;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 22%;
  height: 80%;
  justify-content: center;
`;

export const DigitsArea = styled.div`
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  height: 77%;
  position: absolute;
  bottom: 2%;
  left: 2%;
`;

export const CalcButton = styled.button`
  margin: 3px;
  min-width: 30%;
  min-height: 22%;
  border: 3px outset rgba(120, 120, 140, 0.8);
  border-radius: 8px;
  outline: none;
  background: rgb(130, 140, 150);
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1.8em;
  flex: 1 1 auto;
  color: rgb(20, 20, 20);
  box-shadow: 1px 1px 10px 3px rgba(150, 150, 170, 0.3);

  &:active {
    border: 3px inset rgb(50, 50, 70);
  }
`;

export const ClearAllButton = styled(CalcButton)`
  white-space: nowrap;
  flex: 2 1 auto;
  color: hsl(10, 70%, 30%);
`;

export const ZeroButton = styled(CalcButton)`flex: 2 1 auto;`;
