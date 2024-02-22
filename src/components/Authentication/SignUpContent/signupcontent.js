import React, { useState } from 'react';
import './signupcontent.css';

const SignUpContent = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [signupstate, setSignUpState] = useState('nil');

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        // Validate on every password change
        if (confirmPassword && newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);

        // Validate on every confirm password change
        if (password && password !== newConfirmPassword) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.log('Password doesn\'t match');
            return
        }

        const formData = new FormData(event.target);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        };

        try {
            const response = await fetch('http://localhost:3000/signup', requestOptions);
            const data = await response.json();

            if (response.ok) {
                console.log('User account created successfully:', data.message);
                setSignUpState('success');
            } else {
                console.error('Error:', data.message);
                setSignUpState('error');
            }
        } catch (error) {
            console.error('Error:', error.message);
            setSignUpState('error');
        }
    };

    return (
        <div className="signupbody">
            <div className="signupcontainer">

                <div className={signupstate === 'nil' ? 'signupdisplay' : 'nodisplay'}>
                    <div className="signuptitle">
                        <h2 style={{ fontWeight: '400' }}>Create an account</h2>
                        <p style={{ fontSize: 'small', fontWeight: '350', marginTop: '0.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Sign up to join NTU's largest project community !</p>
                    </div>
                    <form className='signupform' style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
                        <div>
                            <input type='text' name='FirstName' className='signupforminput' placeholder='First Name' style={{ width: '48.5%', marginRight: '3%' }} required />
                            <input type='text' name='LastName' className='signupforminput' placeholder='Last Name' style={{ width: '48.5%' }} required />
                        </div>
                        <input type='text' name='Username' className='signupforminput' placeholder='Username' required />
                        <input type='text' name='Email' className='signupforminput' placeholder='Email' required />
                        <input type='password' name='Password' className='signupforminput' placeholder='Password' onChange={handlePasswordChange} required />
                        <input type='password' className='signupforminput' placeholder='Re-enter Password' onChange={handleConfirmPasswordChange} required />
                        <span style={{ color: 'red', fontWeight: '390', fontSize: '0.9rem' }}>{passwordError}</span>
                        <div style={{ display: 'flex' }}>
                            <input type='checkbox' id='tandc' name='tandc' value='tandc' style={{ marginBottom: '1.3rem', marginRight: '0.5rem' }} required />
                            <label htmlFor='tandc'>
                                <p style={{ fontWeight: '300', fontSize: 'small' }}>
                                    I agree to the <a href="/test" className='signuplinks'>Terms and Conditions</a> and understand the <a href="/test" className='signuplinks'>Privacy Policy</a>
                                </p>
                            </label>
                        </div>
                        <input type='submit' className='signupforminput submitform' value='Create Account'></input>
                    </form>
                    <div className='existingaccount'>
                        <hr />
                        <center><span style={{ display: 'inline-block', margin: '0.3rem', textAlign: 'center' }}>Already have an account ?
                            <a href='/login' className='signuplinks' style={{ marginLeft: '0.3rem' }}> Log in</a></span></center>
                        <hr />
                    </div>
                </div>

                <div className={signupstate === 'success' || 'error' ? 'signupresultsdisplay' : 'nodisplay'}>
                    <div className={signupstate === 'success' ? 'signupresults' : 'nodisplay'}>
                        <div className='signup1'>Your sign up was successfully.</div>
                        <div className='signup2'>Please click <a href='/login' style={{cursor:'pointer'}}>here</a> to login.</div>
                    </div>
                    <div className={signupstate === 'error' ? 'signupresults' : 'nodisplay'}>
                        <div className='signup1'>An error has occured.</div>
                        <div className='signup2'>Please sign up again by clicking <a href='/signup'>here</a>.</div>
                    </div>
                    <div className=''>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUpContent;
