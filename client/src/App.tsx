import React from 'react';
import client from './apolloClient';
import { ApolloProvider } from 'react-apollo';
import Home from './Components/Home';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
