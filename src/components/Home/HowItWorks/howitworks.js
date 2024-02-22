import React, { useState } from 'react'
import './howitworks.css';
import connect from '../../../assets/connect.jpeg';
import connect2 from '../../../assets/connect2.jpeg';
import explore from '../../../assets/explore.jpeg';
import collaborate from '../../../assets/collaborate.jpeg';
import start from '../../../assets/start.jpeg';
import collab from '../../../assets/collab.jpeg';

export const HowItWorks = () => {

    const [SelectedUser, setSelectedUser] = useState(false);

    const handleSelectedUser = (buttonType) => {
        setSelectedUser(buttonType);
    };

    return (
        <section id="howitworks">
            <span className='howitworksTitle'>How it Works</span>
            <span className='howitworksDescription'><p>Share your ideas and find collaborators with these simple step.</p></span>
            <div className='switchBtn'>
                <button className='switchBtn1' onClick={() => handleSelectedUser(false)}>
                    Proposer
                </button>
                <button className='switchBtn2' onClick={() => handleSelectedUser(true)}>
                    Seeker
                </button>
            </div>
            <div className='howitworksBar'>
                <div className='step'>
                    <span className={!SelectedUser ? 'proposer' : 'hidden'}>
                        <img src={start} alt="UIDesign" className='howitworksBarImg' />
                        <div className='howitworksBarText'><br />
                            <h4>1. Start a Project</h4>
                            <center><p className='howitworksBarTextDesc'>Empower your vision and bring your project to life by initiating it on our platform.</p></center>
                        </div>
                    </span>
                    <span className={SelectedUser ? 'seeker' : 'hidden'}>
                        <img src={explore} alt="UIDesign" className='howitworksBarImg' />
                        <div className='howitworksBarText'><br />
                            <h4>1. Explore</h4>
                            <center><p className='howitworksBarTextDesc'>Dive into a world of diverse projects tailored to your skills and interests.</p></center>
                        </div>
                    </span>
                </div>
                <div className='step'>
                    <span className={!SelectedUser ? 'proposer' : 'hidden'}>
                        <img src={connect} alt="UIDesign" className='howitworksBarImg' />
                        <div className='howitworksBarText'><br />
                            <h4>2. Connect with potential members</h4>
                            <center><p className='howitworksBarTextDesc'>Explore a diverse pool of students with the right expertise and interests using our smart search function. </p></center>
                        </div>
                    </span>
                    <span className={SelectedUser ? 'seeker' : 'hidden'}>
                        <img src={connect2} alt="UIDesign" className='howitworksBarImg' />
                        <div className='howitworksBarText'><br />
                            <h4>2. Connect with project lead</h4>
                            <center><p className='howitworksBarTextDesc'>Reach out to project leaders to join forces to bring innovative concepts to fruition.</p></center>
                        </div>
                    </span>
                </div>
                <div className='step'>
                    <span className={!SelectedUser ? 'proposer' : 'hidden'}>
                        <img src={collaborate} alt="UIDesign" className='howitworksBarImg' />
                        <div className='howitworksBarText'><br />
                            <h4>3. Collaborate</h4>
                            <center><p className='howitworksBarTextDesc'>Foster innovation and teamwork by collaborating on projects through our platform.</p></center>
                        </div>
                    </span>
                    <span className={SelectedUser ? 'seeker' : 'hidden'}>
                        <img src={collab} alt="UIDesign" className='howitworksBarImg' />
                        <div className='howitworksBarText'><br />
                            <h4>3. Collaborate</h4>
                            <center><p className='howitworksBarTextDesc'>Contribute your skills, share insights, and collectively drive projects towards success on our collaborative platform.</p></center>
                        </div>
                    </span>
                </div>
            </div>

        </section>
    )
}

export default HowItWorks;
