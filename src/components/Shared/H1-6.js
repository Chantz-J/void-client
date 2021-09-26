import styled from 'styled-components'

export const H2 = styled.h2`
    line-spacing: 3;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 40px;
`;