import React from 'react';
import './index.css';
import {BsLaptopFill} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import NewProject from '../../components/newproject';

const Home = () => {

    

    return(
        <div className="App">

            <header className="app-header content horizontal-content">
                <p><p className='title' id='title-first'>Hello,</p> My Name Is Joseph Arteaga, And I Am a CS Major At UT Austin.</p>
                <IconContext.Provider value={{className:'logo', size: '10em'}}>
                  <BsLaptopFill/>
                </IconContext.Provider>
            </header>

            <div className='app-about content vertical-content'>
                <p className='title'>About Me</p>
                <div className='about-container horizontal-content'>
                  <div className='about-content'>
                    <p className='about-bio'>Having come from a family of engineers, from a young age I would develop an interest in the STEM field.
                      Not wanting to deal with the demand of physical labor, and seeing many "cool" representations of hacking in movies, I began to practice programming.
                      In the past few years I have worked with Python, JS, Java, and mobile and web development, but I am now dedicating my time to python and mobile development.
                      By perfecting my skills in both of these fields I hope to create my own app with machine learning at its core to help people lead better lives.
                    </p>
                  </div>
                  <div className='about-content'>
                    <img className='about-image' src='/josephart.JPEG' alt="Joseph Arteaga" width='300px' height='400px'/>
                  </div>
                </div>
            </div>

            <div className="app-skills content horizontal-content">
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

            <div className='app-projects content vertical-content'>
              <p className='projects-title title'>Featured Projects</p>
              <div className='project-container horizontal-content'>
                <div className='project'>
                  <NewProject title='Carbon Reduction' year='2022' primaryLang='HTML' src='/cfrlogo.png'/>
                </div>
                <div className='project'>
                  <NewProject title='Portfolio Website' year='2022' primaryLang='JSX'/>
                </div>
                <div className='project'>
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