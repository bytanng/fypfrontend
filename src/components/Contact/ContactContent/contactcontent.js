import React from 'react';
import './contactcontent.css';

const ContactContent = () => {

    return (
        <div className="contactbody">
            <div className="contactcontainer">
                <div className='contactdetails details1'>
                    <div className='contacttitle'>
                        <h2 style={{ fontWeight: '400' }}>Our Contact Information</h2>
                        <p style={{ fontWeight: '350', fontSize: '0.9rem' }}>Reach out to us.</p>
                    </div>
                        <div className="contactinformationcontent">
                            <i class="fa-solid fa-phone"></i>
                            <div>+65 8123 4567</div>
                        </div>

                        <div className="contactinformationcontent">
                            <i class="fa-solid fa-envelope"></i>
                            <span>NTU@ntu.edu.sg</span>
                        </div>
                        <div className="contactinformationcontent">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>
                                Nanyang Technological University <br />
                                50 Nanyang Avenue, Singapore <br />
                                639798
                            </span>
                        </div>
                        <div className="contactinformationcontent">
                            <i class="fa-solid fa-clock"></i>
                            <span>
                                Mondays to Fridays <br />
                                8:30a.m. to 5:30p.m
                            </span>
                        </div>
                </div>
            </div>
            <div className="contactcontainer">
                <div className='contactdetails'>
                    <div className='contacttitle'>
                        <h2 style={{ fontWeight: '400' }}>Questions and Feedback</h2>
                        <p style={{ fontWeight: '350', fontSize: '0.9rem' }}>We're here to listen.</p>
                    </div>
                    <form id='contactform' className='contactform'>
                        <input type='text' className='contactforminput' placeholder='Name' style={{ width: '60%' }} required />
                        <input type='text' className='contactforminput' placeholder='Email' style={{ width: '60%' }} required />
                        <input type='text' className='contactforminput' placeholder='Subject' style={{ width: '100%' }} required />
                        <textarea rows='4' cols='40' name='comments' form='contactform' className='contactforminput' style={{ width: '100%' }} placeholder='Comments' required />
                        <input type='submit' className='contactforminput' style={{ width: '6rem', backgroundColor: '#09CE78', color: 'white', paddingTop: '0.6rem', paddingBottom: '0.6rem' }} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactContent
