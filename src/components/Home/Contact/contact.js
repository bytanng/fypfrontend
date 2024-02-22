import React, { useRef } from 'react'
import './contact.css';
import python from '../../../assets/python.png';
import emailjs from '@emailjs/browser';
import facebook from '../../../assets/facebook-icon.png';
import instagram from '../../../assets/instagram.png';
import twitter from '../../../assets/twitter.png';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sn3mlve', 'template_yqf58f6', form.current, 'obXVcjEAZu4q4hGdN')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Get exclusive updates on new exciting Projects !</h1>
                <form ref={form} onSubmit={sendEmail} action="" className='contactForm'>
                    <input type="email" className='email' placeholder="Enter your email here" name='from_email' required></input>
                    <button type="submit" className='submitBtn' value='send'>Join</button>
                    <div className='links'>
                        <img src={facebook} alt="" className="link" />
                        <img src={twitter} alt="" className="link" />
                        <img src={instagram} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;