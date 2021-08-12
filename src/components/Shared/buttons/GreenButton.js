import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexRow ,greenGradient } from '../../../styles/mixins';

export const GButton = styled(Link)`
    ${greenGradient};
    ${flexRow('center', 'center')}
    color: ${({ theme }) => theme.colors.veryDark};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
    padding: .75rem;
    border-radius: .375rem;
    text-decoration: none;
`;

export default function GreenButton({ display, href }){
    return (
        <GButton to={href}>
            {display}
        </GButton>
    );
};