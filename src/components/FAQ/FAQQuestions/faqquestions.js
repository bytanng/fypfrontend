import React, { useState, useEffect } from 'react';
import './faqquestions.css';

const FAQquestions = (props) => {
    const [openItems, setOpenItems] = useState([]);
    let faqData = [];

    useEffect(() => {
        setOpenItems([]);
    }, [props.btnType]);

    if (props.btnType == 'generalbtn'){
        faqData = [
            { question: 'How can I sign up with my NTU email ?', answer: 'You can do that on the sign up page' },
            { question: 'Lorem ipsum dolor sit amet 1 ?', answer: 'answer 2' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
        ];
    }
    else if (props.btnType == 'proposerbtn'){
        faqData = [
            { question: 'ABC', answer: 'ABC' },
            { question: 'Lorem ipsum dolor sit amet 1 ?', answer: 'answer 2' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
        ];
    }
    else if (props.btnType == 'seekerbtn'){
        faqData = [
            { question: 'CDE', answer: 'You can do that on the sign up' },
            { question: 'Lorem ipsum dolor sit amet 1 ?', answer: 'answer 2' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
            { question: 'Lorem ipsum dolor sit amet 2?', answer: 'answer 3' },
        ];
    }

    const handleItemClick = (index)=>{
        const isOpen = openItems.includes(index);
        setOpenItems(isOpen ? openItems.filter((item)=> item!==index) : [...openItems, index]);
    }

    return (
        <div className='faq-mainsection'>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className={`faq-question${index === faqData.length - 1 ? ' last-question' : ''}`} onClick={() => handleItemClick(index)}>
                        <div style={{paddingRight:'1rem'}}>{item.question}</div>
                        <span style={{marginLeft:'auto', paddingRight:'1rem'}}><i class={`fa-solid${openItems.includes(index) ? ' fa-caret-up' : ' fa-caret-down'}`}></i></span>
                    </div>
                    {openItems.includes(index) && (
                        <div className={`faq-answer${index === faqData.length - 1 ? ' last-answer' : ''}`}>
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQquestions;
