import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Genre from './pages/Genre';
import Vote from './pages/Vote';

const client = new ApolloClient({
  uri: '/graphql',
    cache: new InMemoryCache()});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/genre" 
            element={<Genre />} 
          />
          <Route 
            path="/genre/:id" 
            element={<Vote />} 
          />
        </Routes>
      </div>
    </Router>
    </ApolloProvider> 
  );
}

export default App;
