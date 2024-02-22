import React from 'react'
import './intro.css';
import bg from '../../../assets/bg.jpeg'
import { Link as RouterLink } from 'react-router-dom'

const Intro = () => {

  return (
    <div>
      <section id="introBar">
        <div className="introBarContent">
          <span className='introBarText'><br />Ready to turn your ideas<br /> into reality ?</span>
          <p className='introBarPara'>
            Start your journey
            <RouterLink to='/project'>
              <button className='introBarBtn'>
                Here
              </button>
            </RouterLink>
          </p>
        </div>
      </section>

      <section id="intro">
        <div className="introContent">
          <span className='hello'>Featured</span>
          <span className='introName'>Sensor Optimisation</span>
          <p className='introPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            <br />
            <br />
            Skillsets: HTML, CSS, Javascript
          </p>
          <div id="introBtns">
            <RouterLink to='/project' className='linkBtn'><button className='introBtn'>View Project</button></RouterLink>
          </div>
          <img src={bg} className="bg" alt="Profile" />
        </div>
      </section>
    </div>
  )
}
export default Intro;