import React from 'react'
import "./HeaderStyles.css"
import logo from "../../assets/main_logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { AnimatePresence,motion } from 'framer-motion';
const Header = (props) => {

    
    return (
    <>
    <header className='header'>
        <nav>
            {props.english ? 
            <>
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo'></img>
            </div>
            <ul className='nav-list'>
                <li ><a href="#services" className='nav-links'>Services</a></li>
                <li><a href="#contact" className='nav-links'>Contact Us</a></li>
                <li onClick={()=>props.handleSetEnglish()}>العربية</li>
            </ul>
            <div className='menu-icon-container' onClick={()=>props.handleMenuClicked()} ><MenuIcon className='menu-icon'></MenuIcon></div>
            </>
            :
            <>
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo'></img>
            </div>
            <ul className='nav-list'>
                <li ><a href="#services" className='nav-links'>خدماتنا</a></li>
                <li><a href="#contact" className='nav-links'>تواصل معنا</a></li>
                <li onClick={()=>props.handleSetEnglish()}>English</li>
            </ul>
            <div className='menu-icon-container' onClick={()=>props.handleMenuClicked()} ><MenuIcon className='menu-icon'></MenuIcon></div>
            </>}

        </nav>

    </header>
    <AnimatePresence> {props.menuClicked && 
        <motion.div initial={{y:"100%"}} animate={{y:0}} transition={{type:"tween"}} className='menu'>
            <ul className='menu-list'>
                {props.english ?
                <>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.4}}><a className='menu-links' href="#whyus" onClick={()=>props.handleMenuClicked()}>Why Us</a></motion.li>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.6}}><a className='menu-links' href="#services" onClick={()=>props.handleMenuClicked()}>Services</a></motion.li>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.8}}><a className='menu-links' href="#contact" onClick={()=>props.handleMenuClicked()}>Contact Us</a></motion.li>
                <motion.li className='menu-item menu-language' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:1}} onClick={()=>props.handleSetEnglish()}>العربية</motion.li>

                </>
                :
                <>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.4}}><a className='menu-links' href="#whyus" onClick={()=>props.handleMenuClicked()}>لماذا نحن</a></motion.li>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.6}}><a className='menu-links' href="#services" onClick={()=>props.handleMenuClicked()}>خدماتنا</a></motion.li>
                <motion.li className='menu-item' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:0.8}}><a className='menu-links' href="#contact" onClick={()=>props.handleMenuClicked()}>تواصل معنا</a></motion.li>
                <motion.li className='menu-item menu-language' initial={{translateX:-50,opacity:0}} animate={{translateX:0,opacity:1}} transition={{duration:0.3,delay:1}} onClick={()=>props.handleSetEnglish()}>English</motion.li>
  
                </>
                }
            </ul>
            <div className='cancel-icon-container' onClick={()=>props.handleMenuClicked()}><CancelIcon className='cancel-icon'></CancelIcon></div>
        </motion.div>}</AnimatePresence>

        </>
  )
}

export default Header
