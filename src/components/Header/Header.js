import React from 'react'
import "./HeaderStyles.css"
import navy_logo from "../../assets/navy_logo.png"
const Header = () => {
  return (
    <header className='header'>
        <nav>
            <ul className='left-menu-items'>
                <li ><a href="#home" className='nav-links'>Home</a></li>
                <li><a href="#why-us" className='nav-links'>Why Us</a></li>
            </ul>
            <div className='logo-container'>
                <img src={navy_logo} alt='logo' className='logo'></img>
            </div>
            <ul className='right-menu-items'>
                <li ><a href="#services" className='nav-links'>Services</a></li>
                <li ><a href="#contact" className='nav-links'>Contact Us</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
