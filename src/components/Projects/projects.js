import React from 'react'
import './projects.css';
import portfolio from '../../assets/portfolio.jpg';
import pizza from '../../assets/pizza.jpg';
import hive from '../../assets/hive.jpg';

export const Projects = () => {
  return (
    <section id="projects">
        <span className='projectsTitle'>My Projects</span>
        <span className='projectsDescription'>Browse my recent projects.</span>
        <div className='projectsImgs'>
          <div className='projectsImgContainer'>
            <img src={pizza} alt="projects1" className='projectsImg'/>
            <span className='imgText'>
              <h4>Pizza Catering Service</h4>
              <a href='https://slicemeup.000webhostapp.com/index.php' target='_blank' rel='noopener noreferrer'><button type="button" className='projectsBtn' style={{backgroundColor:'#15f593'}}>Live Site</button></a>
              <a href='https://github.com/bytanng/pizza-app' target='_blank' rel='noopener noreferrer'><button type="button" className='projectsBtn'>Github</button></a>
            </span>
          </div>
          <div className='projectsImgContainer'>
            <img src={hive} alt="projects2" className='projectsImg'/>
            <span className='imgText'>
              <h4>FYP - Web Application for student related activities</h4>
              <a href='https://github.com/bytanng/fypwebapp' target='_blank' rel='noopener noreferrer'><button type="button" className='projectsBtn'>Github</button></a>
            </span>
          </div>
          <div className='projectsImgContainer'>
            <img src={portfolio} alt="projects3" className='projectsImg'/>
            <span className='imgText'>
              <h4>My projects</h4>
              <a href='https://github.com/bytanng/fypwebapp' target='_blank' rel='noopener noreferrer'><button type="button" className='projectsBtn'>Github</button></a>
            </span>
          </div>
        </div>
        {/* <button className='projectsBtn'>See More</button> */}
    </section>
  )
}

export default Projects;