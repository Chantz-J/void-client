import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { blueGradient } from '../../../styles/mixins';

export const BButton = styled(Link)`
    ${blueGradient};
    color: ${({ theme }) => theme.colors.veryDark};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
    padding: .75rem;
    margin-top: 20px;
    border-radius: .375rem;
    text-decoration: none;
`;

export default function BlueButton({ display, href }){
    return (
        <BButton to={href}>
            {display}
        </BButton>
    );
};