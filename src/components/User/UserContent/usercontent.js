import React from 'react';
import './usercontent.css'
import jason from '../../../assets/jason.jpeg';
import android from '../../../assets/android.webp';
import smartnation from '../../../assets/smartnation.jpeg';
import web1 from '../../../assets/web1.webp';
import web2 from '../../../assets/web2.webp';

const UserContent = () => {
  return (
    <div className='userbody'>
      <div className="user-container">
        <div className="user-column1">

          <div className="user-grid-item user-grid-1">
            <div className='user-bar'>
              <div className='userdetails userdetails1'>
                <img src={jason} alt="UIDesign" className='userImg' />
              </div>
              <div className='userdetails userdetails2'>
                <h2>Jason Lim &nbsp;<span style={{ fontSize: 'small', fontWeight: '300' }}>(Student)</span></h2>
                <p className='userdesc'>IEM Year 3</p>
                <p className='userdesc'>Tech Enthusiast </p>
                <p className='userdesc' style={{ marginBottom: '0.5rem' }}>CV: &nbsp;<a href="/user"><i className="fa-regular fa-file" /></a></p>
                <a href="/user"><button className='usercontBtn'>Contact</button></a>
              </div>
            </div>
            <hr />
            <p className='userdesc' style={{ marginTop: '1.5rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus.<br /> Libero justo laoreet sit amet cursus sit amet dictum. Sit amet commodo nulla facilisi nullam vehicula ipsum.<br /> Leo duis ut diam quam nulla porttitor. Amet porttitor eget dolor morbi non arcu risus quis. Elit pellentesque habitant morbi tristique senectus et. Quis hendrerit dolor magna eget est lorem ipsum. At augue eget arcu dictum varius duis. Feugiat pretium nibh ipsum consequat nisl vel pretium. Eu ultrices vitae auctor eu.<br />
              Sit amet justo donec enim diam vulputate ut pharetra. Eget magna fermentum iaculis eu. Euismod nisi porta lorem mollis. Amet risus nullam eget felis eget nunc lobortis mattis aliquam.<br />
              Sit amet justo donec enim diam vulputate ut pharetra. Eget magna fermentum iaculis eu. Euismod nisi porta lorem mollis. Amet risus nullam eget felis eget nunc lobortis mattis aliquam.
            </p>
          </div>

          <div className="user-grid-item user-grid-2">
            <h3>Portfolio</h3><hr /><br />
            <div className='portfolioBars'>
              <div className='portfolioBar'>
                <img src={android} alt="" className='portfolioImg' />
                <p className='portfolioText'>Web App 1</p>
              </div>
              <div className='portfolioBar'>
                <img src={smartnation} alt="" className='portfolioImg' />
                <p className='portfolioText'>Web App 2</p>
              </div>
              <div className='portfolioBar'>
                <img src={web1} alt="" className='portfolioImg' />
                <p className='portfolioText'>Web App 3</p>
              </div>
              <div className='portfolioBar'>
                <img src={web2} alt="" className='portfolioImg' />
                <p className='portfolioText'>Web App 4</p>
              </div>
            </div>
          </div>

          <div className="user-grid-item user-grid-3">
            <h3>Experience</h3>
            <hr style={{ marginBottom: '1rem' }} />
            <p>Software Engineer Intern <span style={{ float: 'right', fontWeight: '300' }}>Jun 2021 - Aug 2021</span> </p>
            <p style={{ fontWeight: '300', margin: '0.5rem 0' }}>Company ABC</p>
            <ul>
              <li className='userlist'>Worked on XYZ</li>
              <li className='userlist'>Designed XYZ</li>
              <li className='userlist'>Developed XYZ</li>
            </ul>
          </div>

          <div className="user-grid-item user-grid-4">
            <h3>Education</h3>
            <hr style={{ marginBottom: '1rem' }} />
            <p>Bachelors in Information Engineering and Media <span style={{ float: 'right', fontWeight: '300' }}>Aug 2020 - May 2024</span> </p>
            <p style={{ fontWeight: '300', margin: '0.5rem 0' }}>Nanyang Technological University, Singapore</p>
            <ul>
              <li className='userlist'>Participated in XYZ</li>
              <li className='userlist'>Spearheaded XYZ</li>
              <li className='userlist'>Chairman of XYZ</li>
            </ul>
          </div>

          <div className="user-grid-item user-grid-5">
            <h3>Certification</h3>
            <hr style={{ marginBottom: '1rem' }} />
            <p>XYZ Certification<span style={{ float: 'right', fontWeight: '300' }}>Aug 2022 - Sep 2022</span> </p>
            <p style={{ fontWeight: '300', margin: '0.5rem 0' }}>Company XYZ</p>
            <a href="/user" style={{ fontSize: 'small', color: '#0066CC', float: 'left', fontWeight:'300' }}>View Credentials &gt;</a>
          </div>

        </div>
        <div className="user-column2">
          <div className="user-grid-item user-grid-6">
            <h3 style={{ fontWeight: '400', marginBottom: '-0.4rem' }}>Projects</h3><br />
            <div className='userproj'>
              <p className='userprojtitle'>Mobile App for Transport</p>
              <a href="/user" className='userprojbtn'>View &gt;</a>
              <br />
              <div className='userproj'>
                <p className='userprojtitle'>Smart Android App</p>
                <a href="/user" className='userprojbtn'>View &gt;</a>
              </div>
              <div className='userproj'>
                <p className='userprojtitle'>Digital Nation App</p>
                <a href="/user" className='userprojbtn'>View &gt;</a>
              </div>
            </div>
          </div>
          <div className="user-grid-item user-grid-7">
            <h3>Top Skills</h3><br />
            <div className='userskillstags'>
              <a href="/" className='userskillstag'>HTML</a>
              <a href="/" className='userskillstag'>CSS</a>
              <a href="/" className='userskillstag'>Javascript</a>
              <a href="/" className='userskillstag'>React</a>
              <a href="/" className='userskillstag'>SQL</a>
              <a href="/" className='userskillstag'>Java</a>
              <a href="/" className='userskillstag'>Python</a>
              <a href="/" className='userskillstag'>PHP</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserContent;
