import styled from 'styled-components'
import { flexRow } from '../.././styles/mixins'

export const Wrapper = styled.header`
    z-index: 10;
    position: fixed;
    top: 0px;
    width: 100%;
    padding: 16px 0px;
    border-bottom: 1px solid rgb(237, 242, 249);
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(20, 22, 26, 0.7);
    color: ${({ theme }) => theme.colors.white};
`;

export const Outer = styled.div`
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const Inner = styled.div`
    ${flexRow('space-between', 'center')}
`;

export const LogoWrapper = styled.div`
    color: rgb(29, 25, 41);
`;

export const Navbar = styled.nav`
    height: auto;
    opacity: 1;
    display: inline-block;
    font-size: 16px;
    font-family: Poppins;
    color: ${({ theme }) => theme.colors.white};
`;

export const NavWrapper = styled.div`
    display: flex;
`;