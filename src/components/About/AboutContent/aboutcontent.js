import React from 'react';
import './aboutcontent.css';
import bg from '../../../assets/hive.webp';
import ie from '../../../assets/ie.jpeg';
import students from '../../../assets/students.webp';

const AboutContent = () => {
  return (
    <div>
      <section id="aboutImg">
        <div className="aboutImgText">
          <span className='aboutTitle'>About Us</span>
          <img src={bg} className="bg" alt="Profile" />
        </div>
      </section>
      <section id="aboutDesc">
        <div className="grid-container">
          <div className="grid-item grid-1">
            <img src={students} className='img' alt=""/>
          </div>
          <div className="grid-item grid-2">
            <h2>Lorem ipsum dolor sit amet</h2><br/>
            <p className='textDesc'>Massa vitae tortor condimentum lacinia. Ut tortor pretium viverra suspendisse. Quisque non tellus orci ac auctor augue mauris augue neque. Etiam sit amet nisl purus in. Sit amet massa vitae tortor. Et ultrices neque ornare aenean. Congue quisque egestas diam in arcu cursus euismod quis viverra. Vel pretium lectus quam id leo in. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. <br/><br/> Vel turpis nunc eget lorem dolor sed viverra ipsum nunc.Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Massa vitae tortor condimentum lacinia. Ut tortor pretium viverra suspendisse. Quisque non tellus orci ac auctor augue mauris augue neque. </p>
          </div>
          <div className="grid-item grid-3">
            <h2>Ultrices tincidunt arcu non</h2><br/>
            <p className='textDesc'>Quis ipsum suspendisse ultrices gravida dictum fusce. Ut eu sem integer vitae. A lacus vestibulum sed arcu non odio. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Condimentum lacinia quis vel eros donec. Auctor augue mauris augue neque gravida in. Blandit turpis cursus in hac habitasse. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Condimentum lacinia quis vel eros donec.<br/><br/>Quis ipsum suspendisse ultrices gravida dictum fusce. Ut eu sem integer vitae. A lacus vestibulum sed arcu non odio. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Condimentum lacinia quis vel eros donec. Auctor augue mauris augue neque gravida in. Blandit turpis cursus in hac habitasse.</p>
          </div>
          <div className="grid-item grid-4">
            <img src={ie} className='img' alt=''/>
          </div>
          <div className="grid-item full-width grid-5">
            <h2>Libero enim sed faucibus</h2><br/>
            <p className='textDesc'>Quis ipsum suspendisse ultrices gravida dictum fusce. Ut eu sem integer vitae. A lacus vestibulum sed arcu non odio. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Condimentum lacinia quis vel eros donec. Auctor augue mauris augue neque gravida in. Blandit turpis cursus in hac habitasse. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Condimentum lacinia quis vel eros donec. Id consectetur purus ut faucibus pulvinar. Volutpat consequat mauris nunc congue nisi. Habitant morbi tristique senectus et. Libero enim sed faucibus turpis in. Malesuada proin libero nunc consequat interdum. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutContent;