import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './index.css'

function Contact() {
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal({
            duration: 1000, // Animation duration in milliseconds
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '30px', // Animation distance
        });

        sr.reveal('.contact > h2', {
            delay: 300, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'top', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.contact > form', {
            delay: 500, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.input-box', {
            delay: 200, // Delay in milliseconds
            interval: 400, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.contact > form > textarea', {
            delay: 600, // Delay in milliseconds
            interval: 400, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.contact > form > .btn', {
            delay: 600, // Delay in milliseconds
            interval: 400, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
    }, []);

    return <div>
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Enter Your Full Name" />
                    <input type="email" placeholder="Enter Email Address" />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Enter Mobile Number" />
                    <input type="text" placeholder="Email Subject" />
                </div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter Your MEssage"
                ></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    </div>
}
export default Contact;
