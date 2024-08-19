import React from 'react'
import "./ContactUsStyles.css"
const ContactUs = () => {
  return (
    <div className='contact-us'>
        <h1>Make An Appointment</h1>
        <form action="" className='form-container'>
            <input type="text" className='fullname' placeholder='Fullname'/>
            <input type="text" className='email-address' placeholder='Email Address'/>
            <input type="text" className='phone' placeholder='Phone Number'/>
            <input type="text" className='subject' placeholder='Subject' />
            <input type="text" className='message' placeholder='Write your message here'/>
        </form>
    </div>
  )
}

export default ContactUs
        