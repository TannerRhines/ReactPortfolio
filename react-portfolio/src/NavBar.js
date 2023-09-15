import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/"> about me </a></li>
        <li><a href="/about"> portfolio </a></li>
        <li><a href="/services"> contact</a></li>
        <li><a href="/contact"> resume</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;