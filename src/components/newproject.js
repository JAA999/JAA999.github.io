import React from 'react';
import {AiOutlineProject} from 'react-icons/ai';
import {IconContext} from 'react-icons';

class NewProject extends React.Component {
    render(){
        if (this.props.src){
            return(
                <div className="project">
                    <img src={this.props.src} width='50px' height='50px'/>
                    <p>{this.props.title}</p>
                    <p>Primary Language: {this.props.primaryLang}</p>
                    <p>{this.props.year}</p>
                </div>
            );
        }else{
            return(
                <div className="project">
                    <IconContext.Provider value={{color: 'white', className: 'project-icons', size:'5em'}}>
                        <AiOutlineProject/>
                        <p>{this.props.title}</p>
                        <p>Primary Language: {this.props.primaryLang}</p>
                        <p>{this.props.year}</p>
                    </IconContext.Provider>
                </div>
            );
        }
    }
};


export default NewProject;