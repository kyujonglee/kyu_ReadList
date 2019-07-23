import React from 'react';
import client from './apolloClient';
import { ApolloProvider } from 'react-apollo';
import Home from './Components/Home';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
