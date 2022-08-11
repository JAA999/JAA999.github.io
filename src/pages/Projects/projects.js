import React from 'react';
import './projects.css';
import {BsArrowRightShort} from 'react-icons/bs';
import {IconContext} from 'react-icons';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div className='app-perform'>
              <IconContext.Provider value={{color: 'white', className: 'arrows', size:'2em'}}>
                <BsArrowRightShort/>
                <br></br>
                <p>Perform</p>
                <br></br>
                <BsArrowRightShort/>
              </IconContext.Provider>
            </div>
        </div>
    );
};

export default Projects;