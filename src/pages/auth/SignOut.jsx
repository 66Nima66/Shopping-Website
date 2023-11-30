import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'; // Import the useAuth hook

const SignOut = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Sign out successful!');
        navigate('/');
      })
      .catch((error) => {
        alert('Sign out failed. ' + error.message);
      });
  };

  return (
    <div className="auth-container">
      <h1>Sign Out</h1>
      <form className="auth-form">
        {user ? (
          <>
            <p>Are you sure you want to sign out, {user.email}?</p>
            <button className='auth-button logout-button' type="button" onClick={handleSignOut}>Yes, Sign Out</button>
            <Link to="/">Go to Home</Link>
          </>
        ) : (
          <p>You are already signed out.</p>
        )}
      </form>
    </div>
  );
};

export default SignOut;
