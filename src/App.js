import React, { Component } from 'react';
import styled from 'styled-components';
import CountdownClock from './CountdownClock';
import LanguageSwitcher from './LanguageSwitcher';

const StyledBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

class App extends Component {
  render() {
    return (
      <StyledBody>
        <LanguageSwitcher />
        <CountdownClock />
      </StyledBody>
    );
  }
}

export default App;
