import React from 'react';
import {AiOutlineProject} from 'react-icons/ai';
import {IconContext} from 'react-icons';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

class NewProject extends React.Component {
    render(){
        if (this.props.src){
            return(
                <div className="project">
                    <img src={this.props.src} width='48%' height='48%'/>
                    <p><b>{this.props.title}</b></p>
                    <p>Primary Language: <b>{this.props.primaryLang}</b></p>
                    <p>{this.props.year}</p>
                </div>
            );
        }else{
            return(
                <div className="project">
                    <IconContext.Provider value={{color: 'white', className: 'project-icons', size:'48%'}}>
                        <AiOutlineProject/>
                        <p><b>{this.props.title}</b></p>
                        <p>Primary Language: <b>{this.props.primaryLang}</b></p>
                        <p>{this.props.year}</p>
                    </IconContext.Provider>
                </div>
            );
        }
    }
};


export default NewProject;