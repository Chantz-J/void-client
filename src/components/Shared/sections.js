import styled from 'styled-components'
import { flexColumn } from '../../styles/mixins'

export const Section = styled.section`
    padding: 308px 0px 0px;
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 100px;

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.veryLarge};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 200;
        line-height: 1.2;
        margin-bottom: 40px;
    }
    h2 {
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.fontSizes.small};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 200;
        margin-bottom: 40px;
    }
`;

export const MiddleSection = styled.div`
    ${flexColumn('center', 'center')}
    text-align: center;
    h2 {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 200;
        margin-bottom: 40px;
    }
    p {
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.fontSizes.small};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 200;
        margin-bottom: 40px;
    }
`;