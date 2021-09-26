import styled from 'styled-components'

export const H2 = styled.h2`
    line-spacing: 3;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 200;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 40px;
    z-index: 1;
`;