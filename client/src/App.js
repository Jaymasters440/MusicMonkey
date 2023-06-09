import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


import Home from './pages/Home';
import Genre from './pages/Genre';
import Login from './pages/Login'


const client = new ApolloClient({
  uri: '/graphql',
    cache: new InMemoryCache()});

function App() {
  return (

    <ApolloProvider client={new ApolloClient({ uri: 'your_graphql_endpoint', cache: new InMemoryCache() })}>
      <Router>
        <div className="black-background">
          <div className="centered-container is-offset-8 is-4">
            <div>
              <div>
                <div>
                  <Routes>
                    <Route 
                      path="/" 
                      element={<Home />} 
                    />
                    <Route 
                      path="/login" 
                      element={<Login />} 
                    />
                    <Route 
                      path="/genre" 
                      element={<Genre />} 
                    />
                    
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>

   
  );
}

export default App;
