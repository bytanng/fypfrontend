import React from 'react';
import './myprojectscontent.css';
import raj from '../../../assets/raj.jpeg'

const MyProjectsContent = () => {

    return (
        <div className="myprojs-body">
            <div className="myprojs-container">
                <div className="myprojs-grid-item">
                    <div className="myprojs-title">
                        <h2 style={{ fontWeight: '400' }}>My Projects</h2>
                    </div>
                    <div className="myprojs-nav">
                        <div className="myprojs-navitems">
                            <span className='nav-active'>Active</span>
                            <span className='nav-closed'>Closed</span>
                            <span className='nav-liked'>Liked</span>
                        </div>
                        <div className="myprojs-navfilter">
                            <span style={{ fontWeight: '390' }}>Sort by:</span>
                            <select className='nav-filter'>
                                <option>Latest</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="myprojs-itemlist">

                        <div className='myprojstitle-container'>
                            <div className='myprojstitle-grid-1'>
                                <span>Username</span>
                            </div>
                            <div className='myprojstitle-grid-2'>
                                <span>Name</span>
                            </div>
                            <div className='myprojstitle-grid-3'>
                                <span>Course</span>
                            </div>
                            <div className='myprojstitle-grid-4'>
                                <span>Year</span>
                            </div>
                            <div className='myprojstitle-grid-5'>
                                <span>Top Skills</span>
                            </div>
                        </div>

                        <div className='myprojsresult-container'>
                            <div className='myprojsresult-grid-1'>
                                <a href=""><span>Rajk98</span></a>
                            </div>
                            <div className='myprojsresult-grid-2'>
                                <img src={raj} className='userimg'></img>
                                <span>Raj Kumar</span>
                            </div>
                            <div className='myprojsresult-grid-3'>
                                <span>Computer Science</span>
                            </div>
                            <div className='myprojsresult-grid-4'>
                                <span>3</span>
                            </div>
                            <div className='myprojsresult-grid-5'>
                                <a href="/" className='myprojs-userlistskillstag'>Flutter</a>
                                <a href="/" className='myprojs-userlistskillstag'>Dart</a>
                                <a href="/" className='myprojs-userlistskillstag'>SQL</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjectsContent;
