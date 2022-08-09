import React from 'react';
import {Nav, NavLink, NavMenu} from './navbar';

const NavBar = () => {
    return (
        <>
            <Nav>
                <h2 id='Home' to='/' activeStyle>Arteaga</h2>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects                        
                    </NavLink>
                    <NavLink to='/contact' activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;