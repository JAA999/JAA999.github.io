import React from 'react';
import './contact.css';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {IconContext} from 'react-icons';

const Contact = () => {
    return (
        <div className='Contact'>
            <div className='contact-content horizontal-content'>
                <div className='email'>
                    <p className='section-titles'>Email</p>
                    <a href='mailto:jarteaga999@gmail.com' className='email-link'>jarteaga999@icloud.com</a>
                </div>
                <div className='separator'></div>
                <div className='social-media'>
                    <p className='section-titles'>Socials</p>
                    <div className='icons'>
                        <IconContext.Provider value={{color: 'whitesmoke', className: 'social-icons', size:'2em'}}>
                            <a href='https://www.instagram.com/josephart999/' target='_blank'><AiFillInstagram id='instagram'/></a>
                            <a href='https://www.linkedin.com/in/joseph-arteaga-597282248/' target='_blank'><AiFillLinkedin id='linkedin'/></a>
                            <a href='https://github.com/JAA999' target='_blank'><AiFillGithub id='github'/></a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;