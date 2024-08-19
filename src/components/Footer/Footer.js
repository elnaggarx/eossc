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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#whyus">Why Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className='footer-flex-12'>
                <ul>
                    <li><a href="#facebook"><FacebookIcon></FacebookIcon></a></li>
                    <li><a href="#instagram"><InstagramIcon></InstagramIcon></a></li>
                    <li><a href="#linkedin"><LinkedInIcon></LinkedInIcon></a></li>
                </ul>

            </div>

        </div>
        <hr />
        <div className='footer-flex-2'>
            <div className='contact-info'>
                <div className='footer-phone'>
                    <CallIcon className='phone-icon'></CallIcon>
                    <div>
                        <p className='phone-header'>Have any questions ?</p>
                        <p>+20 1283404704</p>
                    </div>
                </div>
                <div className='footer-email'>
                        <EmailIcon className='email-icon'></EmailIcon>
                        <div>
                            <p className='email-header'>Contact us at</p>
                            <p>[Email Address]</p>
                        </div>
                </div>
            </div>
            <div className='copyrights'>
                <p>©{new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </div>

    </div>
  )
}

export default Footer
