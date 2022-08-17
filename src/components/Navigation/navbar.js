import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #9ECEFB;
    min-height: 8vh;
    width: 100vw;
    color: white;
    font-size: 1.3vw;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 5vh;
    border-bottom: 1px solid #156DC6;
    z-index: 10px;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(6px + 2vmin);
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    padding: 0 1rem;
    &.active{
        color: #156DC6;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: white;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        color: black;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;