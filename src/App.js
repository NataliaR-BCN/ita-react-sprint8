import Router from './application/Router';
import { useState } from 'react';

function App() {
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState('');

  const changeIsAuthenticated = () => setIsAuthenticated(prevIsAuthenticated => !prevIsAuthenticated);
  const changeUserLoggedIn = (newUserLoggedIn) => setUserLoggedIn(newUserLoggedIn); 

  return (
    
    <Router 
            isAuthenticated = {isAuthenticated} 
            handleIsAuthenticated = {changeIsAuthenticated} 
            handleUserLoggedIn = {changeUserLoggedIn} 
            userLoggedIn ={userLoggedIn}         
    />
  );
}

export default App;
