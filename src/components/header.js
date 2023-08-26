import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as  Icon from 'react-bootstrap-icons'

import './index.css'

function Header() {
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal({
            duration: 1000,
            origin: 'bottom',
            distance: '30px',
        });
        sr.reveal('.logo', {
            delay: 500,
            interval: 500,
            origin: 'left',
            distance: '100px',
        });
        sr.reveal('#menu-btn', {
            delay: 100,
            interval: 500,
            origin: 'top',
            distance: '100px',
        });
        sr.reveal('.navbar', {
            delay: 300,
            interval: 200,
            origin: 'bottom',
            distance: '200px',
        });
        sr.reveal('.navbar a', {
            delay: 200,
            interval: 200,
            origin: 'bottom',
            distance: '200px',
        });
    }, []);

    return <div>
        <header className="header">
            <a href="#" className="logo">Portfolio.</a>
            <div id="menu-btn"><Icon.List /></div>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#service">Service</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    </div>
}
export default Header;
