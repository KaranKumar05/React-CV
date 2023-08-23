import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as  Icon from 'react-bootstrap-icons'

import './index.css'

function Services() {
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal({
            duration: 1000, // Animation duration in milliseconds
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '30px', // Animation distance
        });

        sr.reveal('.services > h2', {
            delay: 300, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'top', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.services-container', {
            delay: 500, // Delay in milliseconds
            interval: 600, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.service-box', {
            delay: 300, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
    }, []);

    return <div>
        <section className="services" id="service">
            <h2 className="heading">Our <span>Service</span></h2>
            <div className="services-container">
                <div className="service-box">
                    <span><Icon.CodeSlash /></span>
                    <h3>Web Development</h3>
                    <p>
                        I provide professional, customized web development services to help
                        you establish a strong online presence. I specialize in creating
                        visually appealing, user-friendly websites tailored to your needs.
                    </p>
                    <a href="#" className="btn">Read More</a>
                </div>
                <div className="service-box">
                    <span><Icon.CodeSlash /></span>
                    <h3>Web Development</h3>
                    <p>
                        I provide professional, customized web development services to help
                        you establish a strong online presence. I specialize in creating
                        visually appealing, user-friendly websites tailored to your needs.
                    </p>
                    <a href="#" className="btn">Read More</a>
                </div>
                <div className="service-box">
                    <span><Icon.CodeSlash /></span>
                    <h3>Web Development</h3>
                    <p>
                        I provide professional, customized web development services to help
                        you establish a strong online presence. I specialize in creating
                        visually appealing, user-friendly websites tailored to your needs.
                    </p>
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    </div>
}
export default Services;


