import React from 'react';
import './forgotpassword.css';

const ForgotPassword = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup">
            <button className='closeBtn' onClick={onClose}><i class="fa-solid fa-x" /></button>
                <div className="popupcontent">
                    <h2 style={{fontWeight:'400'}}>Forgot your Password ?</h2>
                    <p style={{fontSize:'0.9rem', fontWeight:'350', padding:'0.5rem'}}>Enter the email address you used to sign up
                        and we'll send you instructions to reset
                        your password.</p>
                    <form style={{marginTop:'1rem'}}>
                        <input type='email' className='forgotforminput' placeholder='Email' required />
                        <input type='submit' className='forgotforminput' value='Send' style={{backgroundColor:'#09CE78', color:'white', paddingTop:'0.6rem',paddingBottom:'0.6rem', marginTop:'1rem'}} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;