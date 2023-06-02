import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Genre from './pages/Genre';
import Vote from './pages/Vote';

function App() {
  return (
    <ApolloProvider client={new ApolloClient({ uri: 'your_graphql_endpoint', cache: new InMemoryCache() })}>
      <Router>
        <div className="black-background">
          <div className="container is-centered">
            <div className="columns is-centered">
              <div className="column is-half">
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
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
