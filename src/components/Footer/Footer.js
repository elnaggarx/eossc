import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./FooterStyles.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-flex-1'>
            <div className='footer-flex-11'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Why Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className='footer-flex-12'>
                <ul>
                    <li><a href="#"><FacebookIcon></FacebookIcon></a></li>
                    <li><a href="#"><InstagramIcon></InstagramIcon></a></li>
                    <li><a href="#"><LinkedInIcon></LinkedInIcon></a></li>
                </ul>

            </div>

        </div>
        <hr />

    </div>
  )
}

export default Footer
