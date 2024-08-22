import React from 'react'
import "./ContactUsStyles.css"
import Swal from 'sweetalert2'

const ContactUs = (props) => {
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key",process.env.REACT_APP_FORM_API_KEY );
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: 'Success!',
            text: 'Your message have been sent.',
            icon: 'success',
            iconColor:'#1B65A5',
            confirmButtonColor:'#1B65A5'
          })
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
     
    <div className='contact-us' id="contact">
    {props.english ?
        <>
        <h1>Contact Us</h1>
        <form action="" onSubmit={onSubmit} className='form-container'>
            <input type="text" name='name' className='fullname' placeholder='Fullname' required/>
            <input type="text" name='email' className='email-address' placeholder='Email Address' required/>
            <input type="text" name='phone' className='phone' placeholder='Phone Number' required/>
            <textarea type="text" name='message' className='message' placeholder='Write your message here'/>
            <button type='submit' className='send-button'>Send Message</button>
        </form>
        </>
    :
    <>
    <h1>تواصل معنا</h1>
    <form action="" onSubmit={onSubmit} className='form-container'>
        <input name="name" type="text" className='fullname' placeholder='الاسم' required/>
        <input name="email" type="text" className='email-address' placeholder='البريد الالكتروني' required/>
        <input name="phone" type="text" className='phone' placeholder='رقم ' required/>
        <textarea type="text" className='message' placeholder='اكتب رسالتك هنا' required/>
        <button className='send-button'>ارسل رسالتك</button>
    </form>
    </>
    
    }
    </div>

  )
}

export default ContactUs
        