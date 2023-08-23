import React from "react";

import './index.css'

function Contact() {
    return <div>
        <section class="contact" id="contact">
            <h2 class="heading">Contact <span>Me!</span></h2>
            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Enter Your Full Name" />
                    <input type="email" placeholder="Enter Email Address" />
                </div>
                <div class="input-box">
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
                <input type="submit" value="Send Message" class="btn" />
            </form>
        </section>
    </div>
}
export default Contact;
