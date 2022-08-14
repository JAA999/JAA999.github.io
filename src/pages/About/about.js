import React from 'react';
import './about.css';

const About = () => {
    return(
        <div className='about-page'>
            <div className='header'>
                <img src='./developing.jpg' className='about-page-image'/>
                <div className='about-page-intro'>
                    <h1 className='about-page-title'>About</h1>
                    <p>A few years ago I took my first programming class in high school, and despite the
                        struggle in class, I developed a deep interest in programming.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;