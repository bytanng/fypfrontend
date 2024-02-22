import React, { useState } from 'react';
import './logincontent.css';
import ForgotPassword from '../ForgotPassword/forgotpassword';

const LoginContent = () => {

  const [isPopupOpen, setisPopupOpen] = useState(false);

  const openPopup = () => {
    setisPopupOpen(true);
  };

  const closePopup = () => {
    setisPopupOpen(false);
  };

  return (
    <div className="loginbody">
      <div className="logincontainer">
        <div className="logintitle">
          <h2 style={{ fontWeight: '400', textAlign:'center' }}>Welcome back !</h2>
          <p style={{ fontSize: 'small', fontWeight: '350', marginTop: '0.5rem', marginBottom: '0.5rem', textAlign:'center' }}>Sign in to access your profile.</p>
        </div>
        <form className='loginform' style={{ marginBottom: '0.3rem' }}>
          <input type='text' className='loginforminput' placeholder='Username or Email' required />
          <input type='password' className='loginforminput' placeholder='Password' required />
          <input type='submit' className='loginforminput' style={{ backgroundColor: '#09CE78', color: 'white', paddingTop: '0.6rem', paddingBottom: '0.6rem' }} value='Log In' />
        </form>
        <p style={{textAlign:'center'}}><a href="#forgotpassword" className='loginlinks' onClick={openPopup}>Forgot your password ?</a></p>
        {isPopupOpen && <ForgotPassword onClose={closePopup} />}

        <p style={{ fontSize: 'small', fontWeight: '400', margin: '0.5rem' }} className='or'>OR</p>
        <button className='loginforminput' style={{ backgroundColor: '#2897FF', color: 'white', marginBottom: '2rem' }}>Sign in with NTU account</button>
        <p className='noaccount'>
          <hr />
          <center><span style={{ display: 'inline-block', margin: '0.3rem', textAlign: 'center' }}>Don't have an account ?
            <a href='/signup' className='loginlinks' style={{ marginLeft: '0.3rem' }}> Sign up</a></span></center>
          <hr />
        </p>
        <hr />
      </div>
    </div>
  );
};

export default LoginContent
