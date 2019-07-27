import React from 'react';
import client from './apolloClient';
import { ApolloProvider } from 'react-apollo';
import Home from './Components/Home';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Home />
        <GlobalStyle />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
