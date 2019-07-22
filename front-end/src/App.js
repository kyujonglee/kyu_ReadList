import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './Components/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <div />
      <Router>
        <Route exact={true} path={'/'} component={Home} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
