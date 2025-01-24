import React from "react";
import "../Styles/Navbar.css";
import img from "../img/Logo.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={img}
          alt="Logo"
          className="logo"
        />
        <span>Prodmast</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="signup-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
