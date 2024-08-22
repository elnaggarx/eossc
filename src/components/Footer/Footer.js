import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./FooterStyles.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
const Footer = (props) => {
  return (
    <div className='footer'>
        <div className={props.english ? 'footer-flex-1':'footer-flex-1 footer-reversed'}>
            <div className='footer-flex-11'>
                <ul>
                    {props.english ? 
                    <>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#whyus">Why Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    </>
                    :
                    <>
                    <li><a href="#home">الرئيسية</a></li>
                    <li><a href="#whyus">لماذا نحن</a></li>
                    <li><a href="#services">خدماتنا</a></li>
                    <li><a href="#contact">تواصل معنا</a></li>
                    </>
                    }
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
                    {props.english ?
                    <div>
                        <p className='phone-header'>Have any questions ?</p>
                        <p>+20 1283404704</p>
                    </div>
                    :
                    <div>
                        <p className='phone-header'>هل لديك أسئلة ؟</p>
                        <p>+20 1283404704</p>
                    </div>
                    }
                </div>
                <div className='footer-email'>
                        <EmailIcon className='email-icon'></EmailIcon>
                        <div>
                            {props.english ?
                            <>
                            <p className='email-header'>Contact us at</p>
                            <p>[Email Address]</p>
                            </>
                            :
                            <>
                            <p className='email-header'>تواصل معنا عن طريق</p>
                            <p>[Email Address]</p>
                            </>

                            }
                        </div>
                </div>
            </div>
            {props.english ?
            <div className='copyrights'>
                <p>©{new Date().getFullYear()} All Rights Reserved </p>
            </div>
            :
            <div className='copyrights'>
                <p>©{new Date().getFullYear()} جميع الحقوق محفوظة</p>
            </div>
            }
        </div>

    </div>
  )
}

export default Footer
