import React from 'react';
import styled from 'styled-components';
import { withNamespaces } from 'react-i18next';

const LanguageButtonsContainer = styled.div`
  text-align: right;
  padding: 20px;
`;

const LanguageSwitcher = props => {
  const { i18n } = props;
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageButtonsContainer>
      <button onClick={() => changeLanguage('de')}>de</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </LanguageButtonsContainer>
  );
};

export default withNamespaces('translation')(LanguageSwitcher);
