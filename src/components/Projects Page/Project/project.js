import React from 'react';
import {AiOutlineProject} from 'react-icons/ai';
import {IconContext} from 'react-icons';
import './project.css';

class Project extends React.Component {
    render(){
        if(this.props.project.src){
            return(
                <div className="project">
                    <div className='project-image'>
                        <img src={this.props.project.src} alt={`${this.props.project.title} Project`}/>
                    </div>
                    <h3 className='project-title'>{this.props.project.title}</h3>
                    <div className='project-info'>
                        <div className='project-languages'>
                            <p id='languages-title'>Languages</p>
                            <p>{this.props.project.primary}</p>
                            <p>{this.props.project.secondary}</p>
                        </div>
                        <div className='project-divider'></div>
                        <div className='project-date'>
                            <p id='date-title'>Date</p>
                            <p>{this.props.project.year}</p>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p>{this.props.project.description ? this.props.project.description : 'Description Not Yet Available, Check Back Later'}</p>
                    </div>
                    <div className={this.props.project.link ? 'project-link' : 'project-no-link'}>
                        <a href={this.props.project.link}>{this.props.project.link ? 'To Github' : 'Project Link Not Available'}</a>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="project">
                    <div className='project-image'>
                        <IconContext.Provider value={{color: 'whitesmoke', size: '50%'}}><AiOutlineProject/></IconContext.Provider>
                    </div>
                    <h3 className='project-title'>{this.props.project.title}</h3>
                    <div className='project-info'>
                        <div className='project-languages'>
                            <p id='languages-title'>Languages</p>
                            <p>{this.props.project.primary}</p>
                            <p>{this.props.project.secondary}</p>
                        </div>
                        <div className='project-divider'></div>
                        <div className='project-date'>
                            <p id='date-title'>Date</p>
                            <p>{this.props.project.year}</p>
                        </div>
                    </div>
                    <div className='project-description'>
                        <p>{this.props.project.description ? this.props.project.description : 'Description Not Yet Available, Check Back Later'}</p>
                    </div>
                    <div className={this.props.project.link ? 'project-link' : 'project-no-link'}>
                        <a href={this.props.project.link}>{this.props.project.link ? 'To Github' : 'Project Link Not Available'}</a>
                    </div>
                </div>
            );
        }
    }
};

export default Project;