// import React from "react";
import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as  Icon from 'react-bootstrap-icons'

import MultiHeadline from './MultiHeadline'


import './index.css'
import Profile from './images/profile.png'

import Resume from './MyResume.pdf'

function Home() {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      duration: 1000, 
      origin: 'bottom', 
      distance: '30px', 
    });

    // Text Animation 
    sr.reveal('.home-content > h3 , .home-content > h1', {
      delay: 100, 
      interval: 300, 
      origin: 'left', 
      distance: '300px', 
    });

    // social media div animation 
    sr.reveal('.social-media', {
      delay: 300, 
      interval: 200, 
      origin: 'bottom', 
      distance: '300px', 
    });
    // social links Animation 
    sr.reveal('.social-media a', {
      delay: 300, 
      interval: 200, 
      origin: 'bottom', 
      distance: '300px', 
    });
    // Download button Animation 
    sr.reveal('#button', {
      delay: 1000, 
      interval: 600, 
      origin: 'left', 
      distance: '300px', 
    });

    // home image Animation 
    sr.reveal('.home-img', {
      delay: 300, 
      interval: 1000, 
      origin: 'right', 
      distance: '300px', 
    });
  }, []);

  return <div>
    <section id="home" className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>KARAN KUMAR</h1>
        <MultiHeadline />
        <div className="social-media">
          <a href="https://www.instagram.com/ds_alpha07/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><Icon.Instagram /></a>
          <a href="https://github.com/KaranKumar05" target="_blank"><Icon.Github /></a>
          <a href="https://twitter.com/DSALPHA_07?t=oRsQ8HqRUrddTFpEKtJ6GQ&s=09" target="_blank"><Icon.Twitter /></a>
          <a href="https://www.linkedin.com/in/karan-kumar-280464266" target="_blank"><Icon.Linkedin /></a>
        </div>
        <div id='button'>
          <a href={Resume} className="btn" target='_blank'>Download CV</a>
        </div>
      </div>
      <div className="home-img">
        <img width={450} height={450} src={Profile} alt="Profile Image" />
      </div>
    </section>

  </div>
}
// ReactDOM.render(<Cv />, document.querySelector('#root'));
export default Home;
