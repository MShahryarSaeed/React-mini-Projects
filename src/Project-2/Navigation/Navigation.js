import styles from './Navigation.module.css';
import React from 'react';
import Logo from '../assests/logo.png';

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src={Logo} alt="Logo"  />

        </div>

        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
  )
}

export default Navigation;