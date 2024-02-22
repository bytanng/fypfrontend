import React, { useState } from 'react';
import './faqcontent.css';
import FAQquestions from '../FAQQuestions/faqquestions';
import { Link as RouterLink } from 'react-router-dom'

const FAQContent = () => {

    const [SelectedButton, setSelectedButton] = useState('generalbtn')

    const handleSelectButton = (buttonType) =>{
        setSelectedButton(buttonType);
    };

    return (
        <div className="faqbody">
            <div className="faqcontainer">
                <h2 style={{ fontWeight: '400', textAlign:'center' }}>Frequently Asked Questions</h2>
                <div className='faqBtns'>
                    <button className={`faqBtn faqBtn1${SelectedButton === 'generalbtn' ? ' generalBtn' : ' faqhoverBtn' }`} onClick={() => handleSelectButton('generalbtn')}>General</button>
                    <button className={`faqBtn faqBtn2${SelectedButton === 'proposerbtn' ? ' proposerBtn' : ' faqhoverBtn'}`} onClick={() => handleSelectButton('proposerbtn')}>Proposer</button>
                    <button className={`faqBtn faqBtn3${SelectedButton === 'seekerbtn' ? ' seekerBtn' : ' faqhoverBtn'}`} onClick={() => handleSelectButton('seekerbtn')}>Seeker</button>
                </div>
                  <FAQquestions btnType = {SelectedButton}/>
                <div className='faqhelp'>
                    <p>Need more help ?</p>
                    <RouterLink to='/contact'>
                        <p className='faqhelpBtn'>Contact Us</p>
                    </RouterLink>
                </div>
            </div>
        </div>
    );
};

export default FAQContent;
