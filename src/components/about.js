import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './index.css'

import Profile from './images/profile.png'

function About() {

    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal({
            duration: 1000, 
            origin: 'bottom', 
            distance: '30px', 
        });

        sr.reveal('.about-img', {
            delay: 300, 
            interval: 500, 
            origin: 'left', 
            distance: '300px', 
        });
        sr.reveal('.about-content h3, .about-content h2', {
            delay: 500, 
            interval: 500, 
            origin: 'top', 
            distance: '50px', 
        });
        sr.reveal('.about-content p', {
            delay: 500, 
            interval: 600, 
            origin: 'left', 
            distance: '200px', 
        });
        sr.reveal('#button', {
            delay: 500, 
            interval: 600, 
            origin: 'bottom', 
            distance: '100px', 
        });
    }, []);
    return <div>
        <section className="about" id="about">
            <div className="about-img">
                <img width={450} height={450} src={Profile} alt="" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Front End Developer!</h3>
                <p>
                    Dedicated and creative Front-End Developer with a passion for crafting responsive, user-friendly web experiences. Leveraging a strong foundation in HTML, CSS, and JavaScript, I bring a keen eye for design and a commitment to delivering pixel-perfect websites. Proficient in modern front-end technologies, I excel in turning concepts into functional, visually appealing, and highly performant websites. Collaborative by nature, I thrive in cross-functional teams and am always eager to stay ahead of the latest industry trends and best practices to deliver cutting-edge solutions.
                </p>
                <div id='button'>
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    </div>
}
export default About;


