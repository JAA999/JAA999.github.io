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
                <h3>{this.props.project.title}</h3>
                <div className='languages'>
                    <p>Primary Language: <b>{this.props.project.primary}</b></p>
                    <p>Secondary Language: <b>{this.props.project.secondary}</b></p>
                </div>
                <p>Created In: {this.props.project.year}</p>
            </div>
        );
    }
};

Project.defaultProps = {
    src: <IconContext.Provider value={{color: 'whitesmoke', size: '48%'}}><AiOutlineProject/></IconContext.Provider>
}



export default Project;