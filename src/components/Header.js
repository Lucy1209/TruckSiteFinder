import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <h1>TruckSiteFinder</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contest">Contest</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
