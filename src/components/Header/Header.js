import React from 'react'
import "./HeaderStyles.css"
import navy_logo from "../../assets/navy_logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { AnimatePresence,motion } from 'framer-motion';
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
        {props.menuClicked && <AnimatePresence>
        <motion.div initial={{y:"100%"}} animate={{y:0}} transition={{type:"tween"}} className='menu'>
            <ul className='menu-list'>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.2}}><a className='menu-links' href="#home">Home</a></motion.li>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.4}}><a className='menu-links' href="#whyus">Why Us</a></motion.li>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.6}}><a className='menu-links' href="#services">Services</a></motion.li>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.8}}><a className='menu-links' href="#contact">Contact Us</a></motion.li>

            </ul>
            <div className='cancel-icon-container' onClick={()=>props.handleMenuClicked()}><CancelIcon className='cancel-icon'></CancelIcon></div>
        </motion.div></AnimatePresence>}

        </>
  )
}

export default Header
