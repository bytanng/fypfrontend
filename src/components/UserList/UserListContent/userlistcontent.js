import React from 'react';
import './userlistcontent.css';
import raj from '../../../assets/raj.jpeg'

const UserListContent = () => {
    return (
        <div className='userlistbody'>
            <div className="userlist-grid-container">

                {/* search grid */}
                <div className="userlist-grid-item userlist-grid-1">
                    <h3 style={{ fontWeight: '400' }}>User list</h3>
                    <form className='userlistsearchForm'>
                        <input type="text" className='userlistsearchBar' placeholder="Search for users" required></input>
                        <button type="submit" className='userlistsearchBtn' value='send'>Go</button>
                    </form>
                </div>

                <div className='userlist-grid-container2'>
                    {/* filter grid */}
                    <div className="userlist-grid-item userlist-grid-2">
                        <h3 style={{ fontWeight: '400' }}>Filters</h3>
                        <hr style={{ marginTop: '1rem' }} />
                        <form className='skillsfilter'>
                            <p className='filtertitle'>Skills<a href="" className='clearbtn'>Clear</a></p>
                            <div>
                                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                <input type="text" className='userlistfiltersearchBar' placeholder="Search skills" required></input>
                            </div>
                            <div>
                                <input type="checkbox" className='listchkbox' id="sftchkbox" name="sftchkbox" value="sft"></input>
                                <label for="sftchkbox" className='listchkboxname'>HTML</label>
                            </div>
                            <div>
                                <input type="checkbox" className='listchkbox' id="machkbox" name="machkbox" value="ma"></input>
                                <label for="machkbox" className='listchkboxname'>CSS</label>
                            </div>
                        </form>

                        <form className='coursefilter'>
                            <p className='filtertitle'>Skills Required<a href="" className='clearbtn'>Clear</a></p>
                            <div>
                                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                <input type="text" className='userlistfiltersearchBar' placeholder="Search course" required></input>
                            </div>
                            <div>
                                <input type="checkbox" className='listchkbox' id="skillschkbox" name="skillschkbox" value="skills1"></input>
                                <label for="skillschkchkbox" className='listchkboxname'>Computer Science</label>
                            </div>
                            <div>
                                <input type="checkbox" className='listchkbox' id="skills2chkbox" name="skills2chkbox" value="skills2"></input>
                                <label for="skills2chkbox" className='listchkboxname'>Business</label>
                            </div>
                        </form>

                        <form className='yearfilter'>
                            <p className='filtertitle'>Year<a href="" className='clearbtn'>Clear</a></p>
                            <div>
                                <input type="checkbox" className='listchkbox' id="yearchkbox" name="yearchkbox" value="open"></input>
                                <label for="yearchkchkbox" className='listchkboxname'>1</label>
                            </div>
                            <div>
                                <input type="checkbox" className='listchkbox' id="year2chkbox" name="year2chkbox" value="closed"></input>
                                <label for="year2chkchkbox" className='listchkboxname'>2</label>
                            </div>
                            <div>
                                <input type="checkbox" className='listchkbox' id="year3chkbox" name="year3chkbox" value="closed"></input>
                                <label for="year3chkchkbox" className='listchkboxname'>3</label>
                            </div>
                            <div>
                                <input type="checkbox" className='listchkbox' id="year4chkbox" name="year4chkbox" value="closed"></input>
                                <label for="year4chkchkbox" className='listchkboxname'>4</label>
                            </div>
                        </form>
                    </div>

                    {/* result grid */}
                    <div className="userlist-grid-item userlist-grid-3">
                        <div className='userlistresultstitle'>
                            <h3 style={{ fontWeight: '400' }}>Top Results</h3>
                            <span style={{ fontSize: 'small', marginLeft: '1rem', fontWeight: '350' }}>1-10 of 150 results</span>
                            <div className='userlistsorting'>
                                <span style={{fontWeight:'400', fontSize:'0.9rem'}}>Sort by:</span>
                                <select id="select" className='userroleselector'>
                                    <option value="">Username</option>
                                    <option value="">Name</option>
                                    <option value="">Course</option>
                                    <option value="">Year</option>
                                    <option value="">Skills</option>
                                </select>
                            </div>
                        </div>
                        <hr style={{ margin: '1rem 0' }} />
                        <div className='userlistresults'>
                            <div className='userbartitle-grid-container'>
                                <div className='userbartitle-grid-1'>
                                    <span>Username</span>
                                </div>
                                <div className='userbartitle-grid-2'>
                                    <span>Name</span>
                                </div>
                                <div className='userbartitle-grid-3'>
                                    <span>Course</span>
                                </div>
                                <div className='userbartitle-grid-4'>
                                    <span>Year</span>
                                </div>
                                <div className='userbartitle-grid-5'>
                                    <span>Top Skills</span>
                                </div>
                            </div>

                            <div className='userbarresult-grid-container'>
                                <div className='userbarresult-grid-1'>
                                    <a href=""><span>Rajk98</span></a>
                                </div>
                                <div className='userbarresult-grid-2'>
                                    <img src={raj} className='userimg'></img>
                                    <span>Raj Kumar</span>
                                </div>
                                <div className='userbarresult-grid-3'>
                                    <span>Computer Science</span>
                                </div>
                                <div className='userbarresult-grid-4'>
                                    <span>3</span>
                                </div>
                                <div className='userbarresult-grid-5'>
                                        <a href="/" className='userlistskillstag'>Flutter</a>
                                        <a href="/" className='userlistskillstag'>Dart</a>
                                        <a href="/" className='userlistskillstag'>SQL</a>
                                </div>
                            </div>

                            <div className='userbarresult-grid-container'>
                                <div className='userbarresult-grid-1'>
                                    <a href=""><span>Rajk98</span></a>
                                </div>
                                <div className='userbarresult-grid-2'>
                                    <img src={raj} className='userimg'></img>
                                    <span>Raj Kumar</span>
                                </div>
                                <div className='userbarresult-grid-3'>
                                    <span>Computer Science</span>
                                </div>
                                <div className='userbarresult-grid-4'>
                                    <span>3</span>
                                </div>
                                <div className='userbarresult-grid-5'>
                                        <a href="/" className='userlistskillstag'>Flutter</a>
                                        <a href="/" className='userlistskillstag'>Dart</a>
                                        <a href="/" className='userlistskillstag'>SQL</a>
                                </div>
                            </div>


                            <div class="userlistpagination">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a href="#" class="active">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserListContent;
