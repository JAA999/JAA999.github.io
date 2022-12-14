import React from 'react';
import { IconContext } from 'react-icons';
import {BsSpotify} from 'react-icons/bs';
import './about.css';

const About = () => {
    return(
        <div className='about-page'>
            <div className='about-overview'>
                <h1 className='overview-title about-titles'>About</h1>
                <div className='overview-content'>
                    <img src='/images/profileImg.JPEG' className='overview-image'/>
                    <p className='overview-text'>A few years ago I took my first programming class in high school, and despite the
                    struggle in class, I developed a deep interest in programming, specifically front-end development.
                    Today, my main goal is to develop my own app and from it create a company. 
                    </p>
                </div>
            </div>
            <div className='about-hobbies'>
                <h1 className='hobbies-title about-titles'>Hobbies</h1>
                <div className='hobbies-content'>
                    <p className='hobbies-text'>In my free time I love to play videogames, read, workout, and listen to music.
                        My favorite book category is sci-fi along with self-improvement books, 
                        but when I am not reading I spent most of my time listening to music. Specifically, Rod Wave, Kid Cudi, and Post Malone.
                    </p>
                    <img src='/images/graduation.JPG' className='hobbies-image'/>
                </div>
            </div>
            <div className='about-supplement'>
                <div className='supplement-links'>
                    <h1 className='music-title about-titles'>Spotify Profile</h1>
                    <a href='https://open.spotify.com/user/r0ggn5qjunecj8iwo69t5y5cz?si=43ba300f64764e89' className='music-link'>
                        <IconContext.Provider value={{className: 'spotify-icon', size: '48%'}}>
                            <BsSpotify/>
                        </IconContext.Provider>
                    </a>
                </div>
                <div className='about-divider'></div>
                <div className='supplement-read'>
                    <h1 className='read-title about-titles'>Current Read</h1>
                    <p className='current-read'>Negotiating the Nonnegotiable: How to Resolve Your Most
                        Emotionally Charged Conflicts - <b>Daniel Shapiro</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;