import React from 'react';
import {AiOutlineProject} from 'react-icons/ai';
import {IconContext} from 'react-icons';
import './project.css';

class Project extends React.Component {
    render(){
        return(
            <div className="project">
                <div className='image-container'>
                    <img src={this.props.project.src} alt={`${this.props.project.title} Project`}/>
                </div>
                <h3 className='project-title'>{this.props.project.title}</h3>
                <div className='project-info'>
                    <div className='project-languages'>
                        <p id='languages-title'>Languages</p>
                        <p>{this.props.project.primary}</p>
                        <p>{this.props.project.secondary}</p>
                    </div>
                    <div className='project-date'>
                        <p id='date-title'>Date</p>
                        <p>{this.props.project.year}</p>
                    </div>
                </div>
            </div>
        );
    }
};

Project.defaultProps = {src: <IconContext.Provider value={{color: 'whitesmoke', size: '48%'}}><AiOutlineProject/></IconContext.Provider>}

export default Project;