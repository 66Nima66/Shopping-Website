import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useAuth } from "../hooks/auth"; // Import the useAuth hook
import "./navbar.css";

export const Navbar = () => {
  const { user, userStatus } = useAuth();

  const renderAuthLink = () => {
    if (user && userStatus === "signed-in") {
      return <Link to="/auth/SignOut"> Logout </Link>;
    } else {
      return <Link to="/auth/SignIn"> Login </Link>;
    }
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> About Us </Link>

        {renderAuthLink()}
        
        {user && userStatus === "signed-in" && (
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        )}

       
      </div>
    </div>
  );
};