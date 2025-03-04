import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import frontendImage from '../../../../public/programming-background-collage.jpg'; // Import your image

import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-primary">Your Name</span>
                        </h1>
                        <p className="hero-subtitle">
                            A passionate Frontend Developer dedicated to building beautiful and functional web applications.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary me-3">
                                View My Work
                            </a>
                            <a href="#contact" className="btn btn-outline-light">
                                Contact Me
                            </a>
                        </div>
                        <div className="social-icons mt-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            src={frontendImage}
                            alt="Your Name"
                            className="hero-img img-fluid rounded-circle"
                        />
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="arrow"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;