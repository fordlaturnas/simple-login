import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // by default isLoggedIn is set to false.

  useEffect(() => {
    const storeUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storeUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {/** If isLoggedIn is not-false return <Login /> */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {/** If isLoggedIn is false return <Logout /> */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
