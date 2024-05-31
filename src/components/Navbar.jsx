import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">Library Management</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/books" className="nav-link">Books</Link>
      </li>
      <li className="nav-item">
        <Link to="/authors" className="nav-link">Authors</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
