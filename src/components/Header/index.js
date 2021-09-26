import React from 'react';
import { Link } from 'react-router-dom';
import {
    Wrapper, 
    Outer, 
    Inner, 
    LogoWrapper, 
    Navbar,
    NavWrapper } from './styles';
// import ClearButton from '../Shared/buttons/ClearButton';
import NavItem from './NavItem';


export default function Header(){
    return (
        <Wrapper>
            <Outer>
                <Inner>
                    <LogoWrapper>
                        <Link to='/'>void.</Link>
                    </LogoWrapper>
                    <Navbar>
                        <NavWrapper>
                            <NavItem display={'Articles'}/>
                            <NavItem display={'Sign In'}/>
                            {/* <GreenButton 
                                display={'Try for free'} 
                                href={'/'}
                            /> */}
                        </NavWrapper> 
                    </Navbar>
                </Inner>
            </Outer>
        </Wrapper>
    );
};