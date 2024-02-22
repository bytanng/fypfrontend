import React from 'react';
import './projectcontent.css'
import jason from '../../../assets/jason.jpeg';
import coding from '../../../assets/coding.jpeg';

const ProjectContent = () => {
  return (
    <div className='projectbody'>
      <div className="project-grid-container">
        <div className="project-column1">
          <div className="project-grid-item project-grid-1">
            <h2>Mobile Tracking App</h2><br />
            <p className='projheadline'><span className='projphase'>Onboarding</span> Recruiting: <span className='projrecruiting'>Open</span> | Posted 6 days ago</p><br />
            <p className='projdesc'>
              Massa vitae tortor condimentum lacinia. Ut tortor pretium viverra suspendisse. Quisque non tellus orci ac auctor augue mauris augue neque. Etiam sit amet nisl purus in. Sit amet massa vitae tortor. Et ultrices neque ornare aenean. Congue quisque egestas diam in arcu cursus euismod quis viverra. Vel pretium lectus quam id leo in. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc.<br />
              Vel turpis nunc eget lorem dolor sed viverra ipsum nunc.Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Massa vitae tortor condimentum lacinia. Ut tortor pretium viverra suspendisse. Quisque non tellus orci ac auctor augue mauris augue neque.
              Vel turpis nunc eget lorem dolor sed viverra ipsum nunc.Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Massa vitae tortor condimentum lacinia. Ut tortor pretium viverra suspendisse. Quisque non tellus orci ac auctor augue mauris augue neque.
            </p><br />
            <p>Requirements
              <select id="select1" className='projselector'>
                <option value="">Software Engineer</option>
                <option value="">Marketing Manager</option>
                <option value="">Copywriter</option>
              </select></p>
            <ul>
              <li className='projreq'>Strong Understanding in mobile development</li>
              <li className='projreq'>Proficient in Flutter</li>
              <li className='projreq'>Good team player</li>
              <li className='projreq'>Able to commit for AY23</li>
            </ul><br />
            <div className='projtags'>
              <div className='projtag'><a href="/project" style={{color:'white'}}>Software Engineer</a></div>
              <div className='projtag'><a href="/project" style={{color:'white'}}>Flutter</a></div>
              <div className='projtag'><a href="/project" style={{color:'white'}}>Mobile App</a></div>
            </div>
            <p>About this Project</p>
            <div className='projabout'>
              <div className='projicons' ><i class="fa-solid fa-user-plus projicon" /> Open for Collaboration</div>
              <div className='projicons'><i class="fa-regular fa-clock projicon" style={{ color: '#09CE78' }} />Active 1 day ago</div>
              <div className='projicons'><i class="fa-regular fa-eye projicon" style={{ color: '#2897FF' }} />5 Views</div>
              <div className='projicons'><i class="fa-regular fa-heart projicon" style={{ color: '#E21D3C' }} />3 Likes</div>
            </div>
          </div>
          <div className="project-grid-item project-grid-2">
            <h2 className='grid-2-title'>Meet the team</h2>
            <hr />
            <div className='teammember'>
              <div className='teammember-column1'>
                <div className='membersImg'><img src={jason} alt="UIDesign" className='membersImg2'/></div>
              </div>
              <div className='teammember-column2'>
                <div>Jason Lim <span style={{fontSize:'0.9rem', fontWeight:'350'}}>(Project Owner)</span></div>
                <div>IEM Y3</div>
                <div className='teammemberdesc'>Quis ipsum suspendisse ultrices gravida dictum fusce. Ut eu sem integer vitae. A lacus vestibulum sed arcu non odio d lacus vestibulum sed arcu non odio odio d lacus vestibulum sed arcu non odio. </div>
                <div><a href="/project" className='teambtn'>View &gt;</a></div>
              </div>
            </div>
            <hr/>
          </div>
        </div>

        <div className="project-column2">
          <div className="project-grid-3">
              <img src={coding} alt="Profile" className='projectImg' />
          </div>
          <div className="project-grid-item project-grid-4">
            <h2 style={{fontWeight:'400'}}>About the Owner</h2><br />
            <h3 style={{ fontWeight: '400' }}>Jason Lim</h3>
            <p style={{ wordSpacing: '0.1rem' }}>IEM Y3</p><br />
            <p className='projdesc'>Ailisis magna etiam tempor orci eu lobortis elementum. Vel turpis nunc eget lorem dolor sed viverra ipsum nuncVel turpis nunc eget lorem dolor sed viverra ipsum nunc.Vel turpis nunc egetae tortor condimentum laciniauris augue neque.</p><br />
            <p>We are looking for ...</p>
            <ul className='ul-roles'>
              <li className='projroles'>Software Engineer</li>
              <li className='projroles'>Marketing Manager</li>
              <li className='projroles'>Copyrighter</li>
            </ul><br />
            <div className='projchat'>
              <p>Chat with Jason</p>
              <button className='projchatbtn'>Contact</button>
            </div>
          </div>
          <div className="project-grid-item project-grid-5">
            <h2 style={{ fontWeight: '400'}}>Similar Projects</h2><br />
            <div className='similarproj'>
              <p className='similarprojtitle'>Mobile App for Transport</p>
              <a href="/project" className='membtn'>View &gt;</a>
              <br />
              <div className='similarproj' style={{marginBottom:'1rem'}}>
                <p className='similarprojtitle'>Smart Android App</p>
                <a href="/project" className='membtn'>View &gt;</a>
              </div>
              <div className='similarproj' style={{paddingBottom:'0'}}>
                <p className='similarprojtitle'>Digital Nation App</p>
                <a href="/project" className='membtn'>View &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
