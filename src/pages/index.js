import React from 'react';
import './index.css';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsLaptopFill, BsArrowRightShort} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import NewProject from '../components/newproject';

const Home = () => {

    

    return(
        <div className="App">

            <header className="app-header view">
                <p className="header-title"><p className='title' id='title-first'>Hello,</p> My Name Is Joseph Arteaga, And I Am a CS Major At UT Austin.</p>
                <IconContext.Provider value={{className:'logo', size: '10em'}}>
                  <BsLaptopFill/>
                </IconContext.Provider>
            </header>

            <IconContext.Provider value={{color: '#156DC6', className: 'social-icons', size:'2em'}}>
              <a href='https://www.instagram.com/josephart999/' target='_blank'><AiFillInstagram id='instagram'/></a>
              <a href='https://www.linkedin.com/in/joseph-arteaga-597282248/' target='_blank'><AiFillLinkedin id='linkedin'/></a>
              <a href='https://github.com/JAA999' target='_blank'><AiFillGithub id='github'/></a>
            </IconContext.Provider>

            <div className='app-perform'>
              <IconContext.Provider value={{color: 'white', className: 'arrows', size:'2em'}}>
                <BsArrowRightShort/>
                <br></br>
                <p>Perform</p>
                <br></br>
                <BsArrowRightShort/>
              </IconContext.Provider>
            </div>

            <div className='app-about view'>
                <p className='about-title title'>About Me</p>
                <div className='about-content'>
                  <div className='about-content-cont'>
                    <p className='about-bio'>Having come from a family of engineers, from a young age I would develop an interest in the STEM field.
                        Not wanting to deal with the demand of physical labor, and seeing many "cool" representations of hacking in movies, I began to practice programming.
                        In the past few years I have worked with Python, JS, Java, and mobile and web development, but I am now dedicating my time to python and mobile development.
                        By perfecting my skills in both of these fields I hope to create my own app with machine learning at its core to help people lead better lives.
                    </p>
                  </div>
                  <div className='about-image-cont'>
                    <img className='about-image' src='/josephart.jpg' alt="Joseph Arteaga" width='170px' height='400px'/>
                  </div>
                </div>
            </div>

            <div className="app-skills view">
                <h1 className='skills-title title'>Skills</h1>
                <div className='skills-content'>
                  <ul className='skills-list'>
                      <li className='skills-list'>Python</li>
                      <li className='skills-list'>React</li>
                      <li className='skills-list'>HTML/CSS</li>
                      <li className='skills-list'>JavaScript</li>
                  </ul>
                  <ul className='skills-experience'>
                      <li>{updateDate(python, 2)} Years</li>
                      <li>{updateDate(react, .5)} Years</li>
                      <li>{updateDate(html, 1)} Year</li>
                      <li>{updateDate(js, 1)} Year</li>
                  </ul>
                </div>
            </div>

            <div className='app-projects'>
                <div className="projects-header">
                    <p className='projects-title title'>Featured Projects</p>
                    <div className='three-projects'>
                      <NewProject title='Carbon Footprint Reduction' year='2022' primaryLang='HTML'/>
                      <NewProject title='Portfolio Website' year='2022' primaryLang='JSX'/>
                      <NewProject title='Discord Bot' year='2021' primaryLang='Python'/>
                    </div>
                </div>
            </div>

            <div className='app-footer'>

            </div>

        </div>
    );
};

const today = new Date();
const dd = String(today.getDate()+1).padStart(2, '0');
const mm = String(today.getMonth()+1).padStart(2, '0');
const python = new Date(2020, 10, 12);
const js = new Date(2021, 7, 25);
const html = new Date(2021, 12, 11);
const react = new Date(2022, 7, 2);
function updateDate(skill, currentPeriod){
  if(dd === String(skill.getDate()+1).padStart(2, '0') && mm === String(skill.getMonth()).padStart(2, '0')){
    return currentPeriod += 1;
  }else{
    return currentPeriod;
  }
};

export default Home;