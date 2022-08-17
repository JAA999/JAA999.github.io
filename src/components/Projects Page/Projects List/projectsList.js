import React from 'react';
import './projectList.css';
import Project from '../Project/project';

class ProjectsList extends React.Component{
    render(){
        return(
            <div className='projectsList'>
                {this.props.projects.map(project => {
                    return <Project project={project}/>
                })}
            </div>
        );
    };
}

export default ProjectsList;