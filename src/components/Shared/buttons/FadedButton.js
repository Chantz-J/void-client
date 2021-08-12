import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexRow, blueGradient } from '../../../styles/mixins';

export const FButton = styled(Link)`
    ${flexRow('center', 'center')}
    color: ${({ theme }) => theme.colors.veryDark};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    background: ${({ theme }) => theme.colors.dark};
    font-weight: 700;
    padding: .75rem;
    border-radius: .375rem;
    text-decoration: none;
    transition: all 2s ease-in-out;

    &:hover {
        ${blueGradient};
        transition: all 2s ease-in-out;
    }
`;

export default function FadedButton({ display, href }){
    return (
        <FButton to={href}>
            {display}
        </FButton>
    );
};