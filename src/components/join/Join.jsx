import React, {useRef} from 'react'
import './join.css';
import emailjs from '@emailjs/browser';
const Join = () => {
  const form=useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3idee73', 'template_v8pr64k', form.current, '8IRFLMD_lQ9PSz6e8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='join' id='join-us'>
        <div className="left-j">
          <hr/>
          <div className="">
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP </span>
            </div>
            <div className="">
            <span>YOUR BODY </span>
            <span className='stroke-text'>WITH US?</span>
            </div>
            
        </div>
    <div className="right-j">
      <form ref={form} className='email-container' onSubmit={sendEmail}>
        <input type="email" name='user_email' placeholder='Enter your email address'/>
        <button className='btn-j'>Join now</button>
      </form>
    </div>
    </div>
  )
}

export default Join