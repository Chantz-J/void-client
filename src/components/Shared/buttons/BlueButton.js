import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BButton = styled(Link)`
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.veryDark};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 200;
    font-size: 1.2rem;
    padding: .75rem;
    border-radius: .375rem;
    text-decoration: none;
    z-index: 1;
`;

export default function BlueButton({ display, href }){
    return (
        <BButton to={href}>
            {display} <span>🤲</span>
        </BButton>
    );
};