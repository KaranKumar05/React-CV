import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as  Icon from 'react-bootstrap-icons'

import './index.css'

// Images 
import FlappyBird from './images/Flappy Bird.png'
import Calculator from './images/calculator.png'
import Trello from './images/trello app.png'
import PaintApp from './images/paint app.png'
import TicTacTeo from './images/tic tac teo.png'
import WeatherApp from './images/weather app.jpg'

function Portfolio() {
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal({
            duration: 1000, // Animation duration in milliseconds
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '30px', // Animation distance
        });

        sr.reveal('.portfolio > h2', {
            delay: 300, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'top', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.portfolio-container', {
            delay: 500, // Delay in milliseconds
            interval: 500, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
        sr.reveal('.portfolio-box', {
            delay: 200, // Delay in milliseconds
            interval: 400, // Delay between each link
            origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
            distance: '100px', // Animation distance
        });
    }, []);

    return <div>
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Project</span></h2>
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={FlappyBird} alt="" />
                    <div className="portfolio-layer">
                        <h4>Flappy Bird</h4>
                        <p>
                            Simple yet challenging game where players navigate a small bird
                            through a series of pipes.
                        </p>
                        <a href="#"><Icon.Link45deg /></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={PaintApp} alt="" />
                    <div className="portfolio-layer">
                        <h4>Paint App</h4>
                        <p>
                            Simple yet challenging game where players navigate a small bird
                            through a series of pipes.
                        </p>
                        <a href="#"><Icon.Link45deg /></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={TicTacTeo} alt="" />
                    <div className="portfolio-layer">
                        <h4>Tic Tac Teo</h4>
                        <p>
                            Simple yet challenging game where players navigate a small bird
                            through a series of pipes.
                        </p>
                        <a href="#"><Icon.Link45deg /></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={Calculator} alt="" />
                    <div className="portfolio-layer">
                        <h4>Calculator</h4>
                        <p>
                            Simple yet challenging game where players navigate a small bird
                            through a series of pipes.
                        </p>
                        <a href="#"><Icon.Link45deg /></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={Trello} alt="" />
                    <div className="portfolio-layer">
                        <h4>Trello App</h4>
                        <p>
                            Simple yet challenging game where players navigate a small bird
                            through a series of pipes.
                        </p>
                        <a href="#"><Icon.Link45deg /></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={WeatherApp} alt="" />
                    <div className="portfolio-layer">
                        <h4>Weather App</h4>
                        <p>
                            Simple yet challenging game where players navigate a small bird
                            through a series of pipes.
                        </p>
                        <a href="#"><Icon.Link45deg /></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
export default Portfolio;
