import React from 'react';
import { Link } from 'react-router-dom';
import {
    Wrapper, 
    Outer, 
    Inner, 
    LogoWrapper, 
    Navbar,
    NavWrapper } from './styles';
// import NavItem from './NavItem';


export default function Header(){
    return (
        <Wrapper>
            <Outer>
                <Inner>
                    <LogoWrapper>
                        <Link to='/'></Link>
                    </LogoWrapper>
                    <Navbar>
                        <NavWrapper>
                            {/* <NavItem display={'Sign Up'}/>
                            <NavItem display={'Sign In'}/> */}
                        </NavWrapper> 
                    </Navbar>
                </Inner>
            </Outer>
        </Wrapper>
    );
};