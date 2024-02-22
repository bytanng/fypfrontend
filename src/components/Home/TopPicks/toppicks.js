import React from 'react'
import './toppicks.css';
import portfolio from '../../../assets/portfolio.jpg';
import pizza from '../../../assets/pizza.jpg';
import hive from '../../../assets/hive.jpg';
import trackingapp from '../../../assets/tracking-app.jpg';
import { Element } from 'react-scroll';

export const TopPicks = () => {

  return (
    <Element name="toppicks">
      <section id="toppicks">
        <span className='toppicksTitle'>Top Picks for You</span>
        <span className='toppicksDescription'>Curated picks to match your interests</span>
        <div className='toppicksImgs'>
          <div className='toppicksImgContainer'>
            <img src={pizza} alt="toppicks1" className='toppicksImg' />
            <div className='imgText'>
              <h4 className='toppicksImgTitle'>Pizza Catering Service</h4><br/>
              <p class="toppicksImgDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='toppicksImgContainer'>
            <img src={hive} alt="toppicks2" className='toppicksImg' />
            <div className='imgText'>
              <h4 className='toppicksImgTitle'>App for Student activities</h4><br/>
              <p class="toppicksImgDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              {/* <a href='https://github.com/bytanng/fypwebapp' target='_blank' rel='noopener noreferrer'><button type="button" className='toppicksBtn'>Github</button></a> */}
            </div>
          </div>
          <div className='toppicksImgContainer'>
            <img src={portfolio} alt="toppicks3" className='toppicksImg' />
            <div className='imgText'>
              <h4 className='toppicksImgTitle'>Portfolio App</h4><br/>
              <p class="toppicksImgDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='toppicksImgContainer'>
            <img src={trackingapp} alt="toppicks3" className='toppicksImg' />
            <div className='imgText'>
              <h4 className='toppicksImgTitle'>Tracking App</h4><br/>
              <p class="toppicksImgDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        {/* <button className='toppicksBtn'>See More</button> */}
      </section>
    </Element>
  )
}

export default TopPicks;