import React from 'react';
import Logo from '../../img/clima.png'
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="n-logo">
        <img id='logo' src={Logo} alt="" />
          Weather App
        </span>
      </Link>
       
    </nav>
  );
};


export default Nav;
