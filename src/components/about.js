import React from "react";

import './index.css'
import Profile from './images/profile.png'

function About() {
    return <div>
        <section class="about" id="about">
            <div class="about-img">
                <img src={Profile} alt="" />
            </div>
            <div class="about-content">
                <h2 class="heading">About <span>Me</span></h2>
                <h3>Front End Developer!</h3>
                <p>
                    A web developer builds and maintains websites using coding languages like HTML, CSS, and JavaScript. They ensure websites are functional and user-friendly, collaborating with designers and clients to meet project goals. Web developers may specialize in front-end, back-end, or full-stack development. Their work is essential for creating a seamless online experience.
                </p>
                <a href="#" class="btn">Read More</a>
            </div>
        </section>
    </div>
}
export default About;


