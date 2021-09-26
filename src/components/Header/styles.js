import styled from 'styled-components'
import { flexRow } from '../.././styles/mixins'

export const Wrapper = styled.header` 
    z-index: 10;
    position: fixed;
    top: 0px;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(20, 22, 26, 0.7);
`;

export const Outer = styled.div`
    width: 100%;
    max-width: 1740px;
    padding: 5px 10px;
    margin-right: auto;
    margin-left: auto;
`;

export const Inner = styled.div`
    ${flexRow('space-between', 'center')}
`;

export const LogoWrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    a {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.small};
        font-family: ${({ theme }) => theme.fonts.primary};
        text-decoration: none;
        letter-spacing: .5rem;
    }
`;

export const Navbar = styled.nav`
    height: auto;
    opacity: 1;
    display: inline-block;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
`;

export const NavWrapper = styled.div`
    display: flex;
`;