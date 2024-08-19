import React from 'react'
import "./HeaderStyles.css"
import navy_logo from "../../assets/navy_logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
const Header = (props) => {

    
    return (
    <>
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
            <div className='menu-icon-container' onClick={()=>props.handleMenuClicked()} ><MenuIcon className='menu-icon'></MenuIcon></div>
        </nav>

    </header>
        {props.menuClicked && <div className='menu'>
            <ul className='menu-list'>
                <li className='menu-item'><a className='menu-links' href="#home">Home</a></li>
                <li className='menu-item'><a className='menu-links' href="#whyus">Why Us</a></li>
                <li className='menu-item'><a className='menu-links' href="#services">Services</a></li>
                <li className='menu-item'><a className='menu-links' href="#contact">Contact Us</a></li>

            </ul>
            <div className='cancel-icon-container' onClick={()=>props.handleMenuClicked()}><CancelIcon className='cancel-icon'></CancelIcon></div>
        </div>}

        </>
  )
}

export default Header
