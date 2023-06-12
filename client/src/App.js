import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Login from './pages/Login';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
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
