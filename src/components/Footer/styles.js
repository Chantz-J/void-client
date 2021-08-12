import styled from 'styled-components';


export const FooterWrapper = styled.footer`
    position: relative;
    background-color: ${({ theme }) => theme.colors.dark};
`;

export const FooterTop = styled.div`
    padding: 70px 15px;
`;

export const FooterTopInner = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FooterLeft = styled.div`
    flex: 1;
`;

export const FooterHeadline = styled.h2`
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
`;