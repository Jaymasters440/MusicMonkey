import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Profile from './pages/Profile';
import AppNavbar from './conponents/navbar';
import './index.css'

const httpLink = createHttpLink({
  uri: '/graphql',
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
                {/* <AppNavbar/> might work right below here */}
                <AppNavbar/>
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
                      path="/signup" 
                      element={<Signup />} 
                    />
                    <Route 
                      path="/genre" 
                      element={<Genre />} 
                    />
                    <Route 
                      path="/profile" 
                      element={<Profile />} 
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
