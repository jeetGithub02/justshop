// Header.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
  const [user, setUser] = useState(firebase.auth().currentUser);

  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <span>{user.displayName ? user.displayName[0] : ''}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Signup />
          <Login />
        </div>
      )}
    </div>
  );
};

export default Header;
