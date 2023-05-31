import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
 import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Genre from './pages/Genre';
import Vote from './pages/Vote';

function App() {
  return (
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
  );
}

export default App;
