// SignIn.js

import { signInWithEmailAndPassword , signOut} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'; // Import the useAuth hook
const SignIn = () => {
  const nameOfWebsite = 'Cougar Deals';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { user, userStatus } = useAuth();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Sign in successful!');
        console.log(userCredential);
        navigate('/');
      })
      .catch((error) => {
        alert('Sign in failed. ' + error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Sign out successful!');
        // You can also navigate to a specific route after sign-out if needed.
      })
      .catch((error) => {
        alert('Sign out failed. ' + error.message);
      });
  };

  return (
    <div className="auth-container">
      <h1>{nameOfWebsite}</h1>
      {user && userStatus === 'signed-in' ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button className='auth-button logout-button' onClick={handleSignOut}>Sign Out</button>
          {}
          <Link to="/">Go to Home</Link>
        </>
      ) : (
        <form className="auth-form" onSubmit={signIn}>
          <h2>Sign In</h2>
          <input
            className="auth-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          <br></br>
          <Link to="/auth/SignUpView">Don't have an account? Sign up here!</Link>
        </form>
      )}
    </div>
  );
};


export default SignIn;
