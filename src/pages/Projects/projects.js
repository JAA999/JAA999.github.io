import React from 'react';
import './projects.css';
import ProjectsList from '../../components/Projects Page/Projects List/projectsList';
{/*import {IconContext} from 'react-icons';
import {BiSearch, BiFilter} from 'react-icons/bi';
import { AiOutlineProject } from 'react-icons/ai';*/}


const Projects = () => {
    return (
        <div className='projects-page'>
            {/*<IconContext.Provider value={{className: 'icons', size: '2em', color: 'whitesmoke'}}>
              <BiFilter/>
              <BiSearch/>
            </IconContext.Provider>*/}
            <ProjectsList projects={projects}/> 
        </div>
    );
};

export const createProject = (imageSrc, title, primaryLang, secondaryLang, year, description, link) => {
  return{
    src: imageSrc,
    title,
    primary: primaryLang,
    secondary: secondaryLang,
    year,
    description,
    link
  }
};

const carbonv1 = createProject('/images/cfrlogo.png', 'Carbon Reduction v1', 'HTML', 'CSS', 2021, 'Website that displays tips and tricks to reduce your carbon footprint.', 'https://github.com/JAA999/CarbonFootprintReduction');
const carbonv2 = createProject('/images/cfrlogo.png', 'Carbon Reduction v2', 'HTML', 'CSS', 2022, 'Website that displays tips and tricks to reduce your carbon footprint. Consists of multiple pages.', 'https://github.com/JAA999/CarbonFootprintReduction-v2.0');
const portfolio = createProject('/images/Logo.png', 'Porfolio Website', 'JSX', 'CSS', 2022, 'This website, created using React.js.', 'https://github.com/JAA999/arteaga-portfolio');

export const projects = [carbonv1, carbonv2, portfolio];


export default Projects;