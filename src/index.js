import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';
import App from './App';
import { client } from './utils/api';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
