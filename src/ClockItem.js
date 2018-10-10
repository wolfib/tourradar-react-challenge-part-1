import React from 'react';
import styled from 'styled-components';

const ClockItemDiv = styled.div`
  float: left;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 11px;
  text-transform: uppercase;
`;

const ClockNumber = styled.div`
  font-size: 40px;
  font-weight: 500;
`;

const ClockItem = props => {
  const paddedValue = props.value.toString().padStart(props.minDigits, '0');
  return (
    <ClockItemDiv>
      <ClockNumber>{paddedValue}</ClockNumber>
      {props.value === 1 ? props.unitSingular : props.unitPlural}
    </ClockItemDiv>
  );
};

export default ClockItem;
