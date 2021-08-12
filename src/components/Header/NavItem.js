import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavItem = styled.div`
    margin-right: 52px; 
    position: relative;
    padding: 16px 0px 14px;
    text-decoration: none;
    color: rgba(255, 86, 0, 1);
    text-decoration: none;
    font-family: Guillon, sans-serif;
    font-weight: 600;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0px;
        left: 0px;
        background-color: currentcolor;
        visibility: hidden;
        transition: all 0.2s ease-in-out 0s;
        transform: scaleX(0);
`;

export default function NavItem({ display, href }){
    return (
        <Link to={ href && href } style={{textDecoration: 'none'}}>
            <StyledNavItem>
                { display && display }
            </StyledNavItem>
        </Link>
    );
};