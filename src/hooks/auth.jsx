// useAuth.js

import { useState, useEffect } from 'react';
import { auth } from '../firebase';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState('initial');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setUserStatus(user ? 'signed-in' : 'signed-out');
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return { user, userStatus };
};
