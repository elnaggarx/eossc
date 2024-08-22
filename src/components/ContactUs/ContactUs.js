import React from 'react'
import "./ContactUsStyles.css"
const ContactUs = (props) => {
  return (
     
    <div className='contact-us' id="contact">
    {props.english ?
        <>
        <h1>Contact Us</h1>
        <form action="" className='form-container'>
            <input type="text" className='fullname' placeholder='Fullname'/>
            <input type="text" className='email-address' placeholder='Email Address'/>
            <input type="text" className='phone' placeholder='Phone Number'/>
            <input type="text" className='subject' placeholder='Subject' />
            <textarea type="text" className='message' placeholder='Write your message here'/>
            <button type='submit' className='send-button'>Send Message</button>
        </form>
        </>
    :
    <>
    <h1>تواصل معنا</h1>
    <form action="" className='form-container'>
        <input type="text" className='fullname' placeholder='الاسم'/>
        <input type="text" className='email-address' placeholder='البريد الالكتروني'/>
        <input type="text" className='phone' placeholder='رقم '/>
        <input type="text" className='subject' placeholder='الموضوع' />
        <textarea type="text" className='message' placeholder='اكتب رسالتك هنا'/>
        <button className='send-button'>ارسل رسالتك</button>
    </form>
    </>
    
    }
    </div>

  )
}

export default ContactUs
        