import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons'

import MultiHeadline from './MultiHeadline'

import './index.css'
import Profile from './profile.png'

function Cv() {
  return <div>
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <div id="menu-btn"><Icon.List /></div>
      <nav className="navbar">
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    <section id="home" className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>KARAN KUMAR</h1>
        <MultiHeadline />
        <div className="social-media">
          <a href="#"><Icon.Instagram /></a>
          <a href="#"><Icon.Github /></a>
          <a href="#"><Icon.Twitter /></a>
          <a href="#"><Icon.Linkedin /></a>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={Profile} alt="Profile Image" />
      </div>
    </section>

  </div>
}
ReactDOM.render(<Cv />, document.querySelector('#root'));