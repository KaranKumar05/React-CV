import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './index.css'
import Profile from './images/profile.png'

function About() {

    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal({
            duration: 1000, // Animation duration in milliseconds
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '30px', // Animation distance
        });

        sr.reveal('.about-img', {
            delay: 300, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'left', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '300px', // Animation distance
        });
        sr.reveal('.about-content h3, .about-content h2', {
            delay: 500, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'top', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '50px', // Animation distance
        });
        sr.reveal('.about-content p', {
            delay: 500, // Delay in milliseconds
            interval: 600, // Delay between each link
            origin: 'right', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '200px', // Animation distance
        });
        sr.reveal('#button', {
            delay: 500, // Delay in milliseconds
            interval: 600, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
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


