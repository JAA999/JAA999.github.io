import React from 'react';
import './projects.css';
import {BsArrowRightShort} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import ProjectsList from '../../components/Projects Page/Projects List/projectsList';


const Projects = () => {
    return (
        <div className='projects-page'>
            <ProjectsList projects={projects}/> 
        </div>
    );
};

export const createProject = (imageSrc, title, primaryLang, secondaryLang, year, description) => {
  return{
    src: imageSrc,
    title,
    primary: primaryLang,
    secondary: secondaryLang,
    year,
    description
  }
};

const carbon = createProject('./cfrlogo.png', 'Carbon Reduction', 'HTML', 'CSS', 2022, '');
const discord = createProject('./cfrlogo.png', 'Discord Bot', 'Python', 'N/A', 2021, '');
const portfolio = createProject('./cfrlogo.png', 'Porfolio Website', 'JSX', 'CSS', 2022, '');

const projects = [carbon, discord, portfolio];


export default Projects;